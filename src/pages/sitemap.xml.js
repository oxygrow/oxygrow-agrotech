import { getMatchedData } from "@/context/Firebase";

const baseUrl = "https://www.oxygrowagrotech.com";

function generateSiteMap(products) {
  const urls =
    products?.map((product) => {
      return {
        url: `${baseUrl}/products/${product?.data?.path}`,
      };
    }) ?? [];

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${baseUrl}/contact</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${baseUrl}/about</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${baseUrl}/category/basmati</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${baseUrl}/category/nonbasmati</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${baseUrl}/category/grains</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${baseUrl}/category/pulses</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${baseUrl}/category/cattlefeed</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      ${urls
        ?.map((item) => {
          return (
            item &&
            `<url>
              <loc>${item?.url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
            </url>
          `
          );
        })
        .join("")}
    </urlset>
  `;
}

export async function getServerSideProps({ res }) {
  const products = await getMatchedData();
  const sitemap = generateSiteMap(products);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
