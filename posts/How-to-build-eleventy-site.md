---
title: How to build a simple Eleventy blog site
date: "2023-05-12"
tags: ['eleventy',]
description: To create a simple Eleventy blog website, you can follow these steps...
image: <img src="https://placehold.co/1000x400" alt="the usual accessibilty stuff here!">
---
Being honest I got AI to write this so that I have content to test out on the site. Elevetny is really easy to use, I orginally built this site in HTML & CSS and then recomplied it all using Eleventy so that its would have a blog.

The best way to work out how to create an Eleventy site just watch this youtube video : [6 Minutes to Build a Blog from Scratch with Eleventy](https://www.youtube.com/watch?v=kzf9A9tkkl4)
 

But if you wantt to read on, to create an Eleventy website, you can follow these steps:

Step 1: Set up the project

1. Create a new directory for your Eleventy blog project.

2. Open a command prompt or terminal and navigate to the project directory.

3. Initialize a new Node.js project by running the following command:
   ```
   npm init -y
   ```

4. Install Eleventy as a development dependency by running the following command:
   ```
   npm install --save-dev eleventy
   ```

Step 2: Configure Eleventy

1. Create a new file named `.eleventy.js` in the root directory of your project.

2. Add the following code to the `.eleventy.js` file to configure Eleventy:

```javascript
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets"); // Copies the "assets" folder to the output directory

  return {
    dir: {
      input: "src", // Directory where your source files are located
      output: "dist", // Directory where the generated site will be outputted
    },
  };
};
```

3. Create a new folder named `src` in the root directory of your project. This folder will contain your site's source files.

Step 3: Create the blog posts

1. Inside the `src` folder, create a new folder named `_posts`.

2. Create a new Markdown or HTML file for each blog post in the `_posts` folder. Name the files using the following format: `YYYY-MM-DD-post-slug.md` (e.g., `2023-01-01-my-first-post.md`).

3. Add the necessary content to each blog post file using Markdown or HTML syntax.

Step 4: Create the blog layout

1. Inside the `src` folder, create a new file named `index.njk`. This will be the layout file for your blog.

2. Add the following content to the `index.njk` file as a basic example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Blog</title>
</head>
<body>
  <h1>My Blog</h1>

  {% for post in collections.posts %}
    <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
    <p>{{ post.data.date | date }}</p>
    <p>{{ post.data.description }}</p>
  {% endfor %}
</body>
</html>
```

Step 5: Build and view your blog

1. Open a command prompt or terminal and navigate to the root directory of your project.

2. Run the following command to build your Eleventy site:
   ```
   npx eleventy
   ```

   This command will generate your blog as HTML files and output them to the `dist` directory (or the directory specified in the configuration).

3. After the build process completes, you can preview your blog by opening the generated HTML files in a web browser.

That's it! You now have a simple blog built with Eleventy. You can further customize your blog's layout, add CSS styles, and explore Eleventy's features to enhance your blog's functionality.