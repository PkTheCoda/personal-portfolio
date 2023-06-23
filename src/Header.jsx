import React from "react";
import { useState, useEffect} from "react"  

function Header() {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {window.removeEventListener('scroll', handleScroll)}
    }, []);


    return (
        <header className={`header--wrapper ${scrolled ? "scrolled" : ""}`}>
            <h3 className="header--name header-item hover-underline-animation">Pranav Konjeti</h3>
            <div className="header-nav-wrapper header-item">
                <a href="#portfolio" className="nav-item hover-underline-animation">Portfolio</a>
                <a href="#about" className="nav-item hover-underline-animation">About</a>
                <a href="#contact" className="nav-item hover-underline-animation">Contact</a>
            </div>
        </header>
    )
}

export default Header