module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
    config.addPassthroughCopy("src/CNAME");
  };