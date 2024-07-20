'use client'
import { RemoveCookieServerSide } from '@/helper/setCookieServerSide'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '@/context/AuthContext'

export const useErrorHandlerApi = () => {
	const router = useRouter()
	const { handleUserState } = useAuthContext()

	const authorizationHandelerError = async () => {
		handleUserState(null)
		localStorage.removeItem('authToken')
		await RemoveCookieServerSide({ name: 'authToken' })
		router.push('/')
	}

	const ErrorHandeler = (error: any) => {
		try {
			const {
				response: { status },
			} = error

			if (status === 401) {
				authorizationHandelerError()
			}
		} catch (error) {}
	}

	return { ErrorHandeler }
}
