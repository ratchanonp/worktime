module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: "@babel/eslint-parser",
		requireConfigFile: false,
	},
	extends: ["@nuxtjs", "plugin:nuxt/recommended", "prettier"],
	plugins: [],
	// add your custom rules here
	rules: {
		"vue/attribute-hyphenation": "off",
		indent: ["error", "tab"],
		"linebreak-style": ["error", "windows"],
		semi: ["error", "always"],
		"no-console": "off",
	},
};
