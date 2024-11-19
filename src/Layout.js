import Home from "./front/views/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import injectContext from "./front/store/appContext";
import { Contact } from "./front/views/Contact";
import { About } from "./front/views/About";
import { Gallery } from "./front/views/Gallery";
import { SinglePhotoView } from "./front/views/SinglePhotoView";
import { Footer } from "./front/components/Footer";
import { NotFound } from "./front/views/NotFound";
import Navbar from "./front/components/Navbar";

const App = () => {
    const basename = process.env.BASENAME || "";

    return (
        <BrowserRouter basename={basename}>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery/:str" element={<Gallery />} />
                <Route path="gallery/:str/single/:int" element={<SinglePhotoView />} />

                {/* error 404 */}
                <Route path='*' element={<NotFound />}/>
            </Routes>
            
        </BrowserRouter>
    );
};

export default injectContext(App);
