import React from "react";
import "../styles/footer.css";
import { MainLogoVectorWhite } from "../components/MainLogoVectorWhite";
import { IconInsta } from "./IconInsta";

export const Footer = () => {

    const instaProfileLInk = 'https://www.instagram.com/raimundodelrio/';
    const styles = {
        position: "static"
    }

    return (
        <footer className="footer">
            <div className="logo-credits">
                <MainLogoVectorWhite styles={styles}/>
                <h2>Raimundo del Rio Photography</h2>
                <h3>© 2024 Fotografías derechos reservados</h3>
            </div>

            <div className="footer-links">
                <a href={instaProfileLInk} target="_blank"><IconInsta color='#ffffff' height='40px' /></a>
                <p>Creado con 🩶 por chiliSites®</p>
            </div>
        </footer>
    )
}

