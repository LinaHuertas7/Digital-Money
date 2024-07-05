import React from 'react'
import Card from '@/components/ui/Card'

export default function Home() {
	return (
		<div className="flex flex-col w-full bg-main-landing bg-no-repeat bg-cover bg-top justify-between font-sans h-screen-minus-layout">
			<div className="h-1/2 flex flex-col justify-center pl-14">
				<h2 className="text-5xl w-96 mb-3">
					De ahora en adelante, hacés más con tu dinero
				</h2>
				<p className="text-custom-green text-4xl">
					Tu nueva <span className="font-semibold">billetera virtual</span>
				</p>
			</div>
			<div className="relative h-1/2">
				<div className="bg-custom-green w-full h-4/6 xl:h-36 rounded-t-3xl absolute bottom-0"></div>
				<div className="absolute w-full bottom-10 flex flex-col space-y-6 xl:space-y-0 xl:flex-row xl:space-x-4 xl:justify-center items-center xl:items-stretch">
					<Card title="Transferí dinero">
						<p className="text-black text-xl w-11/12">
							Desde Digital Money House vas a poder transferir dinero a otras
							cuentas, asi como también recibir transferencias y nuclear tu
							capital en nuestra billetera virtual
						</p>
					</Card>
					<Card title="Pago de servicios">
						<p className="text-black text-xl w-11/12">
							Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido
							y conveniente. Olvidate de las facturas en papel
						</p>
					</Card>
				</div>
			</div>
		</div>
	)
}
