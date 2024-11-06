import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Get the repository name from package.json or environment variable
const getBase = () => {
  if (process.env.GITHUB_REPOSITORY) {
    return `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`;
  }
  return '/';
};

export default defineConfig({
  plugins: [react()],
  base: getBase(),
});