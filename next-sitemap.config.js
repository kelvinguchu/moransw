module.exports = {
  siteUrl: "https://www.astraque.com", // Replace with your actual site URL
  generateRobotsTxt: true, // Generate robots.txt
  changefreq: "daily", // How often the content changes
  priority: 0.7, // Priority of the pages (0.0 - 1.0)
  sitemapSize: 5000, // Maximum number of URLs per sitemap file

  // Add additional paths if you have dynamic pages like projects, services, etc.
  additionalPaths: async (config) => {
    const paths = [
      {
        loc: "/#services", // Service section
        lastmod: new Date().toISOString(), // Set modification date dynamically
      },
      {
        loc: "/projects", // Projects page
        lastmod: new Date().toISOString(),
      },
      {
        loc: "/#pricing", // Pricing section
        lastmod: new Date().toISOString(),
      },
    ];

    return paths;
  },
};
