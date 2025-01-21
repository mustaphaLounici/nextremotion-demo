# Video Intro Creator with Next.js and Remotion

A modern web application for creating and previewing professional video intros in real-time. Built with Next.js and Remotion.

## 🚀 Live Demo

Check out the live demo: [Video Intro Creator](https://nextremotion-demo.vercel.app/)

## ✨ Features

- 🎨 Real-time video preview
- 🎬 Multiple animation effects (Fade, Bounce, Spin)
- 🎨 Pre-defined color themes
- 🖼️ Custom background image upload
- 🎵 Background music support
- ⚡ Adjustable duration and font size
- 🎥 Live preview with playback controls

## Demo

Visit the live demo: [Video Intro Creator](https://nextremotion-demo.vercel.app)

## Getting Started

### Prerequisites

1. **Node.js** - Version 16.x or higher
   ```bash
   # Check your Node.js version
   node --version
   ```

2. **Package Manager** - npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mustaphaLounici/nextremotion-demo.git
   cd nextremotion-demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add default assets (optional):
   - Place a background image in `public/defaults/space-bg.jpg`
   - Place background music in `public/defaults/cinematic-intro.wav`

### Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Building for Production

1. Create a production build:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Usage Guide

1. **Customize Your Video**:
   - Enter your text message
   - Choose an animation effect (Fade, Bounce, or Spin)
   - Select a color theme
   - Upload a background image (optional)
   - Add background music (optional)
   - Adjust font size and duration

2. **Preview**:
   - Use the video player controls to preview
   - Play, pause, and scrub through your video
   - Adjust settings in real-time to see changes

3. **Screen Recording**:
   - To save your video, use your system's screen recording tool
   - For macOS: Use QuickTime Player or Screenshot toolbar (Shift + Command + 5)
   - For Windows: Use Xbox Game Bar (Windows + G) or OBS Studio

## Tech Stack

- **Frontend**: Next.js 14, React, TailwindCSS
- **Video Engine**: Remotion
- **Styling**: Tailwind CSS
- **TypeScript**: For type safety

## Project Structure

```
nextremotion-demo/
├── src/
│   ├── app/             # Next.js app directory
│   │   └── page.tsx     # Main page component
│   └── remotion/        # Remotion components
│       ├── Logo.tsx     # Video composition
│       └── Root.tsx     # Root composition
├── public/              # Static assets
│   └── defaults/        # Default media files
└── package.json         # Project dependencies
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use for personal or commercial projects.

## Contact

Created by Lounici Mustapha
- Email: lounicimustapha6@gmail.com

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Video powered by [Remotion](https://www.remotion.dev/)
- UI styled with [TailwindCSS](https://tailwindcss.com/)
