import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const guestRoutes = ['/', '/login', '/register']

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl

	if (pathname.match(/((?!\._next(?:\/.*)?)(?:[^/]+\/)*[^/]+\.\w+)/)) {
		return NextResponse.next()
	}

	const pathnameIsInGuestRoutes = guestRoutes.includes(pathname)
	const cookieHasAuthToken = request.cookies.has('authToken')

	if (pathnameIsInGuestRoutes && cookieHasAuthToken) {
		const url = request.nextUrl.clone()
		url.pathname = '/home'

		return NextResponse.redirect(url)
	} else if (!pathnameIsInGuestRoutes && !cookieHasAuthToken) {
		const url = request.nextUrl.clone()
		url.pathname = '/'

		return NextResponse.redirect(url)
	} else {
		return NextResponse.next()
	}
}
