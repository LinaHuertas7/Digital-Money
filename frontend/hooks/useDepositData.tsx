import { useState } from 'react'
import axios from 'axios'
import endPoints from '@/constants/api'
import { ApiError, Card, Deposit } from '@/interfaces'
import { useErrorHandlerApi } from './useErrorHandlerApi'

const useDepositData = () => {
	const { ErrorHandeler } = useErrorHandlerApi()
	const [selectedCard, setSelectedCard] = useState<Card>()
	const [deposit, setDeposit] = useState<Deposit>()
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
			date: new Date().toISOString(),
			destination: selectedCard.first_last_name,
			origin: selectedCard.cod.toString(),
		}
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
			setDeposit(data)
			return data
		} catch (error) {
			const errorResponse = error as ApiError
			setLoading(false)
			setError('Failed to make a deposit')
			ErrorHandeler(errorResponse)
		}
	}

	return {
		deposit,
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
