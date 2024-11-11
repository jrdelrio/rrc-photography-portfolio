import React from "react";
import HomeCarousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import { MainLogoVectorWhite } from "../components/MainLogoVectorWhite";
import { QuoteSection } from "../components/SectionQuote";
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
                {/* <Navbar /> */}
            </header>
            <main>
                <QuoteSection />
                <SectionGalleries />
                <Footer />
            </main>
        </>
    )
};

export default Home;