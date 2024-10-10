'use client'

import { Button } from '@nextui-org/button'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IoMdMoon, IoMdSunny } from 'react-icons/io'

import { cn } from '@/lib/utils'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Dropdown className="bg-background" placement="bottom-end">
      <DropdownTrigger>
        <Button
          variant="flat"
          color={theme === 'dark' ? 'default' : 'secondary'}
          className={cn(
            'h-10 w-10 min-w-min px-0',
            theme === 'dark' && 'text-secondary',
          )}
        >
          {theme === 'dark' ? <IoMdMoon size={18} /> : <IoMdSunny size={18} />}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        selectionMode="single"
        color="secondary"
      >
        <DropdownItem key="light">
          <button
            onClick={() => setTheme('light')}
            className="w-full text-start font-semibold hover:text-secondary-600"
          >
            Claro
          </button>
        </DropdownItem>
        <DropdownItem key="dark">
          <button
            onClick={() => setTheme('dark')}
            className="w-full text-start font-semibold hover:text-secondary-600"
          >
            Escuro
          </button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
