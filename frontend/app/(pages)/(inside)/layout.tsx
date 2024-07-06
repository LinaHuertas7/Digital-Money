import Menu from '@/components/ui/Menu'

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
		{ name: 'Cerrar sesión', href: '/logout' },
	]

	return (
		<div className="flex flex-wrap h-screen-minus-layout">
			<Menu items={menuItems} />
			<div className="flex-grow bg-gray-100 px-14 py-8 h-full overflow-auto">
				{children}
			</div>
		</div>
	)
}
