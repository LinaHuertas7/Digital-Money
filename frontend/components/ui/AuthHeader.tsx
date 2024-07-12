import React from 'react'
import Image from 'next/image'
import { AuthHeaderProps } from '@/interfaces/index'

const AuthHeader = ({ children, logo, className = '' }: AuthHeaderProps) => {
	return (
		<header className={`flex h-16 px-5 w-full ${className}`}>
			{logo && <Image src={logo} alt="logo" style={{ objectFit: 'contain' }} />}
			{children}
		</header>
	)
}

export default AuthHeader
