// // @ts-check
// import eslint from '@eslint/js';
// import eslintPluginPrettier from 'eslint-plugin-prettier';
// import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
// import globals from 'globals';
// import tseslint from 'typescript-eslint';

// export default tseslint.config(
//   {
//     ignores: ['eslint.config.mjs', 'node_modules', 'dist'], // Bỏ qua file ESLint config và thư mục không cần thiết
//   },
//   eslint.configs.recommended,
//   ...tseslint.configs.recommendedTypeChecked,
//   eslintPluginPrettierRecommended,
//   {
//     languageOptions: {
//       globals: {
//         ...globals.node,
//         ...globals.jest,
//       },
//       ecmaVersion: 2020, // Hỗ trợ ES2020 thay vì ES5
//       sourceType: 'module',
//       parserOptions: {
//         projectService: true,
//         tsconfigRootDir: import.meta.dirname,
//       },
//     },
//   },
//   {
//     plugins: {
//       prettier: eslintPluginPrettier,
//     },
//     rules: {
//       '@typescript-eslint/no-explicit-any': 'off',
//       '@typescript-eslint/no-floating-promises': 'warn',
//       '@typescript-eslint/no-unsafe-argument': 'warn',
//       'prettier/prettier': 'off', // Tắt xung đột với Prettier
//     },
//   },
// );
