export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5492923537308'

export function whatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_MESSAGES = {
  free: 'Hola! Quiero empezar a usar Puntual gratis!',
  trial: 'Hola! Me interesa comenzar una prueba gratis de Puntual. ¿Me podés dar más info?',
  individual: 'Hola! Me interesa el plan Individual de Puntual. ¿Me podés dar más info?',
  equipo: 'Hola! Me interesa el plan Equipo de Puntual. ¿Me podés dar más info?',
  estudio: 'Hola! Me interesa el plan Estudio de Puntual. ¿Me podés dar más info?',
  cadena:
    'Hola! Tengo un negocio con varias sucursales y quiero conocer el plan Cadena de Puntual. ¿Podemos hablar?',
} as const
