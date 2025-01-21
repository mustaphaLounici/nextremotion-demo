import { interpolate, useCurrentFrame, AbsoluteFill, spring, Audio } from 'remotion';

export type AnimationEffect = 'bounce' | 'spin' | 'fade';

export interface LogoProps {
  text: string;
  backgroundColor: string;
  textColor: string;
  effect: AnimationEffect;
  fontSize: number;
  backgroundImage?: string;
  audioUrl?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  text, 
  backgroundColor, 
  textColor, 
  effect,
  fontSize,
  backgroundImage,
  audioUrl
}) => {
  const frame = useCurrentFrame();
  
  return (
    <AbsoluteFill
      style={{
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {audioUrl && <Audio src={audioUrl} />}
      <div
        style={{
          opacity: interpolate(frame, [0, 20], [0, 1], {
            extrapolateRight: 'clamp',
          }),
          transform: effect === 'bounce'
            ? `translateY(${spring({
                frame,
                fps: 30,
                from: -50,
                to: 0,
                durationInFrames: 30,
              })}px)`
            : effect === 'spin'
            ? `rotate(${interpolate(frame, [0, 30], [0, 360], {
                extrapolateRight: 'clamp',
              })}deg)`
            : `scale(${interpolate(frame, [0, 20], [0.5, 1], {
                extrapolateRight: 'clamp',
              })})`,
          color: textColor,
          fontSize: `${fontSize}px`,
          fontWeight: 'bold',
          textAlign: 'center',
          fontFamily: 'system-ui',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          backgroundColor: backgroundImage ? 'rgba(0,0,0,0.4)' : 'transparent',
          borderRadius: '1rem',
          padding: '2rem',
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
}; 