import React, { useEffect, useState, useContext } from "react";
import { CloseButton } from "react-bootstrap";
import { AppContext } from "../store/appContext";

import "../styles/modal-single-photo.css";

export const SinglePhotoView = ({ photo, photos, closeModal }) => {

    // const [currentPhoto, setCurrentPhoto] = useState(photo.photo_url);
    const [currentIndex, setCurrentIndex] = useState(photo.index);
    // const [openModal, setOpenModal] = useState(false);

    const { store, actions } = useContext(AppContext);
    const [isLandscape, setIsLandscape] = useState(
        window.innerWidth > window.innerHeight
    );

    useEffect(() => {
        actions.setShowLanguageToggler(false);

        // Agregar listener para cerrar con la tecla ESC
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                handleCloseModal();
            } else if (event.key === "ArrowLeft") {
                handlePrev(); // Navegar a la foto anterior
            } else if (event.key === "ArrowRight") {
                handleNext(); // Navegar a la siguiente foto
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        // Limpieza del evento cuando el componente se desmonta
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
            const handleResize = () => {
                const isLandscapeNow = window.innerWidth > window.innerHeight;
                setIsLandscape(isLandscapeNow);
            };
    
            handleResize();
    
            // Escuchar cambios en el tamaño de la ventana
            window.addEventListener("resize", handleResize);
    
            // Limpieza del evento al desmontar el componente
            return () => window.removeEventListener("resize", handleResize);
        }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
    };

    const handleCloseModal = () => {
        closeModal();
        actions.setShowLanguageToggler(true);
    }

    const buttonStyle = {
        position: "absolute",
        top: 20,
        right: 20,
        zIndex: 9999,
    }

    return (
        <dialog
            className="singlePhotoView"
            // open={openModal}
            open
        >
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner">
                    {photos.map((item, index) => (
                        <div className={`carousel-item ${index === currentIndex ? "active" : ""}`}
                            key={index}
                        >
                            <img src={item.photo_url} className="d-block" alt="..." style={isLandscape ? {height: "100vh"} : {width: "100vh"}} />
                        </div>
                    ))}
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    // data-bs-target="#carouselExampleFade" 
                    // data-bs-slide="prev"
                    onClick={handlePrev}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    // data-bs-target="#carouselExampleFade" 
                    // data-bs-slide="next"
                    onClick={handleNext}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <button className="parent-button" onClick={handleCloseModal} style={buttonStyle}>
                <CloseButton aria-label="Hide" size='lg' />
            </button>
        </dialog>
    )
}