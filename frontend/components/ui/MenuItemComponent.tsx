import { MenuItemProps } from '@/interfaces'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuItemComponent = ({ href, name }: MenuItemProps) => {
	const pathname = usePathname()
	const active = href === '/' ? pathname === href : pathname.startsWith(href)

	return (
		<li>
			<Link
				href={href}
				className={`block px-5 py-3  ${
					active
						? 'font-extrabold text-black hover:font-extrabold'
						: 'hover:font-bold'
				}`}
			>
				{name}
			</Link>
		</li>
	)
}

export default MenuItemComponent
