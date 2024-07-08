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
}

export interface AccountData {
	alias: string
	available_amount: number
	cvu: string
	id: number
	user_id: number
}
