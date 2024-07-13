'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ApiError, Card, CardDelete, NewCard } from '@/interfaces'
import endPoints from '@/constants/api'
import { Focused } from '@/types'

const InitialCardData: NewCard = {
	cod: '',
	expiration_date: '',
	first_last_name: '',
	number_id: '',
}

const useAccountCards = () => {
	const [cards, setCards] = useState<Card[]>([])
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)
	const [message, setMessage] = useState<string | null>(null)
	const [createNewCardData, setCreateNewCardData] =
		useState<NewCard>(InitialCardData)
	const [isFormValid, setIsFormValid] = useState(false)
	const [focused, setFocused] = useState<Focused>(undefined)

	useEffect(() => {
		const allFieldsFilled = Object.values(createNewCardData).every(
			(element) => element !== ''
		)
		setIsFormValid(allFieldsFilled)
	}, [createNewCardData])

	const handleInputChangeNewCardData = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const { name, value } = e.target

		setCreateNewCardData({
			...createNewCardData,
			[name]: value,
		})
	}

	const handleNumberInputChangeNewCardData = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const { name, value } = e.target

		setCreateNewCardData({
			...createNewCardData,
			[name]: Number(value) || value,
		})
	}

	const handleInputFocus = (fieldName: Focused) => {
		setFocused(fieldName)
	}

	const fetchCards = async (account_id: number) => {
		setLoading(true)
		setError(null)
		try {
			const { data } = await axios.get(
				`${endPoints.GET_ACCOUNT_ID_URL}${account_id}/cards`,
				{
					headers: {
						Authorization: localStorage.getItem('authToken'),
					},
				}
			)
			setCards(data)
		} catch (error) {
			const errorResponse = error as ApiError
			setError(
				errorResponse.message || 'An error occurred while fetching cards.'
			)
		} finally {
			setLoading(false)
		}
	}

	const handleCreateNewCardSubmit = async (
		e: React.FormEvent,
		account_id: number
	) => {
		e.preventDefault()
		setError(null)
		setMessage(null)
		setLoading(true)
		try {
			await axios.post(
				`${endPoints.GET_ACCOUNT_ID_URL}${account_id}/cards`,
				createNewCardData,
				{
					headers: {
						Authorization: localStorage.getItem('authToken'),
					},
				}
			)
			setMessage('Card created successfully!')
			setCreateNewCardData(InitialCardData)
		} catch (error) {
			const errorResponse = error as ApiError
			const errorMessage =
				errorResponse.response?.data?.error || errorResponse.message
			setError(errorMessage)
		} finally {
			setLoading(false)
		}
	}

	const deleteCard = async ({ card_id, account_id }: CardDelete) => {
		setLoading(true)
		setError(null)
		try {
			await axios.delete(
				`${endPoints.GET_ACCOUNT_ID_URL}${account_id}/cards/${card_id}`,
				{
					headers: {
						Authorization: localStorage.getItem('authToken'),
					},
				}
			)
			setMessage('Card deleted successfully!')
			fetchCards(account_id)
		} catch (error) {
			const errorResponse = error as ApiError
			const errorMessage =
				errorResponse.response?.data?.error || errorResponse.message
			setError(errorMessage)
		} finally {
			setLoading(false)
		}
	}

	return {
		cards,
		message,
		loading,
		error,
		fetchCards,
		createNewCardData,
		handleInputChangeNewCardData,
		handleNumberInputChangeNewCardData,
		handleCreateNewCardSubmit,
		isFormValid,
		deleteCard,
		focused,
		handleInputFocus,
	}
}

export default useAccountCards
