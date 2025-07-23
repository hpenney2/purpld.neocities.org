const { DateTime } = require("luxon");

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

  // https://stackoverflow.com/a/78200088
  eleventyConfig.addFilter("date", function (value, format = "yyyy-LL-dd") {
    if (!value) return "";

    if (value instanceof Date) {
      return DateTime.fromJSDate(value, {
        zone: 'utc',
        locale: "en"
      }).toFormat(format);
    }
    else {
      return DateTime.fromISO(value, {
        zone: 'utc',
        locale: "en"
      }).toFormat(format);
    }
  });
  
  // https://caffeineandlasers.neocities.org/blogs/automatingYourRSS
  eleventyConfig.addCollection("defragPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/defrag/entries/*.{html,md}").sort((a, b) => {
      return b.date - a.date; // Sort in reverse chronological order (newest first)
    });
  });

  return {
    dir: {
      input: "content",
      output: "public",
    },
  };
};