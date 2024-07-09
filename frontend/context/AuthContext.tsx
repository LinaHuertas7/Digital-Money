import React, { createContext, useContext, useEffect, useMemo } from 'react'

import { SessionUser } from '@/interfaces/index'
import { useRouter } from 'next/navigation'

import useAuth from '@/hooks/useAuth'
import { ErrorMessageType } from '@/types'

interface ContextProps {
	isAuthenticated: boolean
	userState: SessionUser | null
	loginData: {
		email: string
		password: string
	}
	registerData: {
		firstName: string
		lastName: string
		dni: string
		email: string
		password: string
		confirmPassword: string
		phone: string
	}
	error: ErrorMessageType
	isEmailSubmitted: boolean
	loading: boolean
	getUserData: (user_id: { user_id: number }) => void
	handleLoginChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleRegisterChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleEmailSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	handleLoginSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	handleRegisterSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	getAccountData: () => void
}

export const AuthContext = createContext({} as ContextProps)

interface AuthContextProviderProps {
	children: React.ReactNode
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
	const router = useRouter()
	const {
		userState,
		loginData,
		registerData,
		getUserData,
		error,
		isEmailSubmitted,
		loading,
		handleLoginChange,
		handleRegisterChange,
		handleEmailSubmit,
		handleLoginSubmit,
		handleRegisterSubmit,
		getAccountData,
	} = useAuth()

	useEffect(() => {
		const processAccountData = async () => {
			try {
				const accountData = await getAccountData()
				await getUserData({ user_id: accountData.user_id })
			} catch (error) {
				router.push('/home')
			}
		}
		const token = localStorage.getItem('authToken')

		if (token) {
			processAccountData()
		}
	}, [])

	const values = useMemo(
		() => ({
			isAuthenticated: !!userState,
			userState,
			loginData,
			registerData,
			error,
			isEmailSubmitted,
			loading,
			handleLoginChange,
			handleRegisterChange,
			handleEmailSubmit,
			handleLoginSubmit,
			handleRegisterSubmit,
			getUserData,
			getAccountData,
		}),
		[userState, loginData, registerData, error, isEmailSubmitted, loading]
	)

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)

export const AuthConsumer = AuthContext.Consumer
