import { ArticlePageTemplate, type ArticleData } from '../../components/ArticleTemplate'

export const metadata = {
  title: `Sécurité au travail en PME : ce que la loi vous impose — et ce que vous risquez si vous n'agissez pas | Horizon PME Solutions`,
  description: `Sécurité au travail en PME : DUERP, formations, affichages, RPS… Ce que la loi impose et ce que vous risquez si vous n’agissez pas.`,
}

const article: ArticleData = {
  category: `Sécurité & conformité`,
  title: `Sécurité au travail en PME : ce que la loi vous impose — et ce que vous risquez si vous n'agissez pas`,
  date: `16 avril 2026`,
  readingTime: `4 min de lecture`,
  intro: `La sécurité des salariés est l'un des domaines où les PME françaises accumulent le plus de retard — souvent sans le savoir.`,
  sections: [
    {
      paragraphs: [
        `Non pas par mauvaise volonté, mais parce que les obligations légales en la matière sont nombreuses, peu connues des dirigeants non spécialisés, et rarement au cœur des priorités quotidiennes.`,
        `Pourtant, en cas d'accident du travail ou de maladie professionnelle, c'est la responsabilité personnelle du dirigeant qui est engagée. Et les conséquences — pénales, financières, humaines — peuvent être considérables.`,
      ],
    },
    {
      heading: `Ce que la loi impose à tout employeur, quelle que soit la taille de l'entreprise`,
      paragraphs: [
        `L'obligation de sécurité de l'employeur est inscrite dans le Code du travail. Elle est dite « de résultat » : il ne suffit pas d'avoir de bonnes intentions, il faut pouvoir démontrer que des mesures concrètes ont été mises en place pour protéger les salariés.`,
        `Parmi les obligations les plus courantes et les plus souvent négligées dans les PME, plusieurs méritent une attention particulière.`,
        `Le Document Unique d'Évaluation des Risques Professionnels (DUERP) est obligatoire dans toute entreprise dès le premier salarié. Il doit recenser l'ensemble des risques auxquels sont exposés les salariés — risques physiques, chimiques, psychosociaux, organisationnels — et prévoir un plan d'action pour les réduire. Ce document doit être mis à jour au minimum chaque année, et à chaque changement important dans l'entreprise. Son absence expose l'employeur à une amende, et surtout à une mise en cause directe en cas d'accident.`,
        `Les formations à la sécurité sont également obligatoires, en particulier pour les postes exposés à des risques spécifiques. Formation à la conduite d'engins, manipulation de produits dangereux, travail en hauteur, gestes et postures : ces formations ne sont pas optionnelles. Elles doivent être organisées, tracées, et renouvelées selon les délais réglementaires.`,
        `Les affichages obligatoires — consignes de sécurité, numéros d'urgence, coordonnées de l'inspection du travail, règlement intérieur pour les entreprises de 50 salariés et plus — doivent être présents et à jour dans les locaux. Un contrôle inopiné de l'inspection du travail peut révéler des manquements dont le dirigeant n'avait pas conscience.`,
        `Enfin, la prévention des risques psychosociaux (RPS) — stress, épuisement professionnel, harcèlement — fait partie intégrante des obligations de l'employeur. Ce sujet, longtemps traité comme secondaire, est aujourd'hui au cœur des contentieux prud'homaux et des arrêts de travail de longue durée.`,
      ],
    },
    {
      heading: `Les conséquences concrètes d'un manquement`,
      paragraphs: [
        `Un accident du travail dans une entreprise qui n'a pas respecté ses obligations de sécurité peut aboutir à une reconnaissance de faute inexcusable de l'employeur. Les conséquences sont alors multiples : majoration des indemnités versées au salarié, remboursement à la CPAM, sanctions pénales pouvant aller jusqu'à l'emprisonnement dans les cas les plus graves.`,
        `Au-delà du risque juridique, l'impact humain et organisationnel est réel. Un accident grave fragilise les équipes, dégrade le climat social, et peut ternir durablement la réputation de l'entreprise — y compris auprès des candidats à l'embauche, dans un contexte où la marque employeur est devenue un enjeu stratégique.`,
      ],
    },
    {
      heading: `La sécurité, un investissement qui se rentabilise`,
      paragraphs: [
        `Mettre en conformité une PME sur le plan de la sécurité au travail demande un effort initial — du temps, de la méthode, parfois un accompagnement externe. Mais cet investissement se rentabilise rapidement : réduction de l'absentéisme, baisse des accidents et donc des cotisations AT/MP, amélioration de l'engagement des équipes, et sérénité du dirigeant face à un contrôle ou un incident.`,
        `Un audit de vos obligations actuelles vous permettrait d'identifier en quelques heures ce qui est en ordre, ce qui manque, et ce qui doit être traité en priorité. C'est souvent moins long — et moins coûteux — qu'on ne l'imagine.`,
      ],
    },
  ],
}

export default function ArticlePage() {
  return <ArticlePageTemplate article={article} />
}