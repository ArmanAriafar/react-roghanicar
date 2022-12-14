//? Required
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../../providers/CartProvider";

//? Icons
import { FaHome } from "react-icons/fa";
import { RiOilFill } from "react-icons/ri";
import { MdOutlineEventNote } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";

//? Component
const Navigation = () => {
    const { cart } = useCart();
    const router = useLocation();

    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        const screenResolution = () => {
            const screenWidth = window.screen.width;
            return screenWidth;
        };
        const screenWidth = screenResolution();
        setScreenWidth(screenWidth);
    }, []);

    //? Mobile
    if (screenWidth < 1024) {
        return (
            <nav
                className="
                    fixed bottom-0 left-0 right-0 z-50 grid h-16 grid-cols-4 items-center justify-items-center border-t-4
                    border-orange-500 bg-white font-sans text-sm font-extrabold text-slate-400"
            >
                <NavLink
                    to="/"
                    className={`flex flex-col items-center justify-center gap-y-[2px] ${
                        router.pathname === "/" && "font-black text-orange-500"
                    }`}
                >
                    <FaHome className={`text-2xl ${router.pathname === "/" ? "inline" : "hidden"}`} />
                    خانــــــه
                </NavLink>
                <NavLink
                    to="/products"
                    className={`flex flex-col items-center justify-center gap-y-[2px]${
                        router.pathname === "/products" && "font-black text-orange-500"
                    }`}
                >
                    <RiOilFill className={`text-2xl ${router.pathname === "/products" ? "inline" : "hidden"}`} />
                    محصولات
                </NavLink>
                <NavLink
                    to="/checkout"
                    className={`flex flex-col items-center justify-center ${
                        router.pathname === "/checkout" && "font-black text-orange-500"
                    }`}
                >
                    <MdOutlineEventNote
                        className={`text-[27px] ${router.pathname === "/checkout" ? "inline" : "hidden"}`}
                    />

                    <span className={router.pathname === "/checkout" ? null : "relative right-2"}>
                        فاکتور من
                        <span
                            className={`relative bottom-1 left-1 
                                    py-1 px-2 font-serif text-xs font-black ${
                                        router.pathname === "/checkout" ? "hidden" : "inline"
                                    }`}
                        >
                            {cart.length}
                        </span>
                    </span>
                </NavLink>
                <NavLink
                    to="/register"
                    className={`flex flex-col items-center justify-center gap-y-[2px] ${
                        (router.pathname === "/register" || router.pathname === "/login") &&
                        "font-black text-orange-500"
                    }`}
                >
                    <FiUserPlus
                        className={`relative left-1 text-[27px] ${
                            router.pathname === "/register" || router.pathname === "/login" ? "inline" : "hidden"
                        }`}
                    />
                    ثبت نام
                </NavLink>
            </nav>
        );
    } else {
        return (
            <nav
                className="
                    fixed top-0 left-0 right-0 z-50 m-auto grid h-16 w-full max-w-5xl grid-cols-2 grid-rows-1 items-center 
                    rounded-b-3xl border-b-4 border-orange-500 bg-white px-8 font-semibold text-slate-400 shadow-2xl"
            >
                <ul className="flex gap-x-20">
                    <li>
                        <NavLink
                            to="/"
                            className={`flex items-center gap-x-1 ${
                                router.pathname === "/" && "font-black text-orange-500"
                            }`}
                        >
                            <FaHome className="relative bottom-[2px] text-xl" />
                            خانــــــه
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products"
                            className={`flex items-center gap-x-1 ${
                                router.pathname === "/products" && "font-black text-orange-500"
                            }`}
                        >
                            <RiOilFill className="text-xl" />
                            محصولات
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/checkout"
                            className={`flex items-center gap-x-1 ${
                                router.pathname === "/checkout" && "font-black text-orange-500"
                            }`}
                        >
                            <MdOutlineEventNote className="text-xl" />
                            فاکتور من
                            <span
                                className="
                                    relative bottom-1 left-1 rounded-full border-2 border-white 
                                    bg-slate-100 py-1 px-2 font-serif text-xs font-black"
                            >
                                {cart.length}
                            </span>
                        </NavLink>
                    </li>
                </ul>
                <NavLink
                    to="/register"
                    className={`flex items-center gap-x-1 justify-self-end ${
                        (router.pathname === "/login" || router.pathname === "/register") &&
                        "font-black text-orange-500"
                    }`}
                >
                    <FiUserPlus className="relative bottom-[1px] text-[22px]" />
                    ورود
                </NavLink>
            </nav>
        );
    }
};
export default Navigation;
