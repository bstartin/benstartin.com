---
title: Deploying an Eleventy website to github pages
date: "2023-05-16"
tags: ['eleventy',]
description: To deploy an Eleventy website to GitHub Pages, you can follow these steps...
image: <img src="https://placehold.co/1000x400" alt="the usual accessibilty stuff here!">
---
To deploy an Eleventy website to GitHub Pages, you can follow these steps:

#### Step 1: Prepare your Eleventy project

1. Make sure your Eleventy project is set up and working correctly on your local machine. You should have your Eleventy site's source files ready.

2. Create a new branch in your Git repository specifically for deploying to GitHub Pages. You can name it something like "gh-pages" or "deploy".

#### Step 2: Configure Eleventy for GitHub Pages

1. Open the `.eleventy.js` configuration file in your project's root directory.

2. Add the following code at the end of the file to set the output directory to a specific folder named "docs":

```javascript
module.exports = function (eleventyConfig) {
  // Existing configuration...

  return {
    dir: {
      output: "docs",
    },
  };
};
```

This step is necessary because GitHub Pages looks for the `index.html` file in the "docs" folder by default.

3. Commit and push the changes to the branch you created earlier.

#### Step 3: Deploy to GitHub Pages

1. Go to your GitHub repository's settings page.

2. Scroll down to the "GitHub Pages" section.

3. Under the "Source" heading, select the branch you created earlier (e.g., "gh-pages" or "deploy").

4. Choose the "root" directory option.

5. Click "Save" or "Apply" to save the changes.

#### Step 4: Push your Eleventy project to the deployment branch

1. Push the entire content of your Eleventy project (including the updated configuration) to the branch you selected for deployment.

#### Step 5: Verify and view your deployed site

1. After pushing your changes, wait for a few moments for GitHub Pages to build and deploy your site. You can check the deployment status under the "GitHub Pages" section of your repository settings.

2. Once the deployment is complete, you can access your deployed Eleventy website at the URL provided in the "GitHub Pages" section.

That's it! Your Eleventy website should now be successfully deployed to GitHub Pages. Any subsequent updates pushed to the deployment branch will trigger a rebuild of your site on GitHub Pages.