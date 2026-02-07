"use client"

import { useEffect, useRef, useState } from "react"
import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const themeOptions = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const

type ThemeValue = (typeof themeOptions)[number]["value"]

export function ThemeToggle({
  mobile = false,
  iconOnlyTrigger = false,
}: {
  mobile?: boolean
  iconOnlyTrigger?: boolean
}) {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleOutsideClick)
    }

    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [open])

  const selectedTheme = (mounted ? theme : "system") as ThemeValue
  const selectedOption =
    themeOptions.find((option) => option.value === selectedTheme) ?? themeOptions[2]
  const SelectedIcon = selectedOption.icon

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        className={cn(
          "inline-flex items-center gap-2 rounded-lg border border-border/50 bg-background/80 px-3 py-2 text-sm text-foreground/80 transition-all hover:border-border hover:bg-foreground/5 hover:text-foreground",
          iconOnlyTrigger && "h-9 w-9 justify-center p-0",
          mobile && "w-full justify-between bg-background/70",
        )}
        aria-label="Change theme"
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <span className="inline-flex items-center gap-2">
          <SelectedIcon className="h-4 w-4" />
          {!iconOnlyTrigger ? <span>{selectedOption.label}</span> : <span className="sr-only">{selectedOption.label}</span>}
        </span>
      </button>

      {open && (
        <div
          className={cn(
            "absolute right-0 top-[calc(100%+8px)] z-50 min-w-[150px] rounded-xl border border-border/60 bg-background/95 p-1.5 shadow-lg backdrop-blur-xl",
            mobile && "left-0 right-0 top-[calc(100%+6px)]",
          )}
          role="menu"
          aria-label="Theme options"
        >
          {themeOptions.map((option) => {
            const OptionIcon = option.icon
            const isSelected = selectedTheme === option.value

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setTheme(option.value)
                  setOpen(false)
                }}
                className={cn(
                  "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground",
                  isSelected && "bg-foreground/8 text-foreground",
                )}
                role="menuitemradio"
                aria-checked={isSelected}
              >
                <OptionIcon className="h-4 w-4" />
                <span>{option.label}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
