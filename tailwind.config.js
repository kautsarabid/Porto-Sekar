/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#003B33",
				secondary: "#CD9564",
				tertiary: "#F4D8C2",
			},
			fontFamily: {
				primary: ["Lato", "sans-serif"],
				display: ["Playfair Display", "serif"],
				excalibur: ["ExcaliburNouveau", "sans-serif"],
				evil: ["EvilEmpire", "sans-serif"],
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
