import "../styles/section-galleries.css";
import { GridGalleryItem } from "./GridGaleryItem";
import React, { useEffect, useState } from "react";

export const SectionGalleries = () => {

    const [galleries, setGalleries] = useState([]);
    // const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const apiBaseUrl = 'http://127.0.0.1:5000';

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

    return (
        <section className="galleries" id="section-galleries">
            {galleries.map((gal, index) => (
                <GridGalleryItem gal={gal} key={index} tag={galleryLink.es} />
            ))}
        </section>
    )
}