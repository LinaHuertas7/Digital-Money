import React, { createContext, useContext, useMemo } from 'react'

import { SessionUser } from '@/interfaces/index'

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
	handleLoginChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleRegisterChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleEmailSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	handleLoginSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	handleRegisterSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export const AuthContext = createContext({} as ContextProps)

interface AuthContextProviderProps {
	children: React.ReactNode
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
	const {
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
	} = useAuth()

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
		}),
		[userState, loginData, registerData, error, isEmailSubmitted, loading]
	)

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)

export const AuthConsumer = AuthContext.Consumer
