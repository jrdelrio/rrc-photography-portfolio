import React from "react";
import { Link } from "react-router-dom";
import "../styles/about.css";
import raimundoPhoto from "../img/about-me.png";
import sheepPhoto from "../img/Chiloe-34.webp";
import { MainLogoVectorWhite } from "../components/MainLogoVectorWhite";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";


export const About = () => {
    return (
        <section id="about-me">
            <Navbar />
            <header>
                <Link to="/"><MainLogoVectorWhite /></Link>
                <h1>Acerca de mí</h1>
            </header>

            <main>
                <div className="container">
                    {/* Columna de texto a la izquierda */}
                    <div className="text-column urbanist-about-me-text">
                        <p>
                            Nací en Santiago de Chile en 1962. La vida familiar de las primeras etapas me llevo a vivir en otras ciudades como San Felipe y Viña del Mar, en 1976 regresé nuevamente a Santiago donde vivo actualmente. Últimamente paso el tiempo que puedo en la Isla de Chiloé, estoy en un proceso de desentrañar su magia y por ese motivo este proyecto trata de mostrar parte de eso.
                        </p>
                        <p>
                            Padre y esposo por convicción, Ingeniero por profesión, fotógrafo por afición. Me inicié en la fotografía en la etapa escolar tratando de evitar el martirio que me significaba dibujar durante las clases de arte, una visionaria profesora me abrió esa puerta y la crucé para siempre.
                            La fotografía análoga de esos tiempos me llevó al cuarto obscuro, a esos olores y sensaciones que quedan en el inconsciente imborrable, luego el mundo digital te lleva por otros caminos que sorprenden y facilitan las cosas.  Al final del día como dijo alguien, "si la poesía es arte ¿qué importa con qué lápiz se escriba?".
                        </p>
                        <p>
                            Me interesa la fotografía como una expresión simple y pura, rescatando las maravillas naturales, la emoción de un rostro o una realidad desconocida. Esa motivación me ha llevado a acercarme a la fotografía de naturaleza con la cual trato de hacer una divulgación del patrimonio natural de este increíble país llamado Chile, contribuyendo así a su respeto y conservación,  también intento la fotografía  de lugares con sus habitantes, costumbres y rincones.
                        </p>
                        <p>
                            Tengo la suerte de vivir en el país más fotogénico del mundo, costas, desiertos, montañas, volcanes, hielos y fiordos son parte de este territorio del cual he recorrido bastante aunque no lo suficiente para conocerlo entero, espero que esa tarea pendiente pueda completarla algún día.
                        </p>
                        <p>
                            Desde este rincón del planeta invito a toda la comunidad de fotógrafos  a venir a Chile, conocerlo y fotografiarlo sin duda quedarán sorprendidos.
                        </p>
                        <h2 className="palanquin-dark-medium">Raimundo del Rio Covarrubias</h2>
                    </div>

                    {/* Columna de imágenes a la derecha */}
                    <div className="image-column">
                        <img src={raimundoPhoto} alt="Raimundo del Rio Fotógrafo Sur de Chile" className="image" />
                        <img src={sheepPhoto} alt="Oveja Chiloé Chile" className="image" />
                    </div>
                </div>
            </main>
            <Footer />
        </section>
    );
};
