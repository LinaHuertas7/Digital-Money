'use client'

import '@/app/globals.css'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Footer from '@/components/ui/Footer'
import Link from 'next/link'

import logoDark from '@/public/images/logo-dmh-dark.png'
import logoNormal from '@/public/images/logo-dmh.png'

interface AppLayoutProps {
	children: React.ReactNode
	type?: string
}

interface Styles {
	[key: string]: {
		headerBg: string
		buttonLogin: string
		buttonRegister: string
		ImageSrc: StaticImageData
	}
}

const styles: Styles = {
	auth: {
		headerBg: 'bg-custom-green',
		buttonLogin: 'bg-custom-dark-gray text-white border-custom-dark-gray',
		buttonRegister: 'bg-custom-dark-gray text-white border-custom-dark-gray',
		ImageSrc: logoDark,
	},
	default: {
		headerBg: 'bg-custom-dark-gray',
		buttonLogin: 'text-custom-green bg-custom-dark-gray border-custom-green',
		buttonRegister: 'bg-custom-green text-custom-dark-gray border-custom-green',
		ImageSrc: logoNormal,
	},
}

const AppLayout = ({ children, type = 'base' }: AppLayoutProps) => {
	const { headerBg, buttonLogin, buttonRegister, ImageSrc } =
		styles[type] || styles.default

	return (
		<div className="flex bg-custom-dark-gray flex-col min-h-screen">
			<header className={`${headerBg} flex h-16 px-5 w-full`}>
				<Link href="/" className="flex">
					<Image src={ImageSrc} alt="logo" className="object-contain my-auto" />
				</Link>

				<div className="flex ml-auto my-auto">
					<Link
						href="/login"
						className={`${buttonLogin} mx-2 my-auto rounded-lg py-2 px-4 text-sm font-bold w-full text-black border-2 whitespace-nowrap`}
					>
						Iniciar sesión
					</Link>
					<Link
						href="/register"
						className={`${buttonRegister} mx-2 my-auto rounded-lg py-2 px-4 text-sm font-bold w-full text-black border-2 whitespace-nowrap`}
					>
						Crear cuenta
					</Link>
				</div>
			</header>
			{children}
			<Footer />
		</div>
	)
}

export default AppLayout
