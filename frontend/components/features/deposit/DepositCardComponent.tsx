'use client'
import { useAuthContext } from '@/context/AuthContext'
import DepositDetailComponent from './DepositDetailComponent'

const DepositCardComponent = () => {
	const { accountData } = useAuthContext()

	return (
		<div className="bg-custom-dark-gray px-6 md:px-10 pt-2 md:pt-4 pb-10 flex flex-col w-full rounded-xl shadow-md mb-5">
			<div className="my-5 text-sm md:text-base">
				Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta
			</div>

			<DepositDetailComponent label="CVU" value={accountData?.cvu} />
			<DepositDetailComponent label="Alias" value={accountData?.alias} />
		</div>
	)
}

export default DepositCardComponent
