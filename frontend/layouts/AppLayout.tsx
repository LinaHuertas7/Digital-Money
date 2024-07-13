'use client'

import FooterComponent from '@/components/ui/FooterComponent'
import { MenuProvider } from '@/context/MenuContext'
import { AppLayoutProps } from '@/interfaces/index'
import HeaderChildrenComponent from '@/components/ui/HeaderChildrenComponent'

const AppLayout = ({ children, type = 'base' }: AppLayoutProps) => {
	return (
		<div className="flex bg-custom-dark-gray flex-col min-h-screen">
			<MenuProvider>
				<HeaderChildrenComponent children={children} type={type} />
			</MenuProvider>
			<FooterComponent />
		</div>
	)
}

export default AppLayout
