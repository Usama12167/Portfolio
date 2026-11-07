import { SITE_URL } from "../constants/site";

// Served at /robots.txt.
export async function getServerSideProps({ req, res }) {
  const base = SITE_URL || `${req.headers["x-forwarded-proto"] || "https"}://${req.headers.host}`;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate");
  res.end(`User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${base}/sitemap.xml\n`);
  return { props: {} };
}

export default function Robots() {
  return null;
}
