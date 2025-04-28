import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

// Convert the current module URL to a file path
const __filename = fileURLToPath(import.meta.url);

// Extract the directory name of the current file
const __dirname = dirname(__filename);

// Create a FlatCompat instance using the directory name
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Create the ESLint configuration array by extending Next.js and TypeScript configs
const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

export default eslintConfig;
