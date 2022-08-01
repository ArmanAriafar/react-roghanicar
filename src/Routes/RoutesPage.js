//! Required
import { Routes, Route } from "react-router-dom";

//! Pages
import HomePage from "../Pages/HomePage/HomePage";
import ProductsPage from "../Pages/Products/ProductsPage";
import LoginPage from "../Pages/Login/LoginPage";
import RegisterPage from "../Pages/Register/RegisterPage";
import CheckoutPage from "../Pages/Checkout/CheckoutPage";

//! Routes
const toRoutes = [
    { path: "/", element: <HomePage /> },
    { path: "/products", element: <ProductsPage /> },
    { path: "/checkout", element: <CheckoutPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/login", element: <LoginPage /> },
];

//! Comp
const RoutesPage = () => {
    return (
        <Routes>
            {toRoutes.map((i, index) => {
                return <Route path={i.path} element={i.element} key={index} />;
            })}
        </Routes>
    );
};

export default RoutesPage;
