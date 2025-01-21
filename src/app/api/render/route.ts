import { bundle } from '@remotion/bundler';
import { getCompositions, renderMedia } from '@remotion/renderer';
import { NextResponse } from 'next/server';
import path from 'path';
import os from 'os';
import fs from 'fs';

// Configure CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  });
}

export async function POST(req: Request) {
  try {
    // Parse request body
    const body = await req.json();
    const { inputProps, durationInFrames, fps } = body;

    // Validate input
    if (!inputProps || !durationInFrames || !fps) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // Create temporary directory
    const tmpDir = await fs.promises.mkdtemp(
      path.join(os.tmpdir(), 'remotion-')
    );
    const outputPath = path.join(tmpDir, 'output.mp4');

    try {
      // Bundle the composition
      const bundled = await bundle(
        path.join(process.cwd(), 'src/remotion/Logo.tsx')
      );

      // Get composition details
      const comps = await getCompositions(bundled);
      const composition = comps.find((c) => c.id === 'Logo');

      if (!composition) {
        throw new Error('Could not find composition');
      }

      // Render video
      await renderMedia({
        composition: {
          ...composition,
          durationInFrames,
          fps,
        },
        serveUrl: bundled,
        codec: 'h264',
        outputLocation: outputPath,
        inputProps,
        chromiumOptions: {
          disableWebSecurity: true,
        },
        timeoutInMilliseconds: 300000, // 5 minutes timeout
      });

      // Read the output file
      const buffer = await fs.promises.readFile(outputPath);

      // Clean up
      await fs.promises.rm(tmpDir, { recursive: true, force: true });

      // Return the video file
      return new NextResponse(buffer, {
        headers: {
          ...corsHeaders,
          'Content-Type': 'video/mp4',
          'Content-Disposition': `attachment; filename="video-${Date.now()}.mp4"`,
        },
      });
    } catch (error) {
      // Clean up on error
      await fs.promises.rm(tmpDir, { recursive: true, force: true });
      throw error;
    }
  } catch (error: any) {
    console.error('Render error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to render video', 
        details: error?.message || 'Unknown error'
      },
      { 
        status: 500,
        headers: corsHeaders,
      }
    );
  }
} 