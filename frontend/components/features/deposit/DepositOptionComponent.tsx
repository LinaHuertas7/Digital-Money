import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

import { DepositOptionProps } from '@/interfaces'

const DepositOption = ({ icon, text, href }: DepositOptionProps) => {
	return (
		<div className="bg-custom-dark-gray px-10 pt-14 pb-14 flex flex-col w-full rounded-xl shadow-md mb-3 text-custom-green">
			<div className="font-semibold flex justify-between">
				<Link className="hover:underline flex" href={href}>
					<FontAwesomeIcon className="text-2xl" icon={icon} />
					<div className="mx-5">{text}</div>
				</Link>
				<Link className="hover:underline" href={href}>
					<FontAwesomeIcon className="text-2xl" icon={faArrowRight} />
				</Link>
			</div>
		</div>
	)
}

export default DepositOption
