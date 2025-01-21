import { Composition } from 'remotion';
import { Logo } from './Logo';
import type { ComponentType } from 'react';

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="Logo"
        component={Logo as ComponentType<any>}
        durationInFrames={60}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          text: "Next.js + Remotion",
          backgroundColor: "#000000",
          textColor: "#ffffff",
          effect: "fade" as const,
          fontSize: 64
        }}
      />
    </>
  );
}; 