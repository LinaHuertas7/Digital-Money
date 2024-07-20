'use client'
import { SessionUser } from '@/interfaces/index'
import { useState } from 'react'

const useUserState = () => {
	const [userState, setUserState] = useState<SessionUser | null>(null)

	const handleUserState = async (userState: SessionUser | null) => {
		setUserState(userState)
	}

	return {
		setUserState,
		userState,
		handleUserState,
	}
}

export default useUserState
