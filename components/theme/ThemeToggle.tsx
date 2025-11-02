'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  if (!mounted) {
    return null
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="fixed left-4 top-4 z-50 rounded-full border border-gray-200 bg-white/80 p-2 text-gray-700 shadow-lg backdrop-blur transition-colors hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-gray-100 dark:hover:bg-slate-900"
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
    >
      {isDark ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}
