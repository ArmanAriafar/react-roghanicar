//? Required
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";

//? Components
import FormLogin from "./FormLogin";

//? Component
const LoginPage = () => {
    return (
        <>
            <MetaTags>
                <title>ورود به اکانت | روغنی کار | فروش انواع روغن و فیلتر خودرو</title>
            </MetaTags>

            <main
                className="
                flex min-h-screen flex-col items-center bg-gradient-to-tl
                from-[#FF4800] to-[#FE730D] lg:pt-20"
            >
                <div className="grid h-20 w-11/12 max-w-md grid-cols-[2fr_1fr_2fr] items-center justify-items-center text-white">
                    <Link to="/register" className="text-sm font-bold text-orange-100 underline underline-offset-2">
                        ثـــبت نام
                    </Link>
                    <Link to="/register" className="text-sm font-bold text-orange-200">
                        یا
                    </Link>
                    <div className="relative top-[3px] w-fit font-black text-white">
                        <h2>قبلا ثبت نام کردم</h2>
                        <div className="relative bottom-2 h-2 w-full bg-white bg-opacity-30" />
                    </div>
                </div>
                <FormLogin />
            </main>
        </>
    );
};
export default LoginPage;
