export type ContactFormData = {
  nombre: string
  negocio: string
  email: string
  whatsapp: string
  vertical: string
  mensaje?: string
  /** Honeypot anti-spam: debe quedar vacío */
  _gotcha?: string
}

/**
 * Envía el formulario de contacto a Formspree (u otro endpoint compatible).
 * Configurar NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://formspree.io/f/xxxxx
 */
export async function submitContactForm(data: ContactFormData): Promise<void> {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT

  if (!endpoint) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        '[ContactForm] Falta NEXT_PUBLIC_CONTACT_FORM_ENDPOINT. Creá un form en https://formspree.io y agregalo a .env.local',
      )
      console.info('[ContactForm] Datos (simulado):', data)
      await new Promise((resolve) => setTimeout(resolve, 400))
      return
    }
    throw new Error('Formulario no configurado')
  }

  // Bots suelen llenar el honeypot: no enviamos al servidor
  if (data._gotcha) {
    await new Promise((resolve) => setTimeout(resolve, 400))
    return
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nombre: data.nombre,
      negocio: data.negocio,
      email: data.email,
      whatsapp: data.whatsapp,
      vertical: data.vertical,
      mensaje: data.mensaje ?? '',
      _replyto: data.email,
      _subject: `Demo Puntual — ${data.negocio || data.nombre}`,
    }),
  })

  if (response.status === 429) {
    throw new Error('Demasiados envíos. Esperá un momento e intentá de nuevo.')
  }

  if (!response.ok) {
    throw new Error('No se pudo enviar la solicitud')
  }
}
