export interface InputFieldComponentProps {
	type: string
	placeholder: string
	style?: string
	value?: string | number
	required?: boolean
	name?: string
	onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
