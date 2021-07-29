module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/js');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/manifest.json');
    eleventyConfig.addPassthroughCopy('./src/sw.js');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}