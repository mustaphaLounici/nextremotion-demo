# Next.js + Remotion Demo

This project demonstrates the integration of Next.js with Remotion for creating programmatic videos. It includes a simple example of an animated text logo with customizable content.

## Features

- Next.js 14 with App Router
- Remotion for video creation
- Real-time video preview
- Dynamic text customization
- Tailwind CSS for styling
- TypeScript support

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `src/remotion/` - Contains Remotion components and compositions
  - `Logo.tsx` - The animated logo component
  - `Composition.tsx` - Main Remotion composition configuration
- `src/app/` - Next.js app directory
  - `page.tsx` - Main page with video preview and controls

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Remotion Documentation](https://www.remotion.dev/docs)

## License

MIT
