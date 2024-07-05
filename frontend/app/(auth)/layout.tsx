import AppLayout from '@/layouts/AppLayout'

export default function AuthRootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <AppLayout type="auth">{children}</AppLayout>
}
