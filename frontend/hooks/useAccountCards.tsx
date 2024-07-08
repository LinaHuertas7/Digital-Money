'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface Card {
	id: number
	account_id: number
	number_id: number
	first_last_name: string
	cod: number
	expiration_date: string
}

interface NewCard {
	cod: number | string
	expiration_date: string
	first_last_name: string
	number_id: number | string
}

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
	const [createNewCardData, setCreateNewCardData] =
		useState<NewCard>(InitialCardData)
	const [isFormValid, setIsFormValid] = useState(false)

	useEffect(() => {
		const allFieldsFilled = Object.values(createNewCardData).every(
			(element) => element !== ''
		)
		setIsFormValid(allFieldsFilled)
	}, [createNewCardData])

	const handleInputChangeNewCardData = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const { name, checked, value } = e.target

		setCreateNewCardData({
			...createNewCardData,
			[name]: value || checked,
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

	const fetchCards = async (accountId: number) => {
		setLoading(true)
		setError(null)
		try {
			const { data } = await axios.get(
				`https://digitalmoney.digitalhouse.com/api/accounts/${accountId}/cards`,
				{
					headers: {
						Authorization: localStorage.getItem('authToken'),
					},
				}
			)
			setCards(data)
		} catch (err: any) {
			setError(err.message || 'An error occurred while fetching cards.')
		} finally {
			setLoading(false)
		}
	}

	const handleCreateNewCardSubmit = async (
		e: React.FormEvent,
		accountId: number
	) => {
		e.preventDefault()
		setError(null)
		setLoading(true)
		try {
			const response = await axios.post(
				`https://digitalmoney.digitalhouse.com/api/accounts/${accountId}/cards`,
				createNewCardData,
				{
					headers: {
						Authorization: localStorage.getItem('authToken'),
					},
				}
			)
			console.log(response)
		} catch (error: any) {
			const errorMessage = error.response?.data?.error || error.message
			setError(errorMessage)
		} finally {
			setLoading(false)
		}
	}

	const createNewCard = async ({
		accountId,
		body,
	}: {
		accountId: number
		body: any
	}) => {
		setLoading(true)
		try {
			const { data } = await axios.post(
				`https://digitalmoney.digitalhouse.com/api/accounts/${accountId}/cards`,
				body,
				{
					headers: {
						Authorization: localStorage.getItem('authToken'),
					},
				}
			)

			console.log(data)
		} catch (e) {
			console.log(e)
		} finally {
			setLoading(false)
		}
	}

	return {
		cards,
		loading,
		error,
		fetchCards,
		createNewCard,
		createNewCardData,
		handleInputChangeNewCardData,
		handleNumberInputChangeNewCardData,
		handleCreateNewCardSubmit,
		isFormValid,
	}
}

export default useAccountCards