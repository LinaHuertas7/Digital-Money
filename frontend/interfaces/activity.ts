export interface ActivityProps {
	itsComponent?: boolean
}

export interface CardProps {
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
