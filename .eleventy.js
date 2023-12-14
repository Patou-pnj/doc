const eleventyFilter = require('./src/_utils/eleventy-filter');
const eleventyNavigationTree = require('./utils/eleventy-navigation-tree');
const eleventySass = require('./utils/eleventy-sass');
const eleventyShortcodes = require('./utils/eleventy-shortcodes');
const eleventyColections = require('./utils/eleventy-collections');
const markdown = require('./utils/markdown');
const algoliaSearch = require('algoliasearch');

require('dotenv').config();

module.exports = function (config) {
  config.addPlugin(eleventySass);
  config.addPlugin(eleventyFilter);
  config.addPlugin(eleventyShortcodes);
  config.addPlugin(eleventyNavigationTree);
  config.addPlugin(eleventyColections);
  config.setQuietMode(true);

  config.addPassthroughCopy({
    'src/_static': '.'
  });

  config.amendLibrary('md', markdown);

  config.addJavaScriptFunction('algoliaInitIndex', function(name, data, settings) {
    if (process.env.ALGOLIA_ADMIN_KEY && process.env.ALGOLIA_APP_ID) {
      const client = algoliaSearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY);

      const index = client.initIndex(name);

      if (settings) {
        index.setSettings(settings).then();
      }

      index.replaceAllObjects(data, {
        autoGenerateObjectIDIfNotExist: true
      });
    }
  });

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'docs',
      output: 'dist'
    }
  }
}
