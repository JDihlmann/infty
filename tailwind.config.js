module.exports = {
	purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				black: {
					DEFAULT: "#222222",
				},
				action: {
					DEFAULT: "#F85489",
				},
			},
			fontFamily: {
				redaction: ["Redaction", "ui-sans-serif", "system-ui"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
