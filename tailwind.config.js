/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.js"],
    theme: {
        fontFamily: {
            sans: "IRANYekan",
            serif: "IRANYekanFaNum",
        },
        extend: {
            backgroundImage: {
                brandsBg: "url('/images/brands.png')",
            },
        },
    },
    plugins: [],
};
