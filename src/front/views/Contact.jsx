import React, { useState, useContext } from "react";
import { AppContext } from "../store/appContext";
import { Link } from "react-router-dom";
import "../styles/contact.css";
import "../styles/fonts.css";
import { IconBackArrow } from "../components/IconBackArrow";
import { MainLogoVectorWhite } from "../components/MainLogoVectorWhite";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { LanguageToggler } from "../components/LanguageToggler";


import emailjs from "emailjs-com";

export const Contact = () => {

    const { store } = useContext(AppContext);

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

    const handleSubmit = (event) => {
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

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            from_phone: formData.phone,
            comment: formData.message,
        };

        // Enviar el formulario usando EmailJS
        const SERVICE_ID = "service_hufqh1q";
        const TEMPLATE_ID = "template_6x7jveu";
        const USER_ID = "-yxxv8md0PULJcOgX";

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
            (result) => {
                alert("¡Correo enviado correctamente! 👌");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                }); // Limpiar el formulario después del envío
            },
            (error) => {
                alert("Ocurrió un error al enviar el correo.");
            }
        );

        //email de confirmación
        const confirmationTemplateParams = {
            from_name: formData.name,
            from_email: formData.email,
        };

        const TEMPLATE_CONFIRM_ID = "template_1q1mrle";

        emailjs
            .send(
                SERVICE_ID,
                TEMPLATE_CONFIRM_ID,
                confirmationTemplateParams,
                USER_ID
            )
            .then(
                (result) => {
                    console.log(
                        "Correo de confirmación enviado correctamente!",
                        result.text
                    );
                },
                (error) => {
                    console.log(
                        "Error al enviar el correo de confirmación:",
                        error.text
                    );
                }
            );
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
            parag2: 'Todas mis fotos tiene derechos de autor.',
        }
    }

    const languageContent = textContent[store.language] || textContent.en;

    return (
        <section id="section-contact">
            <Navbar />
            <LanguageToggler />
            <header>
                <div className="header-header">
                    <Link to="/"><MainLogoVectorWhite /></Link>

                </div>
                <h1 className="palanquin-dark-bold">{languageContent.title}</h1>
            </header>

            <main>
                <div className="contact-container">
                    <form>
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
                            style={{display: "block"}}
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