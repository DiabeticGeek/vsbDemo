/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.vansoolingenbouw.nl', // TODO: update to final domain
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },
};
