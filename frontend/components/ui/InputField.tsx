import { InputFieldProps } from '@/interfaces'
import React from 'react'

const InputField = ({
	type,
	placeholder,
	style = '',
	value,
	required,
	name,
	onChange,
}: InputFieldProps) => {
	return (
		<input
			required={required}
			type={type}
			placeholder={placeholder}
			className={`text-black rounded-lg py-5 px-4 text-sm focus:outline-none ${style}`}
			value={value}
			onChange={onChange}
			name={name}
		/>
	)
}
export default InputField
