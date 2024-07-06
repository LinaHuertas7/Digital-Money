import DepositCard from '@/components/features/DepositCard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowRight,
	faCopy,
	faCreditCard,
	faPlus,
	faUserCircle,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const DepositPage = () => {
	const cardsData = [
		{ text: 'Terminada en 0000' },
		{ text: 'Terminada en 4067' },
	]

	return (
		<div className="flex flex-col justify-center items-center">
			<DepositCard />

			<div className="bg-custom-dark-gray px-10 pt-14 pb-14 flex flex-col w-full rounded-xl shadow-md mb-3 text-custom-green">
				<div className="font-semibold flex justify-between">
					<Link className="hover:underline flex" href="/activity">
						<FontAwesomeIcon className="text-2xl" icon={faUserCircle} />
						<div className="mx-5">Transferencia bancaria</div>
					</Link>
					<Link className="hover:underline" href="/activity">
						<FontAwesomeIcon className="text-2xl" icon={faArrowRight} />
					</Link>
				</div>
			</div>

			<div className="bg-custom-dark-gray px-10 pt-14 pb-14 flex flex-col w-full rounded-xl shadow-md mb-5 text-custom-green">
				<div className="font-semibold flex justify-between">
					<Link className="hover:underline flex" href="/activity">
						<FontAwesomeIcon className="text-2xl" icon={faCreditCard} />
						<div className="mx-5">Seleccionar tarjeta</div>
					</Link>
					<Link className="hover:underline" href="/activity">
						<FontAwesomeIcon className="text-2xl" icon={faArrowRight} />
					</Link>
				</div>
			</div>

			<div className="bg-custom-dark-gray px-10 pt-4 pb-10 flex flex-col w-full rounded-xl shadow-md mb-5 text-custom-green">
				<div className="my-5 text-2xl">Seleccionar tarjeta</div>

				<div className="bg-white px-16 pt-6 pb-6 flex flex-col w-full rounded-xl shadow-md mb-5 text-custom-green">
					<div className="text-custom-dark-gray font-bold mb-3">
						Tus tarjetas
					</div>

					{cardsData.map((item, index) => (
						<div
							key={index}
							className={`${
								index + 1 < cardsData.length ? 'border-b' : ''
							} border-black flex py-5 justify-between`}
						>
							<div className="flex">
								<div className="my-auto bg-custom-green rounded-full h-7 w-7"></div>
								<div className="my-auto mx-4 text-custom-dark-gray">
									{item.text}
								</div>
							</div>
							<div className="my-auto">
								<input type="radio" name="card" />
							</div>
						</div>
					))}
				</div>

				<div className="flex justify-between mt-3">
					<Link href="/cards/add" className="flex">
						<FontAwesomeIcon
							className="my-auto text-custom-green p-1 border border-custom-green rounded-full"
							icon={faPlus}
						/>
						<div className="text-custom-green font-semibold my-auto mx-5 hover:underline">
							Nueva tarjeta
						</div>
					</Link>
					<Link
						href="/login"
						className="rounded-lg py-4 px-3 text-sm font-bold bg-custom-green text-black w-52 text-center"
					>
						Continuar
					</Link>
				</div>
			</div>
		</div>
	)
}

export default DepositPage
