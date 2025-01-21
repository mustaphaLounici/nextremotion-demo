"use client";

import { Player } from '@remotion/player';
import { Logo } from '../remotion/Logo';
import { useState, useEffect } from 'react';

const ANIMATION_EFFECTS = [
  { value: 'fade', label: '🌟 Fade In' },
  { value: 'bounce', label: '💫 Bounce' },
  { value: 'spin', label: '🔄 Spin' },
];

const COLOR_PRESETS = [
  { bg: '#000000', text: '#ffffff', name: 'Classic Dark' },
  { bg: '#0f172a', text: '#38bdf8', name: 'Night Sky' },
  { bg: '#166534', text: '#bbf7d0', name: 'Forest' },
  { bg: '#7c2d12', text: '#fed7aa', name: 'Autumn' },
  { bg: '#581c87', text: '#e9d5ff', name: 'Royal' },
];

// Default content
const DEFAULT_TEXT = "Transform Your Ideas Into Reality";
const DEFAULT_BACKGROUND = '/defaults/space-bg.jpg';
const DEFAULT_AUDIO = '/defaults/cinematic-intro.wav';

export default function Home() {
  const [text, setText] = useState(DEFAULT_TEXT);
  const [effect, setEffect] = useState<'fade' | 'bounce' | 'spin'>('bounce');
  const [colorPreset, setColorPreset] = useState(COLOR_PRESETS[2]); // Night Sky theme
  const [fontSize, setFontSize] = useState(99);
  const [backgroundImage, setBackgroundImage] = useState<string>();
  const [audioUrl, setAudioUrl] = useState<string>();
  const [duration, setDuration] = useState(4);
  const [isRendering, setIsRendering] = useState(false);

  // Load default assets
  useEffect(() => {
    // Load default background
    fetch(DEFAULT_BACKGROUND)
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setBackgroundImage(reader.result as string);
        };
        reader.readAsDataURL(blob);
      })
      .catch(console.error);

    // Load default audio
    fetch(DEFAULT_AUDIO)
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setAudioUrl(reader.result as string);
        };
        reader.readAsDataURL(blob);
      })
      .catch(console.error);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAudioUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = async () => {
    setIsRendering(true);
    try {
      // Here you would typically call your backend API to render the video
      alert('To enable video download, you need to set up a Remotion Lambda or a server-side rendering endpoint.');
    } catch (error) {
      console.error('Failed to render video:', error);
    } finally {
      setIsRendering(false);
    }
  };

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Video Intro Creator
          </h1>
          <p className="text-gray-400">Create stunning animated intros for your videos</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-6 md:col-span-1 bg-gray-800 p-6 rounded-xl">
            <div className="space-y-4">
              <label className="block">
                <span className="text-white font-medium">Your Message</span>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    placeholder-gray-400 resize-none h-24"
                  placeholder="Enter your message..."
                />
              </label>

              <div>
                <span className="text-white font-medium block mb-2">Background Image</span>
                <label className="flex items-center justify-center w-full h-24 px-4 transition bg-gray-700 border-2 border-gray-600 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-500 focus:outline-none">
                  <div className="space-y-1 text-center">
                    <div className="text-gray-400">
                      {backgroundImage ? 'Change image' : 'Upload image'}
                    </div>
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </div>
                </label>
              </div>

              <div>
                <span className="text-white font-medium block mb-2">Background Music</span>
                <label className="flex items-center justify-center w-full h-16 px-4 transition bg-gray-700 border-2 border-gray-600 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-500 focus:outline-none">
                  <div className="space-y-1 text-center">
                    <div className="text-gray-400">
                      {audioUrl ? 'Change audio' : 'Upload audio'}
                    </div>
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="audio/*"
                      onChange={handleAudioUpload}
                    />
                  </div>
                </label>
              </div>

              <div>
                <span className="text-white font-medium block mb-2">Duration: {duration}s</span>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <span className="text-white font-medium block mb-2">Animation Style</span>
                <div className="grid grid-cols-1 gap-2">
                  {ANIMATION_EFFECTS.map((animEffect) => (
                    <button
                      key={animEffect.value}
                      onClick={() => setEffect(animEffect.value as any)}
                      className={`px-4 py-2 rounded-md text-left transition-colors ${
                        effect === animEffect.value
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {animEffect.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-white font-medium block mb-2">Color Theme</span>
                <div className="grid grid-cols-2 gap-2">
                  {COLOR_PRESETS.map((preset) => (
                    <button
                      key={preset.name}
                      onClick={() => setColorPreset(preset)}
                      className={`p-2 rounded-md text-center text-sm transition-all ${
                        colorPreset === preset
                          ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-800'
                          : ''
                      }`}
                      style={{ backgroundColor: preset.bg, color: preset.text }}
                    >
                      {preset.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-white font-medium block mb-2">Font Size: {fontSize}px</span>
                <input
                  type="range"
                  min="32"
                  max="120"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="pt-4 border-t border-gray-700">
                <button
                  onClick={handleDownload}
                  disabled={isRendering}
                  className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed text-white rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  {isRendering ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Rendering...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download Video
                    </>
                  )}
                </button>
              </div>

              <div className="pt-4 border-t border-gray-700">
                <div className="text-gray-400 text-sm">
                  <p className="font-medium text-white mb-1">Created by:</p>
                  <p>Lounici Mustapha</p>
                  <a 
                    href="mailto:lounici.musta@gmail.com" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    lounicimustapha6@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
              <Player
                component={Logo}
                inputProps={{
                  text,
                  effect,
                  backgroundColor: colorPreset.bg,
                  textColor: colorPreset.text,
                  fontSize,
                  backgroundImage,
                  audioUrl,
                }}
                durationInFrames={duration * 30}
                fps={30}
                compositionWidth={1920}
                compositionHeight={1080}
                style={{
                  width: '100%',
                  height: '100%',
                }}
                controls
              />
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>Create professional-looking video intros with custom text, animations, and colors.</p>
          <p>Perfect for YouTube videos, presentations, or social media content!</p>
        </div>
      </div>
    </main>
  );
}
