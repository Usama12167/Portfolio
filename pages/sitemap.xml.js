import { SITE_URL } from "../constants/site";

// Served at /sitemap.xml. Uses NEXT_PUBLIC_SITE_URL, falling back to the request host.
export async function getServerSideProps({ req, res }) {
  const base = SITE_URL || `${req.headers["x-forwarded-proto"] || "https"}://${req.headers.host}`;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${base}/</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <image:image><image:loc>${base}/og-image.png</image:loc></image:image>
  </url>
</urlset>`;
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate");
  res.end(xml);
  return { props: {} };
}

export default function Sitemap() {
  return null;
}
