import { sanityClient } from "../lib/sanity.server";
import { getAllPostsSlug } from "../utils/query";
import * as fs from "fs";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = "https://nextjs-blog-template-73.netlify.app";

  const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "api",
        "_app.js",
        "_document.js",
        "404.jsx",
        "sitemap.xml.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `/${staticPagePath.split(".")[0]}`;
    });

  const posts = await sanityClient.fetch(getAllPostsSlug);

  const dynamicPaths = posts?.map((post) => {
    return `/posts/${post?.slug}`;
  });

  const allPaths = [...staticPaths, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPaths
    .map(
      (path) => `<url><loc>${baseUrl}${path}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>1.0</priority></url>`
    )
    .join("")}
  </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return;
};

export default Sitemap;
