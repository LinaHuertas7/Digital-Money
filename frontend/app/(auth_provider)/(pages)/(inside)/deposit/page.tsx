import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowRight,
	faCreditCard,
	faUserCircle,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const DepositPage = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="bg-custom-dark-gray px-10 pt-14 pb-14 flex flex-col w-full rounded-xl shadow-md mb-3 text-custom-green">
				<div className="font-semibold flex justify-between">
					<Link className="hover:underline flex" href="/deposit/wire-transfer">
						<FontAwesomeIcon className="text-2xl" icon={faUserCircle} />
						<div className="mx-5">Transferencia bancaria</div>
					</Link>
					<Link className="hover:underline" href="/deposit/wire-transfer">
						<FontAwesomeIcon className="text-2xl" icon={faArrowRight} />
					</Link>
				</div>
			</div>

			<div className="bg-custom-dark-gray px-10 pt-14 pb-14 flex flex-col w-full rounded-xl shadow-md mb-5 text-custom-green">
				<div className="font-semibold flex justify-between">
					<Link className="hover:underline flex" href="/deposit/card">
						<FontAwesomeIcon className="text-2xl" icon={faCreditCard} />
						<div className="mx-5">Seleccionar tarjeta</div>
					</Link>
					<Link className="hover:underline" href="/deposit/card">
						<FontAwesomeIcon className="text-2xl" icon={faArrowRight} />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default DepositPage
