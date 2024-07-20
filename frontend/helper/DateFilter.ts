const parseDate = (dateString: string) => new Date(dateString)

const getDateRange = (filterValue: string) => {
	const today = new Date()
	today.setHours(0, 0, 0, 0)

	switch (filterValue) {
		case 'today':
			return { start: today, end: new Date() }
		case 'yesterday':
			const yesterday = new Date(today)
			yesterday.setDate(yesterday.getDate() - 1)
			return { start: yesterday, end: today }
		case 'last_week':
			const lastWeek = new Date(today)
			lastWeek.setDate(lastWeek.getDate() - 7)
			return { start: lastWeek, end: today }
		case 'last_15_days':
			const last15Days = new Date(today)
			last15Days.setDate(last15Days.getDate() - 15)
			return { start: last15Days, end: today }
		case 'last_month':
			const lastMonth = new Date(today)
			lastMonth.setMonth(lastMonth.getMonth() - 1)
			return { start: lastMonth, end: today }
		case 'last_year':
			const lastYear = new Date(today)
			lastYear.setFullYear(lastYear.getFullYear() - 1)
			return { start: lastYear, end: today }
		case 'custom':
			return { start: new Date(0), end: new Date() }
		default:
			return { start: new Date(0), end: new Date() }
	}
}

export { parseDate, getDateRange }
