export interface InputFieldProps {
	type: string
	placeholder: string
	style?: string
	value?: string | number
	required?: boolean
	name?: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
