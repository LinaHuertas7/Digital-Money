export const formatExpiryDate = (date: string) => {
	return date.replace(/\//g, '')
}

export const formatDate = (dateString: string) => {
	const date = new Date(dateString)

	const dateFormatter = new Intl.DateTimeFormat('es', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})

	const timeFormatter = new Intl.DateTimeFormat('es', {
		hour: 'numeric',
		minute: 'numeric',
		hour12: false,
	})

	const formattedDate = dateFormatter.format(date)
	const formattedTime = timeFormatter.format(date)

	return `${formattedDate} a ${formattedTime} hs.`
}
