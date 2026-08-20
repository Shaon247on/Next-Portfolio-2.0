import { PROJECTS } from "@/data/projects";
import {
  SEO_DESCRIPTION,
  SEO_TITLE_LONG,
  SITE,
  TECH_KEYWORDS,
  absoluteUrl,
} from "@/utils/seo";

// A single @graph keeps every node in one script tag and lets the nodes reference
// each other by @id, so search engines resolve one Person entity instead of
// several near-duplicates.
function buildGraph() {
  const personId = `${SITE.url}/#person`;
  const websiteId = `${SITE.url}/#website`;
  const webPageId = `${SITE.url}/#webpage`;

  const person = {
    "@type": "Person",
    "@id": personId,
    name: SITE.name,
    alternateName: SITE.alternateNames,
    givenName: "Aminul",
    url: SITE.url,
    image: absoluteUrl(SITE.photo),
    jobTitle: SITE.jobTitle,
    description: SEO_DESCRIPTION,
    email: `mailto:${SITE.email}`,
    address: {
      "@type": "PostalAddress",
      addressCountry: SITE.countryCode,
    },
    knowsLanguage: ["en", "bn"],
    knowsAbout: TECH_KEYWORDS,
    hasOccupation: {
      "@type": "Occupation",
      name: SITE.jobTitle,
      occupationalCategory: "15-1254.00 Web Developers",
      skills: TECH_KEYWORDS.join(", "),
    },
    sameAs: [SITE.github, SITE.linkedin],
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: SITE.url,
    name: SEO_TITLE_LONG,
    description: SEO_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": personId },
    author: { "@id": personId },
  };

  const webPage = {
    "@type": "ProfilePage",
    "@id": webPageId,
    url: SITE.url,
    name: SEO_TITLE_LONG,
    description: SEO_DESCRIPTION,
    isPartOf: { "@id": websiteId },
    about: { "@id": personId },
    mainEntity: { "@id": personId },
    inLanguage: "en",
  };

  // Every shipped platform as its own entity. This is how the project
  // descriptions and tech stacks reach a crawler even though the UI keeps them
  // behind a collapsed accordion.
  const projectList = {
    "@type": "ItemList",
    "@id": `${SITE.url}/#projects`,
    name: `Projects by ${SITE.name}`,
    numberOfItems: PROJECTS.length,
    itemListElement: PROJECTS.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "WebApplication",
        name: project.title,
        description: project.description,
        url: project.liveLinks[0]?.url ?? SITE.url,
        image: absoluteUrl(project.thumbnail),
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web browser",
        keywords: project.techStack.join(", "),
        author: { "@id": personId },
        ...(project.features?.length
          ? { featureList: project.features }
          : {}),
        ...(project.codeBases?.length
          ? { codeRepository: project.codeBases.map((repo) => repo.url) }
          : {}),
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [person, website, webPage, projectList],
  };
}

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // Escaping "<" keeps a stray tag in any project description from breaking
      // out of the script element.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(buildGraph()).replace(/</g, "\\u003c"),
      }}
    />
  );
}
