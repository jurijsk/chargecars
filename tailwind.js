module.exports = {
  mode: 'jit',
  purge: ["**/*.{js,html}"],
  darkMode: false,
  theme: {
    fontFamily: {
			body: ['Montserrat']
		},
    extend: {
      cursor: {
				'zoom-in': 'zoom-in',
				'zoom-out': 'zoom-out'
			}
    },
  },
  plugins: [],
}
