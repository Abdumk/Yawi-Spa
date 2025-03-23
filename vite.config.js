import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Change this if deploying to a subpath (e.g., '/your-repo-name/')
});
