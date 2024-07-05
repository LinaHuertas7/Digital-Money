import React from 'react'
import Link from 'next/link'

const SuccessPage = () => {
	return (
		<div className="h-screen-minus-layout flex flex-col justify-center items-center font-sans gap-y-5">
			<h1 className="text-center text-6xl font-bold">Registro Exitoso</h1>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-24 text-custom-green"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
				/>
			</svg>
			<p className="text-center max-w-lg">
				Hemos enviado un correo de confirmación para validar tu email, por favor
				revisalo para iniciar sesión
			</p>
			<Link
				href="/login"
				className="rounded-lg mx-auto py-5 mt-8 px-4 text-sm font-bold bg-custom-green text-black w-80 text-center"
			>
				Continuar
			</Link>
		</div>
	)
}

export default SuccessPage
