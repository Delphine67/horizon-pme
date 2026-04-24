import { ArticlePageTemplate, type ArticleData } from '../../components/ArticleTemplate'

export const metadata = {
  title: 'Titre de l’article | Horizon PME Solutions',
  description: 'Méta-description de l’article.',
}

const article: ArticleData = {
  category: 'Catégorie de l’article',
  title: 'Titre de l’article',
  date: '1 avril 2026',
  readingTime: '5 min de lecture',
  intro:
    'Résumé d’introduction de l’article. En 2 ou 3 phrases, expliquez le sujet, l’enjeu pour la PME et ce que le lecteur va comprendre.',
  sections: [
    {
      paragraphs: [
        'Paragraphe d’ouverture.',
        'Deuxième paragraphe d’introduction.',
      ],
    },
    {
      heading: 'Premier intertitre',
      paragraphs: [
        'Premier paragraphe sous cet intertitre.',
        'Deuxième paragraphe sous cet intertitre.',
      ],
    },
    {
      heading: 'Deuxième intertitre',
      paragraphs: [
        'Nouveau développement.',
        'Exemple concret, conséquence ou point de vigilance.',
      ],
    },
    {
      heading: 'Troisième intertitre',
      paragraphs: [
        'Conclusion ou ouverture.',
      ],
    },
  ],
}

export default function ArticlePage() {
  return <ArticlePageTemplate article={article} />
}