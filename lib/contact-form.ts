export type ContactFormData = {
  nombre: string
  negocio: string
  email: string
  whatsapp: string
  vertical: string
  mensaje?: string
}

/**
 * Envía el formulario de contacto.
 * Conectar con API route, Formspree, Resend, etc. vía NEXT_PUBLIC_CONTACT_FORM_ENDPOINT.
 */
export async function submitContactForm(data: ContactFormData): Promise<void> {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('No se pudo enviar la solicitud')
    }

    return
  }

  // Sin backend configurado: simula envío para la maqueta
  await new Promise((resolve) => setTimeout(resolve, 400))
  if (process.env.NODE_ENV === 'development') {
    console.info('[ContactForm] Datos listos para conectar:', data)
  }
}
