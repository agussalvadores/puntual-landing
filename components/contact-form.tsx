'use client'

import { useState } from 'react'
import { CircleCheckBig, MessageCircle, Loader2 } from 'lucide-react'
import { submitContactForm, type ContactFormData } from '@/lib/contact-form'
import { IndustrySelect } from '@/components/industry-select'
import { ScrollStagger, ScrollStaggerItem } from '@/components/scroll-reveal'

const fields = [
  { id: 'nombre', label: 'Nombre', type: 'text', placeholder: 'Tu nombre' },
  { id: 'negocio', label: 'Negocio', type: 'text', placeholder: 'Nombre del negocio' },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'tu@email.com' },
  { id: 'whatsapp', label: 'WhatsApp', type: 'tel', placeholder: '+54 9 ...' },
] as const

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [vertical, setVertical] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!vertical) {
      setError('Seleccioná el rubro de tu negocio.')
      return
    }

    setLoading(true)
    setError(null)

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload: ContactFormData = {
      nombre: String(formData.get('nombre') ?? ''),
      negocio: String(formData.get('negocio') ?? ''),
      email: String(formData.get('email') ?? ''),
      whatsapp: String(formData.get('whatsapp') ?? ''),
      vertical,
      mensaje: String(formData.get('mensaje') ?? '') || undefined,
      _gotcha: String(formData.get('_gotcha') ?? ''),
    }

    try {
      await submitContactForm(payload)
      setSent(true)
      setVertical('')
      form.reset()
    } catch (err) {
      setError(
        err instanceof Error && err.message.includes('Demasiados')
          ? err.message
          : 'Hubo un error al enviar. Probá de nuevo o escribinos por WhatsApp.',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="bg-background">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <ScrollStagger className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollStaggerItem>
          <div>
            <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-foreground">
              Empezá hoy
            </span>
            <h2 className="mt-4 font-extrabold tracking-tight">Pedí una demo gratis</h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Contanos sobre tu negocio y te mostramos cómo Puntual puede automatizar tu agenda en
              minutos. <span className="font-semibold text-accent">Sin tarjeta, sin compromiso.</span>
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {[
                '1 mes de prueba gratis',
                'Configuración en menos de 5 minutos',
                'Acompañamiento personalizado',
              ].map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm font-medium">
                  <CircleCheckBig className="size-5 text-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          </ScrollStaggerItem>

          <ScrollStaggerItem>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CircleCheckBig className="size-12 text-accent" />
                <h3 className="mt-4 text-xl font-bold text-card-foreground">¡Gracias!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Recibimos tu solicitud. Te contactamos por WhatsApp muy pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Honeypot anti-spam: oculto para humanos, Formspree/bots lo ignoran si vacío */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  {fields.map((f) => (
                    <div key={f.id} className="flex flex-col gap-1.5">
                      <label htmlFor={f.id} className="text-sm font-medium text-foreground">
                        {f.label}
                      </label>
                      <input
                        id={f.id}
                        name={f.id}
                        type={f.type}
                        required
                        placeholder={f.placeholder}
                        className="h-11 rounded-xl border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium text-foreground">Rubro</span>
                  <IndustrySelect value={vertical} onChange={setVertical} required />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="mensaje" className="text-sm font-medium text-foreground">
                    Mensaje <span className="text-muted-foreground">(opcional)</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={3}
                    placeholder="Contanos qué necesitás"
                    className="resize-none rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {error && (
                  <p className="text-sm text-destructive" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] disabled:opacity-70"
                >
                  {loading ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <MessageCircle className="size-4" />
                  )}
                  Solicitar demo
                </button>
              </form>
            )}
          </div>
          </ScrollStaggerItem>
        </ScrollStagger>
      </div>
    </section>
  )
}
