const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['"PT Sans"', 'sans-serif']
    },
		screens: {
			// breakpoints are min-width unless specified
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			smMax: { max: '640px' },
			mdMax: { max: '767px' },
		},
    extend: {
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },

      // styles obj for typography plugin to share styles btwn defaults & custom classes
			typographyStyles: ({ theme }) => ({
				a: {
					fontWeight: '600',
					textDecoration: 'none'
				},
				blockquote: {

				},
				button: {
          			borderRadius: '4px',
          			fontWeight: '600',
          			filter: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))',
				},
				h1: {
					fontSize: '3rem',
          			margin: '0px 0px 10px 0',
				},
				h2: {
					fontSize: '2rem',
					margin: '10px 0px 0px 0px',
				},
				h3: {
					fontSize: '1.5rem',
				},
				h4: {
					
				},
				h5: {
					
				},
				h6: {
				},
				li: {
					margin: '0',
				},
				p: {
					margin: '0',
				},
				figure: {
					margin: '0',
				},
				ul: {
					paddingLeft: '1rem',
					'&>li': {
						paddingLeft: '0'
					}
				}
			}),
			typography: ({ theme }) => ({
				// default typography plugin styles
				DEFAULT: {
					css: {
						a: { ...theme('typographyStyles.a') },
						button: { ...theme('typographyStyles.button') },
						blockquote: { ...theme('typographyStyles.blockquote') },
						figure: { ...theme('typographyStyles.figure') },
						h1: { ...theme('typographyStyles.h1') },
						h2: { ...theme('typographyStyles.h2') },
						h3: { ...theme('typographyStyles.h3') },
						h4: { ...theme('typographyStyles.h4') },
						h5: { ...theme('typographyStyles.h5') },
						h6: { ...theme('typographyStyles.h6') },
						li: { ...theme('typographyStyles.li') },
						p: { ...theme('typographyStyles.p') },
						ul: { ...theme('typographyStyles.ul') },
					},
				},
			}),

      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addComponents, theme, addVariant }) {
			addComponents({
				// custom classes to mirror defaults from typography plugin
				'.prose': {
					fontFamily: theme('fontFamily.sans')
				},
				'.prose-h1': { ...theme('typographyStyles.h1') },
				'.prose-h2': { ...theme('typographyStyles.h2') },
				'.prose-h3': { ...theme('typographyStyles.h3') },
				'.prose-h4': { ...theme('typographyStyles.h4') },
				'.prose-h5': { ...theme('typographyStyles.h5') },
				'.prose-h6': { ...theme('typographyStyles.h6') },
				// for accesibility of icon buttons
			})
		})
  ]
}
