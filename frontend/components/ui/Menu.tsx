import React from 'react'

const Menu = ({ items }: { items: any }) => {
	return (
		<div className="w-1/5 bg-custom-green text-custom-dark-gray flex flex-col font-semibold">
			<ul className="flex-grow px-5 py-6">
				{items.map((item: any) => (
					<li>
						<a href={item.href} className="block px-5 py-3 hover:font-bold">
							{item.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Menu
