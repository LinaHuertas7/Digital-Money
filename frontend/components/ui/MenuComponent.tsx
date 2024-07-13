'use client'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useAuthContext } from '@/context/AuthContext'
import { useMenuContext } from '@/context/MenuContext'
import { MenuItemProps } from '@/interfaces'
import MenuItemComponent from './MenuItemComponent'

const MenuComponent = ({ menuItems }: { menuItems: MenuItemProps[] }) => {
	const { isOpen, toggleMenu } = useMenuContext()
	const { handleLogOut } = useAuthContext()

	return (
		<>
			<div
				className={`fixed md:static top-0 right-0 z-40 md:z-0 w-64 h-screen transition-transform ${
					isOpen ? '' : 'translate-x-full'
				} md:translate-x-0 md:w-1/5 md:h-auto bg-custom-green text-custom-dark-gray flex flex-col font-semibold`}
			>
				<div className="bg-custom-dark-gray flex h-16 px-5 w-full md:hidden">
					<FontAwesomeIcon
						className="text-custom-green my-auto ml-auto text-3xl"
						icon={faTimes}
						onClick={() => toggleMenu()}
					/>
				</div>

				<ul className="flex-grow px-5 py-6">
					{menuItems.map((menuItem: any) => (
						<MenuItemComponent
							href={menuItem.href}
							name={menuItem.name}
							key={menuItem.href}
						/>
					))}

					<li>
						<button
							onClick={handleLogOut}
							className="block px-5 py-3 hover:font-bold"
						>
							Cerrar sesión
						</button>
					</li>
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

export default MenuComponent
