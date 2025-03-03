import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pulsar } from 'ldrs';
import "../styles/gallery.css";
import { SinglePhotoView } from "../views/SinglePhotoView";


const GallerySinglePhoto = ({ photo, index, str }) => {
    const [isLoading, setIsLoading] = useState()


    const handleImageLoad = () => {
        setIsLoading(false); // Cambia el estado cuando la imagen esté completamente cargada
    };

    pulsar.register();

    const buttonNoneStyle = {
        padding: 0,
        border: 0
    }

    return (
        <>
            <div key={index} className="masonry-item">
                {isLoading && (
                    <l-pulsar size="40" speed="1.75" color="#9e9e9e"></l-pulsar>
                )}

                <img
                    src={photo.photo_url}
                    alt={photo.alternative_text}
                    style={{ display: isLoading ? 'none' : 'block' }}
                    onLoad={handleImageLoad}
                />

            </div>
        </>
    )
};

export default GallerySinglePhoto;