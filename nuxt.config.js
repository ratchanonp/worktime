export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		titleTemplate: "ระบบลงเวลาปฏิบัติราชการ | %s",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~plugins/vue-final-modal.js'
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		"@nuxtjs/eslint-module",
		"@nuxtjs/tailwindcss",
		"@nuxtjs/fontawesome",
		"@nuxtjs/apollo",
		'@nuxtjs/google-fonts',
		'@nuxtjs/moment',
	],

	googleFonts: {
		display: 'swap',
		families: {
			Prompt : true,
		}
	},

	fontawesome: {
		icons: {
			solid: [
				"faBriefcase",
				"faHistory",
				"faTachometerAlt",
				"faSignInAlt",
				"faSignOutAlt",
				"faChevronLeft",
				"faClipboardList",
				"faPortrait",
				"faUserShield",
				"faUsersCog",
				"faUserCircle",
				"faCalendarAlt",
				"faBan"
			],
		},
	},

	apollo: {
		clientConfigs: {
			default: {
				httpEndpoint: "http://localhost:4000/graphql",
			},
		},
	},

	moment: {
		defaultLocale: 'th',
		locales: ['th'],
		timezone: true
	  },

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ['vue-sweetalert2/nuxt'],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile: ['vue-final-modal']
	},
};
