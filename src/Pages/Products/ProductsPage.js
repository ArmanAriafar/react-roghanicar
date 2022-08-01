//! Required
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

//! Components
import ProductsHeaderSection from "./ProductsHeaderSection";
import ProductListSection from "./ProductListSection";
import ProductMobileArticle from "./ProductMobileArticle";
import ProductDesktopArticle from "./ProductDesktopArticle";
import Data from "../../data/db";
//! JSX
const ProductPage = () => {
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        const screenResolution = () => {
            const screenWidth = window.screen.width;
            return screenWidth;
        };
        const screenWidth = screenResolution();
        setScreenWidth(screenWidth);
    }, []);

    const productListHandler = () => {
        const productList = Data.map((product, key) => {
            if (screenWidth < 1024) {
                return (
                    <Link to={`/products/${product.id}`} key={key}>
                        <ProductMobileArticle name={product.name} price={product.price} image={product.image} />
                    </Link>
                );
            } else {
                return (
                    <Link to={`/products/${product.id}`} key={key}>
                        <ProductDesktopArticle name={product.name} price={product.price} image={product.image} />
                    </Link>
                );
            }
        });
        return productList;
    };

    const productList = productListHandler();

    return (
        <>
            <MetaTags>
                <title>محصولات | فروش انواع روغن و فیلتر خوردو | روغنی‌کار</title>
                <meta
                    name="description"
                    content="لیست انواع محصولات روغن و فیلتر خودرو | سرکان - الف - پروفی کار - اسپیدی - موتوسل - توتال - موبیل - بهران - نفت پارس - کاسترول - ایرانول - کاسپین - ارو - تام - پرفلکس"
                />
            </MetaTags>
            <AnimatePresence>
                <motion.div
                    key="productsPage"
                    initial="productsInitial"
                    animate="productsAnimate"
                    exit="productsExit"
                    variants={{
                        productsInitial: {
                            opacity: 0,
                        },
                        productsAnimate: {
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                            },
                        },
                        productsExit: {
                            opacity: 0,
                            transition: {
                                duration: 0.5,
                            },
                        },
                    }}
                >
                    <ProductsHeaderSection />
                    <main>
                        <ProductListSection />
                        <section className="m-auto mb-8 grid max-w-[350px] grid-cols-2 items-center justify-items-center gap-y-4 lg:mt-8 lg:max-w-5xl lg:grid-cols-3">
                            {productList}
                        </section>
                    </main>
                </motion.div>
            </AnimatePresence>
        </>
    );
};
export default ProductPage;
