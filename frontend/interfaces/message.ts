export interface ErrorMessage {
	[key: string]: string | object | null
}
export interface ErrorRegisterMessage {
	firstName?: string
	lastName?: string
	dni?: string
	email?: string
	password?: string
	phone?: string
	userAlreadyExists?: string
}

export interface StylesMessage {
	[key: string]: {
		textColor: string
		title: string
		icon: any
	}
}

export interface Message {
	message: string | null
	type: string
	duration?: number | null
}
