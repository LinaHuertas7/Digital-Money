import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPencil } from '@fortawesome/free-solid-svg-icons'

import DepositCard from '@/components/features/DepositCard'

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
			<DepositCard />
		</div>
	)
}

export default ProfilePage
