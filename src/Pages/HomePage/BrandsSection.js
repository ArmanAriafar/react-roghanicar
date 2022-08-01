//! Required
import { Link } from "react-router-dom";

//! Images
import Behran from "../../Assets/images/behran.png";
import Caspian from "../../Assets/images/caspian.png";
import Castrol from "../../Assets/images/castrol.png";
import Elf from "../../Assets/images/elf.png";
import Iranol from "../../Assets/images/iranol.png";
import Mobil from "../../Assets/images/mobil.png";
import Motosel from "../../Assets/images/motosel.png";
import Naft from "../../Assets/images/naftePars.png";
import Proficar from "../../Assets/images/profiCar.png";
import Serakn from "../../Assets/images/serkan.png";
import Speedy from "../../Assets/images/speedy.png";
import Total from "../../Assets/images/total.png";

//! JSX
const BrandsContainer = () => {
    return (
        <section className="m-auto mt-6 mb-10 flex max-w-sm flex-col items-center justify-center lg:max-w-5xl">
            <div className="flex items-center justify-center text-orange-500 lg:self-start">
                <div className="w-fit">
                    <h6 className="text-lg font-thin text-orange-500">برندها و یا شرکت‌های سازنده</h6>
                    <div className="relative bottom-3 h-2 w-full bg-orange-500 opacity-30" />
                </div>
            </div>
            <div className="grid w-11/12 grid-cols-2 items-center justify-items-center gap-y-4 lg:w-full lg:grid-cols-6">
                <Link to="/products">
                    <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                        <img src={Behran} alt="behran | بهران" title="بهران" style={{ width: 125, height: 125 }} />
                    </article>
                </Link>
                <Link to="/products">
                    <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                        <img src={Caspian} alt="Caspian | کاسپین" title="کاسپین" style={{ width: 125, height: 73 }} />
                    </article>
                </Link>
                <Link to="/products">
                    <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                        <img src={Castrol} alt="Castrol | کاسترول" title="کاسترول" style={{ width: 125, height: 42 }} />
                    </article>
                </Link>
                <Link to="/products">
                    <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                        <img src={Elf} alt="Elf | الف" title="الف" style={{ width: 114, height: 58 }} />
                    </article>
                </Link>
                <Link to="/products">
                    <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                        <img src={Iranol} alt="Iranol | ایرانول" title="ایرانول" style={{ width: 123, height: 62 }} />
                    </article>
                </Link>
                <Link to="/products">
                    <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                        <img src={Mobil} alt="mobil | موبیل" title="موبیل" style={{ width: 121, height: 50 }} />
                    </article>
                </Link>
                <Link to="/products">
                    <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                        <img src={Motosel} alt="Motosel | موتوسل" title="موتوسل" style={{ width: 128, height: 58 }} />
                    </article>
                </Link>
                <Link to="/products">
                    <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                        <img
                            src={Naft}
                            alt="NaftePars | نفته پارس"
                            title="نفت پارس"
                            style={{ width: 107, height: 103 }}
                        />
                    </article>
                </Link>
                <Link to="/products">
                    <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                        <img
                            src={Proficar}
                            alt="ProfiCar | پروفی کار"
                            title="پروفی کار"
                            style={{ width: 130, height: 68 }}
                        />
                    </article>
                </Link>
                <Link to="/products">
                    <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                        <img src={Serakn} alt="Serkan | سرکان" title="سرکان" style={{ width: 107, height: 107 }} />
                    </article>
                </Link>
                <Link to="/products">
                    <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                        <img src={Speedy} alt="Speedy | اسپیدی" title="اپسیدی" style={{ width: 112, height: 47 }} />
                    </article>
                </Link>
                <Link to="/products">
                    <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                        <img src={Total} alt="Total | توتال" title="توتال" style={{ width: 113, height: 113 }} />
                    </article>
                </Link>
            </div>
        </section>
    );
};

export default BrandsContainer;
