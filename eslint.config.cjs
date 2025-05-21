const { defineConfig, globalIgnores } = require('eslint/config');

const globals = require('globals');
const parser = require('vue-eslint-parser');
const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

module.exports = defineConfig([
	{
		languageOptions: {
			globals: {
				...globals.browser,
			},

			parser: parser,
			ecmaVersion: 2021,
			sourceType: 'module',

			parserOptions: {
				parser: 'espree',
			},
		},

		extends: compat.extends('plugin:vue/vue3-recommended', 'eslint:recommended'),

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
			'vue/html-self-closing': [
				'warn',
				{
					html: {
						void: 'any',
						normal: 'any',
						component: 'always',
					},
					svg: 'always',
					math: 'always',
				},
			],
			'vue/order-in-components': 'warn',
			'vue/multi-word-component-names': 'off',
			'vue/html-indent': 'off',
			'vue/singleline-html-element-content-newline': 'off',
			'vue/multiline-html-element-content-newline': 'off',
			'vue/max-attributes-per-line': 'off',
			'vue/first-attribute-linebreak': 'off',
			'vue/attributes-order': 'off',
		},
	},
	globalIgnores([
		'**/node_modules',
		'**/dist',
		'**/eslint.config.cjs',
		'**/vite.config.js',
		'**/package.json',
		'**/package-lock.json',
	]),
]);
