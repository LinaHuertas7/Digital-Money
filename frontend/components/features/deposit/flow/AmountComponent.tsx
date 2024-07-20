import React, { useState } from 'react'
import { AmountComponentProps } from '@/interfaces'

const AmountComponent = ({ onNext, updateAmount }: AmountComponentProps) => {
	const [inputValue, setInputValue] = useState('')

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

	const isInputValid = () => {
		const value = Number(inputValue)
		return !isNaN(value) && value > 0
	}

	const handleContinue = () => {
		updateAmount(Number(inputValue))
		onNext()
	}

	return (
		<div className="bg-custom-dark-gray px-5 md:px-10 py-5 md:py-7 flex flex-col w-full rounded-xl shadow-md mb-5">
			<div className="mb-7 mt-2 text-xl md:text-2xl text-custom-green">
				¿Cuánto querés ingresar a la cuenta?
			</div>
			<input
				value={inputValue}
				onChange={handleInputChange}
				className="rounded-lg py-4 px-4 w-full md:w-80 text-custom-dark-gray"
				placeholder="$0"
			/>
			<button
				disabled={!isInputValid()}
				onClick={handleContinue}
				className={`rounded-lg py-4 px-3 text-sm font-bold  text-black w-52 text-center ml-auto mt-9 ${
					!isInputValid()
						? 'opacity-50 cursor-not-allowed bg-custom-light-gray'
						: 'bg-custom-green'
				}`}
			>
				Continuar
			</button>
		</div>
	)
}

export default AmountComponent
