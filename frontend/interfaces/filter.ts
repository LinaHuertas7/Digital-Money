export interface FilterSearchQuery {
	key: string
	value: string
}

export interface FilterComponentProps {
	showFilter: boolean
	setShowFilter: (value: boolean) => void
	setFilterCriteria: (value: any) => void
	filterSearchQuery: (value: FilterSearchQuery) => void
}
