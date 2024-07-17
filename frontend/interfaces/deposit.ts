import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { AccountData, Card } from '@/interfaces'

export interface DepositOptionProps {
	icon: IconDefinition
	text: string
	href: string
}

export interface DepositDetailProps {
	label: string
	value: string | undefined
}

export interface CheckInformationComponentProps {
	onNext: () => void
	checkInfoProps: CheckInfoProps
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
