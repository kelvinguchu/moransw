module.exports = {
  siteUrl: "https://www.astraque.com", 
  generateRobotsTxt: true, 
  changefreq: "daily", 
  priority: 0.7, 
  sitemapSize: 5000, 

  additionalPaths: async (config) => {
    const paths = [
      {
        loc: "/#services", 
        lastmod: new Date().toISOString(), 
      },
      {
        loc: "/projects", 
        lastmod: new Date().toISOString(),
      },
      {
        loc: "/#pricing", 
        lastmod: new Date().toISOString(),
      },
    ];

    return paths;
  },
};
