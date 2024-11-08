import React from "react";
import HomeCarousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import { MainLogoVectorWhite } from "../components/MainLogoVectorWhite";
import { QuoteSection } from "../components/SectionQuote";
import { SectionGalleries } from "../components/SectionGaleries";
import { Footer } from "../components/Footer";


const Home = () => {
    return (
        <>
            <header>
                <Navbar />

                <MainLogoVectorWhite />
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