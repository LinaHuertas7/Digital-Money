import { CardItemComponentProps } from '@/interfaces'

const CardItemComponent = ({
	card,
	delete_card,
	account_id,
}: CardItemComponentProps) => (
	<div className="border-b border-black flex py-5 justify-between w-full">
		<div className="flex">
			<div className="my-auto bg-custom-green rounded-full h-10 w-10"></div>
			<div className="my-auto mx-4">{`Terminada en ${card.cod
				.toString()
				.slice(-4)}`}</div>
		</div>
		<button
			className="text-black font-semibold my-auto"
			onClick={() => delete_card({ card_id: card.id, account_id })}
			aria-label={`Eliminar tarjeta terminada en ${card.cod
				.toString()
				.slice(-4)}`}
		>
			Eliminar
		</button>
	</div>
)

export default CardItemComponent
