import React, { useState, useEffect, useContext } from "react";
import { AppContext } from '../store/appContext';

import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {

    const { store, actions } = useContext(AppContext);
    const textContent = {
        en: {
            linkGalleries: 'Galleries',
            linkAboutMe: 'About me',
            linkContact: 'Contact'
        },
        es: {
            linkGalleries: 'Galerías',
            linkAboutMe: 'Sobre mí',
            linkContact: 'Contacto'
        }
    }

    const [hideNavbar, setHideNavbar] = useState(false);
    const [secondaryNavbar, setSecondaryNavbar] = useState(store.showResponsiveNavbar);

    useEffect(() => {
        const handleResize = () => {
            setHideNavbar(window.innerWidth <= 1000);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check for screen size

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClick = () => {
        if (actions && actions.ShowResponsiveNavbar) {
            actions.ShowResponsiveNavbar();
        } else {
            console.error("ShowResponsiveNavbar action no está definida");
        }
    };

    const languageContent = textContent[store.language] || textContent.en;


    return (
        <>
            <nav className={`main-navbar ${hideNavbar ? 'hidden' : ''}`}>
                <ul>
                    <li><Link to="/#section-galleries">{languageContent.linkGalleries}</Link></li>
                    <li><Link to="/about">{languageContent.linkAboutMe}</Link></li>
                    <li><Link to="/contact">{languageContent.linkContact}</Link></li>
                </ul>
            </nav>

            {/* hamburger icon */}
            <svg
                className="hamburger-icon lucide lucide-menu"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={handleClick}>
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
        </>
    )
}

export default Navbar;