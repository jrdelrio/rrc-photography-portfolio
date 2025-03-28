// import React, { useEffect, useState, Suspense, lazy, useContext } from "react";
import React, { useEffect, useState, lazy, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { MainLogoVectorWhite } from "../components/MainLogoVectorWhite";
import "../styles/gallery.css";
// import { pulsar } from 'ldrs';
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SinglePhotoView } from "./SinglePhotoView";
// import { SpinnerPulsar } from "../components/SpinnerPulsar";
// import { CloseButton } from "react-bootstrap";
import { LanguageToggler } from "../components/LanguageToggler.jsx";
import { AppContext } from '../store/appContext';

const GallerySinglePhoto = lazy(() => import('../components/GallerySinglePhoto.jsx'));

export const Gallery = () => {
    const { str } = useParams();
    const [styledName, setStyledName] = useState(str);
    const [galleryImages, setGalleryImages] = useState([]);
    const [galleryCoverUrl, setGalleryCoverUrl] = useState('')
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const { store, actions } = useContext(AppContext);


    const apiBaseUrl = 'https://chilisites.com/api/rrc-photography';
    console.log(`${apiBaseUrl}/photos_from_${str}`)

    useEffect(() => {
        fetch(`${apiBaseUrl}/photos_from_${str}`)
            .then((response) => response.json())
            .then((result) => {
                setGalleryImages(result.gallery_photos);
                setGalleryCoverUrl(result.cover_photo);
                console.log(result.gallery_photos);
            })
            .catch((error) => console.error("Error fetching galleries:", error));
    }, []);

    useEffect(() => {
        styler(str);
    }, [str, store.language]);

    const styler = (name) => {
        const names = {
            valparaiso: store.language === 'es' ? "Valparaíso" : "Valparaiso",
            santiago: "Santiago",
            chiloe: store.language === 'es' ? 'Chiloé' : "Chiloe",
            rapanui: store.language === 'es' ? 'Rapa Nui' : "Eastern Island",
            patagonia: "Patagonia",
            spain: store.language === 'es' ? 'España' : "Spain",
            england: store.language === 'es' ? 'Inglaterra' : "England",
            estambul: store.language === 'es' ? 'Estambul' : "Istambul",
            lisboa: store.language === 'es' ? 'Lisboa' : "Lisbon",
            california: "California",
            portraits: store.language === 'es' ? 'Retratos' : "Portraits",
            textures: store.language === 'es' ? 'Texturas' : "Textures",
            mountines: store.language === 'es' ? 'Montañas' : "Montains",
            details_of_sea: store.language === 'es' ? 'Detalles de la Costa' : "Details of the coast",
            protests: store.language === 'es' ? 'Protestas' : "Protests",
        };
        setStyledName(names[name] || name.charAt(0).toUpperCase() + name.slice(1));
    };

    const handleClick = (photo, index) => {
        setSelectedPhoto({ ...photo, index });
    };

    const closeModal = () => {
        setSelectedPhoto(null);
        actions.setShowLanguageToggler(true);
    };

    const textContent = {
        en: {
            titleView: 'Gallery'
        },
        es: {
            titleView: 'Galería'
        }
    }

    const languageContent = textContent[store.language] || textContent.en;

    return (
        <>
            <section id="galleryView">
                <Navbar />
                <LanguageToggler />
                <header style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${galleryCoverUrl})` }}>
                    <Link to="/"><MainLogoVectorWhite /></Link>
                    <h1 className="palanquin-dark-bold">{languageContent.titleView}: {styledName}</h1>
                </header>
                <main>

                    <div className="masonry">
                        {galleryImages.map((photo, index) => (
                            <div onClick={() => handleClick(photo, index)} key={index}>
                                {/* <Suspense fallback={<SpinnerPulsar color="#B7B7B7" />}> */}
                                <GallerySinglePhoto
                                    index={index}
                                    photo={photo}
                                    str={str}
                                    alternative_text={photo.alternative_text}
                                />
                                {/* </Suspense> */}
                            </div>
                        ))}
                    </div>
                </main>
            </section>

            {selectedPhoto && (
                <SinglePhotoView photo={selectedPhoto} closeModal={closeModal} photos={galleryImages} />
            )}
            <Footer />
        </>
    );
};
