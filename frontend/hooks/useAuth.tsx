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
} from '@/interfaces/index'

const useAuth = () => {
	const router = useRouter()
	const [userState, setUserState] = useState<SessionUser | null>(null)
	const [accountData, setAccountData] = useState<AccountData | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<ErrorMessageType>(null)
	const [isEmailSubmitted, setEmailSubmitted] = useState(false)
	const [loginData, setLoginData] = useState<LoginData>({
		email: '',
		password: '',
	})
	const [registerData, setRegisterData] = useState<RegisterData>({
		firstName: '',
		lastName: '',
		dni: '',
		email: '',
		password: '',
		confirmPassword: '',
		phone: '',
	})

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

			console.log({ data })

			setLoading(false)
			setUserState(data)
		} catch (error) {
			console.log({ error })
			setUserState(null)
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
			const errorResponse = error as ErrorResponse
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
				localStorage.setItem('authToken', response.data.token)
				const accountData = await getAccountData()
				await getUserData({ user_id: accountData.user_id })
				router.push('/home')
			}
		} catch (error) {
			const errorResponse = error as ErrorResponse
			handleError(errorResponse, 401, 'incorrectPassword', false)
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
			setLoading(true)
			await axios.post(endPoints.REGISTER_URL, registerData)
			router.push('/register/success')
		} catch (error) {
			const errorResponse = error as ErrorResponse
			handleError(errorResponse, 409, 'userAlreadyExists', true)
		} finally {
			setLoading(false)
		}
	}

	return {
		userState,
		loginData,
		handleLoginChange,
		registerData,
		handleRegisterChange,
		error,
		isEmailSubmitted,
		handleEmailSubmit,
		handleLoginSubmit,
		loading,
		handleRegisterSubmit,
		getAccountData,
	}
}

export default useAuth
