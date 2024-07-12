import React, { createContext, useContext, useEffect } from 'react'

import { AuthContextProviderProps, ContextProps } from '@/interfaces'
import { useRouter } from 'next/navigation'

import useAuth from '@/hooks/useAuth'
export const AuthContext = createContext({} as ContextProps)

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
		handleLogOut,
		accountData,
	} = useAuth()

	useEffect(() => {
		const processAccountData = async () => {
			try {
				const accountData = await getAccountData()
				if (accountData && accountData.user_id !== undefined) {
					await getUserData({ user_id: accountData.user_id })
				} else {
					throw new Error('Account data or user ID is missing')
				}
			} catch (error) {
				router.push('/home')
			}
		}
		const token = localStorage.getItem('authToken')

		if (token) {
			processAccountData()
		}
	}, [])

	const values = {
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
		handleLogOut,
		accountData,
	}

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)

export const AuthConsumer = AuthContext.Consumer
