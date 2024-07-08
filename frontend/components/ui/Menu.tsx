'use client'
import { useMenuContext } from '@/context/MenuContext'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Menu = ({ items }: { items: any }) => {
	const { isOpen, toggleMenu } = useMenuContext()

	return (
		<>
			<div
				className={`fixed md:static top-0 right-0 z-40 md:z-0 w-64 h-screen transition-transform ${
					isOpen ? '' : 'translate-x-full'
				} sm:translate-x-0 md:w-1/5 md:h-auto bg-custom-green text-custom-dark-gray flex flex-col font-semibold`}
			>
				<div className="bg-custom-dark-gray flex h-16 px-5 w-full md:hidden">
					<FontAwesomeIcon
						className="text-custom-green my-auto ml-auto text-3xl"
						icon={faTimes}
						onClick={() => toggleMenu()}
					/>
				</div>

				<ul className="flex-grow px-5 py-6">
					{items.map((item: any) => (
						<li>
							<Link
								href={item.href}
								className="block px-5 py-3 hover:font-bold"
							>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</div>

			{isOpen && (
				<div
					className="fixed md:hidden top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30"
					onClick={() => toggleMenu()}
				></div>
			)}
		</>
	)
}

export default Menu
