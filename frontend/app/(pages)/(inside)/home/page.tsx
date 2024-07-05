import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons'

const HomePage = () => {
	const data = [
		{ text: 'Transferiste a Rodrigo', amount: '-1265,57', date: 'sabado' },
		{ text: 'Transferiste a Consorcio', amount: '-1265,57', date: 'sabado' },
		{ text: 'Ingresaste dinero', amount: '-1265,57', date: 'sabado' },
		{ text: 'Te transfirieron dinero', amount: '-1265,57', date: 'sabado' },
	]

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="bg-custom-dark-gray px-10 pt-4 pb-10 flex flex-col w-full rounded-xl shadow-md mb-5">
				<div className="text-white flex justify-end">
					<Link
						href="/login"
						className="py-5 px-3 text-sm underline text-center"
					>
						Ver tarjetas
					</Link>
					<Link
						href="/login"
						className="py-5 px-3 text-sm underline text-center"
					>
						Ver CVU
					</Link>
				</div>
				<div className="px-2 mb-4">Dinero disponible</div>
				<div className="flex">
					<div className="border-2 border-custom-green rounded-full px-4 py-3 text-3xl">
						$ 6.890.534,17
					</div>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-4 w-full mb-5">
				<Link
					href="/login"
					className="bg-custom-green rounded-xl shadow-md text-center py-8 text-black text-xl font-bold"
				>
					Cargar dinero
				</Link>
				<Link
					href="/login"
					className="bg-custom-green rounded-xl shadow-md text-center py-8 text-black text-xl font-bold"
				>
					Pago de servicios
				</Link>
			</div>

			<div className="bg-white w-full flex items-center border border-gray-300 rounded-lg px-4 py-3 mb-5 relative shadow-md">
				<FontAwesomeIcon
					className="text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
					icon={faSearch}
				/>
				<input
					type="text"
					placeholder="Buscar en tu actividad"
					className="flex-grow pl-6 p-1 text-base border-none focus:border-none focus-visible:outline-none text-black"
				/>
			</div>

			<div className="bg-white rounded-xl py-10 px-8 w-full text-black shadow-md">
				<div className="border-b border-black pb-4 font-semibold">
					Tu actividad
				</div>
				{data.map((item, index) => (
					<div
						key={index}
						className="border-b border-black flex py-4 justify-between"
					>
						<div className="flex">
							<div className="my-auto bg-custom-green rounded-full h-7 w-7"></div>
							<div className="my-auto mx-4">{item.text}</div>
						</div>
						<div className="my-auto">
							<div>{item.amount}</div>
							<div className="text-sm text-gray-400 text-end">{item.date}</div>
						</div>
					</div>
				))}

				<div className="pt-6 font-semibold flex justify-between">
					<Link className="hover:underline" href="/login">
						Ver toda tu actividad
					</Link>
					<Link className="hover:underline" href="/login">
						<FontAwesomeIcon className="text-2xl" icon={faArrowRight} />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default HomePage
