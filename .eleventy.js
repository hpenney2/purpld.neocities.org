module.exports = function (eleventyConfig) {

  // This will stop the default behaviour of foo.html being turned into foo/index.html
  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");

//   eleventyConfig.addPassthroughCopy("content/img");
//   eleventyConfig.addPassthroughCopy("**/*.png");
//   eleventyConfig.addPassthroughCopy("**/*.gif");
//   eleventyConfig.addPassthroughCopy("**/*.jpg");
//   eleventyConfig.addPassthroughCopy("**/*.jpeg");

//   eleventyConfig.addPassthroughCopy("content/script");
//   eleventyConfig.addPassthroughCopy("content/static");
//   eleventyConfig.addPassthroughCopy("content/fonts");

//   eleventyConfig.addPassthroughCopy("content/favicon.ico");

    // Passthrough EVERYTHING in the content folder. We're trusting that it's been sorted correctly.
    eleventyConfig.addPassthroughCopy("content/**/*.*");


  return {
    dir: {
      input: "content",
      output: "public",
    },
  };
};