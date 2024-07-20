import React, { createContext, useContext, useEffect } from 'react'

import { AuthContextProviderProps, ContextProps } from '@/interfaces'
import { useRouter } from 'next/navigation'

import useAuth from '@/hooks/useAuth'
import useUserState from '@/hooks/useUserState'
import { RemoveCookieServerSide } from '@/helper/setCookieServerSide'
export const AuthContext = createContext({} as ContextProps)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
	const router = useRouter()
	const { userState, handleUserState } = useUserState()
	const {
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
		updateUser,
	} = useAuth({
		userState,
		handleUserState,
	})

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
		} else {
			RemoveCookieServerSide({ name: 'authToken' })
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
		handleLogOut,
		accountData,
		handleUserState,
		getUserData,
		getAccountData,
		updateUser,
	}

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)

export const AuthConsumer = AuthContext.Consumer
