import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowRight,
	faPencil,
	faCopy,
	faPlus,
} from '@fortawesome/free-solid-svg-icons'

const AddCardPage = () => {
	const cardsData = [
		{ code: '0000' },
		{ code: '4067' },
		{ code: '8040' },
		{ code: '9006' },
	]

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="bg-white rounded-xl py-10 px-16 w-full text-black shadow-md grid grid-cols-2 gap-x-14 gap-y-8 mb-5">
				<input
					type="text"
					placeholder="Número de la tarjeta*"
					className="border border-gray-300 rounded-lg px-4 py-3 shadow focus:border-custom-green"
				/>
				<input
					type="text"
					placeholder="Fecha de vencimiento*"
					className="border border-gray-300 rounded-lg px-4 py-3 shadow"
				/>
				<input
					type="text"
					placeholder="Nombre y apellido*"
					className="border border-gray-300 rounded-lg px-4 py-3 shadow"
				/>
				<input
					type="text"
					placeholder="Código de seguridad*"
					className="border border-gray-300 rounded-lg px-4 py-3 shadow"
				/>
				<button className="col-start-2 rounded-lg px-5 py-4 w-full text-sm font-bold bg-custom-light-gray text-black">
					Continuar
				</button>
			</div>
		</div>
	)
}

export default AddCardPage
