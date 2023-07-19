---
title: How to list all Eleventy posts by Data/Year
date: "2023-05-21"
tags: ['eleventy',]
description: How to list all Eleventy posts show all your posts by month & year
---
This was provided by Chat-GPT and is really usful if you want to show all your posts by month & year.

To sort and group posts by month in Eleventy while displaying the latest posts first within each month and placing older months at the bottom of the list, you can modify the previous example by reversing the order of the generated month groups. Here's an updated version of the code:

1. Create a custom Liquid filter to extract the month and year from the post's date:

```javascript
// .eleventy.js
module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("getMonthYear", function(date) {
    const options = { month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  });
};
```

2. Create a custom data transformation to sort and group posts by month:

```javascript
// .eleventy.js
module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("postsByMonth", function(collection) {
    const postsByMonth = {};

    for (const post of collection.getFilteredByTag("posts")) {
      const monthYear = post.date.toLocaleDateString("en-US", { month: "long", year: "numeric" });

      if (!postsByMonth[monthYear]) {
        postsByMonth[monthYear] = [];
      }

      postsByMonth[monthYear].push(post);
    }

    // Sort posts within each month in reverse chronological order
    for (const monthPosts of Object.values(postsByMonth)) {
      monthPosts.sort((a, b) => b.date - a.date);
    }

    const sortedMonths = Object.entries(postsByMonth).sort(([a], [b]) => {
      const [aMonth, aYear] = a.split(" ");
      const [bMonth, bYear] = b.split(" ");
      const aDate = new Date(`${aMonth} 1, ${aYear}`);
      const bDate = new Date(`${bMonth} 1, ${bYear}`);
      return bDate - aDate;
    });

    return sortedMonths.map(([monthYear, posts]) => ({
      monthYear,
      posts
    }));
  });
};
```

3. In your template file, access the sorted and grouped posts:

```liquid
{% for monthPosts in collections.postsByMonth reversed %}
  <h2>{{ monthPosts.monthYear }}</h2>
  {% for post in monthPosts.posts %}
    <!-- Render your post here -->
  {% endfor %}
{% endfor %}
```

In this updated example, after grouping the posts by month and sorting them within each month in reverse chronological order, the generated month groups are reversed using the `reversed` keyword. This places older months at the bottom of the list.

Adjust the `collections.posts` part to match the actual collection you have defined in your Eleventy configuration or template files.

Remember to include the custom filter and data transformation code in your `.eleventy.js` configuration file, and place the template code in the appropriate template file where you want to display the sorted and grouped posts, with the latest posts appearing first within each month and older months at the bottom of the list.