import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useEffect } from 'react';
import "../styles/carousel.css";
import { pulsar } from 'ldrs';
// import { AppContext } from '../store/appContext';
// import { QuoteSection } from './SectionQuote';'
import { SpinnerPulsar } from "./SpinnerPulsar.jsx";

const HomeCarousel = () => {

  // const { store } = useContext(AppContext);
  // const [styledName, setStyledName] = useState('');

  const [carouselImages, setCarouselImages] = useState(undefined);

  const apiBaseUrl = 'https://app.raimundodelrio.cl';

  useEffect(() => {
    fetch(`${apiBaseUrl}/carrousel`)
      .then((response) => response.json())
      .then((result) => setCarouselImages(result))
      .catch((error) => console.error("Error fetching galleries:", error));
  }, [apiBaseUrl]);


  // const styler = (name) => {
  //   const names = {
  //     valparaiso: store.language === 'es' ? "Valparaíso" : "Valparaiso",
  //     santiago: "Santiago",
  //     chiloe: store.language === 'es' ? "Chiloé" : "Chiloe",
  //     rapanui: store.language === 'es' ? "Rapa Nui" : "Easter Island",
  //     patagonia: "Patagonia",
  //     spain: store.language === 'es' ? "España" : "Spain",
  //     england: store.language === 'es' ? "Inglaterra" : "England",
  //     estambul: store.language === 'es' ? "Estambul" : "Istanbul",
  //     lisboa: store.language === 'es' ? "Lisboa" : "Lisbon",
  //     california: "California",
  //     portraits: store.language === 'es' ? "Retratos" : "Portraits",
  //     textures: store.language === 'es' ? "Texturas" : "Textures",
  //     mountines: store.language === 'es' ? "Montañas" : "Mountains",
  //     details_of_sea: store.language === 'es' ? "Detalles del Mar" : "Details of the Sea",
  //     protests: store.language === 'es' ? "Protestas en Chile" : "Protests in Chile"
  //   };
  //   return names[name] || name.charAt(0).toUpperCase() + name.slice(1);
  // };

  // const textContent = {
  //   es: {
  //     quote: '"Me interesa la fotografía como una expresión simple y pura, rescatando las maravillas naturales, la emoción de un rostro o una realidad desconocida."',
  //   },
  //   en: {
  //     quote: '"I am interested in photography as a simple and pure expression, capturing natural wonders, the emotion of a face or an unknown reality."',
  //   }
  // }

  // const languageContent = textContent[store.language] || textContent.en;

  const noDataViewStyles = { 
    height: '100vh', 
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  {
    if (carouselImages) {
      return (
        <>
          <Carousel data-bs-theme="dark" fade>
            {carouselImages.map((item, index) => (
              <Carousel.Item key={index}>
                <img src={item.photo_url} className="carousel-img" alt="" />
              </Carousel.Item>
            ))}
          </Carousel>
        </>
      )
    }
    else {
      return (
        <div style={noDataViewStyles}>
          <SpinnerPulsar color={'#fff'} size={300}/>
        </div>
      )
    }
  }

}

export default HomeCarousel;