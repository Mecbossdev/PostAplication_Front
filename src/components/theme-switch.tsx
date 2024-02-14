'use client'

import { Moon, Sun, SunMedium } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState<boolean>(false)
  const {setTheme, resolvedTheme} = useTheme()

  useEffect(() => setMounted(true), [])
  
  if (!mounted) return (
    <SunMedium height={50} width={50} />
  )

  if (resolvedTheme === 'dark') {
    return <Sun onClick={() => setTheme('light')} />
  }

  if (resolvedTheme === 'light') {
    return <Moon onClick={() => setTheme('dark')} />
  }  
}