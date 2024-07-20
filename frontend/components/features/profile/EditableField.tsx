import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faCheck } from '@fortawesome/free-solid-svg-icons'

interface EditableFieldProps {
	name: string
	value: string
	onSave: (newValue: string) => void
}

const EditableField = ({ value, onSave, name }: EditableFieldProps) => {
	const [isEditing, setIsEditing] = useState(false)
	const [currentValue, setCurrentValue] = useState(value || '')

	useEffect(() => {
		setCurrentValue(value || '')
	}, [value])

	const handleEdit = () => setIsEditing(true)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setCurrentValue(e.target.value)

	const handleSave = () => {
		onSave(currentValue)
		setIsEditing(false)
	}

	useEffect(() => {
		if (name === 'password') {
			setCurrentValue('Edit Password')
		}
	}, [name, value])

	return (
		<div className="flex justify-between">
			{isEditing ? (
				<>
					<input
						name={name}
						defaultValue={''}
						type="text"
						value={currentValue || ''}
						onChange={handleChange}
						className="w-full text-gray-400"
					/>
					<FontAwesomeIcon
						className="my-auto text-gray-400 cursor-pointer"
						icon={faCheck}
						onClick={handleSave}
					/>
				</>
			) : (
				<>
					{name !== 'password' ? (
						<div className="w-full text-gray-400">{value || ''}</div>
					) : (
						<>
							<div className="w-full text-gray-400">********</div>
						</>
					)}
					<FontAwesomeIcon
						className="my-auto text-gray-400 cursor-pointer"
						icon={faPencil}
						onClick={handleEdit}
					/>
				</>
			)}
		</div>
	)
}

export default EditableField
