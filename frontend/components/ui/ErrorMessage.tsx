import { faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Styles {
	[key: string]: {
		textColor: string
		title: string
		icon: any
	}
}

const styles: Styles = {
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
}: {
	message: string | null
	type: string
}) => {
	const { textColor, title, icon } = styles[type] || styles.info

	return (
		<div className="bg-custom-dark-gray px-10 py-5 md:py-7 flex flex-col w-full rounded-xl shadow-md mt-7 mb-5">
			<div className="flex flex-col mb-7">
				<FontAwesomeIcon className={`text-6xl mx-5 ${textColor}`} icon={icon} />
				<div className="mt-5 font-bold mx-auto text-2xl">{title}</div>
			</div>

			<hr className="border-0 h-px bg-custom-gray" />

			<div className="text-sm mt-8 mb-5 max-w-96 text-center mx-auto">
				{message}
			</div>
		</div>
	)
}

export default MessageComponent
