import React, { useContext } from "react";
import "../styles/footer.css";
import { MainLogoVectorWhite } from "../components/MainLogoVectorWhite";
import { IconInsta } from "./IconInsta";
import { AppContext } from "../store/appContext";
import { Link, useLocation } from "react-router-dom";

export const Footer = () => {

    const instaProfileLInk = 'https://www.instagram.com/raimundodelrio/';
    const styles = {
        position: "static"
    }

    const { store } = useContext(AppContext);

    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const textContent = {
        en: {
            copyWrite: '© 2024 Photographs All Rights Reserved',
            creators: 'Created with 🩶 by '
        },
        es: {
            copyWrite: "© 2024 Fotografías Con Derechos Reservados",
            creators: 'Creado con 🩶 por '
        }
    }

    const languageContent = textContent[store.language] || textContent.en;

    return (
        <footer className="footer">
            <div className="logo-credits">
                {/* <MainLogoVectorWhite styles={styles} /> */}
                {isHomePage ? (
                <a href="#root"><MainLogoVectorWhite styles={styles} /></a>    
                ) : (
                    <Link to="/"><MainLogoVectorWhite styles={styles} /></Link>
                )}
                <h2 className="urbanist-about-me-text">Raimundo del Rio Photography</h2>
                <h3 className="urbanist-about-me-text">{languageContent.copyWrite}</h3>
            </div>

            <div className="footer-links">
                <a href={instaProfileLInk} target="_blank"><IconInsta color='#ffffff' height='40px' /></a>
                <p className="urbanist-about-me-text">{languageContent.creators} <a className="urbanist-about-me-text" href="https://chilisites.com/" target="blank_">🌶️chiliSites®</a></p>
            </div>
        </footer>
    )
}

