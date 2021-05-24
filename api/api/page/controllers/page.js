'use strict'

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(params, populate) {
    const results = await strapi.query('page').find()

    let pageMap = {}
    results.forEach(page => pageMap[page.id] = page)

    const createPath = page => {
      if (!page.Parent) {
        return page.Slug ? page.Slug : ''
      }
      return [createPath(pageMap[page.Parent.id]), page.Slug].join('/')
    }

    const createBreadcrumbs = page => {
      const { Title, Parent, path } = page
      const crumb = { text: Title, path: createPath(pageMap[page.id]) || '/' }
      return !Parent
        ? [crumb]
        : [...createBreadcrumbs(pageMap[page.Parent.id]), crumb]
    }

    const pages = results.map(page => {
      const { Content, Parent, Slug, Title } = page
      const breadcrumbs = createBreadcrumbs(pageMap[page.id])
      const path = createPath(pageMap[page.id])
      return ({
        ...page,
        path: path,
        breadcrumbs: breadcrumbs,
      })
    })
    
    
    return pages
  }
}
