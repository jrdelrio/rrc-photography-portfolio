import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../store/appContext";
import { Link } from "react-router-dom";
import { MainLogoVectorWhite } from "../components/MainLogoVectorWhite";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { LanguageToggler } from "../components/LanguageToggler";

import "../styles/fonts.css";
import "../styles/contact.css";


import emailjs from "emailjs-com";

export const Contact = () => {

    const { store } = useContext(AppContext);

    const [isLandscape, setIsLandscape] = useState(
        window.innerWidth > window.innerHeight
    );
    const [isMobile, setIsMobile] = useState(false);

    const detectMobileDevice = () => {
        return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    };

    useEffect(() => {
        const handleResize = () => {
            const isLandscapeNow = window.innerWidth > window.innerHeight;
            setIsLandscape(isLandscapeNow);
        };

        setIsMobile(detectMobileDevice());
        handleResize();

        // Escuchar cambios en el tamaño de la ventana
        window.addEventListener("resize", handleResize);

        // Limpieza del evento al desmontar el componente
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [formData, setFormData] = useState(() => {
        // Intentar recuperar los datos del sessionStorage
        const savedData = sessionStorage.getItem("formContacto");
        return savedData ? JSON.parse(savedData) : { name: "", email: "", phone: "", message: "" };
    });

    const handleChange = (event) => {
        console.log(event.target);
        const { name, value } = event.target;
        const updatedFormData = { ...formData, [name]: value };
        setFormData(updatedFormData);
        sessionStorage.setItem('formContacto', JSON.stringify(updatedFormData));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validación de campos requeridos
        if (
            !formData.name ||
            !formData.email ||
            !formData.phone ||
            !formData.message
        ) {
            alert("Por favor, rellena todos los campos del formulario de contacto.");
            return; // Detiene la ejecución si faltan campos
        }

        // Validación de formato de Email
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            alert("Por favor, introduce un correo electrónico válido.");
            return;
        }

        // Validación de Teléfono (mínimo 7 dígitos)
        if (formData.phone.length < 7) {
            alert("Por favor, introduce un número de teléfono válido.");
            return;
        }

        const templateParams = {
            fromName: formData.name,
            fromEmail: formData.email,
            fromPhone: formData.phone,
            fromMessage: formData.message,
        };

        try {
            const [internResponse, thanksResponse] = await Promise.all([
                fetch('https://api.chilisites.com/api/rrc-photography/send-email-thanks-for-contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(templateParams),
                }),

                fetch('https://api.chilisites.com/api/rrc-photography/intern-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(templateParams),
                })
            ]);

            if (internResponse.ok && thanksResponse.ok) {
                alert(
                    "Mensaje enviado con éxito ✅. Revisa tu correo para confirmación."
                );
            } else {
                const internError = !internResponse.ok
                    ? "Error al notificar al equipo"
                    : "";
                const thanksError = !thanksResponse.ok
                    ? "Error al enviar correo de confirmación"
                    : "";
                alert(`Hubo un error: ${internError} ${thanksError} ❌`);
            }


        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            alert("Ocurrió un error al enviar el correo.");
        }

    };

    const textContent = {
        en: {
            title: 'Contact',
            name: 'Name',
            namePlaceholder: 'Full Name',
            email: 'Email',
            emailPlaceholder: 'example@email.com',
            phone: 'Phone',
            phonePlaceholder: 'Phone',
            message: 'Message',
            messagePlaceholder: 'Talk to me about something...',
            button: 'Send',
            parag1: "I'll be thankful for your contact for exchange experiences or if you want to buy authorized original pictures.",
            parag2: "All my pictures has copywrite."
        },
        es: {
            title: 'Contacto',
            name: 'Nombre',
            namePlaceholder: 'Nombre Completo',
            email: 'Correo',
            emailPlaceholder: 'ejemplo@email.com',
            phone: 'Teléfono',
            phonePlaceholder: 'Teléfono',
            message: 'Mensaje',
            messagePlaceholder: 'Cuéntame lo que quieras...',
            button: 'Enviar',
            parag1: 'Agradeceré tu contacto para intercambiar experiencias o si te interesa comprar copias autorizadas.',
            parag2: 'Todas mis fotos tienen derechos de autor.',
        }
    }

    const languageContent = textContent[store.language] || textContent.en;

    const landscapeStyles = {
        header: { height: "45vh" },
        logo: { top: 0 },
    }

    const portraitStyles = {
        height: "30vh",
    }

    return (
        <section id="section-contact">
            <Navbar />
            <LanguageToggler />
            <header style={isLandscape && isMobile ? landscapeStyles.header : portraitStyles}>
                <div className="header-header">
                    <Link to="/"><MainLogoVectorWhite styles={isLandscape && isMobile ? landscapeStyles.logo : {}} /></Link>
                    <h1 className="palanquin-dark-bold">{languageContent.title}</h1>
                </div>
            </header>

            <main>
                <div className="contact-container">
                    <form className="urbanist-about-me-text">
                        <div className="form-field">
                            <label htmlFor="name">{languageContent.name}*</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder={languageContent.namePlaceholder}
                                value={formData.name}
                                onChange={handleChange}
                                required />
                        </div>

                        <div className="form-field">
                            <label htmlFor="email">{languageContent.email}*</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder={languageContent.emailPlaceholder}
                                value={formData.email}
                                onChange={handleChange}
                                required />
                        </div>

                        <div className="form-field">
                            <label htmlFor="phone">{languageContent.phone}*</label>
                            <input
                                id="phone"
                                type="tel"
                                name="phone"
                                placeholder={languageContent.phonePlaceholder}
                                value={formData.phone}
                                onChange={handleChange}
                                required />
                        </div>

                        <div className="form-field">
                            <label htmlFor="message">{languageContent.message}*</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder={languageContent.messagePlaceholder}
                                value={formData.message}
                                onChange={handleChange}
                                required>
                            </textarea>
                        </div>

                        <input
                            type="submit"
                            className=""
                            value={languageContent.button}
                            onClick={handleSubmit}
                            style={{ display: "block" }}
                        />
                        {/* <button type="submit">{languageContent.button}</button> */}

                    </form>
                    <div className="second-column">
                        <p className="urbanist-about-me-text">{languageContent.parag1}</p>
                        <p className="urbanist-about-me-text">{languageContent.parag2}</p>
                    </div>
                </div>
            </main>
            <Footer />
        </section>
    )
}