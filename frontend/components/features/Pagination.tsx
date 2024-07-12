'use client'
import { useState } from 'react'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { PaginationProps } from '@/interfaces/index'

const Pagination = ({ data = [], itemsPerPage = 4 }: PaginationProps) => {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const { replace } = useRouter()

	const dataLength = data.length < 1 ? 32 : data.length

	const [currentPage, setCurrentPage] = useState(
		Number(searchParams.get('page')) || 1
	)
	const totalPages = Math.ceil(dataLength / itemsPerPage)

	const changePage = (page: number) => {
		const params = new URLSearchParams(searchParams)
		params.set('page', page.toString())

		replace(`${pathname}?${params.toString()}`)
		setCurrentPage(page)
	}

	return (
		<div className="pt-6 font-semibold flex justify-center space-x-2">
			{Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
				<button
					key={number}
					className={`px-4 py-2 ${
						currentPage === number ? 'bg-gray-300' : 'bg-white'
					} rounded`}
					onClick={() => changePage(number)}
				>
					{number}
				</button>
			))}
		</div>
	)
}

export default Pagination
