import React from "react";
import { Link } from "react-router-dom";
import "../styles/contact.css";
import "../styles/fonts.css";
import { IconBackArrow } from "../components/IconBackArrow";
import { MainLogoVectorWhite } from "../components/MainLogoVectorWhite";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";

export const Contact = () => {
    return (
        <section id="section-contact">
            <Navbar />
            <header>
                <Link to="/"><MainLogoVectorWhite /></Link>
                <h1 className="palanquin-dark-bold">Contacto</h1>
            </header>

            <main>
                <div className="contact-container">
                    <form>
                        <div className="form-field">
                            <label htmlFor="name">Nombre*</label>
                            <input type="text" name="name" placeholder="Nombre Completo" required></input>
                        </div>

                        <div className="form-field">
                            <label htmlFor="name">Email*</label>
                            <input type="email" name="email" placeholder="ejemplo@mail.com" required></input>
                        </div>

                        <div className="form-field">
                            <label htmlFor="name">Telefono*</label>
                            <input type="phone" name="phone" placeholder="Teléfono" required></input>
                        </div>

                        <div className="form-field">
                            <label htmlFor="name">Mensaje*</label>
                            <textarea name="message" id="" placeholder="Cuentame lo que quieras..." required></textarea>
                        </div>

                        <button type="submit">Enviar</button>

                    </form>
                    <div className="second-column">
                        <p className="urbanist-about-me-text">¿Te interesa la fotografía y te gustaría conocer más sobre mis técnicas? ¿Quieres comprar una foto para uso personal o profesional?</p>
                        <p className="urbanist-about-me-text">Ponte en contacto conmigo y estaré encantado de ayudarte en lo que necesites.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </section>
    )
}