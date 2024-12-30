import React, { Suspense, useEffect, useState } from "react";
import Home from "./front/views/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import injectContext from "./front/store/appContext";
import { Contact } from "./front/views/Contact";
import { About } from "./front/views/About";
import { Gallery } from "./front/views/Gallery";
import { SinglePhotoView } from "./front/views/SinglePhotoView";
import { NotFound } from "./front/views/NotFound";
import { SpinnerPulsar } from "./front/components/SpinnerPulsar";
// import { Footer } from "./front/components/Footer";
// import Navbar from "./front/components/Navbar";

const App = () => {
    const basename = process.env.BASENAME || "";
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

    const landscapeMessageStyles = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        color: "#ff3636",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.7rem",
        textAlign: "center",
    };

    console.log(isMobile)
    console.log(navigator.userAgent)

    return (
        <BrowserRouter basename={basename}>
            {/* {isLandscape && isMobile && (
                <div
                    style={landscapeMessageStyles}
                    className="palanquin-dark-bold"
                >
                    Porfavor, usa tu dispositivo en orientación vertical.
                </div>
            )} */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/gallery/:str"
                    element={
                        <Suspense fallback={<SpinnerPulsar />}>
                            <Gallery />
                        </Suspense>
                    }
                />
                <Route
                    path="gallery/:str/single/:int"
                    element={<SinglePhotoView />}
                />

                {/* error 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default injectContext(App);
