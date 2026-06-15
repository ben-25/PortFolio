import '../style/about.css'

export function About(){
    return(
        <>
            <section className='about-intro'>
                <h1>Salut, moi c’est Benjamin</h1>
                <p>un développeur passionné par la création d’expériences web modernes, fluides et accessibles.
                J’ai commencé le développement par curiosité, puis c’est devenu une vraie passion, comprendre comment les choses fonctionnent, construire, améliorer, optimiser… 
                Aujourd’hui, je continue d’apprendre chaque jour pour repousser mes limites et créer des projets qui me ressemblent.</p>
            </section>
            <section className='about-hobbies'>
                <p className='left'>En dehors du developpement la musique occupe une place importante dans mon quotidien. Elle m’accompagne aussi bien lorsque je travaille que pendant mes moments de détente.
                J’aime découvrir différents styles, que ce soit pour me concentrer, m’inspirer ou simplement me relaxer. La musique m’aide à rester créatif et à garder un bon rythme dans tout ce que je fais.</p>
                <p className='right'>Les jeux vidéo font aussi partie de mes loisirs préférés. J’aime particulièrement l’aspect immersif et interactif qu’ils offrent, ainsi que les univers créatifs qu’ils proposent.
                Jouer me permet de me détendre, mais aussi de développer ma réflexion, ma réactivité et mon esprit stratégique, surtout dans les jeux compétitifs</p>
            </section>
            <section className='about-future'>
                <p>Mon objectif principal est de continuer à progresser dans la création d’expériences web modernes, accessibles et performantes.
                J’aime apprendre, expérimenter et repousser mes limites, et je cherche constamment à améliorer la qualité de mes projets autant sur le plan technique que visuel.</p>
                <p>À court terme, je souhaite renforcer mes compétences, approfondir mon utilisation des outils modernes et participer à des projets qui me permettent de développer de nouvelles approches créatives.</p>
                <p>À long terme, je veux collaborer avec des équipes passionnées, contribuer à des projets ambitieux et construire des interfaces qui ont un impact réel. Mon but est simple : créer, apprendre, et évoluer tout en apportant de la valeur à chaque projet auquel je participe.</p>
            </section>
        </>
    )
}