import { ProjectCard } from '../components/ProjectCard.tsx'
import '../style/projects.css'
import { useEffect, useState } from 'react';
import externe from '../assets/icons8-lien-externe.svg'
import { ProjectBackground } from '../components/ProjectBackground.tsx'

type repos = {
    id: number;
    name: string;
    description: string;
    topics: string[];
    html_url: string;
};

export function Projects(){
    const [repos, setRepos] = useState<repos[]>([]);
    const [filter, setFilter] = useState<"all" | "perso" | "formation">("all");

    useEffect(() => {
        async function fetchRepos() {
            const response = await fetch("https://api.github.com/users/ben-25/repos");
            const data: repos[] = await response.json();
            setRepos(data);
        }
        fetchRepos();
    }, []);

    const filterRepos = repos.filter(repo => {
        if(filter === "all")return true;
        if(filter === "perso")return !repo.name.includes("Ada");
        if(filter === "formation")return repo.name.includes("Ada");
    })

    return(
        <>
            <section className='section-intro-project'>
                <div className="project-background">
                    <ProjectBackground />
                </div>
                <div className='intro-project'>
                    <h1>Mes projets</h1>
                    <a href="https://github.com/ben-25" target="_blank">Github personnel <img className='externe' src={externe} alt="lien externe"/></a>
                </div>
                <fieldset>
                    <legend>Filtrer les projets</legend>
                    <input type="radio" id="all" value="all" name="select" defaultChecked onChange={() => setFilter("all")} />
                    <label htmlFor="all" className={filter === "all" ? "active" : ""}>Tous</label>
                    <input type="radio" id="personnel" value="perso" name="select" onChange={() => setFilter("perso")} />
                    <label htmlFor="personnel" className={filter === "perso" ? "active" : ""}>Personnel</label>
                    <input type="radio" id="formation" value="formation" name="select" onChange={() => setFilter("formation")} />
                    <label htmlFor="formation" className={filter === "formation" ? "active" : ""}>Formation</label>
                </fieldset>
            </section>
            <section className='projects-all'>
                {filterRepos.map(projet => (
                    <ProjectCard 
                    key={projet.id}
                    name={projet.name}
                    description={projet.description}
                    topics={projet.topics}
                    url={projet.html_url}
                    formation={projet.name.includes("Ada")}
                    />
                ))}
            </section>
        </>
    )
}