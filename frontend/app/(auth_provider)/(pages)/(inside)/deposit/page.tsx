import { faCreditCard, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import DepositOption from '@/components/features/deposit/DepositOptionComponent'

const DepositPage = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<DepositOption
				icon={faUserCircle}
				text="Transferencia bancaria"
				href="/deposit/wire-transfer"
			/>
			<DepositOption
				icon={faCreditCard}
				text="Seleccionar tarjeta"
				href="/deposit/card"
			/>
		</div>
	)
}

export default DepositPage
