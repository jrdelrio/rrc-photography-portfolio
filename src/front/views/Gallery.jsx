import React, { useEffect, useState, Suspense, lazy } from "react";
import { Link, useParams } from "react-router-dom";
import { MainLogoVectorWhite } from "../components/MainLogoVectorWhite";
import "../styles/gallery.css";
import { pulsar } from 'ldrs';
// import { GallerySinglePhoto } from "../components/GallerySinglePhoto";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SinglePhotoView } from "./SinglePhotoView";
import { SpinnerPulsar } from "../components/SpinnerPulsar";
import { CloseButton } from "react-bootstrap";

const GallerySinglePhoto = lazy(() => import('../components/GallerySinglePhoto.jsx'));

export const Gallery = () => {
    const { str } = useParams();
    const [styledName, setStyledName] = useState(str);
    const [galleryImages, setGalleryImages] = useState([]);
    const [galleryCoverUrl, setGalleryCoverUrl] = useState('')
    const [selectedPhoto, setSelectedPhoto] = useState(null);


    const apiBaseUrl = 'http://127.0.0.1:5000';

    useEffect(() => {
        fetch(`${apiBaseUrl}/photos_from_${str}`)
            .then((response) => response.json())
            .then((result) => {
                setGalleryImages(result.gallery_photos)
                setGalleryCoverUrl(result.cover_photo);
            })
            .catch((error) => console.error("Error fetching galleries:", error));
    }, []);

    useEffect(() => {
        styler(str);
    }, [str]);

    const styler = (name) => {
        const names = {
            valparaiso: "Valparaíso",
            santiago: "Santiago",
            chiloe: "Chiloé",
            rapanui: "Rapa Nui",
            patagonia: "Patagonia",
            spain: "España",
            england: "Inglaterra",
            estambul: "Estambul",
            lisboa: "Lisboa",
            california: "California",
            portraits: "Retratos",
            textures: "Texturas",
            mountines: "Montañas",
            sea_details: "Detalles del Mar",
            protests: "Protestas"
        };
        setStyledName(names[name] || name.charAt(0).toUpperCase() + name.slice(1));
    };

    const handleClick = (photo) => {
        setSelectedPhoto(photo);
    };

    const closeModal = () => {
        setSelectedPhoto(null); // Limpia la foto seleccionada para cerrar la modal
    };

    return (
        <>
            <section id="galleryView">
                <Navbar />
                <header style={{ backgroundImage: `url(${galleryCoverUrl})` }}>
                    <Link to="/"><MainLogoVectorWhite /></Link>
                    <h1 className="palanquin-dark-bold">Gallery: {styledName}</h1>
                </header>
                <main>

                    <div className="masonry">
                        {galleryImages.map((photo, index) => (
                            <div onClick={() => handleClick(photo)} key={index}>
                                <Suspense fallback={<SpinnerPulsar color="#B7B7B7" />}>
                                    <GallerySinglePhoto
                                        index={index}
                                        photo={photo}
                                        str={str}
                                    />
                                </Suspense>
                            </div>
                        ))}
                    </div>
                </main>
            </section>

            {selectedPhoto && (
                <SinglePhotoView photo={selectedPhoto} closeModal={closeModal} />
            )}
            <Footer />
        </>
    );
};
