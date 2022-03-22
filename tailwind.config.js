module.exports = {
	content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'blue-transparent': {
					900: 'rgba(28,30,45,0.458)'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/line-clamp')]
};
