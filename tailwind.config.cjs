const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {
			colors: {
				dark: '#15083E',
				primary: '#8C72FF',
				secondary: '#291C52',
				info: '#6CD3FF'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif']
			}
		},
		screens: {
			'xss': '320px',
			'xsm': '375px',
			'xsl': '425px',
			...defaultTheme.screens,
		},
	},
	plugins: []
}
