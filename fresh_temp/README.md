# Yorùbá-English Dictionary

A comprehensive Yorùbá-English dictionary web application built with Next.js and Tailwind CSS.

## Features

- Search for Yorùbá words with autocomplete
- View detailed word definitions, parts of speech, and examples
- Interactive map of Yorùbá-speaking regions
- Responsive design with mobile support
- Accessibility features for all users

## Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS, shadcn/ui
- **UI Components**: React components with shadcn/ui
- **Maps**: Leaflet for interactive maps
- **Animations**: GSAP for smooth animations
- **Backend**: Django REST Framework (separate repository)

## Prerequisites

- Node.js 18+ and npm
- Internet connection for map tiles

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yoruba-english-dictionary.git
   cd yoruba-english-dictionary
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp env.local.example .env.local
   ```
   Then edit `.env.local` to set your API URL.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `/src/components`: UI components 
  - `/ui`: shadcn UI components
  - `Header.tsx`: Site header and navigation
  - `MapBackground.tsx`: Interactive map component
  - `SearchBar.tsx`: Search input with autocomplete
- `/src/app`: Next.js pages
  - `page.tsx`: Home/search page
  - `/word/[id]/page.tsx`: Word detail page
  - `/about/page.tsx`: About page
  - `not-found.tsx`: 404 page with suggestions
- `/src/lib`: Utility functions
  - `api.ts`: API client functions
  - `utils.ts`: Helper functions

## Theme Customization

The application uses a custom Tailwind theme defined in `tailwind.config.js` with the following key colors:

- `charcoal`: #2A2A2A (primary text color)
- `gold`: #C59D5F (accent color)

To modify the theme, edit the `tailwind.config.js` file.

## Adding Components

To add new shadcn/ui components:

```bash
npx shadcn add [component-name]
```

For example: `npx shadcn add dialog`

## Deployment

This is a Next.js application that can be deployed on Vercel or any other Node.js hosting platform.

```bash
npm run build
```

## License

[MIT](LICENSE)

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Leaflet](https://leafletjs.com/)
- [GSAP](https://greensock.com/gsap/)
