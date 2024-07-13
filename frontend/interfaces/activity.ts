export interface ActivityComponentProps {
	itsComponent?: boolean
}

export interface CardComponentProps {
	title: string
	children: React.ReactNode
}

export interface Card {
	id: number
	account_id: number
	number_id: number
	first_last_name: string
	cod: number
	expiration_date: string
}

export interface NewCard {
	cod: number | string
	expiration_date: string
	first_last_name: string
	number_id: number | string
}

export interface CardDelete {
	card_id: number
	account_id: number
}

export interface CardItemComponentProps {
	card: Card
	delete_card: (data: CardDelete) => void
	account_id: number
}

export interface ApiError {
	response?: {
		data: {
			error: string
			message: string
			statusCode: number
		}
		status: number
		statusText: string
	}
	request?: any
	message: string
	code?: string
}
