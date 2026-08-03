'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { WHATSAPP_MESSAGES, whatsAppUrl } from '@/lib/whatsapp'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const whatsAppHref = whatsAppUrl(WHATSAPP_MESSAGES.trial)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2" aria-label="Puntual inicio">
          <Image
            src="/puntual-logo.svg"
            alt="Puntual"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="font-heading text-xl font-extrabold tracking-tight text-foreground">
            Puntual
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:scale-[1.03]"
          >
            <WhatsAppIcon className="size-4" />
            Comenzar Gratis
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg text-foreground md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground"
            >
              <WhatsAppIcon className="size-4" />
              Comenzar Gratis
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
