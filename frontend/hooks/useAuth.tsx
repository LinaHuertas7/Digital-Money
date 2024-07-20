'use client'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { ErrorMessageType } from '@/types'

import {
	validateRequiredFields,
	validatePassword,
} from '@/app/utils/validations'

import endPoints from '@/constants/api'
import errorMessages from '@/constants/messages'
import {
	LoginData,
	RegisterData,
	ErrorResponse,
	SessionUser,
	AccountData,
	UserProfile,
} from '@/interfaces/index'

import {
	SetCookieServerSide,
	RemoveCookieServerSide,
} from '@/helper/setCookieServerSide'
import { useErrorHandlerApi } from './useErrorHandlerApi'
import { ApiError } from 'next/dist/server/api-utils'

const BaseLoginData = {
	email: '',
	password: '',
}

const BaseRegisterData = {
	firstName: '',
	lastName: '',
	dni: '',
	email: '',
	password: '',
	confirmPassword: '',
	phone: '',
}

const BaseAccountData = {
	alias: '',
	cvu: '',
	id: 0,
	user_id: 0,
	available_amount: 0,
}

const useAuth = ({ handleUserState }: any) => {
	const router = useRouter()
	const { ErrorHandeler } = useErrorHandlerApi()
	const [userState, setUserState] = useState<SessionUser | null>(null)
	const [accountData, setAccountData] = useState<AccountData | null>(
		BaseAccountData
	)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<ErrorMessageType>(null)
	const [isEmailSubmitted, setEmailSubmitted] = useState(false)
	const [loginData, setLoginData] = useState<LoginData>(BaseLoginData)
	const [registerData, setRegisterData] =
		useState<RegisterData>(BaseRegisterData)

	const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		const updatedValue = name === 'dni' ? Number(value) : value
		setRegisterData({
			...registerData,
			[name]: updatedValue,
		})
	}

	const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setLoginData({
			...loginData,
			[name]: value,
		})
	}

	const handleError = (
		error: ErrorResponse,
		errorCode: number,
		errorMessageKey: string,
		isObject: boolean
	) => {
		let errorOutput: ErrorMessageType = errorMessages.defaultError
		if (error.response && error.response.status === errorCode) {
			errorOutput = isObject
				? { [errorMessageKey]: errorMessages[errorMessageKey] }
				: errorMessages[errorMessageKey]
		}
		setError(errorOutput)
	}

	const getUserData = async ({ user_id }: { user_id: number }) => {
		try {
			const { data } = await axios.get(`${endPoints.GET_USER_URL}${user_id}`, {
				headers: {
					Authorization: localStorage.getItem('authToken'),
				},
			})
			setLoading(false)
			handleUserState(data)
		} catch (error) {
			const apiError = error as ApiError
			ErrorHandeler(apiError)
			handleUserState(null)
		}
	}

	const updateUser = async (userId: number, userData: UserProfile) => {
		try {
			const authToken = localStorage.getItem('authToken')
			if (!authToken) throw new Error('No auth token found')

			const { data } = await axios.patch(
				`${endPoints.PATCH_USER_URL}${userId}`,
				userData,
				{
					headers: {
						Authorization: authToken,
					},
				}
			)

			handleUserState(data)
		} catch (error) {
			const apiError = error as ApiError
			ErrorHandeler(apiError)
		}
	}

	const getAccountData = async () => {
		try {
			const { data } = await axios.get(endPoints.GET_ACCOUNT_URL, {
				headers: {
					Authorization: localStorage.getItem('authToken'),
				},
			})

			setLoading(false)
			setAccountData(data)
			return data
		} catch (error) {
			const apiError = error as ApiError
			ErrorHandeler(apiError)
			setAccountData(null)
		}
	}

	const handleEmailSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setError(null)
		setLoading(true)
		try {
			await axios.post(endPoints.REGISTER_URL, {
				email: loginData.email,
			})
			setError(errorMessages.userNotExist)
		} catch (error) {
			const apiError = error as ApiError
			const errorResponse = error as ErrorResponse
			ErrorHandeler(apiError)
			if (errorResponse.response && errorResponse.response.status === 409) {
				setEmailSubmitted(true)
			} else {
				setError(errorMessages.emailVerificationError)
			}
		} finally {
			setLoading(false)
		}
	}

	const handleLoginSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setError(null)
		setLoading(true)
		try {
			const response = await axios.post(endPoints.LOGIN_URL, {
				email: loginData.email,
				password: loginData.password,
			})
			if (response.data.token) {
				setLoginData(BaseLoginData)
				await setEmailSubmitted(false)
				SetCookieServerSide({ name: 'authToken', value: response.data.token })
				await localStorage.setItem('authToken', response.data.token)
				const accountData = await getAccountData()
				await getUserData({ user_id: accountData.user_id })
				router.push('/home')
			}
		} catch (error) {
			const apiError = error as ApiError
			const errorResponse = error as ErrorResponse
			handleError(errorResponse, 401, 'incorrectPassword', false)
			ErrorHandeler(apiError)
		} finally {
			setLoading(false)
		}
	}

	const handleRegisterSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setError(null)
		const errors = validateRequiredFields(registerData)
		const passwordError = validatePassword(registerData.password)
		if (passwordError) {
			errors.password = passwordError
		}
		if (Object.keys(errors).length > 0) {
			setError(errors)
			return
		}
		try {
			setRegisterData(BaseRegisterData)
			setLoading(true)
			await axios.post(endPoints.REGISTER_URL, registerData)
			router.push('/register/success')
		} catch (error) {
			const apiError = error as ApiError
			const errorResponse = error as ErrorResponse
			handleError(errorResponse, 409, 'userAlreadyExists', true)
			ErrorHandeler(apiError)
		} finally {
			setLoading(false)
		}
	}

	const handleLogOut = async () => {
		handleUserState(null)
		localStorage.removeItem('authToken')
		await RemoveCookieServerSide({ name: 'authToken' })
		router.push('/')
	}

	return {
		userState,
		loginData,
		handleLoginChange,
		registerData,
		getUserData,
		handleRegisterChange,
		error,
		isEmailSubmitted,
		handleEmailSubmit,
		handleLoginSubmit,
		loading,
		handleRegisterSubmit,
		getAccountData,
		handleLogOut,
		accountData,
		updateUser,
	}
}

export default useAuth
