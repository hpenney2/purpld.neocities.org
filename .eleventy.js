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

  eleventyConfig.setTemplateFormats(["html", "njk", "txt", "js", "css", "xml", "json", "png", "gif", "jpg", "jpeg", "ttf", "ico"]);

  eleventyConfig.addPassthroughCopy("content/favicon.*");
//   eleventyConfig.addPassthroughCopy("content/**/*.*", {
//     mode: "html-relative",
//     failOnError: false,
//   });


  return {
    dir: {
      input: "content",
      output: "public",
    },
  };
};