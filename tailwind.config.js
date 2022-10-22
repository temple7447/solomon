/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        screens: {
            ss: "411px",
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px"
        },
        extend: {
            colors: {
                white: "#fff"
            }
        },
    },
    plugins: [],
}