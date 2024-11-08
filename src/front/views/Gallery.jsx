import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MainLogoVectorWhite } from "../components/MainLogoVectorWhite";
import { SingleImageModal } from "../components/SingleImageModal";
import "../styles/gallery.css";
import { pulsar } from 'ldrs';
import { GallerySinglePhoto } from "../components/GallerySinglePhoto";

export const Gallery = () => {
    const { str } = useParams();
    const [styledName, setStyledName] = useState(str);

    const [galleryName, setGalleryName] = useState(undefined);
    const [galleryImages, setGalleryImages] = useState([]);
    const [galleryCoverUrl, setGalleryCoverUrl] = useState('')

    const apiBaseUrl = 'http://127.0.0.1:5000';

    useEffect(() => {
        fetch(`${apiBaseUrl}/photos_from_${str}`)
            .then((response) => response.json())
            .then((result) => {
                setGalleryImages(result.gallery_photos)
                setGalleryCoverUrl(result.cover_photo);
            })
            .catch((error) => console.error("Error fetching galleries:", error));
    }, [apiBaseUrl]);

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

    pulsar.register()

    return (
        <>
            <SingleImageModal />
            <section id="galleryView">
                <header style={{ backgroundImage: `url(${galleryCoverUrl})` }}>
                    <Link to="/"><MainLogoVectorWhite /></Link>
                    <h1 className="palanquin-dark-bold">Gallery: {styledName}</h1>
                </header>
                <main>
                    <div className="masonry">
                        {galleryImages ? (galleryImages.map((photo, index) => (
                            <GallerySinglePhoto index={index} photo={photo} str={str} />
                        ))
                        ) : (
                            <l-pulsar
                                size="40"
                                speed="1.75"
                                color="black"
                            ></l-pulsar>
                        )}
                    </div>
                </main>
            </section>
        </>
    );
};
