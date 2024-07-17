import React, { useState } from 'react'
import { AmountComponentProps } from '@/interfaces'

const AmountComponent = ({ onNext, updateAmount }: AmountComponentProps) => {
	const [inputValue, setInputValue] = useState('')

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

	const isInputValid = () => {
		const value = parseFloat(inputValue)
		return !isNaN(value) && value > 0
	}

	const handleContinue = () => {
		updateAmount(parseFloat(inputValue))
		onNext()
	}

	return (
		<div className="bg-custom-dark-gray px-10 py-5 md:py-7 flex flex-col w-full rounded-xl shadow-md mb-5">
			<div className="mb-7 mt-2 text-xl text-custom-green font-semibold">
				¿Cuánto querés ingresar a la cuenta?
			</div>
			<input
				value={inputValue}
				onChange={handleInputChange}
				className="rounded-lg py-4 px-4 w-80 text-custom-dark-gray"
				placeholder="$0"
			/>
			<button
				disabled={!isInputValid()}
				onClick={handleContinue}
				className={`rounded-lg py-4 px-3 text-sm font-bold ${
					!isInputValid() ? 'bg-gray-400' : 'bg-custom-green'
				} text-black w-52 text-center ml-auto mt-9`}
			>
				Continuar
			</button>
		</div>
	)
}

export default AmountComponent
