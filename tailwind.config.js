/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#3a91ff',
                secondary: '#667eea',
                accent: '#3a91ff',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
