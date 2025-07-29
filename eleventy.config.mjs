import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

export default function (eleventyConfig) {
  eleventyConfig.on('eleventy.before', async () => {
    const tailwindInputPath = path.resolve('./src/styles/index.css');
    const tailwindOutputPath = './dist/styles/index.css';
    const cssContent = fs.readFileSync(tailwindInputPath, 'utf8');
    const outputDir = path.dirname(tailwindOutputPath);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const result = await postcss([tailwindcss()]).process(cssContent, {
      from: tailwindInputPath,
      to: tailwindOutputPath,
    });

    fs.writeFileSync(tailwindOutputPath, result.css);
  });

  // Add passthrough copy for components files
  eleventyConfig.addPassthroughCopy('./src/components');

  // Add passthrough copy for script.js
  eleventyConfig.addPassthroughCopy('./src/scripts/script.js');

  // Add passthrough copy for images
  eleventyConfig.addPassthroughCopy('./src/images');

  // Add a custom collection for posts
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByTag("posts").sort((a, b) => {
      return b.date - a.date; // Sort by date descending
    });
  });

  return {
    dir: { input: 'src', output: 'dist' },
  };
}