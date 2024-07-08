import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const SelectedServicePage = () => {
	const cardsData = [
		{ text: 'Terminada en 0000' },
		{ text: 'Terminada en 4067' },
	]

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="bg-custom-dark-gray px-10 py-5 md:py-7 flex flex-col w-full rounded-xl shadow-md mb-5">
				<div className="mb-7 mt-2 text-2xl text-custom-green">
					Número de cuenta sin el primer 2
				</div>

				<input
					className="rounded-lg py-4 px-4 w-80 text-custom-dark-gray"
					placeholder="123456789"
				/>

				<p className="text-white mt-5 text-xs">
					Son 11 números sin espacios, sin el “2” inicial. Agregá ceros adelante
					si tenés menos.
				</p>

				<Link
					href={`/services/${1}`}
					className="rounded-lg py-4 px-3 text-sm font-bold bg-custom-green text-black w-52 text-center ml-auto mt-9"
				>
					Continuar
				</Link>
			</div>

			<div className="bg-custom-dark-gray px-10 py-5 md:py-7 flex flex-col w-full rounded-xl shadow-md mb-5">
				<div className="flex flex-wrap justify-between mb-7">
					<div className="text-2xl text-custom-green my-auto">Cablevisión</div>

					<Link
						href={`/services/${1}`}
						className="text-white hover:underline my-auto"
					>
						Ver detalles del pago
					</Link>
				</div>

				<hr className="border-0 h-px bg-custom-gray" />

				<div className="flex flex-wrap justify-between text-white mt-6 mb-1 text-2xl">
					<div>Total a pagar</div>

					<div>$1.153,75</div>
				</div>
			</div>

			<div className="bg-white px-16 pt-6 pb-6 flex flex-col w-full rounded-xl shadow-md mb-5 text-custom-green">
				<div className="text-custom-dark-gray font-bold mb-3">Tus tarjetas</div>

				{cardsData.map((item, index) => (
					<div
						key={index}
						className={`${
							index + 1 < cardsData.length ? 'border-b' : ''
						} border-black flex py-5 justify-between`}
					>
						<label htmlFor={`radio-${index}`} className="flex">
							<div className="my-auto bg-custom-green rounded-full h-7 w-7"></div>
							<div className="my-auto mx-4 text-custom-dark-gray">
								{item.text}
							</div>
						</label>
						<div className="my-auto">
							<input id={`radio-${index}`} type="radio" name="card" />
						</div>
					</div>
				))}
			</div>

			<Link
				href={`/services/${1}`}
				className="rounded-lg py-5 px-3 text-sm font-bold bg-custom-green text-black w-52 text-center ml-auto"
			>
				Pagar
			</Link>

			<div className="bg-custom-dark-gray px-10 py-5 md:py-7 flex flex-col w-full rounded-xl shadow-md mt-7 mb-5">
				<div className="flex flex-col mb-7">
					<FontAwesomeIcon
						className="text-6xl mx-5 text-red-700"
						icon={faTimesCircle}
					/>
					<div className="mt-5 font-bold mx-auto text-2xl">
						No encontramos facturas asociadas a este dato
					</div>
				</div>

				<hr className="border-0 h-px bg-custom-gray" />

				<div className="text-sm mt-8 mb-5 max-w-96 text-center mx-auto">
					Revisá el dato ingresado. Si es correcto, es posible que la empresa
					aún no haya cargado tu factura.
				</div>
			</div>

			<Link
				href={`/services/${1}`}
				className="rounded-lg py-5 px-3 text-sm font-bold bg-custom-green text-black w-52 text-center ml-auto"
			>
				Revisar dato
			</Link>
		</div>
	)
}

export default SelectedServicePage
