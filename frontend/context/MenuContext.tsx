import { ReactNode, createContext, useContext, useState } from 'react'

interface MenuContextType {
	isOpen: boolean
	toggleMenu: () => void
}

interface MenuProviderProps {
	children: ReactNode
}

export const MenuContext = createContext<MenuContextType>({
	isOpen: false,
	toggleMenu: () => {},
})

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => setIsOpen(!isOpen)

	return (
		<MenuContext.Provider value={{ isOpen, toggleMenu }}>
			{children}
		</MenuContext.Provider>
	)
}

export const useMenuContext = () => useContext(MenuContext)

export const MenuConsumer = MenuContext.Consumer
