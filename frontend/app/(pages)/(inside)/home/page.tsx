import Link from 'next/link'

import Activity from '@/components/features/Activity'

const HomePage = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="bg-custom-dark-gray px-10 pt-4 pb-10 flex flex-col w-full rounded-xl shadow-md mb-5">
				<div className="text-white flex justify-end">
					<Link
						href="/login"
						className="py-5 px-3 text-sm underline text-center"
					>
						Ver tarjetas
					</Link>
					<Link
						href="/login"
						className="py-5 px-3 text-sm underline text-center"
					>
						Ver CVU
					</Link>
				</div>
				<div className="px-2 mb-4">Dinero disponible</div>
				<div className="flex">
					<div className="border-2 border-custom-green rounded-full px-4 py-3 text-3xl">
						$ 6.890.534,17
					</div>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-4 w-full mb-5">
				<Link
					href="/login"
					className="bg-custom-green rounded-xl shadow-md text-center py-8 text-black text-xl font-bold"
				>
					Cargar dinero
				</Link>
				<Link
					href="/login"
					className="bg-custom-green rounded-xl shadow-md text-center py-8 text-black text-xl font-bold"
				>
					Pago de servicios
				</Link>
			</div>
			<Activity itsComponent={true} />
		</div>
	)
}

export default HomePage
