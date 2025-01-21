import { Composition } from 'remotion';
import { Logo } from './Logo';

export const RemotionVideo = () => {
  return (
    <>
      <Composition
        id="Logo"
        // @ts-expect-error - Remotion types are not fully compatible
        component={Logo}
        durationInFrames={60}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          text: "Next.js + Remotion",
          backgroundColor: "#000000",
          textColor: "#ffffff",
          effect: "fade",
          fontSize: 64
        }}
      />
    </>
  );
}; 