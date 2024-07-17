import React from 'react'
import CardComponent from '@/components/ui/CardComponent'

export default function Home() {
	return (
		<div className="bg-main-landing-mobile bg-no-repeat bg-cover bg-top md:bg-main-landing flex flex-col w-full font-sans md:h-screen-minus-layout">
			<div className="h-3/4 flex flex-col pl-5 md:pl-14">
				<div className="mt-9 mb-28 md:mb-0">
					<h2 className="text-3xl md:text-5xl w-1/2 md:w-96 mb-3">
						De ahora en adelante, hacés más con tu dinero
					</h2>
					<p className="text-custom-green text-xl md:text-4xl w-2/5 md:w-full">
						Tu nueva <span className="font-semibold">billetera virtual</span>
					</p>
				</div>
			</div>
			<div className="md:relative flex items-center justify-center w-full md:w-9/12 mx-auto px-8 md:px-8 z-10 bg-custom-green rounded-t-3xl">
				<div className="md:absolute bg-modern-blue mx-auto py-3 text-2xl text-white w-full z-1 flex flex-col md:flex-row justify-center -mt-20 md:mt-0">
					<CardComponent title="Transferí dinero">
						<p className="text-black text-sm md:text-lg w-11/12">
							Desde Digital Money House vas a poder transferir dinero a otras
							cuentas, asi como también recibir transferencias y nuclear tu
							capital en nuestra billetera virtual
						</p>
					</CardComponent>
					<CardComponent title="Pago de servicios">
						<p className="text-black text-sm md:text-lg w-11/12">
							Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido
							y conveniente. Olvidate de las facturas en papel
						</p>
					</CardComponent>
				</div>
			</div>
			<div className="bg-custom-green w-full h-1/4 rounded-t-3xl bottom-0"></div>
		</div>
	)
}
