import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { usePathname } from 'next/navigation'

import { AppLayoutProps, Styles } from '@/interfaces'
import logoDark from '@/public/images/logo-dmh-dark.png'
import logoNormal from '@/public/images/logo-dmh.png'
import { useAuthContext } from '@/context/AuthContext'
import { useMenuContext } from '@/context/MenuContext'

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

const HeaderChildrenComponent = ({
	children,
	type = 'base',
}: AppLayoutProps) => {
	const { headerBg, buttonLogin, buttonRegister, ImageSrc } =
		styles[type] || styles.default

	const { toggleMenu } = useMenuContext()

	const { isAuthenticated, userState } = useAuthContext()

	const pathname = usePathname()

	const getInitials = (
		firstname: string | undefined,
		lastname: string | undefined
	) =>
		`${(firstname ?? '').charAt(0).toUpperCase()}${(lastname ?? '')
			.charAt(0)
			.toUpperCase()}`

	return (
		<>
			<header className={`${headerBg} flex h-16 px-5 w-full`}>
				<Link href="/" className="flex">
					<Image src={ImageSrc} alt="logo" className="object-contain my-auto" />
				</Link>

				<div
					className={`${
						pathname !== '/' ? 'hidden md:flex' : ''
					} ml-auto my-auto`}
				>
					{isAuthenticated ? (
						<div className="flex items-center">
							<div className="bg-custom-green p-2 rounded-xl">
								<p className="text-custom-gray font-extrabold">
									{getInitials(userState?.firstname, userState?.lastname)}
								</p>
							</div>
							<Link href="/home" className="text-sm font-semibold mx-4">
								Hola, {userState?.firstname} {userState?.lastname}
							</Link>
						</div>
					) : (
						<>
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
						</>
					)}
				</div>

				<button
					className={`${
						pathname !== '/' ? 'md:hidden' : 'hidden'
					} ml-auto p-2 text-white rounded-md`}
					onClick={() => toggleMenu()}
				>
					<FontAwesomeIcon
						className="text-custom-green my-auto text-3xl"
						icon={faBars}
					/>
				</button>
			</header>
			{children}
		</>
	)
}

export default HeaderChildrenComponent
