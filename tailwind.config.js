module.exports = {
	content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
	theme: {
		extend: {}
	},
	plugins: [
		require('@tailwindcss/line-clamp')
	]
};
