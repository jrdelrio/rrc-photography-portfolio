import "../styles/section-galleries.css";
import { GridGalleryItem } from "./GridGaleryItem";
import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../store/appContext";

export const SectionGalleries = () => {

    const [galleries, setGalleries] = useState([]);
    // const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const apiBaseUrl = 'https://app.raimundodelrio.cl';

    const { store } = useContext(AppContext);

    useEffect(() => {
        const isMediumScreen = window.innerWidth > 500 && window.innerWidth <= 1000;

        fetch(`${apiBaseUrl}/galleries`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        })
            .then((response) => response.json())
            .then((result) => {
                if (!isMediumScreen) {
                    // Si la pantalla no es pequeña/mediana, agrega el objeto adicional
                    const updatedGalleries = [...result];
                    const lastGalleryId = updatedGalleries.length > 0
                        ? Math.max(...updatedGalleries.map(gal => gal.gallery_id))
                        : 0;

                    const extraObject = {
                        cover_photo_url: null,
                        gallery_id: lastGalleryId + 1,
                        gallery_name: "test"
                    };

                    updatedGalleries.push(extraObject);
                    setGalleries(updatedGalleries);
                } else {
                    // Si la pantalla es pequeña/mediana, solo establece las galerías normales
                    setGalleries(result);
                }
            })
            .catch((error) => console.error("Error fetching galleries:", error));
    }, [apiBaseUrl]);



    const galleryLink = {
        es: "Ver galería",
        en: "View gallery"
    }

    const languageContent = galleryLink[store.language] || galleryLink.en;

    return (
        <section className="galleries" id="section-galleries">
            {galleries.map((gal, index) => (
                <GridGalleryItem gal={gal} key={index} tag={languageContent} />
            ))}
        </section>
    )
}