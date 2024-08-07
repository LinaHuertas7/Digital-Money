import { ErrorMessage } from '@/interfaces/message'

const errorMessages: ErrorMessage = {
	userNotExist: 'Usuario inexistente. Vuelve a intentarlo.',
	incorrectPassword: 'Contraseña incorrecta. Vuelve a intentarlo.',
	loginError:
		'Ha ocurrido un error al intentar iniciar sesión. Por favor, inténtalo de nuevo.',
	registerError:
		'Ha ocurrido un error al intentar registrar el usuario. Por favor, inténtalo de nuevo.',
	emailVerificationError:
		'Ha ocurrido un error al intentar verificar el email. Por favor, inténtalo de nuevo.',
	userAlreadyExists: 'El usuario ya existe. Por favor, inicia sesión.',
	defaultError: 'Ha ocurrido un error. Por favor, inténtalo de nuevo.',
}

export default errorMessages
