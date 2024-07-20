'use client'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import DepositCardComponent from '@/components/features/deposit/DepositCardComponent'
import { useAuthContext } from '@/context/AuthContext'
import EditableField from '@/components/features/profile/EditableField'

const ProfilePage = () => {
	const { userState, updateUser } = useAuthContext()
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="bg-white rounded-xl py-6 px-8 w-full text-black shadow-md mb-5">
				<div className="pb-4 font-bold text-xl">Tus datos</div>
				<div className="border-b border-gray-300 flex py-2 justify-between">
					<div className="my-auto w-1/3">Email</div>
					<div className="w-full text-gray-400">
						<EditableField
							name="email"
							value={`${userState?.email}`}
							onSave={(newValue) => {
								userState && updateUser(userState.id, { email: newValue })
							}}
						/>
					</div>
				</div>
				<div className="border-b border-gray-300 flex py-2 justify-between">
					<div className="my-auto w-1/3">Nombre y apellido</div>
					<div className="w-full text-gray-400">
						<EditableField
							name="name"
							value={`${userState?.firstname} ${userState?.lastname}`}
							onSave={(newValue) => {
								const [firstname, lastname] = newValue.split(' ')
								userState && updateUser(userState.id, { firstname, lastname })
							}}
						/>
					</div>
				</div>
				<div className="border-b border-gray-300 flex py-2 justify-between">
					<div className="my-auto w-1/3">CUIT</div>
					<div className="w-full text-gray-400">
						<EditableField
							name="dni"
							value={`${userState?.dni}`}
							onSave={(newValue) => {
								const dni = Number(newValue)
								userState && updateUser(userState.id, { dni })
							}}
						/>
					</div>
				</div>
				<div className="border-b border-gray-300 flex py-2 justify-between">
					<div className="my-auto w-1/3">Teléfono</div>
					<div className="w-full text-gray-400">
						<EditableField
							name="phone"
							value={`${userState?.phone}`}
							onSave={(newValue) => {
								userState && updateUser(userState.id, { phone: newValue })
							}}
						/>
					</div>
				</div>
				<div className="border-b border-gray-300 flex py-2 justify-between">
					<div className="my-auto w-1/3">Contraseña</div>
					<div className="w-full text-gray-400">
						<EditableField
							name="password"
							value={`${userState?.password}`}
							onSave={(newValue) => {
								userState && updateUser(userState.id, { password: newValue })
							}}
						/>
					</div>
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
