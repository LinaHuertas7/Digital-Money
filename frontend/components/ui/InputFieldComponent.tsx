import { InputFieldComponentProps } from '@/interfaces'
import React from 'react'

const InputFieldComponent = ({
	type,
	placeholder,
	style = '',
	value,
	required,
	name,
	onChange,
	onFocus,
}: InputFieldComponentProps) => {
	return (
		<input
			required={required}
			type={type}
			placeholder={placeholder}
			className={`text-black rounded-lg py-5 px-4 text-sm focus:outline-none ${style}`}
			value={value}
			onChange={onChange}
			onFocus={onFocus}
			name={name}
		/>
	)
}
export default InputFieldComponent
