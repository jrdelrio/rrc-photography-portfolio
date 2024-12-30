import React, { useState, useEffect, useContext } from "react";
import { AppContext } from '../store/appContext';
import { Link, useLocation } from "react-router-dom";

import "../styles/navbar.css";

const Navbar = () => {

    const { store, actions } = useContext(AppContext);

    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const textContent = {
        en: {
            linkGalleries: 'Gallery',
            linkAboutMe: 'About me',
            linkContact: 'Contact'
        },
        es: {
            linkGalleries: 'Galería',
            linkAboutMe: 'Sobre mí',
            linkContact: 'Contacto'
        }
    }

    const [hideNavbar, setHideNavbar] = useState(false);
    const [isRotated, setIsRotated] = useState(false);
    const [navbarResponsive, setNavbarResponsive] = useState(false);
    const [showMobileNavbar, setShowMobileNavbar] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setHideNavbar(window.innerWidth <= 1000);
            setNavbarResponsive(window.innerWidth <= 1000);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check for screen size

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClick = () => {
        setHideNavbar(!hideNavbar);
        setIsRotated(!isRotated);
        setShowMobileNavbar(!showMobileNavbar); // Muestra u oculta el navbar móvil
        console.log('click en toggle')
    };

    const languageContent = textContent[store.language] || textContent.en;


    return (
        <>
            <nav className={`main-navbar ${hideNavbar ? 'hidden' : ''} ${navbarResponsive ? 'mobile-navbar' : ''} ${showMobileNavbar ? 'active' : ''}`}>
                <ul>{isHomePage ? (
                    <li><a href="#section-galleries">{languageContent.linkGalleries}</a></li>
                ) : (
                    <li><Link to="/#section-galleries">{languageContent.linkGalleries}</Link></li>
                )}
                    <li><Link to="/about">{languageContent.linkAboutMe}</Link></li>
                    <li><Link to="/contact">{languageContent.linkContact}</Link></li>
                </ul>
            </nav>

            {/* hamburger icon */}
            <svg
                className={`hamburger-icon lucide lucide-menu ${isRotated ? 'rotated' : ''}`}
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