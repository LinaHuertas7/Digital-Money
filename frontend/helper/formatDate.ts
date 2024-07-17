export const formatExpiryDate = (date: string) => {
	return date.replace(/\//g, '')
}

export const formattedDate =
	new Date().toLocaleString('es-ES', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		hour12: false,
	}) + ' hs'
