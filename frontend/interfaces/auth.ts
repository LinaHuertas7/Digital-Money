import { ErrorMessageType } from '@/types'

export interface LoginData {
	email: string
	password: string
}

export interface RegisterData {
	firstName: string
	lastName: string
	dni: string
	email: string
	password: string
	confirmPassword: string
	phone: string
}

export interface State {
	[key: string]: string | number
}

export interface ErrorResponse {
	response?: { [key: string]: string[] | number | string }
}

export interface SessionUser {
	dni: number
	email: string
	firstname: string
	id: number
	lastname: string
	phone: string
	password: string
}
export interface UserProfile {
	dni?: number
	email?: string
	firstname?: string
	lastname?: string
	phone?: string
	password?: string
}

export interface AccountData {
	alias: string
	available_amount: number
	cvu: string
	id: number | undefined
	user_id: number
}

export interface ContextProps {
	isAuthenticated: boolean
	userState: SessionUser | null
	loginData: LoginData
	registerData: RegisterData
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
	handleLogOut: () => void
	accountData: AccountData | null
	handleUserState: () => void
	updateUser: (userId: number, user: UserProfile) => void
}

export interface AuthContextProviderProps {
	children: React.ReactNode
}

export interface GetInitialsProps {
	firstname: string | undefined
	lastname: string | undefined
}
