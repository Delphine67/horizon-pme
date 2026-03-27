import Link from "next/link";

export default function CasConcrets() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#F4F4F4] py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-4xl font-bold mb-6">
            Des situations concrètes, des résultats mesurables
          </h1>

          <p className="text-lg text-gray-600">
            Chaque PME est différente, mais les problématiques sont souvent similaires.
            <br /><br />
            Voici des exemples réels d’accompagnement.
          </p>

        </div>
      </section>

      {/* CAS 1 */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 bg-white p-10 rounded-xl shadow border-l-4 border-[#2A4D69]">

          <h2 className="text-xl font-semibold mb-6 text-[#2A4D69]">
            Optimisation logistique et satisfaction client
          </h2>

          <div className="space-y-3 text-gray-600">
            <p><strong>Secteur :</strong> Logistique / Distribution</p>
            <p><strong>Constat :</strong> Décalage entre offres commerciales (100 unités) et réalité logistique (96).</p>
            <p><strong>Problèmes :</strong> pertes de temps, palettes instables, casse, surcoûts, insatisfaction client.</p>
            <p><strong>Action :</strong> Diagnostic terrain, alignement commerce / logistique, nouveaux process.</p>
            <p><strong>Résultats :</strong></p>
            <ul className="list-disc ml-5">
              <li>Réduction du temps de préparation</li>
              <li>Diminution des coûts et de la casse</li>
              <li>Meilleure coordination interne</li>
              <li>Amélioration de la satisfaction client</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CAS 2 */}
      <section className="py-20 bg-[#F4F4F4]">
        <div className="max-w-5xl mx-auto px-6 bg-white p-10 rounded-xl shadow border-l-4 border-[#7CB342]">

          <h2 className="text-xl font-semibold mb-6 text-[#7CB342]">
            Innovation produit et réduction des déchets
          </h2>

          <div className="space-y-3 text-gray-600">
            <p><strong>Secteur :</strong> Industrie / BTP</p>
            <p><strong>Constat :</strong> Pot de peinture inadapté → transvasement obligatoire.</p>
            <p><strong>Problèmes :</strong> perte de temps, gaspillage, déchets, coûts supplémentaires.</p>
            <p><strong>Action :</strong> Conception d’un emballage adapté à l’usage (bac rectangulaire).</p>
            <p><strong>Résultats :</strong></p>
            <ul className="list-disc ml-5">
              <li>Suppression d’une étape</li>
              <li>Réduction des déchets</li>
              <li>Gain de temps utilisateur</li>
              <li>Innovation devenue standard du marché</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CAS 3 */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 bg-white p-10 rounded-xl shadow border-l-4 border-[#FFD166]">

          <h2 className="text-xl font-semibold mb-6 text-[#C9A227]">
            Structuration RH et sécurité
          </h2>

          <div className="space-y-3 text-gray-600">
            <p><strong>Secteur :</strong> Immobilier / PME</p>
            <p><strong>Problème :</strong> Absence de livret d’accueil et risques RH / sécurité.</p>
            <p><strong>Action :</strong> Création d’un livret d’accueil complet et conforme.</p>
            <p><strong>Résultats :</strong></p>
            <ul className="list-disc ml-5">
              <li>Intégration facilitée</li>
              <li>Conformité réglementaire</li>
              <li>Valorisation de l’entreprise</li>
              <li>Gain de temps pour la direction</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CAS 4 */}
      <section className="py-20 bg-[#F4F4F4]">
        <div className="max-w-5xl mx-auto px-6 bg-white p-10 rounded-xl shadow border-l-4 border-black">

          <h2 className="text-xl font-semibold mb-6">
            Mise en conformité DUERP & PAPRIPACT
          </h2>

          <div className="space-y-3 text-gray-600">
            <p><strong>Secteur :</strong> Logistique / BTP</p>
            <p><strong>Problème :</strong> DUERP non à jour, absence de PAPRIPACT.</p>
            <p><strong>Action :</strong> Diagnostic, mise à jour, structuration et déploiement.</p>
            <p><strong>Résultats :</strong></p>
            <ul className="list-disc ml-5">
              <li>Mise en conformité immédiate</li>
              <li>Réduction des risques juridiques</li>
              <li>Implication des équipes</li>
              <li>Démarche de prévention structurée</li>
            </ul>
          </div>

        </div>
      </section>
        {/* CAS 5 */}
        <section className="py-20">
  <div className="max-w-5xl mx-auto px-6 bg-white p-10 rounded-xl shadow border-l-4 border-[#2A4D69]">

    <h2 className="text-xl font-semibold mb-6 text-[#2A4D69]">
      Transformation d’un modèle de vente en libre-service
    </h2>

    <div className="space-y-3 text-gray-600">
      <p><strong>Secteur :</strong> Industrie / maintenance</p>

      <p><strong>Constat :</strong> Passage du mode "comptoir" au libre-service.</p>

      <p><strong>Problèmes :</strong> Perte de conseil client et baisse des ventes.</p>

      <p><strong>Action :</strong> Refonte des packagings (visuels, pictogrammes, codes couleur, segmentation) et mise en place d’ILV et de merchandising.</p>

      <p><strong>Résultats :</strong></p>
      <ul className="list-disc ml-5">
        <li>Meilleure compréhension des produits</li>
        <li>Mise en avant en point de vente</li>
        <li>Très bon accueil des distributeurs et clients</li>
        <li><strong>+9% de part de marché</strong></li>
      </ul>
    </div>

  </div>
</section>

        {/* CAS 6 */}
        <section className="py-20 bg-[#F4F4F4]">
  <div className="max-w-5xl mx-auto px-6 bg-white p-10 rounded-xl shadow border-l-4 border-[#7CB342]">

    <h2 className="text-xl font-semibold mb-6 text-[#7CB342]">
      Refonte de site web et développement de la visibilité
    </h2>

    <div className="space-y-3 text-gray-600">
      <p><strong>Secteur :</strong> Gestion immobilière</p>

      <p><strong>Constat :</strong> Site vitrine vieillissant, sans lien client ni contenu.</p>

      <p><strong>Problèmes :</strong> Peu de trafic, faible transformation, manque de visibilité.</p>

      <p><strong>Action :</strong> Refonte du site, intégration d’un accès client, création d’un blog et publication régulière de contenus (dont législation), ajout d’une page recrutement.</p>

      <p><strong>Résultats :</strong></p>
      <ul className="list-disc ml-5">
        <li>Augmentation significative du trafic</li>
        <li>Utilisation du site comme point d’entrée client</li>
        <li>Lecture des articles et amélioration du SEO</li>
        <li>Facilitation du recrutement</li>
      </ul>
    </div>

  </div>
</section>


      {/* CONCLUSION */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl mb-6">
            Ce que ces cas démontrent
          </h2>

          <p className="text-gray-600">
            Mon accompagnement s'appuie sur le terrain, la maîtrise des enjeux
            réglementaires et une approche pragmatique.
            <br /><br />
            L'objectif : transformer les contraintes en leviers de performance.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFD166] py-20 text-center">

        <h2 className="text-2xl mb-4">
          Et dans votre situation ?
        </h2>

        <Link href="#">
          <button className="bg-[#2A4D69] text-white px-6 py-3 rounded-xl hover:scale-105 transition">
            Prendre contact
          </button>
        </Link>

      </section>

    </main>
  );
}