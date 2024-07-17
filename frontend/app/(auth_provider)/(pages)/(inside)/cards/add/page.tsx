'use client'
import InputFieldComponent from '@/components/ui/InputFieldComponent'
import MessageComponent from '@/components/ui/MessageComponent'
import useAccountCards from '@/hooks/useAccountCards'
import { useAuthContext } from '@/context/AuthContext'
import { useEffect } from 'react'
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import { formatExpiryDate } from '@/helper/formatDate'

const AddCardPage = () => {
	const {
		error,
		message,
		createNewCardData,
		handleInputChangeNewCardData,
		handleNumberInputChangeNewCardData,
		handleCreateNewCardSubmit,
		isFormValid,
		focused,
		handleInputFocus,
	} = useAccountCards()

	const { cards, fetchCards } = useAccountCards()
	const { isAuthenticated, accountData } = useAuthContext()

	useEffect(() => {
		if (accountData?.id) {
			fetchCards(accountData?.id)
		}
	}, [isAuthenticated])

	if (cards.length > 10) {
		return (
			<div className="flex flex-col justify-center items-center">
				<MessageComponent
					message="No puedes agregar más de 10 tarjetas a tu cuenta"
					type="error"
				/>
			</div>
		)
	}

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="w-4/5"></div>
			{message && <MessageComponent message={message} type="info" />}
			<form
				className="bg-white rounded-xl py-6 md:py-10 px-5 md:px-16 w-full text-black shadow-md grid grid-cols-1 md:grid-cols-2 md:gap-x-14 gap-y-4 md:gap-y-8 mb-5"
				onSubmit={(e) => handleCreateNewCardSubmit(e, 16)}
			>
				<div className="md:col-span-2">
					<Cards
						cvc={createNewCardData.number_id}
						expiry={formatExpiryDate(createNewCardData.expiration_date)}
						name={createNewCardData.first_last_name}
						number={createNewCardData.cod}
						focused={focused}
					/>
				</div>
				<InputFieldComponent
					required
					name="cod"
					type="number"
					placeholder="Número de la tarjeta*"
					style={`border border-gray-300 rounded-lg shadow focus:border-custom-green ${
						error && 'border-red-700 border-2'
					} `}
					onFocus={() => handleInputFocus('number')}
					value={createNewCardData.cod}
					onChange={(e) => handleNumberInputChangeNewCardData(e)}
				/>
				<InputFieldComponent
					required
					name="expiration_date"
					type="text"
					placeholder="Fecha de vencimiento*"
					style={`border border-gray-300 rounded-lg shadow focus:border-custom-green ${
						error && 'border-red-700 border-2'
					} `}
					onFocus={() => handleInputFocus('expiry')}
					value={createNewCardData.expiration_date}
					onChange={(e) => handleInputChangeNewCardData(e)}
				/>
				<InputFieldComponent
					required
					name="first_last_name"
					type="text"
					placeholder="Nombre y apellido*"
					style={`border border-gray-300 rounded-lg shadow focus:border-custom-green ${
						error && 'border-red-700 border-2'
					} `}
					onFocus={() => handleInputFocus('name')}
					value={createNewCardData.first_last_name}
					onChange={(e) => handleInputChangeNewCardData(e)}
				/>
				<InputFieldComponent
					required
					name="number_id"
					type="number"
					placeholder="Código de seguridad*"
					style={`border border-gray-300 rounded-lg shadow focus:border-custom-green ${
						error && 'border-red-700 border-2'
					} `}
					onFocus={() => handleInputFocus('cvc')}
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
