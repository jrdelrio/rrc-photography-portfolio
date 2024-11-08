import React, { useState } from "react";
import { pulsar } from 'ldrs';
import "../styles/gallery.css";

export const GallerySinglePhoto = ({ photo, index, str }) => {

    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false); // Cambia el estado cuando la imagen esté completamente cargada
    };

    pulsar.register();

    return (
        <div key={index} className="masonry-item">
            {isLoading && (
                <l-pulsar size="40" speed="1.75" color="#9e9e9e"></l-pulsar>
            )}
            <img
                src={photo.photo_url}
                alt={`Image from ${str}`}
                style={{ display: isLoading ? 'none' : 'block' }}
                onLoad={handleImageLoad}
            />
        </div>
    )
}