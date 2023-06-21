import React, { ReactNode, HTMLAttributes } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type Props = {
	className?: string
	onClick?: () => void
	children: ReactNode
} & HTMLAttributes<HTMLHeadingElement>

type ParagraphProps = {
	className?: string
	onClick?: () => void
	children: ReactNode
} & HTMLAttributes<HTMLParagraphElement>

export function H1({ children, className }: Props) {
	return (
		<h1
			className={twMerge(clsx(['text-primary scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl']), className)}
		>
			{children}
		</h1>
	)
}

export function H2({ children, className }: Props) {
	return (
		<h2 className={twMerge(clsx(['text-primary scroll-m-20 text-3xl font-bold tracking-tight']), className)}>
			{children}
		</h2>
	)
}

export function H3({ children, className }: Props) {
	return (
		<h3 className={twMerge(clsx(['text-primary scroll-m-20 text-2xl font-semibold tracking-tight']), className)}>
			{children}
		</h3>
	)
}

export function H4({ children, className }: Props) {
	return (
		<h4 className={twMerge(clsx(['text-primary scroll-m-20 text-xl font-semibold tracking-tight']), className)}>
			{children}
		</h4>
	)
}

export function Paragraph({ children, className }: ParagraphProps) {
	return <p className={twMerge(clsx(['text-primary leading-7 [&:not(:first-child)]:mt-6']), className)}>{children}</p>
}

export function Blockquote({ children, className }: ParagraphProps) {
	return (
		<blockquote className={twMerge(clsx(['text-primary border-primary mt-6 border-l-2 pl-6 italic']), className)}>
			{children}
		</blockquote>
	)
}
