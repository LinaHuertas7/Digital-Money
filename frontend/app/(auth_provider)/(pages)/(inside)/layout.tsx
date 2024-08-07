import MenuComponent from '@/components/ui/MenuComponent'

export default function PagesRootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const menuItems = [
		{ name: 'Inicio', href: '/home' },
		{ name: 'Actividad', href: '/activity' },
		{ name: 'Tu perfil', href: '/profile' },
		{ name: 'Cargar dinero', href: '/deposit' },
		{ name: 'Pagar Servicios', href: '/services' },
		{ name: 'Tarjetas', href: '/cards' },
	]

	return (
		<div className="flex md:h-screen-minus-layout">
			<MenuComponent menuItems={menuItems} />
			<div className="flex-grow bg-gray-200 px-5 md:px-14 py-8 h-full overflow-auto">
				{children}
			</div>
		</div>
	)
}
