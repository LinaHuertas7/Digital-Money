'use client'
import useAuth from '@/hooks/useAuth'
import Spinner from '@/components/ui/Spinner'
import InputField from '@/components/ui/InputField'

const LoginPage = () => {
	const {
		loginData,
		error,
		isEmailSubmitted,
		handleLoginChange,
		handleEmailSubmit,
		handleLoginSubmit,
		loading,
	} = useAuth()
	return (
		<div className="h-screen-minus-layout flex flex-col justify-center items-center">
			<h1 className="text-center mb-8 text-lg font-bold">
				{isEmailSubmitted
					? 'Ingresá tu contraseña'
					: '¡Hola! Ingresá tu e-mail'}
			</h1>
			<div className="w-3/12">
				{loading && <Spinner />}
				<form
					onSubmit={isEmailSubmitted ? handleLoginSubmit : handleEmailSubmit}
				>
					{!isEmailSubmitted && (
						<InputField
							required
							name="email"
							type="email"
							placeholder="Correo electrónico"
							style={`w-full mb-4 ${error && 'border-red-700 border-2'}`}
							value={loginData.email}
							onChange={handleLoginChange}
						/>
					)}
					{isEmailSubmitted && (
						<InputField
							required
							name="password"
							type="password"
							placeholder="Contraseña"
							style={`w-full mb-4 ${error && 'border-red-700 border-2 mb-4'}`}
							value={loginData.password}
							onChange={handleLoginChange}
						/>
					)}
					<button className="rounded-lg mx-auto py-5 px-4 text-sm font-bold w-full bg-custom-green text-black mb-4">
						{isEmailSubmitted ? 'Iniciar sesión' : 'Continuar'}
					</button>
				</form>
				{!isEmailSubmitted && (
					<button className="rounded-lg mx-auto py-5 px-4 text-sm font-bold w-full bg-custom-light-gray mb-5 text-black">
						Crear Cuenta
					</button>
				)}
				{error && (
					<p className="text-custom-red text-center text-sm mx-auto italic">
						{String(error)}
					</p>
				)}
			</div>
		</div>
	)
}

export default LoginPage
