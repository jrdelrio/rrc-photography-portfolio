import React, { useContext } from "react";
import { AppContext } from "../store/appContext";
import "../styles/quote-section.css";

export const QuoteSection = () => {

    const { store, actions } = useContext(AppContext);
    const textContent = {
        es: {
            quote: '"Me interesa la fotografía como una expresión simple y pura, rescatando las maravillas naturales, la emoción de un rostro o una realidad desconocida."',
        },
        en: {
            quote: '"I am interested in photography as a simple and pure expression, capturing natural wonders, the emotion of a face or an unknown reality."',
        }
    }

    const languageContent = textContent[store.language] || textContent.en;

    return (
        <section className="quote-section">
            <p className="quote-content just-another-hand-regular">
                {languageContent.quote}
            </p>
            <h3 className="author just-another-hand-regular">
                Raimundo del Rio Covarrubias
            </h3>
        </section>
    )
}