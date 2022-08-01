const AboutUsSection = () => {
    return (
        <section
            className="
                m-auto flex w-full max-w-xs flex-col items-center justify-center gap-y-2 px-4 
                pt-6 pb-8 lg:grid lg:max-w-5xl lg:grid-cols-3 lg:grid-rows-[1fr_3fr] lg:justify-items-center"
        >
            <div className="col-span-3 w-fit text-lg font-thin text-orange-500 lg:justify-self-start">
                <h5>روغنی‌کار چطوری کار میکنه؟</h5>
                <div className="relative bottom-3 h-2 w-full bg-orange-500 opacity-30" />
            </div>
            <div className="mt-4 self-start font-extrabold">
                <div>
                    <h5 className="text-slate-500">
                        <span className="text-sm text-orange-500">۱.</span> خرید و ثبت فاکتور
                    </h5>
                    <p className="mt-2 text-sm font-semibold text-gray-400">
                        مرحله ای که فاکتور شما برای ما ارسال میشه. محصول سفارش داده شده آماده و به پردازش سپرده میشه.
                    </p>
                </div>
            </div>
            <div className="mt-4 self-start font-extrabold">
                <div>
                    <h5 className="text-slate-500">
                        <span className="text-sm text-orange-500">۲.</span> پردازش سفارش و ارسال
                    </h5>
                    <p className="mt-2 text-sm font-semibold text-gray-400">
                        مرحله‌ای که کیفیت محصول بررسی میشه، تا به آدرس ثبت شده تو سایت ارسال بشه که برسه خدمتتون برای
                        مصرفتون.
                    </p>
                </div>
            </div>
            <div className="mt-4 self-start font-extrabold">
                <div>
                    <h5 className="text-slate-500">
                        <span className="text-sm text-orange-500">۳.</span> پشتیبانی محصول
                    </h5>
                    <p className="mt-2 text-sm font-semibold text-gray-400">
                        محصول رسیده و یه موضوعی نظرتون رو به خودش جلب کرده؟ کاری نداره که، ما هستیم تا شما رو راهنمایی و
                        پشتیبانی کنیم
                    </p>
                </div>
            </div>
        </section>
    );
};
export default AboutUsSection;
