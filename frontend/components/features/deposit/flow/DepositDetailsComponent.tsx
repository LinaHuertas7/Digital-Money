import { DepositDetailsComponentProps } from '@/interfaces'
import React from 'react'

const DepositDetailsComponent = ({
	step,
	headerContent = <></>,
	children,
	deposit,
	accountData,
	onSubmit,
	checkInfoProps,
}: DepositDetailsComponentProps) => {
	return (
		<div className="bg-custom-dark-gray px-5 md:px-10 py-5 md:py-10 flex flex-col w-full rounded-xl shadow-md mb-5 font-light">
			{headerContent}
			<div className="mt-7">
				<div>{children}</div>
				<div
					className={`font-bold mt-1 ${step == 4 ? 'text-custom-green' : ''}`}
				>
					{step === 3
						? checkInfoProps?.amount?.toLocaleString()
						: deposit?.amount?.toLocaleString()}
				</div>
			</div>
			<div className="mt-7">
				<div className="text-sm">Para</div>
				<div
					className={`font-bold text-2xl mt-2 ${
						step == 4 ? 'text-custom-green' : ''
					}`}
				>
					{step === 3
						? checkInfoProps?.selectedCard?.first_last_name
						: deposit?.destination}
				</div>
			</div>
			<div className="mt-5">
				<div className="text-xl">Brubank</div>
				<div className="mt-1 text-sm">
					CVU:{' '}
					{step === 3 ? checkInfoProps?.selectedCard?.cod : deposit?.origin}
				</div>
			</div>
			{step !== 4 && (
				<button
					type="button"
					className="rounded-lg py-4 px-3 mt-6 md:mt-0 text-sm font-bold bg-custom-green text-black w-52 text-center ml-auto"
					onClick={() => onSubmit && onSubmit(accountData?.id || 0)}
				>
					Continuar
				</button>
			)}
		</div>
	)
}

export default DepositDetailsComponent
