/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0b0c07',
          soft:    '#23241f',
          muted:   '#545451',
        },
        cloud: {
          50:  '#fbfbfa',
          100: '#f2f2f2',
          200: '#dadad9',
          300: '#b5b6b4',
          400: '#858583',
        },
        spray: {
          lightest: '#f3fdfd',
          lighter:  '#e7fbfc',
          light:    '#abf1f5',
          DEFAULT:  '#88ecf2',
          dark:     '#6cbcc1',
          darker:   '#365e60',
          darkest:  '#284648',
        },
        moss: {
          light:   '#a1f1bb',
          DEFAULT: '#7aeb9e',
          dark:    '#61bc7e',
          darker:  '#305e3f',
        },
        // Map "brand" so existing classes still resolve sensibly:
        // brand-600 = ink (used as primary button on light bg / section bg)
        brand: {
          50:  '#f3fdfd',
          100: '#abf1f5',
          200: '#abf1f5',
          300: '#88ecf2',
          400: '#88ecf2',
          500: '#6cbcc1',
          600: '#0b0c07',
          700: '#23241f',
          900: '#0b0c07',
        },
        // Remap slate to neutrals so existing slate-* classes get the brand neutrals
        slate: {
          50:  '#f2f2f2',
          100: '#dadad9',
          200: '#dadad9',
          300: '#b5b6b4',
          400: '#858583',
          500: '#858583',
          600: '#545451',
          700: '#23241f',
          800: '#0b0c07',
          900: '#0b0c07',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Sora', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'amp-sm': '24px',
        'amp-md': '32px',
        'amp-lg': '40px',
      },
    },
  },
  plugins: [],
};
