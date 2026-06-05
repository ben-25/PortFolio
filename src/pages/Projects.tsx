import { ProjectCard } from '../components/ProjectCard.tsx'
import '../style/projects.css'
import { useEffect, useState } from 'react';
import externe from '../assets/icons8-lien-externe.svg'

type repos = {
    id: number;
    name: string;
    description: string;
    topics: string[];
    html_url: string;
};

export function Projects(){
    const [repos, setRepos] = useState<repos[]>([]);
    const [filter, setFilter] = useState("all");

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
                <div className='intro-project'>
                    <h1>Mes projets</h1>
                    <a href="https://github.com/ben-25" target="_blank">Github personnel <img src={externe} alt="lien externe"/></a>
                </div>
                <fieldset>
                    <legend>Filtrer les projets</legend>
                    <input type="radio" id="all" value="all" name="select" defaultChecked onChange={(e) => setFilter(e.target.value)} />
                    <label htmlFor="all">Tous</label>
                    <input type="radio" id="personnel" value="perso" name="select" onChange={(e) => setFilter(e.target.value)} />
                    <label htmlFor="personnel">Personnel</label>
                    <input type="radio" id="formation" value="formation" name="select" onChange={(e) => setFilter(e.target.value)} />
                    <label htmlFor="formation">Formation</label>
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