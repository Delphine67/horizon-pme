import { ArticlePageTemplate, type ArticleData } from '../../components/ArticleTemplate'

export const metadata = {
  title: `Dirigeants de PME : et si vos plus grands risques étaient ceux que vous ne voyez pas ? | Horizon PME Solutions`,
  description: `Offre floue, sécurité, RSE : et si vos plus grands risques étaient ceux que vous ne voyez pas encore ? Faites le point sur les vrais enjeux de votre PME.`,
}

const article: ArticleData = {
  category: `Vision globale`,
  title: `Dirigeants de PME : et si vos plus grands risques étaient ceux que vous ne voyez pas ?`,
  date: `20 avril 2026`,
  readingTime: `4 min de lecture`,
  intro: `Gérer une PME, c'est avancer en permanence sur plusieurs fronts à la fois. Le quotidien opérationnel prend souvent toute la place, et certaines questions stratégiques — pourtant fondamentales — restent en suspens.`,
  sections: [
    {
      paragraphs: [
        `Pas par négligence, mais par manque de temps, de méthode, ou simplement parce qu'on n'a pas encore mesuré ce qu'elles coûtent vraiment quand elles ne sont pas traitées.`,
        `Trois domaines concentrent aujourd'hui les risques les plus fréquents et les plus sous-estimés dans les PME françaises : l'absence de stratégie marketing structurée, le non-respect des obligations légales en matière de sécurité des salariés, et le retard sur les enjeux RSE. Chacun de ces risques peut fragiliser une entreprise. Ensemble, ils peuvent compromettre sa pérennité.`,
      ],
    },
    {
      heading: `Une offre mal définie, c'est une croissance impossible à piloter`,
      paragraphs: [
        `Beaucoup de PME font du chiffre d'affaires sans pour autant avoir une stratégie marketing claire. Elles vendent, souvent bien, mais sans avoir formalisé ce qui fait réellement la valeur de leur offre, à qui elle s'adresse précisément, et pourquoi un client devrait les choisir plutôt qu'un concurrent.`,
        `Ce flou a des conséquences très concrètes. Une offre mal définie ou mal positionnée rend difficile toute action de développement commercial cohérente. On ne sait pas sur quels segments concentrer ses efforts, on répond à tout sans vraiment se démarquer sur rien, et l'on subit les opportunités plutôt qu'on ne les crée. La dépendance à quelques clients historiques s'installe, et avec elle, une fragilité structurelle.`,
        `Formaliser son offre — identifier ses segments prioritaires, clarifier sa proposition de valeur, construire un plan d'action commercial adapté à ses ressources — ce n'est pas réservé aux grands groupes. C'est précisément ce qui permet à une PME de croître de façon maîtrisée, sans disperser son énergie et son budget.`,
      ],
    },
    {
      heading: `Sécurité des salariés : des obligations légales qui engagent directement le dirigeant`,
      paragraphs: [
        `En matière de santé et sécurité au travail, la loi est claire : l'employeur est responsable de la protection physique et mentale de ses salariés. Cette responsabilité est personnelle, et les conséquences d'un manquement peuvent être lourdes — sanctions pénales, amendes, arrêt d'activité en cas d'accident grave.`,
        `Pourtant, un grand nombre de PME n'ont pas mis en place les dispositifs pourtant obligatoires. Le Document Unique d'Évaluation des Risques Professionnels (DUERP), qui doit recenser l'ensemble des risques auxquels sont exposés les salariés, est absent ou obsolète dans de nombreuses structures. Les affichages obligatoires ne sont pas à jour. Les formations à la sécurité, notamment pour les postes exposés, ne sont pas organisées. Les procédures en cas d'accident ou de situation dangereuse n'existent pas.`,
        `Ces manquements ne sont pas anodins. Un accident du travail dans une entreprise qui n'a pas respecté ses obligations expose son dirigeant à une mise en cause directe. Au-delà du risque juridique, c'est aussi la cohésion des équipes et la marque employeur qui en pâtissent. À l'inverse, une PME qui prend soin de ses salariés et le montre concrètement renforce leur engagement et réduit l'absentéisme.`,
      ],
    },
    {
      heading: `RSE : d'une contrainte perçue à un véritable atout concurrentiel`,
      paragraphs: [
        `La Responsabilité Sociétale des Entreprises est souvent vécue comme une affaire de grandes structures, avec ses reportings complexes et ses certifications coûteuses. Pour une PME, la réalité est plus simple — et l'opportunité plus immédiate qu'on ne le croit.`,
        `Concrètement, les parties prenantes d'une PME — clients professionnels, partenaires, candidats à l'embauche, sous-traitants — accordent une attention croissante aux pratiques de l'entreprise avec laquelle elles travaillent ou envisagent de travailler. Un donneur d'ordre peut aujourd'hui exiger des garanties sur les conditions de travail chez ses fournisseurs. Un candidat évalue l'entreprise sur ses valeurs avant même l'entretien. Un partenaire commercial cherche à s'associer à des structures qui ne lui feront pas courir de risque réputationnel.`,
        `Une démarche RSE adaptée à la taille d'une PME n'a pas besoin d'être exhaustive pour être crédible. Elle peut démarrer par des actions concrètes et visibles : politique d'achats responsables, conditions de travail formalisées, réduction mesurable de l'impact environnemental, engagement local. Ce qui compte, c'est la cohérence et la capacité à en parler avec des faits, pas des intentions.`,
      ],
    },
    {
      heading: `La vraie question : par où commencer ?`,
      paragraphs: [
        `Face à ces trois domaines, la difficulté pour un dirigeant de PME n'est généralement pas le manque de volonté — c'est le manque de visibilité. On sait qu'il y a des choses à faire, mais on ne sait pas précisément lesquelles, dans quel ordre, et avec quelles ressources.`,
        `C'est là que réside toute la valeur d'une démarche structurée : identifier rapidement ce qui est obligatoire et non négociable, ce qui est prioritaire pour la sécurité de l'activité, et ce qui peut être planifié dans un second temps. Cette clarté change la façon de piloter l'entreprise — et elle est accessible à toute PME, quelle que soit sa taille.`,
        `Vous n'avez pas encore fait cet état des lieux ? C'est probablement la première étape.`,
      ],
    },
  ],
}

export default function ArticlePage() {
  return <ArticlePageTemplate article={article} />
}