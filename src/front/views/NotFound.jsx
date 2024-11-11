import React, { useContext } from "react";
import { AppContext } from "../store/appContext";
import { Link } from "react-router-dom";
import "../styles/not-found.css";
import { MainLogoVectorWhite } from "../components/MainLogoVectorWhite";
import { Footer } from "../components/Footer";

export const NotFound = () => {

    const { store } = useContext(AppContext);
    const textContent = {
        en: {
            message: 'Oops! You seem to be lost.',
            linkGalleries: 'Galleries',
            linkAboutMe: 'About me',
            linkContact: 'Contact'
        },
        es: {
            message: 'Uups! Parece que te has perdido.',
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

                </div>
            </main>
            <Footer />
        </section>

    )
}