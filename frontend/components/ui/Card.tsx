import React from 'react'

interface CardProps {
	title: string
	children: React.ReactNode
}

const Card = ({ title, children }: CardProps) => {
	return (
		<div className="bg-white rounded-3xl p-7 w-3/4 xl:w-1/3">
			<h2 className="text-black font-bold text-4xl">{title}</h2>
			<hr className="border-none h-0.5 bg-custom-green my-3" />
			{children}
		</div>
	)
}

export default Card
