import React from 'react'
import './globals.css'
import localFont from 'next/font/local'

const font = localFont({
	src: '../public/fonts/brockmann-medium.woff',
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
