import React, { useState, useContext } from "react";
import { AppContext } from "../store/appContext";
import { Link } from "react-router-dom";
import "../styles/contact.css";
import "../styles/fonts.css";
import { IconBackArrow } from "../components/IconBackArrow";
import { MainLogoVectorWhite } from "../components/MainLogoVectorWhite";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";


import emailjs from "emailjs-com";

export const Contact = () => {

    const { store } = useContext(AppContext);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (event) => {
        const { key, value } = event.target;
        setFormData({ ...formData, [key]: value });
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
        const SERVICE_ID = "service_eknlyzc";
        const TEMPLATE_ID = "template_vnn45sc";
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

        const TEMPLATE_CONFIRM_ID = "template_bxnur57";

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
            parag1: '¿Are you interested in photography and you want to know about my technics? ¿Do you want to buy a picture for personal or prefessional use?',
            parag2: "Contact me and I'll love to help you with your needs."
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
            parag1: '¿Te interesa la fotografía y te gustaría conocer más sobre mis técnicas? ¿Quieres comprar una foto para uso personal o profesional?',
            parag2: 'Ponte en contacto conmigo y estaré encantado de ayudarte en lo que necesites.',
        }
    }

    const languageContent = textContent[store.language] || textContent.en;

    return (
        <section id="section-contact">
            <Navbar />
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
                                type="text"
                                name="name"
                                placeholder={languageContent.namePlaceholder}
                                value={formData.name}
                                required />
                        </div>

                        <div className="form-field">
                            <label htmlFor="name">{languageContent.email}*</label>
                            <input
                                type="email"
                                name="email"
                                placeholder={languageContent.emailPlaceholder}
                                value={formData.email}
                                required />
                        </div>

                        <div className="form-field">
                            <label htmlFor="name">{languageContent.phone}*</label>
                            <input
                                type="phone"
                                name="number"
                                placeholder={languageContent.phonePlaceholder}
                                value={formData.phone}
                                required />
                        </div>

                        <div className="form-field">
                            <label htmlFor="name">{languageContent.message}*</label>
                            <textarea
                                name="message"
                                placeholder={languageContent.messagePlaceholder}
                                value={formData.message}
                                required>
                            </textarea>
                        </div>

                        <button type="submit">{languageContent.button}</button>

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