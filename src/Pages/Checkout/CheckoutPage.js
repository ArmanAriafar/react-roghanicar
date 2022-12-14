//? Required
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { useNavigate } from "react-router-dom";
import { useCart, useCartActions } from "../../providers/CartProvider";

//? Icons
import { RiOilLine } from "react-icons/ri";
import { BiMessageSquareAdd, BiMessageSquareMinus } from "react-icons/bi";

//! Images
import ErrorLogo from "../../Assets/images/SadOil.png";

//? JSX
export default function CheckoutPage() {
    const router = useNavigate();
    const dispatch = useCartActions();

    //? If/else any item added to cart
    const { cart } = useCart();
    const { total } = useCart();

    const incHandler = (cartItem) => {
        dispatch({ type: "INCREMENT", payload: cartItem });
    };

    const decHandler = (cartItem) => {
        dispatch({ type: "DECREMENT", payload: cartItem });
    };

    const cartList = cart.map((product, key) => {
        const totalPrice = product.price * product.quantity;
        return (
            <div
                className="
                grid w-full grid-cols-[2.2fr_.8fr_1fr_1fr] items-center justify-items-center
                border-b-2 border-dotted border-black border-opacity-75 py-6 text-sm lg:text-base"
                key={key}
            >
                <h1 className="justify-self-start pr-4 font-sans font-extrabold">{product.name}</h1>
                <div className="grid grid-cols-3 items-center justify-items-center gap-x-2">
                    <button onClick={() => incHandler(product)}>
                        <BiMessageSquareAdd className="rounded-md bg-orange-500 bg-opacity-20 text-xl text-orange-500" />
                    </button>
                    <h1>{product.quantity}</h1>
                    <button onClick={() => decHandler(product)}>
                        <BiMessageSquareMinus className="rotate-180 rounded-md bg-orange-500 bg-opacity-20 text-xl text-orange-500" />
                    </button>
                </div>
                <h1>{product.price.toLocaleString()}</h1>
                <h1>{totalPrice.toLocaleString()}</h1>
            </div>
        );
    });

    if (cart.length <= 0) {
        return (
            <>
                <MetaTags>
                    <title>???????????? ???? | ???????????????? ?????????????????? ???????? ??????????!</title>
                </MetaTags>
                <main className="flex min-h-screen flex-col items-center justify-center gap-y-6">
                    <img
                        src={ErrorLogo}
                        alt="404Page"
                        title="??????????????? ???? ?????????? ???? ?????????? ???????? ??????"
                        className="h-[225px] w-[160px]"
                    />
                    <div className="flex w-full max-w-xs flex-col items-center justify-center gap-y-6 font-sans font-extrabold">
                        <p className="text-slate-500">???????????????? ?????????????????? ???????? ??????????!</p>
                        <button
                            onClick={() => router("/products")}
                            className="
                            gradientMobile flex w-full items-center justify-center gap-x-1 rounded-md py-2.5 
                            font-extrabold text-white shadow-2xl shadow-orange-400 duration-200 hover:translate-y-1 hover:shadow-none"
                        >
                            <RiOilLine className="text-2xl" />
                            ???????????? ??????????????
                        </button>
                    </div>
                </main>
            </>
        );
    }
    return (
        <>
            <MetaTags>
                <title>???????????? ???? | ??????????(????) ???? ???????????? ???? ???????????? ?????????? ??????????</title>
            </MetaTags>
            <main
                className="
                m-auto flex min-h-screen w-full max-w-xs flex-col
                items-center justify-start py-4 pt-8 lg:max-w-5xl lg:p-0 lg:pt-28"
            >
                <div className="w-fil self-start">
                    <h1 className="text-xl font-thin text-orange-500 lg:text-2xl">???????????? ????????:</h1>
                    <div className="relative bottom-[10px] h-2 w-full bg-orange-500 bg-opacity-30" />
                </div>
                <div className="mt-6 w-full max-w-xs overflow-auto lg:max-w-5xl">
                    <div className="w-fit rounded-lg border-2 border-black">
                        <div
                            className="
                            grid w-[720px] grid-cols-[2.2fr_.8fr_1fr_1fr] items-center justify-items-center rounded-t-xl border-b-2 
                            border-black py-4 text-base font-black lg:w-[1018px] lg:text-lg"
                        >
                            <h6>?????? ????????</h6>
                            <h6>??????????</h6>
                            <h6>???????? ????????</h6>
                            <h6>???????? ????</h6>
                        </div>
                        <div className="min-h-[400px] w-[720px] rounded-b-lg lg:min-h-[500px] lg:w-[1018px]">
                            <div className="font-serif font-extrabold">
                                {cartList}
                                <Link
                                    to="/products"
                                    className="mt-6 flex w-fit items-center justify-center gap-x-1 pr-4 text-sm text-orange-400 underline lg:text-base"
                                >
                                    <RiOilLine className="relative bottom-[1.5px] text-xl lg:text-2xl" />
                                    ???????????? ?????????? ??????????
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="
                    grid-rows-auto mt-6 grid w-full max-w-xs items-center justify-items-center 
                    gap-y-5 lg:max-w-md lg:grid-cols-2 lg:grid-rows-1"
                >
                    <p className="font-serif text-sm font-semibold lg:order-2">
                        ?????? ???? ????????????: <span className="text-base font-extrabold">{total.toLocaleString()}</span>
                        <span className="text-xs font-extrabold text-neutral-600">??????????</span>
                    </p>
                    <button
                        className="
                        gradientMobile w-full rounded-lg py-2.5 text-base font-extrabold text-white 
                        shadow-2xl shadow-orange-400 duration-200 hover:translate-y-[2px] hover:shadow-none lg:order-1"
                    >
                        ???????? ?? ??????????
                    </button>
                </div>
            </main>
        </>
    );
}
