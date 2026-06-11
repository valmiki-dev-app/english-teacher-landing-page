import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Archivo, Archivo_Black, Caveat, Pangolin } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})
const archivoBlack = Archivo_Black({
  variable: '--font-archivo-black',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})
const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700'],
  display: 'swap',
})
const pangolin = Pangolin({
  variable: '--font-pangolin',
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Английский с нуля — научу понимать и говорить',
  description:
    'Английский — сплошная каша? Научу понимать его и говорить с самого нуля. Без зубрёжки, без стыда. Первый урок бесплатно.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`${archivo.variable} ${archivoBlack.variable} ${caveat.variable} ${pangolin.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
