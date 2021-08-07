module.exports = {
	purge: [
		"./components/**/*.{vue,js}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				'prompt' : ["'Prompt'", 'sans-serif'],
				'roboto-mono': ["'Roboto Mono'", 'monospace']
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('daisyui'),
	],
	daisyui: {
		styled: true,
		themes: ["emerald"],
		rtl: false,
	  },
};
