import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export interface AppLayoutProps {
	children: React.ReactNode
	type?: string
}

export interface Styles {
	[key: string]: {
		headerBg: string
		buttonLogin: string
		buttonRegister: string
		ImageSrc: StaticImageData
	}
}

export interface AuthHeaderComponentProps {
	children: React.ReactNode
	logo?: StaticImageData
	className?: string
}

export interface MenuItemProps {
	href: string
	name: string
}

export interface MenuContextType {
	isOpen: boolean
	toggleMenu: () => void
}

export interface MenuProviderProps {
	children: ReactNode
}
