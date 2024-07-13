'use client'
import React from 'react'
import { ErrorRegisterMessage } from '@/interfaces'

import InputFieldComponent from '@/components/ui/InputFieldComponent'
import { useAuthContext } from '@/context/AuthContext'
import SpinnerComponent from '@/components/ui/SpinnerComponent'

const RegisterPage = () => {
	const {
		registerData,
		handleRegisterChange,
		handleRegisterSubmit,
		error,
		loading,
	} = useAuthContext()

	const errorValues = error as ErrorRegisterMessage

	return (
		<div className="pt-10 pb-5 h-auto md:h-screen-minus-layout flex flex-col justify-center items-center">
			<h1 className="text-center mb-8 text-lg font-bold">Crear cuenta</h1>
			{loading && <SpinnerComponent />}
			<form
				className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-3 mx-6"
				onSubmit={handleRegisterSubmit}
			>
				<InputFieldComponent
					type="text"
					name="firstName"
					value={registerData.firstName}
					onChange={handleRegisterChange}
					placeholder="Nombre*"
				/>
				<InputFieldComponent
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
				<InputFieldComponent
					type="number"
					name="dni"
					value={registerData.dni}
					onChange={handleRegisterChange}
					placeholder="DNI*"
				/>
				<InputFieldComponent
					type="email"
					name="email"
					value={registerData.email}
					onChange={handleRegisterChange}
					placeholder="Correo electrónico*"
				/>
				<p className="text-custom-red text-sm italic">{errorValues?.dni}</p>
				<p className="text-custom-red text-sm italic">{errorValues?.email}</p>
				<p className="col-span-1 md:col-span-2 text-sm text-center mb-3">
					Usa entre 6 y 20 carácteres (debe contener al menos al menos 1
					carácter especial, una mayúscula y un número)
				</p>
				<InputFieldComponent
					type="password"
					name="password"
					value={registerData.password}
					onChange={handleRegisterChange}
					placeholder="Contraseña*"
				/>
				<InputFieldComponent
					type="password"
					name="confirmPassword"
					value={registerData.confirmPassword}
					onChange={handleRegisterChange}
					placeholder="Confirmar contraseña*"
				/>
				<p className="text-custom-red text-sm italic col-span-1 md:col-span-2">
					{errorValues?.password}
				</p>
				<InputFieldComponent
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
