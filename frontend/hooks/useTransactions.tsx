'use client'
import axios from 'axios'

import endPoints from '@/constants/api'
import { useEffect, useState } from 'react'

import { useSearchParams } from 'next/navigation'
import { useErrorHandlerApi } from '@/hooks/useErrorHandlerApi'
import { getDateRange, parseDate } from '@/helper/DateFilter'

interface Transaction {
	account_id: number
	amount: number
	dated: string
	description: string
	destination: string
	id: number
	origin: string
	type: string
}

const useTransactions = () => {
	const searchParams = useSearchParams()
	const { ErrorHandeler } = useErrorHandlerApi()

	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)
	const [message, setMessage] = useState<string | null>(null)

	const [allTransactions, setAllTransactions] = useState<Transaction[]>([])
	const [transactions, setTransactions] = useState<Transaction[]>([])
	const [paginatedTransactions, setPaginatedTransactions] = useState<
		Transaction[]
	>([])

	useEffect(() => {
		const currentPage = Number(searchParams.get('page')) || 1

		const startingIndex = (currentPage - 1) * 10
		const endingIndex = startingIndex + 10

		setPaginatedTransactions(transactions.slice(startingIndex, endingIndex))
	}, [transactions, searchParams.get('page')])

	useEffect(() => {
		const search = searchParams.get('search')
		const date = searchParams.get('date')

		const { start, end } = getDateRange(date || '')

		const filteredTransactions = allTransactions.filter((transaction) => {
			const transactionDate = parseDate(transaction.dated)
			const isWithinDateRange =
				transactionDate >= start && transactionDate <= end

			if (search) {
				return (
					isWithinDateRange &&
					(transaction.description
						.toLowerCase()
						.includes(search.toLowerCase()) ||
						transaction.origin?.toLowerCase().includes(search.toLowerCase()) ||
						transaction.destination
							?.toLowerCase()
							.includes(search.toLowerCase()) ||
						transaction.type.toLowerCase().includes(search.toLowerCase()) ||
						transaction.dated.toLowerCase().includes(search.toLowerCase()) ||
						transaction.amount.toString().includes(search.toLowerCase()))
				)
			}

			return isWithinDateRange
		})

		setTransactions(filteredTransactions)
	}, [allTransactions, searchParams.get('search'), searchParams.get('date')])

	const getAccountTransactions = async (accountId: number) => {
		try {
			const { data } = await axios.get(
				`${endPoints.DEPOSIT_URL}${accountId}/activity`,
				{
					headers: {
						Authorization: localStorage.getItem('authToken'),
					},
				}
			)
			data.reverse()
			setAllTransactions(data)
			return data
		} catch (error: any) {
			ErrorHandeler(error)
			setAllTransactions([])
		} finally {
			setLoading(false)
		}
	}

	return {
		loading,
		error,
		message,
		getAccountTransactions,
		transactions,
		paginatedTransactions,
	}
}

export default useTransactions
