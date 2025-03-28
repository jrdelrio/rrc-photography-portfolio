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

  const apiBaseUrl = 'https://chilisites.com/api/rrc-photography';

  useEffect(() => {
    fetch(`${apiBaseUrl}/carrousel`)
      .then((response) => response.json())
      .then((result) => setCarouselImages(result))
      .catch((error) => console.error("Error fetching galleries:", error));
  }, [apiBaseUrl]);


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
          <SpinnerPulsar color={'#fff'} size={300} />
        </div>
      )
    }
  }

}

export default HomeCarousel;