import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import ThemeToggle from '@/components/theme/ThemeToggle'

export const metadata: Metadata = {
  title: 'AI Bootcamp - Versión Extendida',
  description: 'Aprende Prompt Stacking, MCPs, Agents y Vibe Coding en 4 horas',
  keywords: 'IA, inteligencia artificial, ChatGPT, prompt engineering, MCPs, agents',
  authors: [{ name: 'AI Bootcamp' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          <ThemeToggle />
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
