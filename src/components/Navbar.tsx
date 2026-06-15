import { useState } from 'react'
import '../style/navBar.css'

export function Navbar(){

    const [open, setOpen] = useState(false)

    return (
        <nav id='navBar'>
            <a href="/" className="logo" id='logo'>Benjamin Correa</a>

            <button className={`burger ${open ? "active" : ""}`} onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={`nav-links ${open ? "open" : ""}`}>
                <li><a href="/">Accueil</a></li>
                <li><a href="/projets">Projets</a></li>
                <li><a href="/resume">CV</a></li>
                <li><a href="/about">À propos</a></li>
            </ul>
        </nav>
    )
}