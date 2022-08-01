//? Required
import { Link } from "react-router-dom";

//? Icons
import { FaPhoneSquareAlt, FaWhatsappSquare, FaInstagramSquare } from "react-icons/fa";

//? JSX
const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center gap-y-4 bg-slate-200 py-4 pb-20 lg:pb-4">
            <div className="flex items-center justify-center gap-x-3 text-2xl text-slate-500">
                <Link to="/contact">
                    <FaPhoneSquareAlt />
                </Link>
                <a href="https://wa.me/0989108803727">
                    <FaWhatsappSquare />
                </a>
                <a href="https://instagram.com/roghanicar">
                    <FaInstagramSquare />
                </a>
            </div>
            <p className="text-xs font-bold text-slate-500">تمامی حقوق، توسط شرکت یدک پیشگام اطلس محفوظ شده است</p>
        </footer>
    );
};

export default Footer;
