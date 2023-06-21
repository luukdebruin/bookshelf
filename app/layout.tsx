import React from 'react'
import '../styles/global.css'
import localFont from 'next/font/local'

const font = localFont({
	src: [
		{
			path: '../public/fonts/brockmann-regular.woff2',
			weight: '400',
		},
		{
			path: '../public/fonts/brockmann-medium.woff2',
			weight: '500',
		},
		{
			path: '../public/fonts/brockmann-bold.woff2',
			weight: '700',
		},
	],
	variable: '--font-brockmann',
})

export const metadata = {
	title: 'Bookshelf',
	description: 'Manage and share your digital bookshelf',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${font.variable} font-sans`}>{children}</body>
		</html>
	)
}
