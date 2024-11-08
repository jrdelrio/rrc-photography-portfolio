import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useEffect } from 'react';
import "../styles/carousel.css";
// import { ShowGalleryButton } from './ShowGalleryButton';

const HomeCarousel = () => {

  const [carouselImages, setCarouselImages] = useState([]);
  const apiBaseUrl = 'http://127.0.0.1:5000';




  useEffect(() => {
    fetch(`${apiBaseUrl}/carrousel`)
      .then((response) => response.json())
      .then((result) => setCarouselImages(result))
      .catch((error) => console.error("Error fetching galleries:", error));
  }, [apiBaseUrl]);


  const styler = (name) => {
    const names = {
      valparaiso: "Valparaíso",
      santiago: "Santiago",
      chiloe: "Chiloé",
      rapa_nui: "Rapa Nui",
      patagonia: "Patagonia",
      spain: "España",
      england: "Inglaterra",
      estambul: "Estambul",
      lisbon: "Lisboa",
      california: "California",
      portraits: "Retratos",
      textures: "Texturas",
      mountains: "Montañas",
      details_of_sea: "Detalles del Mar",
      protests: "Protestas en Chile"
    };
    return names[name] || name.charAt(0).toUpperCase() + name.slice(1);
  };


  return (
    <Carousel data-bs-theme="dark" fade>
      {carouselImages.map((item, index) => (
        <Carousel.Item key={index}>
          <img src={item.photo_url} className="carousel-img" alt="" />
          <Carousel.Caption>

            <h3 className='palanquin-dark-bold'>{styler(item.gallery_name)}</h3>

          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HomeCarousel;