import Head from "next/head";
import { CONTACT_ITEMS, JOBS, PROFILE, PROJECTS, SEO, SITE_URL, SKILL_GROUPS } from "../../constants/site";

const abs = (path) => (SITE_URL ? `${SITE_URL}${path}` : path);

function jsonLd() {
  const url = abs("/");
  const email = CONTACT_ITEMS.find((c) => c.label === "Email")?.copy;
  const current = JOBS.find((j) => j.current);

  const person = {
    "@type": "Person",
    "@id": `${url}#person`,
    name: PROFILE.name,
    url,
    image: abs(SEO.ogImage),
    email: email ? `mailto:${email}` : undefined,
    jobTitle: current?.role || "React Native Developer",
    worksFor: current ? { "@type": "Organization", name: current.company } : undefined,
    address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "University of Lahore" },
    knowsAbout: SKILL_GROUPS.flatMap((g) => g.items),
    sameAs: SEO.sameAs,
  };

  const apps = {
    "@type": "ItemList",
    name: "Apps built and shipped",
    itemListElement: PROJECTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "MobileApplication",
        name: p.name,
        description: p.desc,
        applicationCategory: p.tags[0],
        operatingSystem: "iOS, Android",
        url: p.links[0]?.[1],
        author: { "@id": `${url}#person` },
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": `${url}#website`, url, name: PROFILE.name, inLanguage: "en" },
      { "@type": "ProfilePage", "@id": `${url}#page`, url, name: SEO.title, description: SEO.description, mainEntity: { "@id": `${url}#person` }, isPartOf: { "@id": `${url}#website` } },
      person,
      apps,
    ],
  };
}

export default function Seo() {
  const url = abs("/");
  const image = abs(SEO.ogImage);
  return (
    <Head>
      <title>{SEO.title}</title>
      <meta name="description" content={SEO.description} />
      <meta name="keywords" content={SEO.keywords.join(", ")} />
      <meta name="author" content={PROFILE.name} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
      <meta name="theme-color" content="#070B16" />
      {SITE_URL ? <link rel="canonical" href={url} /> : null}

      <meta property="og:type" content="profile" />
      <meta property="og:site_name" content={PROFILE.name} />
      <meta property="og:title" content={SEO.title} />
      <meta property="og:description" content={SEO.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={SEO.ogImageAlt} />
      <meta property="og:locale" content={SEO.locale} />
      <meta property="profile:first_name" content="Usama" />
      <meta property="profile:last_name" content="Shahzad" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={SEO.title} />
      <meta name="twitter:description" content={SEO.description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={SEO.ogImageAlt} />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />
    </Head>
  );
}
