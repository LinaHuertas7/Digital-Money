import { CheckInformationComponentProps } from '@/interfaces'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CheckInformationComponent = ({
	checkInfoProps,
}: CheckInformationComponentProps) => {
	return (
		<div className="bg-custom-dark-gray px-10 py-5 md:py-10 flex flex-col w-full rounded-xl shadow-md mb-5 font-light">
			<div className="mt-2 text-xl text-custom-green font-bold">
				Revisá que está todo bien
			</div>
			<div className="mt-7">
				<div>
					Vas a transferir
					<FontAwesomeIcon
						className="text-custom-green text-2xl mx-5"
						icon={faEdit}
					/>
				</div>
				<div className="font-bold mt-1">{checkInfoProps.amount}</div>
			</div>

			<div className="mt-7">
				<div className="text-sm">Para</div>
				<div className="font-bold text-2xl mt-2">
					{checkInfoProps?.selectedCard?.first_last_name}
				</div>
			</div>

			<div className="mt-5">
				<div className="text-xl">Brubank</div>
				<div className="mt-1 text-sm">
					CVU: {checkInfoProps?.selectedCard?.cod}
				</div>
			</div>

			<button
				onClick={() =>
					checkInfoProps.submitDeposit(checkInfoProps.accountData?.id || 0)
				}
				className="rounded-lg py-4 px-3 text-sm font-bold bg-custom-green text-black w-52 text-center ml-auto"
			>
				Continuar
			</button>
		</div>
	)
}

export default CheckInformationComponent
