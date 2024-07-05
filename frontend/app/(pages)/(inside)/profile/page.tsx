import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowRight,
	faPencil,
	faCopy,
} from '@fortawesome/free-solid-svg-icons'

const ProfilePage = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="bg-white rounded-xl py-10 px-8 w-full text-black shadow-md mb-5">
				<div className="pb-4 font-bold text-xl">Tus datos</div>

				<div className="border-b border-gray-300 flex py-2 justify-between">
					<div className="my-auto w-1/3">Email</div>
					<div className="w-full text-gray-400">
						mauriciobrito@digitalhouse.com
					</div>
				</div>

				<div className="border-b border-gray-300 flex py-2 justify-between">
					<div className="my-auto w-1/3">Nombre y apellido</div>
					<div className="w-full text-gray-400">Mauricio Brito</div>
					<FontAwesomeIcon className="my-auto text-gray-400" icon={faPencil} />
				</div>

				<div className="border-b border-gray-300 flex py-2 justify-between">
					<div className="my-auto w-1/3">CUIT</div>
					<div className="w-full text-gray-400">20350269798</div>
					<FontAwesomeIcon className="my-auto text-gray-400" icon={faPencil} />
				</div>

				<div className="border-b border-gray-300 flex py-2 justify-between">
					<div className="my-auto w-1/3">Teléfono</div>
					<div className="w-full text-gray-400">1146730989</div>
					<FontAwesomeIcon className="my-auto text-gray-400" icon={faPencil} />
				</div>

				<div className="border-b border-gray-300 flex py-2 justify-between">
					<div className="my-auto w-1/3">Contraseña</div>
					<div className="w-full text-gray-400">******</div>
					<FontAwesomeIcon className="my-auto text-gray-400" icon={faPencil} />
				</div>
			</div>

			<Link
				href="/login"
				className="bg-custom-green rounded-xl shadow-md text-center py-8 text-black text-xl font-bold w-full mb-5 flex justify-between px-8"
			>
				<div>Gestioná los medios de pago</div>
				<FontAwesomeIcon className="my-auto" icon={faArrowRight} />
			</Link>

			<div className="bg-custom-dark-gray px-10 pt-4 pb-10 flex flex-col w-full rounded-xl shadow-md mb-5">
				<div className="my-5">
					Copia tu cvu o alias para ingresar o transferir dinero desde otra
					cuenta
				</div>

				<div className="flex justify-between my-4">
					<div>
						<div className="text-custom-green font-semibold">CVU</div>
						<div>0000002100075320000000</div>
					</div>
					<FontAwesomeIcon
						className="my-auto text-custom-green text-2xl"
						icon={faCopy}
					/>
				</div>

				<div className="flex justify-between my-4">
					<div>
						<div className="text-custom-green font-semibold">Alias</div>
						<div>estealiasnoexiste</div>
					</div>
					<FontAwesomeIcon
						className="my-auto text-custom-green text-2xl"
						icon={faCopy}
					/>
				</div>
			</div>
		</div>
	)
}

export default ProfilePage
