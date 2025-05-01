# Football Match Details Page

A modern web application built with Next.js that displays detailed information about football matches, including team statistics, betting odds, and related articles.

## Features

- Match header with team logos and live countdown
- Last 10 games statistics for both teams
- Betting odds comparison from different platforms
- Related articles section
- Betting signals with confidence levels
- Full RTL support for Persian language
- Responsive design for all screen sizes

## Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd betting-site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add any necessary environment variables:
```env
NEXT_PUBLIC_API_URL=your_api_url_here
```

## Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

```
src/
├── app/
│   └── page.tsx
├── components/
│   ├── MatchHeader.tsx
│   ├── LastGames.tsx
│   ├── OddsComparison.tsx
│   ├── RelatedArticles.tsx
│   └── BettingSignals.tsx
└── styles/
    └── globals.css
```

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- React
- date-fns for date manipulation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
