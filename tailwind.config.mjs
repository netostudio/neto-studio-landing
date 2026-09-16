/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#09090b',
        paper: '#f4f4f5',
        muted: '#52525b',
        crimson: {
          DEFAULT: '#ff3131',
          600: '#ff3131',
          700: '#d81f1f',
        },
      },
      fontFamily: {
        sans: ['InterVariable', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
};
