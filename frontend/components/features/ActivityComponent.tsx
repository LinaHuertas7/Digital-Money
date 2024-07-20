'use client'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowRight,
	faSearch,
	faSliders,
} from '@fortawesome/free-solid-svg-icons'
import PaginationComponent from '@/components/features/PaginationComponent'
import FilterComponent from '@/components/features/filter/FilterComponent'
import { formatDate } from '@/helper/formatDate'
import { ActivityComponentProps, FilterSearchQuery } from '@/interfaces'
import useTransactions from '@/hooks/useTransactions'
import { useEffect, useState } from 'react'
import { useAuthContext } from '@/context/AuthContext'
import { useRouter, useSearchParams } from 'next/navigation'

const ActivityComponent = ({
	itsComponent = false,
}: ActivityComponentProps) => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const [showFilter, setShowFilter] = useState(false)
	const { isAuthenticated, accountData } = useAuthContext()
	const { transactions, paginatedTransactions, getAccountTransactions } =
		useTransactions()

	useEffect(() => {
		if (accountData?.id) {
			getAccountTransactions(accountData?.id)
		}
	}, [isAuthenticated])

	const [filterCriteria, setFilterCriteria] = useState({
		date: searchParams.get('date') || '',
		search: searchParams.get('search') || '',
	})

	const filterSearchQuery = ({ key, value }: FilterSearchQuery) => {
		const params = new URLSearchParams(searchParams)
		params.set(key, value)

		router.push(`activity?${params.toString()}`)
		setFilterCriteria((filterCriteria) => ({
			...filterCriteria,
			[key]: value,
		}))
	}

	const handleSearchInputKeyDown = (e: any) => {
		if (e.key === 'Enter') {
			filterSearchQuery({
				key: 'search',
				value: e.target.value,
			})
		}
	}

	const handleSearchInputChange = (e: any) => {
		setFilterCriteria((filterCriteria) => ({
			...filterCriteria,
			search: e.target.value,
		}))

		if (!itsComponent) {
			filterSearchQuery({
				key: 'search',
				value: e.target.value,
			})
		}
	}

	return (
		<>
			<div className="flex w-full mb-5 ">
				<div className="bg-white w-full flex items-center border border-gray-300 rounded-lg px-4 py-3 relative shadow-md">
					<FontAwesomeIcon
						className="text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
						icon={faSearch}
					/>
					<input
						type="text"
						placeholder="Buscar en tu actividad"
						className="flex-grow pl-6 p-1 text-base border-none focus:border-none focus-visible:outline-none text-black"
						value={filterCriteria.search}
						onKeyDown={handleSearchInputKeyDown}
						onChange={handleSearchInputChange}
					/>
				</div>
				{!itsComponent && (
					<>
						<button
							className="hidden text-custom-dark-gray bg-custom-green font-semibold ml-5 px-5 rounded-lg shadow-md md:flex flex-row justify-between items-center"
							onClick={() => setShowFilter(!showFilter)}
						>
							Filtrar
							<FontAwesomeIcon className="ml-5" icon={faSliders} />
						</button>

						<FilterComponent
							filterSearchQuery={filterSearchQuery}
							showFilter={showFilter}
							setShowFilter={setShowFilter}
							setFilterCriteria={setFilterCriteria}
						/>
					</>
				)}
			</div>

			<div className="bg-white rounded-xl py-5 md:py-10 px-5 md:px-8 w-full text-black shadow-md">
				<div className="border-b border-gray-300 pb-4 font-semibold flex flex-wrap justify-between">
					<>Tu actividad</>
					{!itsComponent && (
						<button
							className="visible md:invisible text-custom-dark-gray font-semibold ml-5 rounded-lg flex flex-row justify-between items-center"
							onClick={() => setShowFilter(!showFilter)}
						>
							Filtrar
							<FontAwesomeIcon className="ml-5" icon={faSliders} />
						</button>
					)}
				</div>

				{paginatedTransactions.length > 0 ? (
					paginatedTransactions.map((transaction, index) => (
						<div
							key={index}
							className="border-b border-gray-300 flex py-2 md:py-4 justify-between text-sm md:text-base"
						>
							<div className="flex">
								<div className="my-auto bg-custom-green rounded-full h-7 w-7"></div>
								<div className="my-auto mx-2 md:mx-4">
									{transaction.description} a {transaction.destination}
								</div>
							</div>
							<div className="my-auto">
								<div className="text-right">{transaction.amount}</div>
								<div className="text-sm text-gray-400 text-end">
									{transaction?.dated && formatDate(transaction.dated)}
								</div>
							</div>
						</div>
					))
				) : (
					<div className="text-center text-gray-400 py-4">
						No hay transacciones para mostrar
					</div>
				)}

				{itsComponent ? (
					<div className="pt-6 font-semibold flex justify-between text-xs md:text-base">
						<Link className="hover:underline" href="/activity">
							Ver toda tu actividad
						</Link>
						<Link className="hover:underline text-gray-400" href="/activity">
							<FontAwesomeIcon
								className="text-lg md:text-2xl"
								icon={faArrowRight}
							/>
						</Link>
					</div>
				) : paginatedTransactions.length > 0 ? (
					<PaginationComponent totalItems={transactions.length} />
				) : null}
			</div>
		</>
	)
}

export default ActivityComponent
