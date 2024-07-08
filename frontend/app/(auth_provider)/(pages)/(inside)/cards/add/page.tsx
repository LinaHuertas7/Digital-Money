'use client'
import InputField from '@/components/ui/InputField'
import MessageComponent from '@/components/ui/messages/ErrorMessage'
import useAccountCards from '@/hooks/useAccountCards'

const AddCardPage = () => {
	const {
		error,
		createNewCardData,
		handleInputChangeNewCardData,
		handleNumberInputChangeNewCardData,
		handleCreateNewCardSubmit,
		isFormValid,
	} = useAccountCards()

	return (
		<div className="flex flex-col justify-center items-center">
			{error && <MessageComponent message={error} type="error" />}
			<form
				className="bg-white rounded-xl py-6 md:py-10 px-5 md:px-16 w-full text-black shadow-md grid grid-cols-1 md:grid-cols-2 md:gap-x-14 gap-y-4 md:gap-y-8 mb-5"
				onSubmit={(e) => handleCreateNewCardSubmit(e, 16)}
			>
				<InputField
					required
					name="cod"
					type="number"
					placeholder="Número de la tarjeta*"
					style={`border border-gray-300 rounded-lg shadow focus:border-custom-green ${
						error && 'border-red-700 border-2'
					} `}
					value={createNewCardData.cod}
					onChange={(e) => handleNumberInputChangeNewCardData(e)}
				/>
				<InputField
					required
					name="expiration_date"
					type="text"
					placeholder="Fecha de vencimiento*"
					style={`border border-gray-300 rounded-lg shadow focus:border-custom-green ${
						error && 'border-red-700 border-2'
					} `}
					value={createNewCardData.expiration_date}
					onChange={(e) => handleInputChangeNewCardData(e)}
				/>
				<InputField
					required
					name="first_last_name"
					type="text"
					placeholder="Nombre y apellido*"
					style={`border border-gray-300 rounded-lg shadow focus:border-custom-green ${
						error && 'border-red-700 border-2'
					} `}
					value={createNewCardData.first_last_name}
					onChange={(e) => handleInputChangeNewCardData(e)}
				/>
				<InputField
					required
					name="number_id"
					type="number"
					placeholder="Código de seguridad*"
					style={`border border-gray-300 rounded-lg shadow focus:border-custom-green ${
						error && 'border-red-700 border-2'
					} `}
					value={createNewCardData.number_id}
					onChange={(e) => handleNumberInputChangeNewCardData(e)}
				/>
				<button
					type="submit"
					className={`md:col-start-2 rounded-lg px-5 py-4 w-full text-sm font-bold ${
						isFormValid ? 'bg-custom-green' : 'bg-custom-light-gray'
					} text-black`}
				>
					Continuar
				</button>
			</form>
		</div>
	)
}

export default AddCardPage
