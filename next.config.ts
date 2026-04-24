import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/methode",
        destination: "/accompagnement",
        permanent: true,
      },
      {
        source: "/apropos",
        destination: "/accompagnement",
        permanent: true,
      },

      {
        source: "/blog/priorites-pme",
        destination:
          "/ressources/par-ou-commencer-quand-tout-semble-prioritaire-dans-une-pme",
        permanent: true,
      },
      {
        source: "/blog/gestion-risques-pme",
        destination:
          "/ressources/dirigeants-de-pme-et-si-vos-plus-grands-risques-etaient-ceux-que-vous-ne-voyez-pas",
        permanent: true,
      },
      {
        source: "/blog/obligations-pme",
        destination:
          "/ressources/obligations-reglementaires-contrainte-ou-levier-de-performance-pour-les-pme",
        permanent: true,
      },
      {
        source: "/blog/duerp-avantage-strategique",
        destination:
          "/ressources/duerp-2026-les-points-a-verifier-pour-une-pme",
        permanent: true,
      },
      {
        source: "/blog/marketing-externalise",
        destination: "/strategie-commerciale",
        permanent: true,
      },
      {
        source: "/blog/strategie-marketing-pme",
        destination:
          "/ressources/pme-quand-labsence-de-strategie-marketing-devient-un-risque-pour-votre-activite",
        permanent: true,
      },
      {
        source: "/blog/visibilite-pme",
        destination:
          "/ressources/pourquoi-les-pme-manquent-de-visibilite-et-comment-y-remedier-efficacement",
        permanent: true,
      },

      {
        source: "/blog",
        destination: "/ressources",
        permanent: true,
      },
      {
        source: "/blog/:slug*",
        destination: "/ressources",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;