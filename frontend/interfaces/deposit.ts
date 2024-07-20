import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { AccountData, Card } from '@/interfaces'

export interface DepositOptionProps {
	icon: IconDefinition
	text: string
	href: string
}

export interface Deposit {
	account_id: number
	amount: number
	dated: string
	description: string
	destination: string
	id: number
	origin: string
	type: string
}

export interface DepositDetailProps {
	label: string
	value: string | undefined
}

export interface CheckInformationComponentProps {
	onNext: () => void
	onPrev: () => void
	checkInfoProps: CheckInfoProps
}

export interface Transaction {
	account_id: number
	amount: number
	dated: string
	description: string
	destination: string
	id: number
	origin: string
	type: string
}

export interface DepositDetailsComponentProps {
	children: JSX.Element
	accountData?: AccountData | null
	deposit?: Deposit
	isSuccess?: boolean
	step: number
	checkInfoProps?: CheckInfoProps
	headerContent?: JSX.Element
	onSubmit?: (account_id: number) => Promise<void>
}

export interface CheckInfoProps {
	selectedCard: Card | undefined
	amount: number
	submitDeposit: (account_id: number) => Promise<void>
	accountData: AccountData | null
}

export interface AmountComponentProps {
	onNext: () => void
	updateAmount: (amount: number) => void
}

export interface SelectCardComponentProps {
	cardsData: Card[]
	onNext: () => void
	onCardSelect: (card: Card) => void
	isCardSelected: boolean | undefined
}

export interface Transference {
	account_id: number
	amount: number
	dated: string
	description: string
	destination: string
	id: number
	origin: string
	type: string
}

export interface handleCodChangeValidator {
	e: React.ChangeEvent<HTMLInputElement>
	handleNumberInputChangeNewCardData: (
		e: React.ChangeEvent<HTMLInputElement>
	) => void
}

export interface handleExpirationDateChangeValidator {
	e: React.ChangeEvent<HTMLInputElement>
	handleInputChangeNewCardData: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface handleFirstLastNameChangeValidator {
	e: React.ChangeEvent<HTMLInputElement>
	handleInputChangeNewCardData: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface handleNumberIdChangeValidator {
	e: React.ChangeEvent<HTMLInputElement>
	handleNumberInputChangeNewCardData: (
		e: React.ChangeEvent<HTMLInputElement>
	) => void
}
