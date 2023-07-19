module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("CNAME");
    eleventyConfig.setTemplateFormats(["md", "liquid", "html"]);
    eleventyConfig.addFilter("latestPosts", function(posts) {
      return posts.reverse().slice(0, 5);
    });
    eleventyConfig.addFilter("getMonthYear", function(date) {
      const options = { month: "long", year: "numeric" };
      return date.toLocaleDateString("en-US", options);
    });
    eleventyConfig.addCollection("postsByMonth", function(collection) {
      const postsByMonth = {};
  
      for (const post of collection.getFilteredByTag("post")) {
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
  