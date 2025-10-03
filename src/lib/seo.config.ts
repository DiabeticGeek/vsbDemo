import type { DefaultSeoProps } from "next-seo";

export const SITE_NAME = "Van Soolingen Bouw";
export const SITE_URL = "https://www.vansoolingenbouw.nl"; // pas aan indien nodig
export const SITE_DESCRIPTION =
  "Bouw- en renovatiediensten in Amsterdam & omstreken. Vakmanschap, kwaliteit en betrouwbaarheid.";

export const defaultSEO: DefaultSeoProps = {
  defaultTitle: SITE_NAME,
  titleTemplate: `%s | ${SITE_NAME}`,
  description: SITE_DESCRIPTION,
  themeColor: "#0f172a",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    { name: "language", content: "nl" },
    { name: "geo.region", content: "NL-NH" },
    { name: "geo.placename", content: "Amsterdam" },
  ],
};
