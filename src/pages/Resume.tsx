import "../style/Resume.css";
import externe from "../assets/icons8-lien-externe.svg";
import CV from "../../dist/CV_Benjamin_Correa.pdf";

export function Resume() {
  return (
    <>
      <div className="resume">
        <section className="cv">
          <section className="intro">
            <h1>Benjamin Correa</h1>
            <h2>
              Développeur Full Stack - Recherche alternance CDA (Niveau 6 RNCP)
            </h2>
            <p>
              Disponible à partir du 21/09/2026 • 4 jour entreprise 1 jour école
            </p>
            <p>
              Lyon •{" "}
              <a href="mailto:ben-2004@hotmail.fr">
                ben-2004@hotmail.fr <img src={externe} alt="" />
              </a>{" "}
              • 06 48 32 48 96 •{" "}
              <a href="https://github.com/ben-25" target="_blank">
                github.com/ben-25 <img src={externe} alt="" />
              </a>
            </p>
          </section>

          <section className="profil">
            <h3>Profil</h3>
            <p>
              Développeur web passionné, à la recherche d'une alternance pour
              préparer le titre de Concepteur Développeur d'Applications (CDA).
              Maîtrise du développement Full Stack avec React,
              JavaScript/Node.js, JAVA, SQL et Docker. Curieux, autonome et
              motivé à monter en compétences dans un environnement
              professionnel.
            </p>
          </section>

          <section className="competences">
            <h3>Compétences Techniques</h3>
            <ul>
              <li>
                <strong>Language :</strong> React, TypeScript, JavaScript
                (ES6+), HTML5, CSS3, Node.js, JAVA, SQL
              </li>
              <li>
                <strong>Bases de données :</strong>MySQL, PostgreSQL
              </li>
              <li>
                <strong>Outils :</strong> Git / GitHub, REST API, Vite, Docker
              </li>
              <li>
                <strong>IDE :</strong> VSCode, ZED
              </li>
              <li>
                <strong>Méthodes :</strong> Responsive Design, MVC, bases des
                méthodes Agile
              </li>
              <li>
                <strong>Systeme d’exploitation : </strong> Windows
              </li>
            </ul>
          </section>

          <section className="projets">
            <h3>Projets Personnels</h3>

            <article>
              <h4>Music Search App - React + iTunes API</h4>
              <p>
                Application de recherche d'albums musicaux utilisant l'API
                iTunes. Gestion des appels API asynchrones, affichage dynamique
                des résultats et interface responsive en React.
              </p>
            </article>

            <article>
              <h4>Portfolio Personnel - React</h4>
              <p>
                Site vitrine développé en React/TypeScript présentant mes
                projets, compétences et parcours.
              </p>
            </article>

            <article>
              <h4>Projet de groupe FullStack - Node.js / React, TypeScript</h4>
              <p>
                Projet full‑stack complet réalisé en groupe : création d’un
                gestionnaire d’organisation, mise en place d’une API sécurisée,
                gestion d’une base de données et intégration d’une interface
                React.
              </p>
            </article>
          </section>

          <section className="formation">
            <h3>Formation</h3>
            <ul>
              <li>
                <strong>En cours :</strong> CDA (Concepteur Développeur
                d'Applications) — Titre RNCP Niveau 6 — Alternance recherchée —
                Lyon, 2026
              </li>
              <li>
                <strong>Ecole 42 : </strong>Passage de la piscine - 72/100
                examens final
              </li>
              <li>
                <strong>Université - Licence Communication : </strong> Cours
                d’infographie et création de 0 d’un jeux de société
              </li>
              <li>
                <strong>Acquis :</strong> Bac Général - Option : Mathématiques,
                NSI, Sciences de l’ingénieur - Nancy, 2022
              </li>
            </ul>
          </section>

          <section className="savoir-etre">
            <h3>Savoir-être</h3>
            <ul>
              <li>
                Autonomie et capacité à apprendre seul (projets personnels)
              </li>
              <li>Curiosité technique et veille technologique continue</li>
              <li>Rigueur dans l'organisation du code et la documentation</li>
              <li>Esprit d'équipe et bonne communication</li>
            </ul>
          </section>

          <section className="langues">
            <h3>Langues</h3>
            <p>Français : Langue maternelle - Anglais : B1</p>
          </section>
        </section>
      </div>
      <div className="resume-footer">
        <a href={CV} download className="btn-download">
          Telecharger mon CV
        </a>
      </div>
    </>
  );
}
