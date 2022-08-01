//! Required
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

//! Components
import OilMobileSlider from "./Slider/OilMobileSlider";
import OilDesktopSlider from "./Slider/OilDesktopSlider";

//! Icons
import { RiOilFill } from "react-icons/ri";

//! Comp
const OilSliderSection = () => {
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
        const screenResolution = () => {
            const screenWidth = window.screen.width;
            return screenWidth;
        };
        const screenWidth = screenResolution();
        setScreenWidth(screenWidth);
    }, []);

    return (
        <section
            className="
                m-auto flex max-h-72 max-w-[280px] flex-col items-center justify-center
                lg:max-w-5xl"
        >
            <div className="flex items-center justify-center gap-x-1 lg:self-start">
                <span className="relative bottom-1 text-2xl text-orange-500 ">
                    <RiOilFill />
                </span>
                <div className="w-fit">
                    <h6 className="font-thin text-orange-500">پرفروشترین ها | روغــن</h6>
                    <div className="relative bottom-3 h-3 w-full bg-orange-500 opacity-20" />
                </div>
            </div>
            {screenWidth < 1024 ? <OilMobileSlider /> : <OilDesktopSlider />}
            <Link to="/products" className="m-auto mt-2 w-full text-left text-sm font-bold text-orange-500">
                مشاهده همه محصولات
            </Link>
        </section>
    );
};
export default OilSliderSection;
