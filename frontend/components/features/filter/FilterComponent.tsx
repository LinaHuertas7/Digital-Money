'use client'
import { FilterComponentProps } from '@/interfaces'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

const FilterComponent = ({
	showFilter,
	setShowFilter,
	setFilterCriteria,
	filterSearchQuery,
}: FilterComponentProps) => {
	const searchParams = useSearchParams()
	const router = useRouter()
	const [selectDateValue, setSelectDateValue] = useState(
		searchParams.get('date') || ''
	)

	const handleApplyFilter = () => {
		if (selectDateValue) {
			filterSearchQuery({
				key: 'date',
				value: selectDateValue,
			})
		}
		setShowFilter(false)
	}

	const filterDates = [
		{ value: 'today', label: 'Hoy' },
		{ value: 'yesterday', label: 'Ayer' },
		{ value: 'last_week', label: 'Última semana' },
		{ value: 'last_15_days', label: 'Últimos 15 días' },
		{ value: 'last_month', label: 'Último mes' },
		{ value: 'last_year', label: 'Último año' },
		{ value: 'custom', label: 'Otro periodo' },
	]

	const cleanAllFilters = () => {
		router.push('activity')
		setShowFilter(false)
		setFilterCriteria({ date: '', search: '' })
		setSelectDateValue('')
	}

	return (
		<>
			<div
				className={`fixed top-36 md:right-16 bg-white py-4 px-10 rounded-lg shadow-lg z-50 transform transition-all duration-300 w-11/12 md:w-96 ${
					showFilter
						? 'translate-x-0 opacity-100 visible'
						: 'translate-x-[200%] opacity-0 invisible'
				}`}
			>
				<div className="flex flex-wrap mb-4 text-custom-dark-gray">
					<div className="flex justify-between items-center w-full mb-4">
						<span className="font-bold">Periodo</span>
						<button onClick={cleanAllFilters}>Borrar filtros</button>
					</div>
					<hr className="w-full border border-custom-dark-gray" />
				</div>
				{filterDates.map((date, index) => (
					<label
						key={index}
						htmlFor={date.value}
						className="text-base font-medium text-gray-700 w-full flex mb-4 cursor-pointer"
					>
						{date.label}
						<input
							type="radio"
							name="date"
							id={date.value}
							value={date.value}
							className="ml-auto cursor-pointer"
							onChange={(e) => setSelectDateValue(e.target.value || '')}
							checked={selectDateValue === date.value}
						/>
					</label>
				))}

				<button
					className="text-custom-dark-gray bg-custom-green py-2 rounded-lg shadow-md w-full font-bold"
					onClick={handleApplyFilter}
				>
					Aplicar
				</button>
			</div>

			{showFilter && (
				<div
					onClick={() => setShowFilter(false)}
					className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30"
				></div>
			)}
		</>
	)
}

export default FilterComponent
