import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

import React from 'react'
import { DepositDetailProps } from '@/interfaces'

const DepositDetailComponent = ({ label, value }: DepositDetailProps) => {
	const handleCopy = () => {
		if (value) {
			navigator.clipboard.writeText(value)
		}
	}

	return (
		<div className="flex justify-between my-4">
			<div>
				<div className="text-custom-green font-semibold">{label}</div>
				<div>{value}</div>
			</div>
			<FontAwesomeIcon
				onClick={handleCopy}
				className="my-auto text-custom-green text-2xl cursor-pointer"
				icon={faCopy}
			/>
		</div>
	)
}

export default DepositDetailComponent
