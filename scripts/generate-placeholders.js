const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const dirs = ['public/images', 'public/logos'];
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Create placeholder images
const images = [
  { path: 'public/images/match-preview.jpg', content: 'Match Preview' },
  { path: 'public/images/team-news.jpg', content: 'Team News' },
  { path: 'public/images/stats.jpg', content: 'Stats' },
  { path: 'public/logos/girona-fc.png', content: 'Girona FC' },
  { path: 'public/logos/real-betis.png', content: 'Real Betis' },
];

images.forEach(image => {
  const filePath = path.join(process.cwd(), image.path);
  fs.writeFileSync(filePath, image.content);
}); 