const CurrencyFormat = (amount: number) => {
	const formatted = Intl.NumberFormat('de-DE', {
		style: 'currency',
		currency: 'USD',
		currencyDisplay: 'symbol',
	}).format(amount)

	if (formatted.endsWith('$')) {
		return `$ ${formatted.slice(0, -1)}`
	}

	return formatted
}

export default CurrencyFormat
