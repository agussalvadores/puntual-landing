import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Puntual — Agenda y turnos automatizados por WhatsApp',
  description:
    'Puntual automatiza tus turnos por WhatsApp, cobra señas online y te da control total de tus clientes. Ideal para peluquerías, consultorios, gimnasios y estudios de bienestar.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://puntual.app'),
  openGraph: {
    title: 'Puntual — Tu agenda, siempre a tiempo',
    description:
      'Automatización de turnos por WhatsApp, cobro de señas y control total de tus clientes.',
    locale: 'es_AR',
    type: 'website',
  },
  icons: {
    icon: '/puntual-logo.svg',
    apple: '/puntual-logo.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8fafc',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jakarta.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
