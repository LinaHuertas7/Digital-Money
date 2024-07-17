import { Card } from '@/interfaces'
import React from 'react'

interface SelectCardItemComponentProps {
	card: Card
	style?: string
	onCardSelect: (card: Card) => void
}

const SelectCardItemComponent = ({
	card,
	style,
	onCardSelect,
}: SelectCardItemComponentProps) => {
	const inputId = `card-${card.id}`

	return (
		<div className={`${style}`}>
			<div className="flex">
				<label htmlFor={inputId} className="flex cursor-pointer">
					<div className="my-auto bg-custom-green rounded-full h-7 w-7"></div>
					<div className="my-auto mx-4 text-custom-dark-gray">
						{`Terminada en ${card.cod.toString().slice(-4)}`}
					</div>
				</label>
			</div>
			<div className="my-auto">
				<input
					type="radio"
					name="card"
					id={inputId}
					onChange={() => onCardSelect(card)}
				/>
			</div>
		</div>
	)
}
export default SelectCardItemComponent
