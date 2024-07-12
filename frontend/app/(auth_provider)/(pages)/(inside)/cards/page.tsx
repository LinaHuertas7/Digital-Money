'use client'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons'

import useAccountCards from '@/hooks/useAccountCards'
import { useEffect } from 'react'
import { useAuthContext } from '@/context/AuthContext'

const CardsPage = () => {
	const { cards, fetchCards } = useAccountCards()
	const { isAuthenticated, accountData } = useAuthContext()

	useEffect(() => {
		if (accountData && accountData?.id) {
			fetchCards(accountData?.id)
		}
	}, [isAuthenticated])

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="bg-custom-dark-gray px-10 pt-4 pb-10 flex flex-col w-full rounded-xl shadow-md mb-5">
				<div className="my-5">Agregá tu tarjeta de débito o crédito</div>

				<div className="flex justify-between mt-4">
					<Link href="/cards/add" className="flex">
						<FontAwesomeIcon
							className="my-auto text-custom-green p-1 border border-custom-green rounded-full"
							icon={faPlus}
						/>
						<div className="text-custom-green font-semibold my-auto mx-5 hover:underline">
							Nueva tarjeta
						</div>
					</Link>
					<Link href="/cards/add">
						<FontAwesomeIcon
							className="my-auto text-custom-green text-2xl"
							icon={faArrowRight}
						/>
					</Link>
				</div>
			</div>

			<div className="bg-white rounded-xl py-10 px-8 w-full text-black shadow-md">
				<div className="border-b border-black pb-4 font-semibold">
					Tus tarjetas
				</div>
				{cards.map((card, index) => (
					<div
						key={index}
						className="border-b border-black flex py-5 justify-between w-full"
					>
						<div className="flex">
							<div className="my-auto bg-custom-green rounded-full h-10 w-10"></div>
							<div className="my-auto mx-4">
								{`Terminada en ${card.cod.toString().slice(-4)}`}
							</div>
						</div>
						<Link href="/login" className="text-black font-semibold my-auto">
							Eliminar
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default CardsPage
