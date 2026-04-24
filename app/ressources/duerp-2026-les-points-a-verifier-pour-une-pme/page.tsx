import { ArticlePageTemplate, type ArticleData } from '../../components/ArticleTemplate'

export const metadata = {
  title: `DUERP 2026 : les points à vérifier pour une PME | Horizon PME Solutions`,
  description: `DUERP 2026 : nouvelles obligations, RPS, dématérialisation, conservation 40 ans. Votre document est-il vraiment à jour ? Ce que toute PME doit vérifier.`,
}

const article: ArticleData = {
  category: `Sécurité & conformité`,
  title: `DUERP 2026 : les points à vérifier pour une PME`,
  date: `18 avril 2026`,
  readingTime: `5 min de lecture`,
  intro: `Votre DUERP est peut-être à jour sur le papier. Mais l'est-il vraiment ?`,
  sections: [
    {
      paragraphs: [
        `C'est la question que beaucoup de dirigeants de PME évitent de se poser. Le document existe, il a été fait « il y a peu », il est quelque part dans un dossier partagé ou un classeur. Ça devrait aller.`,
        `Sauf que selon les estimations de l'Inspection du travail, près d'une entreprise française sur deux ne dispose pas d'un DUERP réellement à jour. Et en 2026, les exigences se sont renforcées. Un document obsolète est désormais juridiquement considéré comme inexistant — avec les conséquences que cela implique pour la responsabilité personnelle du dirigeant.`,
      ],
    },
    {
      heading: `Ce qui a changé — et ce que vous devez vérifier.`,
      paragraphs: [
        `La loi Santé au Travail de 2021 a profondément transformé la nature du DUERP. Il ne s'agit plus d'un document statique qu'on sort lors d'un contrôle. C'est un outil vivant, soumis à des obligations précises que beaucoup de PME n'ont pas encore pleinement intégrées.`,
        `Voici les points concrets à passer en revue.`,
        `La fréquence de mise à jour. Pour les entreprises de 11 salariés et plus, la révision est obligatoire au minimum une fois par an. Mais trois situations imposent une mise à jour immédiate, quelle que soit la date de la dernière révision : un accident du travail, un changement important des conditions de travail (nouveau matériel, déménagement, réorganisation), ou toute nouvelle information sur un risque identifié. Attendre l'échéance annuelle dans ces cas-là constitue un manquement.`,
        `La conservation sur 40 ans. Depuis la loi de 2021, toutes les versions successives du DUERP doivent être conservées pendant 40 ans minimum. Ce n'est plus un document qu'on écrase à chaque mise à jour. C'est une mémoire institutionnelle de l'entreprise — accessible aux anciens salariés qui justifieraient d'un intérêt à y avoir accès.`,
        `La dématérialisation. Le dépôt numérique sur une plateforme dédiée est obligatoire depuis juillet 2023 pour les entreprises de 150 salariés et plus. Pour les structures plus petites, le calendrier de déploiement est en cours. C'est le moment de s'y préparer, pas d'attendre la dernière échéance.`,
        `Les risques psychosociaux. Un DUERP sans section dédiée aux RPS — stress, burn-out, charge de travail excessive, tensions relationnelles — est incomplet. Cette obligation existe depuis 2012, mais elle fait l'objet d'une surveillance accrue en 2026. Le décret de mai 2025 a encore renforcé les exigences sur ce point.`,
        `Les risques émergents. Fortes chaleurs, télétravail, intensification numérique, exposition aux outils d'intelligence artificielle : ces réalités du travail actuel doivent figurer dans votre évaluation si elles concernent vos salariés. Un DUERP qui ne reflète pas les conditions de travail réelles d'aujourd'hui ne protège ni vos équipes ni votre entreprise.`,
      ],
    },
    {
      heading: `Le DUERP n'est pas qu'un bouclier juridique. C'est un outil de pilotage.`,
      paragraphs: [
        `C'est là où beaucoup de PME passent à côté de la valeur réelle de cet exercice. Un DUERP bien construit — avec les équipes, à partir du terrain — révèle des dysfonctionnements qu'on ne voit pas au quotidien. Des postes fragilisants. Des organisations qui épuisent. Des risques qui, pris en charge tôt, coûtent infiniment moins cher qu'un accident ou un arrêt long.`,
        `Les entreprises qui ont structuré une vraie politique de prévention observent en moyenne 23 % d'arrêts de travail en moins. C'est du temps de travail préservé, des équipes plus stables, et une marque employeur qui s'en ressent.`,
        `En clair : faire son DUERP sérieusement, ce n'est pas juste être en règle. C'est décider de mieux piloter.`,
      ],
    },
    {
      heading: `Et si votre DUERP n'était pas aussi à jour que vous le pensez ?`,
      paragraphs: [
        `La réponse honnête, pour beaucoup de dirigeants de PME, est : probablement pas. Pas par négligence, mais parce que le quotidien prend le dessus, que les obligations évoluent vite, et que personne en interne n'a vraiment le temps ni la méthode pour s'en occuper sérieusement.`,
        `C'est précisément là qu'un regard extérieur change tout.`,
        `Vous dirigez une PME en Île-de-France et vous n'êtes pas certain que votre DUERP soit conforme aux exigences 2026 ? C'est un point qu'on peut vérifier ensemble rapidement. Contactez-moi pour un premier échange.`,
      ],
    },
  ],
}

export default function ArticlePage() {
  return <ArticlePageTemplate article={article} />
}