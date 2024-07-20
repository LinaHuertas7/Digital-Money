import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import SelectCardItemComponent from './SelectCardItemComponent'
import { SelectCardComponentProps } from '@/interfaces'

const SelectCardComponent = ({
	cardsData,
	onNext,
	onCardSelect,
	isCardSelected,
}: SelectCardComponentProps) => {
	return (
		<div className="bg-custom-dark-gray px-5 md:px-10 pt-4 pb-4 md:pb-10 flex flex-col w-full rounded-xl shadow-md mb-5 text-custom-green">
			<div className="my-5 text-2xl">Seleccionar tarjeta</div>
			<div className="bg-white px-5 md:px-16 py-3 md:py-6 flex flex-col w-full rounded-xl shadow-md mb-5 text-custom-green">
				<div className="text-custom-dark-gray font-bold mb-3">Tus tarjetas</div>
				{cardsData &&
					cardsData.map((card, index) => (
						<SelectCardItemComponent
							onCardSelect={onCardSelect}
							key={card.id}
							card={card}
							style={`${
								index + 1 < cardsData.length ? 'border-b' : ''
							} border-black flex py-5 justify-between`}
						/>
					))}
			</div>
			<div className="flex flex-col md:flex-row justify-between mt-3">
				<Link href="/cards/add" className="flex">
					<FontAwesomeIcon
						className="my-auto text-custom-green p-1 border border-custom-green rounded-full"
						icon={faPlus}
					/>
					<div className="text-custom-green font-semibold my-auto mx-5 hover:underline">
						Nueva tarjeta
					</div>
				</Link>
				<button
					disabled={!isCardSelected}
					onClick={onNext}
					className={`rounded-lg ml-auto mt-6 md:ml-0 md:mt-0 py-4 px-3 text-sm font-bold text-black w-52 text-center bg-custom-green ${
						!isCardSelected &&
						'opacity-50 cursor-not-allowed bg-custom-light-gray'
					}`}
				>
					Continuar
				</button>
			</div>
		</div>
	)
}

export default SelectCardComponent
