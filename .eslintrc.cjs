module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'import'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	rules: {
		"import/default": "warn",
		"import/export": "error",
		"import/extensions": [
			"warn",
			"never",
			{
				"svelte": "always",
				"json": "always"
			}
		],
		"import/named": "warn",
		"import/namespace": [
			"warn",
			{
				"allowComputed": false
			}
		],
		"import/no-absolute-path": [
			"error",
			{
				"esmodule": true,
				"commonjs": true,
				"amd": true
			}
		],
		"import/no-cycle": [
			"error",
			{
				"ignoreExternal": true
			}
		],
		"import/no-deprecated": "warn",
		"import/no-duplicates": [
			"warn",
			{
				"considerQueryString": true
			}
		],
		"import/no-dynamic-require": "error",
		"import/no-extraneous-dependencies": [
			"warn",
			{
				"devDependencies": true,
				"optionalDependencies": true,
				"peerDependencies": true,
				"bundledDependencies": true
			}
		],
		"import/no-named-as-default": "warn",
		"import/no-named-as-default-member": "warn",
		"import/no-named-default": "warn",
		"import/no-self-import": "error",
		"import/no-unassigned-import": [
			"warn",
			{
				"allow": [
					"**/*.css",
					"**/*.scss"
				]
			}
		],
		"import/no-unresolved": [
			"warn",
			{
				"caseSensitive": true,
				"caseSensitiveStrict": true,
				"ignore": [
					"^\\$app/"
				]
			}
		],
		"import/no-useless-path-segments": [
			"warn",
			{
				"noUselessIndex": true
			}
		],
		"import/order": [
			"warn",
			{
				"groups": [
					"type",
					"builtin",
					"external",
					["parent", "sibling", "index", "internal"],
					"object"
				],
				"pathGroups": [
					{
						"pattern": "$app/**",
						"group": "external",
						"position": "before"
					},
					{
						"pattern": "**/*.svelte",
						"group": "internal",
						"position": "after"
					}
				],
				"alphabetize": {
					"order": "asc",
					"caseInsensitive": true
				},
				"warnOnUnassignedImports": false,
				"newlines-between": "never"
			}
		],
		"import/unambiguous": "warn",
	}
};
