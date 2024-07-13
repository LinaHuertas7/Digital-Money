import React from 'react'
import Image from 'next/image'
import { AuthHeaderComponentProps } from '@/interfaces/index'

const AuthHeaderComponent = ({
	children,
	logo,
	className = '',
}: AuthHeaderComponentProps) => {
	return (
		<header className={`flex h-16 px-5 w-full ${className}`}>
			{logo && <Image src={logo} alt="logo" style={{ objectFit: 'contain' }} />}
			{children}
		</header>
	)
}

export default AuthHeaderComponent
