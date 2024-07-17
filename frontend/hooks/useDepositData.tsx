import { useState } from 'react'
import axios from 'axios'
import endPoints from '@/constants/api'
import { Card } from '@/interfaces'
import { formattedDate } from '@/helper/formatDate'

const useDepositData = () => {
	const [selectedCard, setSelectedCard] = useState<Card>()
	const [amount, setAmount] = useState(0)
	const [isSuccess, setIsSuccess] = useState(false)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<String | null>(null)

	const selectCard = (card: Card) => {
		setSelectedCard(card)
	}

	const updateAmount = (newAmount: number) => {
		setAmount(newAmount)
	}

	const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newAmount = parseFloat(e.target.value)
		if (!isNaN(newAmount) && newAmount > 0) {
			updateAmount(newAmount)
		}
	}

	const submitDeposit = async (account_id: number) => {
		if (!selectedCard || amount <= 0) {
			setError('Invalid data')
			return
		}

		setLoading(true)
		setError(null)

		const depositData = {
			amount,
			date: formattedDate,
			destination: selectedCard.number_id.toString(),
			origin: selectedCard.cod.toString(),
		}

		console.log(depositData.date)
		try {
			const { data } = await axios.post(
				`${endPoints.DEPOSIT_URL}${account_id}/deposits`,
				depositData,
				{
					headers: {
						Authorization: localStorage.getItem('authToken'),
					},
				}
			)
			setLoading(false)
			setIsSuccess(true)
			console.log('data', data)
			return data
		} catch (error) {
			setLoading(false)
			setError('Failed to make a deposit')
		}
	}

	return {
		selectedCard,
		amount,
		loading,
		error,
		selectCard,
		updateAmount,
		submitDeposit,
		isSuccess,
		handleAmountChange,
	}
}

export default useDepositData
