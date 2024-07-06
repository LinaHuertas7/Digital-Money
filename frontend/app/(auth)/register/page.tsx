'use client'
import React from 'react'
import { ErrorRegisterMessage } from '@/interfaces'

import InputField from '@/components/ui/InputField'
import useAuth from '@/hooks/useAuth'
import Spinner from '@/components/ui/Spinner'

const RegisterPage = () => {
	const {
		registerData,
		handleRegisterChange,
		handleRegisterSubmit,
		error,
		loading,
	} = useAuth()

	const errorValues = error as ErrorRegisterMessage

	return (
		<div className="h-screen-minus-layout flex flex-col justify-center items-center">
			<h1 className="text-center mb-8 text-lg font-bold">Crear cuenta</h1>
			{loading && <Spinner />}
			<form
				className="grid grid-cols-2 gap-x-10 gap-y-3"
				onSubmit={handleRegisterSubmit}
			>
				<InputField
					type="text"
					name="firstName"
					value={registerData.firstName}
					onChange={handleRegisterChange}
					placeholder="Nombre*"
				/>
				<InputField
					type="text"
					name="lastName"
					value={registerData.lastName}
					onChange={handleRegisterChange}
					placeholder="Apellido*"
				/>
				<p className="text-custom-red text-sm italic">
					{errorValues?.firstName}
				</p>
				<p className="text-custom-red text-sm italic">
					{errorValues?.lastName}
				</p>
				<InputField
					type="number"
					name="dni"
					value={registerData.dni}
					onChange={handleRegisterChange}
					placeholder="DNI*"
				/>
				<InputField
					type="email"
					name="email"
					value={registerData.email}
					onChange={handleRegisterChange}
					placeholder="Correo electrónico*"
				/>
				<p className="text-custom-red text-sm italic">{errorValues?.dni}</p>
				<p className="text-custom-red text-sm italic">{errorValues?.email}</p>
				<p className="col-span-2 text-sm text-center mb-3">
					Usa entre 6 y 20 carácteres (debe contener al menos al menos 1
					carácter especial, una mayúscula y un número)
				</p>
				<InputField
					type="password"
					name="password"
					value={registerData.password}
					onChange={handleRegisterChange}
					placeholder="Contraseña*"
				/>
				<InputField
					type="password"
					name="confirmPassword"
					value={registerData.confirmPassword}
					onChange={handleRegisterChange}
					placeholder="Confirmar contraseña*"
				/>
				<p className="text-custom-red text-sm italic col-span-2">
					{errorValues?.password}
				</p>
				<InputField
					type="text"
					name="phone"
					value={registerData.phone}
					onChange={handleRegisterChange}
					placeholder="Teléfono*"
				/>
				<button
					type="submit"
					className="rounded-lg mx-auto py-5 px-4 text-sm font-bold w-full bg-custom-green text-black"
				>
					Crear cuenta
				</button>
				<p className="text-custom-red text-sm italic">{errorValues?.phone}</p>
				<p className="text-custom-red text-sm italic">
					{errorValues?.userAlreadyExists}
				</p>
			</form>
		</div>
	)
}

export default RegisterPage
