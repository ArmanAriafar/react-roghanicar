//! Required
import { BrowserRouter } from "react-router-dom";

//! Comps
import RoutesPage from "./Routes/RoutesPage";
import Navigation from "../src/Pages/Layout/Navigation";
import Footer from "./Pages/Layout/Footer";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navigation />
                <RoutesPage />
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default App;
