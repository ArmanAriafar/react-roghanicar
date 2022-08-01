//! Required
import { createRoot } from "react-dom/client";
//! Styles
import "./index.css";
import "./Font.css";

//! Comps
import App from "./App";

//! Provider
import CartProvider from "./providers/CartProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <CartProvider>
        <App />
    </CartProvider>
);
