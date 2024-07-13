import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPencil } from '@fortawesome/free-solid-svg-icons'

import DepositCardComponent from '@/components/features/deposit/DepositCardComponent'

const ProfilePage = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="bg-white rounded-xl py-6 px-8 w-full text-black shadow-md mb-5">
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
				href="/deposit"
				className="bg-custom-green rounded-xl shadow-md text-center py-8 text-black text-xl font-bold w-full mb-5 flex justify-between px-8"
			>
				<p>Gestioná los medios de pago</p>
				<FontAwesomeIcon
					className="my-auto hover:underline"
					icon={faArrowRight}
				/>
			</Link>
			<DepositCardComponent />
		</div>
	)
}

export default ProfilePage
