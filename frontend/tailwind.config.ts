import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./layouts/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'main-landing': "url('/images/main-landing.png')",
				'main-landing-mobile': "url('/images/main-landing-mobile.jpg')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'custom-green': '#C1FD35',
				'custom-gray': '#3A393E',
				'custom-dark-gray': '#201F22',
				'custom-light-gray': '#CECECE',
				'custom-red': '#DA0000',
			},
			height: {
				'screen-minus-layout': 'calc(100vh - 8rem)',
			},
		},
	},
	plugins: [],
}
export default config
