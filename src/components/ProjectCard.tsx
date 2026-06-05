import externe from '../assets/icons8-lien-externe.svg'
import '../style/projectCard.css'

type projectCardProps = {
    key: number
    name: string
    description: string
    topics: string[]
    url: string
    formation:boolean
}

export function ProjectCard({ name, description, topics, url, formation}: projectCardProps){
    const ada = formation ? "ada" : "";

    return(
        <div className="project-container">
            <div className={`project-content ${ada}`}>
                <div className='project-header'>
                    <h3>{name}</h3>
                    <a href={url} target="_blank">Lien github <img src={externe}></img></a>
                </div>
                <p>{description}</p>
                <div className="project-tags">
                    <span className="tag">{topics[0]}</span>
                    <span className="tag">{topics[1]}</span>
                    <span className="tag">{topics[2]}</span>
                </div>
            </div>
        </div>
    )
}