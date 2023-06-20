/** @type {import('tailwindcss').Config} */
const settingsScreens = require('./tailwind/settings.screens')
const settingsFontSizes = require('./tailwind/settings.fontsizes')

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
		screens: settingsScreens,
		fontSize: settingsFontSizes,
		container: {
			center: true,
			padding: '1rem',
			screens: {
				sm: '100%',
				lg: '1344px',
			},
		},
    extend: {
			fontFamily: {
				sans: ['var(--font-brockmann)']
			}
		},
  },
	plugins: [require('@tailwindcss/typography')],
}
