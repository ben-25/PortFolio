import '../style/home.css'
import adashboard from '../assets/Adashboard.webp'
import library_music from '../assets/Library_music.webp'
import portfolio from '../assets/PortFolio.webp'
import { HeroBackground } from '../components/HeroBackground'

export function Home(){
    return(
        <>
            <section className="hero" id="accueil">
                <div className="hero-background">
                    <HeroBackground />
                </div>
                <div className="hero-content">
                    <h1>Benjamin Correa</h1>
                    <h2>Développeur Full Stack</h2>
                    <p>Développeur web passionné, à la recherche d'une alternance pour préparer le titre de Concepteur Développeur d'Applications (CDA)</p>
                    <a href="/projets" className="cta-button">Découvrir mes projets</a>
                    <a href="/resume" className="cta-button">CV</a>
                </div>
            </section>

            <section className="projects" id="projets">
                <h2 className="section-title">Mes Projets Récents</h2>
                <div className="project-grid">
                    <div className="project-card">
                        <div className="project-image">
                            <img src={portfolio} alt="image du projet" />
                        </div>
                        <div className="project-info">
                            <h3>Portfolio</h3>
                            <p>Espace professionnel dédié à mes créations, mes technologies maîtrisées et mon évolution en tant que développeur.</p>
                            <div className="project-tags">
                                <span className="tag">React</span>
                                <span className="tag">TypeScript</span>
                                <span className="tag">Vite</span>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-image">
                            <img src={library_music} alt="image du projet" />
                        </div>
                        <div className="project-info">
                            <h3>Library-music</h3>
                            <p>Petit projet qui permet la recherche d'album et d'artiste avec l'api Itunes</p>
                            <div className="project-tags">
                                <span className="tag">React</span>
                                <span className="tag">API</span>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-image">
                            <img src={adashboard} alt="image du projet" />
                        </div>
                        <div className="project-info">
                            <h3>Adashboard</h3>
                            <p>Premier projet full-stack, un petit dashboard pour le suivi de cours.</p>
                            <div className="project-tags">
                                <span className="tag">Node.js</span>
                                <span className="tag">Express</span>
                                <span className="tag">React</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact" id="contact">
                <h2>Vous cherchez un alternant ?</h2>
                <p>Je suis disponible pour une alternance fin septembre 2026</p>
                <a href="mailto:ben-2004@hotmail.fr" className="contact-button">Me contacter</a>
            </section>
        </>
    )
}