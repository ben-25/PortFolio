import { useState } from 'react'
import '../style/navBar.css'

export function Navbar(){

    const [open, setOpen] = useState(false)

    return (
        <nav>
            <a href="/" className="logo">Benjamin Correa</a>

            <button className={`burger ${open ? "active" : ""}`} onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={`nav-links ${open ? "open" : ""}`}>
                <li><a href="/">Accueil</a></li>
                <li><a href="/projets">Projets</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/about">About Me</a></li>
            </ul>
        </nav>
    )
}