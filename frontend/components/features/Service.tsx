import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowRight,
	faSearch,
	faSliders,
} from '@fortawesome/free-solid-svg-icons'
import Pagination from '@/components/features/Pagination'

interface ServiceComponentProps {
	itsComponent?: boolean
}

const ServiceComponent = ({ itsComponent = false }: ServiceComponentProps) => {
	const data = [
		{
			id: 1,
			text: 'Claro',
			image:
				'https://www.elempleo.com/co/sitio-empresarial/CompanySites/claro-colombia/resources/images/logo-social.png',
		},
		{
			id: 2,
			text: 'Personal',
			image:
				'https://www.elempleo.com/co/sitio-empresarial/CompanySites/claro-colombia/resources/images/logo-social.png',
		},
		{
			id: 3,
			text: 'Cablevisión',
			image:
				'https://www.elempleo.com/co/sitio-empresarial/CompanySites/claro-colombia/resources/images/logo-social.png',
		},
	]

	return (
		<>
			<div className="flex w-full mb-5 ">
				<div className="bg-white w-full flex items-center border border-gray-300 rounded-lg px-4 py-3 relative shadow-md">
					<FontAwesomeIcon
						className="text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
						icon={faSearch}
					/>
					<input
						type="text"
						placeholder="Buscá entre más de 5.000 empresas"
						className="flex-grow pl-6 p-1 text-base border-none focus:border-none focus-visible:outline-none text-black"
					/>
				</div>
				{!itsComponent && (
					<button className="text-custom-dark-gray bg-custom-green font-semibold ml-5 px-5 rounded-lg shadow-md flex flex-row justify-between w-1/6">
						<div className="my-auto">Filtrar</div>
						<FontAwesomeIcon
							className="text-custom-dark-gray my-auto"
							icon={faSliders}
						/>
					</button>
				)}
			</div>

			<div className="bg-white rounded-xl py-5 md:py-10 px-5 md:px-8 w-full text-black shadow-md">
				<div className="border-b border-gray-300 pb-4 font-semibold">
					Más recientes
				</div>
				{data.map((item, index) => (
					<div
						key={index}
						className="border-b border-gray-300 flex py-2 md:py-4 justify-between text-sm md:text-base"
					>
						<div className="flex">
							<img
								src={item.image}
								alt={item.text}
								className="max-w-14 max-h-14"
							/>
							<div className="my-auto mx-2 md:mx-4">{item.text}</div>
						</div>
						<div className="my-auto">
							<Link
								className="hover:underline font-bold text-sm"
								href={`/services/${item.id}`}
							>
								Seleccionar
							</Link>
						</div>
					</div>
				))}

				{itsComponent ? (
					<div className="pt-6 font-semibold flex justify-between text-xs md:text-base">
						<Link className="hover:underline" href="/activity">
							Ver toda tu actividad
						</Link>
						<Link className="hover:underline text-gray-400" href="/activity">
							<FontAwesomeIcon
								className="text-lg md:text-2xl"
								icon={faArrowRight}
							/>
						</Link>
					</div>
				) : (
					<Pagination />
				)}
			</div>
		</>
	)
}

export default ServiceComponent
