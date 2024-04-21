/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            width: {
                "100vw-navbar": "calc(100vw - 250px)",
                "100vw-graph": "calc(100vw - 300px)",
            },
            animation: {
                fade: "fadeIn .5s ease-in-out",
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
            },
        },
    },
    plugins: [],
};
