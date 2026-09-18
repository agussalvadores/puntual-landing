/** URL del formulario de alta en el panel CRM (misma app que login/signup). */
export const CRM_SIGNUP_URL =
  process.env.NEXT_PUBLIC_CRM_SIGNUP_URL ?? 'http://localhost:3000/signup'

export function signupUrl(): string {
  return CRM_SIGNUP_URL
}

/** Login del panel CRM (misma base que `NEXT_PUBLIC_CRM_SIGNUP_URL`). */
export function loginUrl(): string {
  if (/\/signup\/?$/i.test(CRM_SIGNUP_URL)) {
    return CRM_SIGNUP_URL.replace(/\/signup\/?$/i, '/login')
  }
  const base = CRM_SIGNUP_URL.replace(/\/$/, '')
  return `${base}/login`
}
