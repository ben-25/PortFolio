import '../style/Resume.css'
import externe from '../assets/icons8-lien-externe.svg'

export function Resume(){
    return(
        <>
        <div className='resume'>
            <section className="cv">
                <section className='intro'>
                    <h1>Benjamin Correa</h1>
                    <h2>Développeur Full Stack - Recherche alternance CDA (Niveau 6 RNCP)</h2>
                    <p>Lyon • <a href="mailto:ben-2004@hotmail.fr">ben-2004@hotmail.fr <img src={externe} alt="" /></a> • 06 48 32 48 96 • <a href="https://github.com/ben-25" target="_blank">github.com/ben-25 <img src={externe} alt="" /></a></p>
                </section>

                <section className="profil">
                    <h3>Profil</h3>
                    <p>
                        Développeur web passionné, à la recherche d'une alternance pour préparer le titre de 
                        Concepteur Développeur d'Applications (CDA). Maîtrise du développement Full Stack avec 
                        React, JavaScript/Node.js, JAVA, SQL et Docker. Curieux, autonome et motivé à monter en 
                        compétences dans un environnement professionnel.
                    </p>
                </section>

                <section className="competences">
                    <h3>Compétences Techniques</h3>
                    <ul>
                        <li><strong>Front-end :</strong> React, TypeScript, JavaScript (ES6+), HTML5, CSS3</li>
                        <li><strong>Back-end :</strong> Node.js, JAVA</li>
                        <li><strong>Bases de données :</strong> SQL, MySQL, PostgreSQL</li>
                        <li><strong>Outils :</strong> Git / GitHub, REST API, Vite, Docker</li>
                        <li><strong>IDE :</strong> VSCode</li>
                        <li><strong>Méthodes :</strong> Responsive Design, MVC, bases des méthodes Agile</li>
                    </ul>
                </section>

                <section className="projets">
                    <h3>Projets Personnels</h3>

                    <article>
                        <h4>Music Search App — React + iTunes API</h4>
                        <p>
                            Application de recherche d'albums musicaux utilisant l'API iTunes. Gestion des appels 
                            API asynchrones, affichage dynamique des résultats et interface responsive en React.
                        </p>
                    </article>

                    <article>
                        <h4>Portfolio Personnel — React</h4>
                        <p>
                            Site vitrine développé en React/TypeScript présentant mes projets, compétences et parcours.
                        </p>
                    </article>

                    <article>
                        <h4>Projet FullStack — Node.js / React</h4>
                        <p>
                            Projet full‑stack complet avec dashboard : création d’un dashboard moderne, mise en place 
                            d’une API sécurisée, gestion d’une base de données et intégration d’une interface React.
                        </p>
                    </article>
                </section>

                <section className="formation">
                    <h3>Formation</h3>
                    <ul>
                        <li><strong>Acquis :</strong> Permis de conduire</li>
                        <li><strong>Acquis :</strong> Bac Général — Option : Mathématiques, NSI, Sciences de l’ingénieur — Nancy, 2022</li>
                        <li><strong>En cours :</strong> CDA (Concepteur Développeur d'Applications) — Titre RNCP Niveau 6 — Alternance recherchée — Lyon, 2026</li>
                    </ul>
                </section>

                <section className="savoir-etre">
                    <h3>Savoir-être</h3>
                    <ul>
                        <li>Autonomie et capacité à apprendre seul (projets personnels)</li>
                        <li>Curiosité technique et veille technologique continue</li>
                        <li>Rigueur dans l'organisation du code et la documentation</li>
                        <li>Esprit d'équipe et bonne communication</li>
                    </ul>
                </section>

                <section className="langues">
                    <h3>Langues</h3>
                    <p>Français : Langue maternelle — Anglais : Professionnel (lecture de documentation technique)</p>
                </section>
            </section>
        </div>
        <div className='resume-footer'>
            <a href="/CV_Benjamin_Correa.pdf" download className='btn-download'>Telecharger mon CV</a>
        </div>
        </>
    )
}