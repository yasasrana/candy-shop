module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				Boodle: ['Boodle-Black']
			},
			screens: {
				sm: {min: '412px', max: '767px'},
				md: {min: '768px', max: '1023px'},
				lg: {min: '1024px', max: '1439px'},
				xl: {min: '1440px', max: '2559px'},
				'2xl': '2560px'
			},
			colors: {
				primary: '#0a2d6a',
				secondary: '#F4346C'
			}
		}
	},
	plugins: []
}
