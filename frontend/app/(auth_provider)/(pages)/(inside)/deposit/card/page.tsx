'use client'

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faEdit } from '@fortawesome/free-solid-svg-icons'

import SelectCardComponent from '@/components/features/deposit/flow/SelectCardComponent'
import useAccountCards from '@/hooks/useAccountCards'
import { useAuthContext } from '@/context/AuthContext'
import AmountComponent from '@/components/features/deposit/flow/AmountComponent'
import useDepositData from '@/hooks/useDepositData'
import { CheckInfoProps } from '@/interfaces'
import SpinnerComponent from '@/components/ui/SpinnerComponent'
import DepositDetailsComponent from '@/components/features/deposit/flow/DepositDetailsComponent'
import Link from 'next/link'
import { formatDate } from '@/helper/formatDate'

const DepositPage = () => {
	const {
		deposit,
		selectedCard,
		amount,
		loading,
		isSuccess,
		selectCard,
		updateAmount,
		submitDeposit,
	} = useDepositData()

	const { cards, fetchCards, loading: accountLoading } = useAccountCards()
	const { isAuthenticated, accountData } = useAuthContext()
	const [step, setStep] = useState(1)

	const checkInfoProps: CheckInfoProps = {
		selectedCard,
		amount: amount,
		submitDeposit,
		accountData,
	}

	useEffect(() => {
		if (accountData && accountData?.id) {
			fetchCards(accountData?.id)
		}
	}, [isAuthenticated, accountData?.id])

	const nextStep = () => setStep((prevStep) => prevStep + 1)
	const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1))

	useEffect(() => {
		if (isSuccess && step === 3) {
			nextStep()
		}
	}, [isSuccess, step])

	return (
		<div className="flex flex-col justify-center items-center">
			{accountLoading ? (
				<SpinnerComponent />
			) : (
				step === 1 && (
					<SelectCardComponent
						cardsData={cards}
						onNext={nextStep}
						onCardSelect={selectCard}
						isCardSelected={selectedCard !== undefined}
					/>
				)
			)}
			{step === 2 && (
				<AmountComponent onNext={nextStep} updateAmount={updateAmount} />
			)}
			{step === 3 && (
				<DepositDetailsComponent
					checkInfoProps={checkInfoProps}
					step={step}
					accountData={accountData}
					onSubmit={submitDeposit}
					headerContent={
						<div className="mt-2 text-xl text-custom-green font-bold">
							Revisá que está todo bien
						</div>
					}
				>
					<>
						Vas a transferir
						<button type="button" onClick={prevStep}>
							<FontAwesomeIcon
								className="text-custom-green text-2xl mx-5"
								icon={faEdit}
							/>
						</button>
					</>
				</DepositDetailsComponent>
			)}
			{loading ? (
				<SpinnerComponent />
			) : (
				isSuccess &&
				step === 4 && (
					<>
						<div className="bg-custom-green px-5 md:px-10 py-5 md:py-6 flex flex-col w-full rounded-xl shadow-md mb-5 text-black">
							<FontAwesomeIcon className="text-6xl mx-5" icon={faCheckCircle} />
							<div className="mt-5 font-bold mx-auto text-lg md:text-2xl text-center">
								Ya cargamos el dinero en tu cuenta
							</div>
						</div>
						<DepositDetailsComponent step={step} deposit={deposit}>
							<p>{deposit?.dated && formatDate(deposit?.dated)}</p>
						</DepositDetailsComponent>

						<div className="flex flex-col md:flex-row justify-end w-full">
							<Link
								type="button"
								href="/deposit"
								className="rounded-lg mb-3 md:mb-0 py-4 px-3 text-sm font-bold bg-custom-light-gray text-black w-full md:w-52 text-center md:mx-6"
							>
								Ir al inicio
							</Link>

							<button
								type="button"
								className="rounded-lg mb-3 md:mb-0 py-4 px-3 text-sm font-bold bg-custom-green text-black w-full md:w-52 text-center"
							>
								Descargar comprobante
							</button>
						</div>
					</>
				)
			)}
		</div>
	)
}

export default DepositPage
