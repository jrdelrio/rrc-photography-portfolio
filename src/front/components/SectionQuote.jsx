import "../styles/quote-section.css";

export const QuoteSection = () => {

    const quoteContent = {
        es: '"Me interesa la fotografía como una expresión simple y pura, rescatando las maravillas naturales, la emoción de un rostro o una realidad desconocida."',
        en: '"The future belongs to those who believe in the beauty of their dreams."',
    }

    return (
        <section className="quote-section">
            <p className="quote-content">
                {quoteContent.es}
            </p>
            <h3 className="author">
                Raimundo del Rio Covarrubias
            </h3>
        </section>
    )
}