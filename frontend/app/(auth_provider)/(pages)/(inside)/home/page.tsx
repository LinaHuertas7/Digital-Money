'use client'
import Link from 'next/link'

import ActivityComponent from '@/components/features/ActivityComponent'
import { useAuthContext } from '@/context/AuthContext'
import CurrencyFormat from '@/helper/CurrencyFormat'

const HomePage = () => {
	const { accountData } = useAuthContext()

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="bg-custom-dark-gray px-5 md:px-10 pt-4 pb-5 md:pb-10 flex flex-col w-full rounded-xl shadow-md mb-5">
				<div className="text-white flex justify-end">
					<Link
						href="/login"
						className="pt-0 md:pt-5 pb-5 px-3 text-sm underline text-center"
					>
						Ver tarjetas
					</Link>
					<Link
						href="/login"
						className="pt-0 md:pt-5 pb-5 px-3 text-sm underline text-center"
					>
						Ver CVU
					</Link>
				</div>
				<div className="px-2 mb-2 md:mb-4">Dinero disponible</div>
				<div className="flex">
					<div className="border-2 border-custom-green rounded-full px-4 py-3 text-2xl md:text-3xl font-semibold">
						{CurrencyFormat(accountData?.available_amount ?? 0)}
					</div>
				</div>
			</div>
			<div className="grid md:grid-cols-2 gap-4 w-full mb-5">
				<Link
					href="/deposit"
					className="bg-custom-green rounded-xl shadow-md text-center py-5 md:py-8 text-black text-base md:text-xl font-bold"
				>
					Cargar dinero
				</Link>
				<Link
					href="/services"
					className="bg-custom-green rounded-xl shadow-md text-center py-5 md:py-8 text-black text-base md:text-xl font-bold"
				>
					Pago de servicios
				</Link>
			</div>
			<ActivityComponent itsComponent={true} />
		</div>
	)
}

export default HomePage
