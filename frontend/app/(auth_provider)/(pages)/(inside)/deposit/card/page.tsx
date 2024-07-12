import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCheckCircle,
	faPlus,
	faEdit,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const DepositPage = () => {
	const cardsData = [
		{ text: 'Terminada en 0000' },
		{ text: 'Terminada en 4067' },
	]

	return (
		<div className="flex flex-col justify-center items-center">
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

			<div className="bg-custom-dark-gray px-10 py-5 md:py-7 flex flex-col w-full rounded-xl shadow-md mb-5">
				<div className="mb-7 mt-2 text-2xl text-custom-green">
					¿Cuánto querés ingresar a la cuenta?
				</div>

				<input
					className="rounded-lg py-4 px-4 w-80 text-custom-dark-gray"
					placeholder="$0"
				/>

				<Link
					href="/login"
					className="rounded-lg py-4 px-3 text-sm font-bold bg-custom-green text-black w-52 text-center ml-auto mt-9"
				>
					Continuar
				</Link>
			</div>

			<div className="bg-custom-green px-10 py-5 md:py-6 flex flex-col w-full rounded-xl shadow-md mb-5 text-black">
				<FontAwesomeIcon className="text-6xl mx-5" icon={faCheckCircle} />
				<div className="mt-5 font-bold mx-auto text-2xl">
					Ya cargamos el dinero en tu cuenta
				</div>
			</div>

			<div className="bg-custom-dark-gray px-10 py-5 md:py-10 flex flex-col w-full rounded-xl shadow-md mb-5 font-light">
				<div className="mt-2 text-xl text-custom-green font-bold">
					Revisá que está todo bien
				</div>
				<div className="mt-7">
					<div>
						Vas a transferir
						<FontAwesomeIcon
							className="text-custom-green text-2xl mx-5"
							icon={faEdit}
						/>
					</div>
					<div className="font-bold mt-1">$300</div>
				</div>

				<div className="mt-7">
					<div className="text-sm">Para</div>
					<div className="font-bold text-2xl mt-2">Cuenta propia</div>
				</div>

				<div className="mt-5">
					<div className="text-xl">Brubank</div>
					<div className="mt-1 text-sm">CVU: 0000002100075990000000</div>
				</div>

				<Link
					href="/login"
					className="rounded-lg py-4 px-3 text-sm font-bold bg-custom-green text-black w-52 text-center ml-auto"
				>
					Continuar
				</Link>
			</div>
		</div>
	)
}

export default DepositPage
