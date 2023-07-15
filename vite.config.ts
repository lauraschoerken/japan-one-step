import react from '@vitejs/plugin-react'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), eslint()],
	resolve: {
		alias: {
			assets: path.resolve(dirname(fileURLToPath(import.meta.url)), './src/assets'),
			components: path.resolve(dirname(fileURLToPath(import.meta.url)), './src/components'),
			constants: path.resolve(dirname(fileURLToPath(import.meta.url)), './src/constants'),
			hooks: path.resolve(dirname(fileURLToPath(import.meta.url)), './src/hooks'),
			models: path.resolve(dirname(fileURLToPath(import.meta.url)), './src/models'),
			services: path.resolve(dirname(fileURLToPath(import.meta.url)), './src/services'),
			utils: path.resolve(dirname(fileURLToPath(import.meta.url)), './src/utils'),
			stores: path.resolve(dirname(fileURLToPath(import.meta.url)), './src/stores'),
			mock: path.resolve(dirname(fileURLToPath(import.meta.url)), './src/mock'),
		},
	},
})
