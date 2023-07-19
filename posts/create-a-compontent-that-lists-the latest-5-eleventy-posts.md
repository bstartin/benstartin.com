---
title: Create a component which shows the latest five Eleventy posts
date: "2023-05-22"
tags: ['eleventy',]
description: How to create a componet which displays the latest 5 posts from your Eleventy website
---
To display only the latest 5 posts in Eleventy, you can make use of the `limit` filter to limit the number of posts displayed. Here's an example of how you can accomplish this:

In your template file:

```
{ assign latest_posts = collections.posts | reverse }
{ for post in latest_posts limit:5 }
  <!-- Render your post here -->
{ endfor }
```

In this example, `collections.posts` represents the collection of posts in your Eleventy project. The `reverse` filter is used to reverse the order of the posts so that the latest posts appear first. Then, the `limit` filter is applied to the collection to extract a subset of 5 posts starting from index 0.

You'll also need to drop in the `%` so that it will work in your template file.

By using this code snippet, you'll only display the latest 5 posts from the collection. Adjust the `collections.posts` part to match the actual collection you have defined in your Eleventy configuration or template files.

Make sure to place this code in the appropriate template file where you want to display the limited number of latest posts.