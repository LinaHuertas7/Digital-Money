'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { useAuthContext } from '@/context/AuthContext'

const DepositCardComponent = () => {
	const { accountData } = useAuthContext()

	return (
		<div className="bg-custom-dark-gray px-6 md:px-10 pt-2 md:pt-4 pb-10 flex flex-col w-full rounded-xl shadow-md mb-5">
			<div className="my-5 text-sm md:text-base">
				Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta
			</div>

			<div className="flex justify-between my-4">
				<div>
					<div className="text-custom-green font-semibold">CVU</div>
					<div>{accountData?.cvu}</div>
				</div>
				<FontAwesomeIcon
					className="my-auto text-custom-green text-2xl"
					icon={faCopy}
				/>
			</div>

			<div className="flex justify-between my-4">
				<div>
					<div className="text-custom-green font-semibold">Alias</div>
					<div>{accountData?.alias}</div>
				</div>
				<FontAwesomeIcon
					className="my-auto text-custom-green text-2xl"
					icon={faCopy}
				/>
			</div>
		</div>
	)
}

export default DepositCardComponent
