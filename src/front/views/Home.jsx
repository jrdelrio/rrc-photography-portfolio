import React, { useEffect } from "react";
import HomeCarousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import { MainLogoVectorWhite } from "../components/MainLogoVectorWhite";
import { SectionGalleries } from "../components/SectionGaleries";
import { Footer } from "../components/Footer";
import { LanguageToggler } from "../components/LanguageToggler";


const Home = () => {

 

    return (
        <>
            <header>
                <MainLogoVectorWhite />
                <Navbar />
                <LanguageToggler />
                <HomeCarousel />
            </header>
            <main>
                <SectionGalleries />
            </main>
            <Footer />
        </>
    )
};

export default Home;