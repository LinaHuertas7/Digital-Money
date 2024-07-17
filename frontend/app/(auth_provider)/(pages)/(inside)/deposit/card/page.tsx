'use client'

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import SelectCardComponent from '@/components/features/deposit/flow/SelectCardComponent'
import useAccountCards from '@/hooks/useAccountCards'
import { useAuthContext } from '@/context/AuthContext'
import AmountComponent from '@/components/features/deposit/flow/AmountComponent'
import CheckInformationComponent from '@/components/features/deposit/flow/CheckInformationComponent'
import useDepositData from '@/hooks/useDepositData'
import { CheckInfoProps } from '@/interfaces'
import SpinnerComponent from '@/components/ui/SpinnerComponent'

const DepositPage = () => {
	const {
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
				<CheckInformationComponent
					checkInfoProps={checkInfoProps}
					onNext={nextStep}
				/>
			)}
			{loading ? (
				<SpinnerComponent />
			) : (
				isSuccess && (
					<div className="bg-custom-green px-10 py-5 md:py-6 flex flex-col w-full rounded-xl shadow-md mb-5 text-black">
						<FontAwesomeIcon className="text-6xl mx-5" icon={faCheckCircle} />
						<div className="mt-5 font-bold mx-auto text-2xl">
							Ya cargamos el dinero en tu cuenta
						</div>
					</div>
				)
			)}
		</div>
	)
}

export default DepositPage
