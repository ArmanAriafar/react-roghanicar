//! Required
import { motion } from "framer-motion";
import MetaTags from "react-meta-tags";

//! Comps
import BrandsSection from "./BrandsSection";
import AboutUsSection from "./AboutUsSection";
import Dotted from "./Dotted";
import FilterSliderSection from "./FilterSliderSection";
import OilSliderSection from "./OilSliderSection";
import HomeHeaderSection from "./HomeHeaderSection";

//! Comp
const HomePage = () => {
    return (
        <>
            <motion.div
                key="homePage"
                initial="homeInitial"
                animate="homeAnimate"
                exit="homeExit"
                variants={{
                    homeInitial: {
                        opacity: 0,
                    },
                    homeAnimate: {
                        opacity: 1,
                        transition: {
                            duration: 0.5,
                        },
                    },
                }}
            >
                <MetaTags>
                    <title>روغنی کار | فروش انواع روغن و فیلتر خوردو</title>
                    <meta
                        name="description"
                        content="روغن موتور | روغن گیربکس | ضد یخ | روغن ترمز | روغن هیدرولیک | آب رادیاتور | فیلتر هوا | فیلتر روغن | فیلتر هوا کابین | فیلتر سوخت"
                    />
                </MetaTags>
                <HomeHeaderSection />
                <main>
                    <OilSliderSection />
                    <Dotted />
                    <FilterSliderSection />
                    <Dotted />
                    <BrandsSection />
                    <Dotted />
                    <AboutUsSection />
                </main>
            </motion.div>
        </>
    );
};
export default HomePage;
