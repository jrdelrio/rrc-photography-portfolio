import React, { useEffect, useState } from "react";

export const GridGalleryItem = ({ gal, tag }) => {
    
    const [styledName, setStyledName] = useState('');
    
    const stylerObject = {
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
        details_of_sea: "Detalles del Mar",
        protests: "Protestas"
    };

    useEffect(() => {
        setStyledName(stylerObject[gal.gallery_name])
    }, [styledName])

    console.log(gal.gallery_name)

    return (
        <div className={`grid-item`}>
            <img src={gal.cover_photo_url} alt="image" className="gallery-cover" />
            <h3 className="gallery-cover-title">
                {styledName}
            </h3>
            <a href={`/gallery/${gal.gallery_name}`}>{tag}</a>
        </div>
    );
}