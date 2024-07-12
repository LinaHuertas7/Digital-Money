'use server'
import { cookies } from 'next/headers'

interface SetCookieServerSideProps {
	name: string
	value: string
}

interface RemoveCookieServerSideProps {
	name: string
}

export const SetCookieServerSide = ({
	name,
	value,
}: SetCookieServerSideProps) => {
	cookies().set(name, value)
}

export const RemoveCookieServerSide = async ({
	name,
}: RemoveCookieServerSideProps) => {
	cookies().delete(name)
}

export default SetCookieServerSide
