import React, { useState, useEffect } from 'react'

import { faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Message, StylesMessage } from '@/interfaces/index'

const styles: StylesMessage = {
	info: {
		textColor: 'text-custom-green',
		title: 'Información',
		icon: faInfoCircle,
	},
	error: {
		textColor: 'text-red-700',
		title: 'Error!',
		icon: faTimesCircle,
	},
}

const MessageComponent = ({
	message,
	type = 'info',
	duration = null,
}: Message & { duration?: number | null }) => {
	const { textColor, title, icon } = styles[type] || styles.info
	const [isVisible, setIsVisible] = useState(true)

	useEffect(() => {
		if (duration && duration > 0) {
			const timer = setTimeout(() => {
				setIsVisible(false)
			}, duration)

			return () => clearTimeout(timer)
		}
	}, [duration])

	if (!isVisible) return null

	return (
		<div className="bg-custom-dark-gray px-10 py-2 md:py-7 flex w-full rounded-xl shadow-md mb-5">
			<div className="flex items-center">
				<FontAwesomeIcon className={`text-6xl ${textColor}`} icon={icon} />
				<div className="flex-grow ml-4">
					<div className="font-bold text-2xl">{title}</div>
					<hr className="border-0 h-px bg-custom-gray my-2" />
					<div className="text-sm text-center">{message}</div>
				</div>
			</div>
		</div>
	)
}

export default MessageComponent
