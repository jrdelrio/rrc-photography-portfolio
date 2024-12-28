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
        fetch(`${apiBaseUrl}/galleries`)
            .then((response) => response.json())
            .then((result) => setGalleries(result))
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