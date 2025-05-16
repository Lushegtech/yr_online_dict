const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Add eslint-disable to the top of all generated Prisma files
const disableEslintForPrisma = () => {
  const patterns = [
    'src/lib/prisma/generated/**/*.js',
    'src/lib/prisma/generated/**/*.ts',
    'src/lib/prisma/client/**/*.js',
    'src/lib/prisma/client/**/*.ts',
  ];

  patterns.forEach(pattern => {
    const files = glob.sync(pattern);
    
    files.forEach(file => {
      console.log(`Processing ${file}...`);
      const content = fs.readFileSync(file, 'utf8');
      
      // Only add the comment if it doesn't already exist
      if (!content.includes('/* eslint-disable */')) {
        const newContent = `/* eslint-disable */\n${content}`;
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`Added eslint-disable to ${file}`);
      } else {
        console.log(`${file} already has eslint-disable`);
      }
    });
  });
};

disableEslintForPrisma();
console.log('Done!'); 