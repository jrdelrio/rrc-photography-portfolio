import React, { useContext } from "react";
import { AppContext } from "../store/appContext";
import { Link } from "react-router-dom";
import "../styles/not-found.css";
import { MainLogoVectorWhite } from "../components/MainLogoVectorWhite";
import { Footer } from "../components/Footer";
import cameraIcon from "../img/camera-icon.png";

export const NotFound = () => {

    const { store } = useContext(AppContext);
    const textContent = {
        en: {
            message: "This page doesn't exist in Raimundo del Rio's portfolio.",
            linkGalleries: 'Galleries',
            linkAboutMe: 'About me',
            linkContact: 'Contact'
        },
        es: {
            message: 'Esta página no existe en el portafolio de Raimundo del Rio.',
            linkGalleries: 'Galerías',
            linkAboutMe: 'Sobre mí',
            linkContact: 'Contacto'
        }
    }

    const languageContent = textContent[store.language] || textContent.en;

    return (
        <section id="not-found">
            <header>
                <Link to="/"><MainLogoVectorWhite /></Link>
                <h1 className="palanquin-dark-bold">🚫 Error 404</h1>
            </header>

            <main>
                <h1>{languageContent.message}</h1>
                <div className="links">
                    <Link to='/'>{languageContent.linkGalleries}</Link>
                    <Link to='/about'>{languageContent.linkAboutMe}</Link>
                    <Link to='/contact'>{languageContent.linkContact}</Link>
                </div>
                <div>
                    <img src={cameraIcon} />
                </div>
            </main>
            <Footer />
        </section>

    )
}