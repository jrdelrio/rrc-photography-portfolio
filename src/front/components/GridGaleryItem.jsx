import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../store/appContext";
import { Link } from "react-router-dom";

export const GridGalleryItem = ({ gal, tag }) => {

    const { store } = useContext(AppContext);
    const [styledName, setStyledName] = useState('');

    const stylerObject = {
        valparaiso: store.language === 'es' ? "Valparaíso" : "Valparaiso",
        santiago: "Santiago",
        chiloe: store.language === 'es' ? "Chiloé" : "Chiloe",
        rapanui: store.language === 'es' ? "Rapa Nui" : "Easter Island",
        patagonia: "Patagonia",
        spain: store.language === 'es' ? "España" : "Spain",
        england: store.language === 'es' ? "Inglaterra" : "England",
        estambul: store.language === 'es' ? "Estambul" : "Istanbul",
        lisboa: store.language === 'es' ? "Lisboa" : "Lisbon",
        california: "California",
        portraits: store.language === 'es' ? "Retratos" : "Portraits",
        textures: store.language === 'es' ? "Texturas" : "Textures",
        mountines: store.language === 'es' ? "Montañas" : "Mountains",
        details_of_sea: store.language === 'es' ? "Detalles de la costa" : "Details of the Coast",
        protests: store.language === 'es' ? "Protestas" : "Protests"
    };

    useEffect(() => {
        setStyledName(stylerObject[gal.gallery_name])
    }, [gal.gallery_name, store.language])



    return (
        <div className={`grid-item`}>
            <img src={gal.cover_photo_url} alt="image" className="gallery-cover" />
            <h3 className="gallery-cover-title">
                {styledName}
            </h3>
            {/* <a href={`/gallery/${gal.gallery_name}`}>{tag}</a> */}
            <Link to={`/gallery/${gal.gallery_name}`}>{tag}</Link>
        </div>
    );
}