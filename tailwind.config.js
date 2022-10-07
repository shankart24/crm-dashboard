/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				...defaultTheme.colors,
				primary: {
					light: "#1a6bd9",
					dark: "#0144a0",
				},
			},
		},
	},
	plugins: [],
};
