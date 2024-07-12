import React from 'react'
import { CardProps } from '@/interfaces/index'

const Card = ({ title, children }: CardProps) => {
	return (
		<div className="bg-white rounded-3xl p-6 w-full md:w-3/4 md:mx-4 my-2">
			<h2 className="text-black font-bold text-2xl md:text-4xl">{title}</h2>
			<hr className="border-none h-0.5 bg-custom-green my-3" />
			{children}
		</div>
	)
}

export default Card
