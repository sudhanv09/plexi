import defaultTheme from 'tailwindcss/defaultTheme'


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'DM Sans', ...defaultTheme.fontFamily.sans],
			},
		},
		colors: {
			'off-white': "hsl(36, 100%, 99%)",
			'grayish-blue': "hsl(233, 8%, 79%)",
			'dark-grayish-blue': "hsl(236, 13%, 42%)",
			'dark-blue': "hsl(240, 100%, 5%)",
			'soft-orange': "hsl(35, 77%, 62%)",
			'soft-red': "hsl(5, 85%, 63%)",
			'purple-100': 'hsl(254, 88%, 90%)',
			'purple-500': 'hsl(256, 67%, 59%)',
			'yellow-100': 'hsl(31, 66%, 93%)',
			'yellow-500': 'hsl(39, 100%, 71%)',
			'grey-100': '#F2F2F2',
			'white': "hsl(180, 0%, 100%)"
		}
	},
	plugins: [],
}
