//? Required
import { Link } from "react-router-dom";

export default function OilArticleSlider({ title, link }) {
    return (
        <Link to={`products/${link}`} className="w-full">
            <article
                className="
                        w-full rounded-md bg-slate-100 py-5 font-serif 
                        text-base font-extrabold text-slate-500 duration-200 hover:bg-orange-100 hover:text-orange-500"
            >
                <h1>{title}</h1>
            </article>
        </Link>
    );
}
