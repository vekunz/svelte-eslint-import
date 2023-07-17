# svelte-eslint-import

This project shows an error with the combination of svelte-eslint-parser and eslint-plugin-import.

Basically this is a default SvelteKit project (`npm create svelte`), which is extended just with the `eslint-plugin-import`
and a bunch of rules from it.

If you run `npm run lint` you will see the following error:

```
Error while parsing pathToRepo\svelte-eslint-import\node_modules\@neoconfetti\svelte\dist\index.js
Line 1, column 14: Unexpected token
`parseForESLint` from parser `pathToRepo\svelte-eslint-import\node_modules\svelte-eslint-parser\lib\index.js` is invalid and will just be ignored
```

In addition, every `.svelte` file has this ESLint finding:

````
  1:1  warning  This module could be parsed as a valid script  import/unambiguous
````
