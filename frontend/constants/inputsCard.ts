import {
	handleCodChangeValidator,
	handleExpirationDateChangeValidator,
	handleFirstLastNameChangeValidator,
	handleNumberIdChangeValidator,
} from '@/interfaces'

export const handleCodChange = ({
	e,
	handleNumberInputChangeNewCardData,
}: handleCodChangeValidator) => {
	const value = e.target.value
	if (value.length <= 16 && /^[0-9]*$/.test(value)) {
		handleNumberInputChangeNewCardData(e)
	}
}

export const handleExpirationDateChange = ({
	e,
	handleInputChangeNewCardData,
}: handleExpirationDateChangeValidator) => {
	const value = e.target.value
	if (/^(0[1-9]|1[0-2])\/(202[1-9]|20[3-9][0-9])$/.test(value)) {
		handleInputChangeNewCardData(e)
	}
}

export const handleFirstLastNameChange = ({
	e,
	handleInputChangeNewCardData,
}: handleFirstLastNameChangeValidator) => {
	const value = e.target.value.toUpperCase()
	handleInputChangeNewCardData({ ...e, target: { ...e.target, value } })
}

export const handleNumberIdChange = ({
	e,
	handleNumberInputChangeNewCardData,
}: handleNumberIdChangeValidator) => {
	const value = e.target.value
	if (value.length <= 3 && /^[0-9]*$/.test(value)) {
		handleNumberInputChangeNewCardData(e)
	}
}
