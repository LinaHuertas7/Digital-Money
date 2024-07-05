import AppLayout from '@/layouts/AppLayout'

export default function PagesRootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <AppLayout>{children}</AppLayout>
}
