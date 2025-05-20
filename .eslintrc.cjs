module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:vue/vue3-recommended', 'eslint:recommended'],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: 'espree',
		ecmaVersion: 2021,
		sourceType: 'module',
	},
	rules: {
		'no-unused-vars': 'warn',
		'vue/no-undef-properties': 'error',
		'vue/no-unused-properties': [
			'warn',
			{
				groups: ['props', 'data', 'computed', 'methods'],
			},
		],
		'vue/no-mutating-props': 'error',
		'vue/component-tags-order': [
			'error',
			{
				order: ['template', 'script', 'style'],
			},
		],
		'vue/order-in-components': 'warn',
		'vue/multi-word-component-names': 'off',
		'vue/html-self-closing': 'off',
		'vue/html-indent': 'off',
		'vue/singleline-html-element-content-newline': 'off',
		'vue/multiline-html-element-content-newline': 'off',
		'vue/max-attributes-per-line': 'off',
		'vue/first-attribute-linebreak': 'off',
		'vue/attributes-order': 'off',
	},
};
