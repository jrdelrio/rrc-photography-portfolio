import { Link } from "react-router-dom";
import "../styles/not-found.css";
import { MainLogoVectorWhite } from "../components/MainLogoVectorWhite";
import { Footer } from "../components/Footer";

export const NotFound = () => {
    return (
        <section id="not-found">
            <header>
                <Link to="/"><MainLogoVectorWhite /></Link>
                <h1 className="palanquin-dark-bold">🚫 Error 404</h1>
            </header>

            <main>
                <h1>Oops! You seem to be lost.</h1>
                <div className="links">
                    <Link to='/'>Galerías</Link>
                    <Link to='/about'>Sobre mí</Link>
                    <Link to='/contact'>Contacto</Link>
                </div>
                <div>

                </div>
            </main>
            <Footer />
        </section>

    )
}