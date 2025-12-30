import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FITSSENCE',
  description: 'Entrenamiento personalizado y bienestar integral con Tatiana',
  generator: 'v0.dev',
  icons: {
    icon: '/fitssence-page/images/Logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
