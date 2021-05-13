'use strict'
const MarkdownIt = require('markdown-it')
const md = new MarkdownIt()

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(params, populate) {
    const results = await strapi.query('page').find()
    
    // add html property with converted markdown as its value
    return results.map(result => ({
      ...result,
      html: md.render(result.Content),
    }))
  }
}
