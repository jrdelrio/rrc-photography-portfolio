import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import raimundoPhoto from "../img/about-me.png";
import sheepPhoto from "../img/Chiloe-34.webp";
import { MainLogoVectorWhite } from "../components/MainLogoVectorWhite";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { AppContext } from "../store/appContext";
import { LanguageToggler } from "../components/LanguageToggler";

import "../styles/about.css";

export const About = () => {
    const { store, actions } = useContext(AppContext);

    const textContent = {
        es: {
            title: "Sobre mí",
            parag1: 'Nací en Santiago de Chile en 1962. La vida familiar de las primeras etapas me llevo a vivir en otras ciudades como San Felipe y Viña del Mar, en 1976 regresé nuevamente a Santiago donde vivo actualmente. Últimamente paso el tiempo que puedo en la Isla de Chiloé, estoy en un proceso de desentrañar su magia y por ese motivo este proyecto trata de mostrar parte de eso.',
            parag2: 'Padre y esposo por convicción, Ingeniero por profesión, fotógrafo por afición. Me inicié en la fotografía en la etapa escolar tratando de evitar el martirio que me significaba dibujar durante las clases de arte, una visionaria profesora me abrió esa puerta y la crucé para siempre. La fotografía análoga de esos tiempos me llevó al cuarto obscuro, a esos olores y sensaciones que quedan en el inconsciente imborrable, luego el mundo digital te lleva por otros caminos que sorprenden y facilitan las cosas.  Al final del día como dijo alguien, "si la poesía es arte ¿qué importa con qué lápiz se escriba?".',
            parag3: 'Me interesa la fotografía como una expresión simple y pura, rescatando las maravillas naturales, la emoción de un rostro o una realidad desconocida. Esa motivación me ha llevado a acercarme a la fotografía de naturaleza con la cual trato de hacer una divulgación del patrimonio natural de este increíble país llamado Chile, contribuyendo así a su respeto y conservación,  también intento la fotografía  de lugares con sus habitantes, costumbres y rincones.',
            parag4: 'Tengo la suerte de vivir en el país más fotogénico del mundo, costas, desiertos, montañas, volcanes, hielos y fiordos son parte de este territorio del cual he recorrido bastante aunque no lo suficiente para conocerlo entero, espero que esa tarea pendiente pueda completarla algún día.',
            parag5: 'Desde este rincón del planeta invito a toda la comunidad de fotógrafos  a venir a Chile, conocerlo y fotografiarlo sin duda quedarán sorprendidos.'
        },
        en: {
            title: "About me",
            parag1: 'I was born in Santiago, Chile, in 1962. Family life in the early years led me to live in other cities like San Felipe and Viña del Mar. In 1976, I returned to Santiago, where I currently live. Recently, I’ve been spending as much time as possible on the Island of Chiloé; I am in a process of uncovering its magic, and this project aims to show part of that.',
            parag2: 'A father and husband by choice, an engineer by profession, and a photographer by passion. I began with photography during my school years to avoid the torment that drawing in art classes meant for me. A visionary teacher opened that door for me, and I crossed it forever. The analog photography of those times took me to the darkroom, with those smells and sensations that remain indelibly in the subconscious. Later, the digital world took me down other paths, surprising and simplifying things. At the end of the day, as someone once said, "if poetry is art, what does it matter with which pencil it is written?"',
            parag3: 'I am interested in photography as a simple and pure expression, capturing natural wonders, the emotion of a face, or an unknown reality. This motivation has led me to explore nature photography, with which I seek to promote the natural heritage of this incredible country called Chile, thus contributing to its respect and conservation. I also enjoy photographing places with their people, customs, and hidden corners.',
            parag4: 'I am fortunate to live in the most photogenic country in the world. Coasts, deserts, mountains, volcanoes, glaciers, and fjords are part of this territory. I have traveled quite a bit, though not enough to know it entirely. I hope to complete that unfinished journey someday.',
            parag5: 'From this corner of the planet, I invite the entire photography community to come to Chile, explore it, and photograph it – you will undoubtedly be amazed.'
        }
    }

    const languageContent = textContent[store.language] || textContent.en;
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1100);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1100);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup al desmontar
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section id="about-me">
            <Navbar />
            <LanguageToggler />
            <header>
                <Link to="/"><MainLogoVectorWhite /></Link>
                <h1 className="palanquin-dark-bold">{languageContent.title}</h1>
            </header>

            <main>
                <div className="container">
                    {isLargeScreen ? (
                        <>
                            {/* Distribución para pantallas grandes */}
                            <div className="text-column urbanist-about-me-text">
                                <p>{languageContent.parag1}</p>
                                <p>{languageContent.parag2}</p>
                                <p>{languageContent.parag3}</p>
                                <p>{languageContent.parag4}</p>
                                <p>{languageContent.parag5}</p>
                                <h2 className="palanquin-dark-medium">Raimundo del Rio C.</h2>
                            </div>

                            <div className="image-column">
                                <img src={raimundoPhoto} alt="Raimundo del Rio Fotógrafo Sur de Chile" className="image" />
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Distribución para pantallas pequeñas */}

                            <div className="text-column urbanist-about-me-text">
                                <p>{languageContent.parag1}</p>
                                <p style={{ marginBottom: 0 }}>{languageContent.parag2}</p>
                                <div className="image-column">
                                    <img src={raimundoPhoto} alt="Raimundo del Rio Fotógrafo Sur de Chile" className="image" style={{ marginBottom: "40px" }} />
                                </div>
                                <p>{languageContent.parag3}</p>
                                <p>{languageContent.parag4}</p>
                                <p>{languageContent.parag5}</p>
                                <h2 className="palanquin-dark-medium">Raimundo del Rio C.</h2>
                            </div>
                        </>
                    )}
                </div>
            </main>
            <Footer />
        </section>
    );
};
