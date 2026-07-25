# Puntual — Prompt maestro para maqueta de landing (v0.dev / Vercel)

> **Uso:** Copiá y pegá el bloque **"PROMPT PARA v0.dev"** al final de este archivo (o el archivo completo si la herramienta lo permite).  
> **Logo:** Adjuntá el logo de Puntual en v0 / Vercel (ícono indigo + check verde).  
> **Stack objetivo:** Next.js + Tailwind + shadcn/ui + Lucide Icons → deploy en Vercel.  
> **Idioma:** Español (Argentina / LATAM, voseo aceptable).  
> **Scope v1:** Solo **reservas / turnos / agenda**. **NO e-commerce, pedidos, carrito ni delivery.**

---

## 1. Producto

| Campo | Valor |
|--------|--------|
| **Nombre** | Puntual |
| **Empresa** | 1M Tech (`onemtech`) |
| **Categoría** | B2B SaaS — gestión de agenda y reservas online (white-label) |
| **Tagline** | Tu agenda, siempre a tiempo. |
| **Headline hero** | Tu agenda bajo control, tus turnos automatizados |
| **Subheadline** | Automatización de turnos por WhatsApp, cobro de señas y control total de tus clientes. Sin complicaciones. |
| **CTA primario** | Comenzar Prueba Gratis (1 Mes) |
| **CTA secundario** | Ver Demo |
| **Footer credit** | Puntual es un producto de 1M Tech |

### Qué es (1 párrafo)

Puntual es una plataforma **multi-marca / white-label** para negocios de servicios. Cada cliente (peluquería, clínica, consultorio, etc.) opera con **su propia marca** (logo, colores, dominio/slug). Los clientes finales reservan turnos online; el negocio administra agenda, profesionales, sucursales, señas, recordatorios WhatsApp y más desde un panel CRM. La landing vende a **dueños de negocio**, no al cliente final del salón.

### Público objetivo

- Peluquerías, barberías, centros de estética  
- Consultorios médicos / odontología (módulo clínico opcional)  
- Gimnasios, wellness, estudios con agenda de profesionales  
- Perfil típico: 1–5 sucursales, varios profesionales, hoy coordinan turnos por WhatsApp a mano  

### Roles a comunicar en la landing

| Rol | Qué ve |
|-----|--------|
| **Cliente final** | Web/app de reservas con la marca del negocio (celular) |
| **Admin / recepción** | CRM: calendario, reservas, clientes, config (PC) |
| **Profesional** | Su agenda y turnos desde el panel |

---

## 2. Branding (usar exactamente)

### Logo

- Adjuntar archivo de logo **Puntual**.
- Descripción del mark: marco/ícono estilo reloj en **indigo profundo** + **check verde** (confirmación / puntualidad).
- Wordmark: “Puntual” (P mayúscula), sans-serif bold.
- En navbar: logo completo (ícono + wordmark). En favicon: solo el mark.

### Colores (CSS variables)

```css
--text: #0f172a;
--background: #f8fafc;
--primary: #4338CA;
--secondary: #e647d0;
--accent: #25d366;
```

| Token | Hex | Uso |
|-------|-----|-----|
| `--text` | `#0f172a` | Texto principal, headlines |
| `--background` | `#f8fafc` | Fondo de página (light) |
| `--primary` | `#4338CA` | Marca, links, navbar accents, títulos de features |
| `--secondary` | `#e647d0` | Acentos secundarios, highlights, pills opcionales |
| `--accent` | `#25d366` | **CTAs principales**, badges de éxito, vibra WhatsApp, check del logo |

> **Nota:** En secciones tipo AgendaPro (hero con mockups), el **fondo del hero puede ser oscuro** (slate/indigo profundo) para contraste con UIs blancas de los dispositivos. El resto de la página usa `--background` claro.

### Tipografía

```css
@import url('https://fonts.googleapis.com/css?family=Plus%20Jakarta%20Sans:700|Inter:400');

body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
}

html { font-size: 100%; } /* 16px */

h1 { font-size: 4.210rem; } /* ~67.36px */
h2 { font-size: 3.158rem; } /* ~50.56px */
h3 { font-size: 2.369rem; } /* ~37.92px */
h4 { font-size: 1.777rem; } /* ~28.48px */
h5 { font-size: 1.333rem; } /* ~21.28px */
small { font-size: 0.750rem; } /* 12px */
```

En mobile, escalar headlines (ej. `h1` ~2.25–2.75rem) sin romper jerarquía.

### Vibe

Minimalista, moderno, profesional, confiable. SaaS B2B accesible para dueño de negocio local. **No** enterprise frío. **No** look “purple AI generic” genérico: usar la paleta indigo + magenta + verde WhatsApp.

---

## 3. Features reales del producto (solo estas)

### Experiencia cliente (web pública / celular)

1. Reserva online 24/7 — servicio, profesional (opcional), sucursal, fecha/hora  
2. Disponibilidad inteligente — horarios del profesional, turnos existentes, vacaciones, bloqueos, cierres de sucursal  
3. Reserva múltiple en un paso — varios servicios → **1 booking** + **1 código** de 6 caracteres (ej. `ABC123`)  
4. Link del profesional — URL tipo `tumarca.com/juan-perez`  
5. Confirmación pública por código (sin login)  
6. Login flexible — email/password, teléfono/password u OTP WhatsApp (según config)  
7. Lista de espera — día/franja preferida + profesional opcional  
8. Cupones en reservas  
9. Seña online (Mercado Pago) + cancelación automática si no paga a tiempo  
10. Recordatorios automáticos WhatsApp (y email)  

### Experiencia negocio (CRM / PC)

1. Calendario multi-profesional (día/semana), filtros por sucursal / profesional / estado  
2. Gestión de reservas y estados (confirmada, pendiente seña, seña pagada, pagada, cancelada)  
3. Multi-sucursal  
4. Servicios y profesionales (duración, precio, color, seña)  
5. Turnos desde cliente, profesional o recepción  
6. Config de señas + marcar pagos manuales (efectivo/transferencia)  
7. WhatsApp integrado (recordatorios, OTP, créditos)  
8. White-label / branding por negocio  
9. Reglas (ej. no permitir cancelación al cliente)  
10. Módulo clínico opcional — ficha, obras sociales, tratamientos multi-sesión  

### Diferenciadores (copy)

- No es solo “un calendario”: multi-profesional + multi-sucursal  
- Seña + Mercado Pago en el flujo de reserva  
- WhatsApp nativo (confirmación + recordatorio)  
- Lista de espera  
- Reservas compuestas (varios servicios, un código)  
- Marca blanca: el cliente ve la marca del negocio, no “Puntual”  
- Adaptaciones a medida (“software a la medida si necesitás ajustes”)  

### NO mencionar en v1

- E-commerce, pedidos, carrito, delivery, catálogo de productos  
- App nativa iOS/Android (salvo “web que se ve como app”)  
- Login Google (aún no)  
- Features inventadas  

---

## 4. Dirección visual del Hero (concepto AgendaPro)

Composición **multi-dispositivo** con profundidad (overlap + sombras). Imágenes **genéricas / simuladas en Tailwind** (no screenshots crudas obligatorias).

### Tres superficies

| Dispositivo | Contenido | Jerarquía |
|-------------|-----------|-----------|
| **Laptop / PC** | CRM: calendario multi-columna con turnos coloreados + modal detalle reserva | Elemento principal (~60%), centro |
| **Celular** | Flujo cliente: elegir sucursal / servicios / horarios | Foreground izquierda, leve rotación (-3° a -8°) |
| **Chat WhatsApp** | Confirmación + recordatorio de turno | Foreground derecha, burbuja o 2.º phone |

### Layout conceptual

```
[Fondo hero: oscuro slate/indigo con gradiente sutil]

  Navbar pill (blanca o glass) — Logo Puntual | Features | Pricing | Contact | CTA

  Badge + Headline + Subheadline + CTAs

  [Tabs opcionales: Agenda online | Sitio de reservas | WhatsApp | Cobros | Multi-sucursal]
       (solo “Agenda online” activo en v1)

       📱 Celular (izq)          💻 Laptop CRM (centro)          💬 WhatsApp (der)
```

### Mockup PC (CRM) — qué mostrar

- Sidebar oscura con iconos: Calendario (activo), Servicios, Clientes, Promos, Finanzas, Config  
- Top bar: vista Día, fecha, selector sucursal (“Sucursal Centro”), filtro profesionales, botón **+ Agendar** (primary o accent)  
- Grid: columnas = profesionales (avatar + nombre), filas = horas 09:00–18:00  
- Bloques de turno pastel (azul, rosa, beige) con nombre cliente + servicio + rango horario  
- Algunos bloques con patrón rayado = ausencia / vacaciones  
- **Modal flotante** sobre el calendario:
  - Cliente: “María González”  
  - Servicio: “Corte + Barba”  
  - Profesional / horario / estado Confirmada  
  - Código: `ABC123`  
  - Botón “Contactar por WhatsApp” (accent verde)  

Usar negocio **ficticio** en mockups (ej. “Studio Bella”). Evitar marcas reales de clientes en la landing pública si no hay autorización; si se usan referencias Forbici solo como inspo interna, **anonimizar** en la maqueta.

### Mockup Celular (cliente) — qué mostrar

Preferido para hero: **lista de servicios de una sucursal** o **selección de horario**.

Incluir elementos tipo:

- Header con logo del negocio ficticio + icono login  
- Card de sucursal o banner  
- Pills de categorías (ej. “Corte de cabello” activa)  
- Cards de servicio: nombre, duración, precio, botón **+**  
- O pantalla de slots: 14:00 / 14:30 / **15:00** seleccionado + CTA “Confirmar reserva”  
- Alternativa: confirmación con check + código `ABC123`  

La UI del celular debe sentirse **marca del negocio** (white-label), no “Puntual”.

### Mockup WhatsApp — textos sugeridos

```
🟢 Studio Bella

✅ Reserva confirmada

Hola María! Tu turno quedó agendado:

📅 Miércoles 15/03 a las 15:00
✂️ Corte + Barba con Juan
📍 Sucursal Centro
🔖 Código: ABC123

¡Te esperamos!

———

⏰ Recordatorio de turno

Hola María! Te recordamos que mañana
miércoles 15/03 a las 15:00 tenés
turno para Corte + Barba en Studio Bella.

📍 Av. Ejemplo 1234

¿Confirmás tu asistencia?
Respondé SI para confirmar.
```

Estilo: fondo chat típico WhatsApp, burbujas blancas, timestamps, emojis moderados. No saturar con logo WhatsApp gigante.

### Hero mobile (375px)

Simplificar: celular full-width + chat WhatsApp debajo. Laptop opcional o fuera de pantalla.

---

## 5. Estructura completa de la página

### 1) Navbar

- Logo Puntual (adjunto)  
- Links: Features, Pricing, Contact (o Precios / Contacto)  
- CTA: **Comenzar Gratis** (accent `#25d366`)  
- Sticky, pill o bar limpia  

### 2) Hero

- Badge: `⚡ Configuración rápida en menos de 5 minutos`  
- Headline + subheadline (sección 1)  
- CTAs: primario accent + secundario outline primary  
- Product preview: composición laptop + celular + WhatsApp  

### 3) Social proof

- “Más de 10.000 turnos procesados con éxito” (o métricas placeholder editables)  
- Stats: turnos / recordatorios WhatsApp / negocios / ausencias reducidas  

### 4) Features grid (diferenciales)

Mínimo 6 cards con Lucide icons:

1. Recordatorios automáticos por WhatsApp  
2. Cobro de señas y pagos online (Mercado Pago)  
3. Lista de espera inteligente  
4. Multi-sucursal y multi-profesional  
5. Reservas con código único  
6. Custom adaptations: “Software a la medida de tu negocio si necesitás ajustes específicos”  

Opcional: white-label, cupones, módulo clínico.

### 5) Industry tabs

Tabs filtrables (contenido corto + icono):

- Peluquerías & Estética  
- Consultorios Médicos / Odontología  
- Gimnasios & Wellness  

### 6) Sección “Dos experiencias” (opcional pero recomendada)

Split o tabs:

- **Lo que ve tu cliente** → celular  
- **Lo que ves vos** → CRM en PC  
- **Lo que llega por WhatsApp** → chat  

### 7) Pricing

- Banner: `🎁 Probala 1 mes gratis sin compromiso`  
- 3 cards:
  - **Emprendedor** — 1 sucursal, básicos  
  - **Profesional** — multi-sucursal, WhatsApp, señas (destacar)  
  - **Personalizado / Enterprise** — a medida, adaptaciones  
- Precios: placeholders o “Consultar” si aún no hay lista pública  
- CTA en cada card  

### 8) Contact / Lead form

Campos: Nombre, Negocio, Email, Teléfono/WhatsApp, Mensaje (opcional), checkbox vertical (peluquería / clínica / otro)  
CTA: “Solicitar demo”  
Validación visual (no hace falta backend real en maqueta; form puede ser UI-only o mailto)  

### 9) FAQ (5)

1. ¿Necesito conocimientos técnicos?  
2. ¿Puedo usar mi marca y colores?  
3. ¿Funciona con Mercado Pago?  
4. ¿Manda recordatorios por WhatsApp?  
5. ¿Puedo tener varias sucursales?  

### 10) Footer

Links esenciales, privacidad/términos placeholder,  
**“Puntual es un producto de 1M Tech”**

---

## 6. Copy corto listo para usar

| Elemento | Texto |
|----------|--------|
| Badge | ⚡ Configuración rápida en menos de 5 minutos |
| H1 | Tu agenda bajo control, tus turnos automatizados |
| Sub | Automatización de turnos por WhatsApp, cobro de señas y control total de tus clientes. Sin complicaciones. |
| CTA 1 | Comenzar Prueba Gratis (1 Mes) |
| CTA 2 | Ver Demo |
| Feature WhatsApp | Tus clientes reciben confirmación y recordatorio por WhatsApp. Menos ausencias, menos mensajes manuales. |
| Feature seña | Pedí seña al reservar. Mercado Pago o marcar pago en el local. |
| Feature waitlist | Si no hay hueco, el cliente se anota. Vos convertís la intención en turno. |
| Feature custom | ¿Necesitás algo específico? Adaptamos Puntual a tu forma de trabajar. |
| Pricing banner | 🎁 Probala 1 mes gratis sin compromiso |
| Footer | Puntual es un producto de 1M Tech |

---

## 7. Stack y workflow (post-v0)

```
v0.dev  →  layout + componentes UI
    ↓
Cursor Composer  →  separar Hero / Features / Pricing / Footer, paleta CSS, Framer Motion
    ↓
Vercel  →  deploy
```

- **UI:** Tailwind + shadcn/ui + Lucide  
- **Animaciones (después):** Framer Motion — fade-in al scroll en Features  
- **Mockups:** preferir UI simulada en código (cards, grid, chat bubbles) sobre PNGs pesados  
- **Responsive:** mobile-first; hero desktop con 3 dispositivos, mobile simplificado  

---

## 8. Checklist de entrega maqueta v1

- [ ] Navbar con logo adjunto + CTA accent  
- [ ] Hero con headline, sub, 2 CTAs  
- [ ] Composición: **PC = CRM**, **celular = cliente**, **WhatsApp = mensajes**  
- [ ] Features grid (sin e-commerce)  
- [ ] Industry tabs  
- [ ] Pricing 3 tiers + 1 mes gratis  
- [ ] Formulario de contacto  
- [ ] FAQ + Footer 1M Tech  
- [ ] Paleta y tipografía exactas  
- [ ] Responsive desktop + mobile  

---

## 9. PROMPT PARA v0.dev

Copiá desde aquí hacia abajo:

```
Create a modern, sleek, minimalist B2B SaaS landing page for "Puntual" (product of 1M Tech): an automated appointment booking and calendar management platform for hair salons, medical/dental clinics, gyms and wellness studios in Latin America (Spanish copy, Argentine tone).

IMPORTANT SCOPE:
- Focus ONLY on appointments/bookings/scheduling.
- Do NOT mention ecommerce, online store, cart, delivery, or product catalog.

I will attach the Puntual logo. Use it in the navbar (icon + wordmark). The logo is a deep indigo clock-like mark with a bright green checkmark.

DESIGN SYSTEM (exact):
- CSS variables:
  --text: #0f172a;
  --background: #f8fafc;
  --primary: #4338CA;
  --secondary: #e647d0;
  --accent: #25d366;
- Page background: #f8fafc
- Primary CTAs and success/WhatsApp accents: #25d366
- Brand indigo: #4338CA
- Secondary accent magenta: #e647d0 (use sparingly for pills/highlights)
- Text: #0f172a
- Typography:
  - Headers: Plus Jakarta Sans, weight 700
  - Body: Inter, weight 400
  - Approximate scale: h1 ~4.2rem desktop (scale down on mobile), h2 ~3.16rem, h3 ~2.37rem, body 1rem
- Vibe: minimalist, trustworthy, modern SaaS for local business owners. Clean rounded corners, generous whitespace, Lucide icons.
- Use Tailwind + shadcn-style components. No purple-on-white generic AI look; stick to this indigo + magenta + WhatsApp green palette.

HERO VISUAL CONCEPT (critical — AgendaPro style composition):
- Hero section may use a dark indigo/slate gradient background for contrast with device mockups; rest of page stays light #f8fafc.
- Product preview MUST show THREE layered mockups (simulated UI in Tailwind, not heavy photos):
  1) LAPTOP / DESKTOP (main, center): Admin CRM calendar — multi-column schedule by professionals, pastel appointment blocks with client name + service + time, dark sidebar icons, top bar with branch selector and "+ Agendar" button, and a floating detail modal with client "María González", service "Corte + Barba", code ABC123, status Confirmada, and a green "Contactar por WhatsApp" button.
  2) PHONE (foreground left, slight tilt): Client booking UI white-label for a fictional business "Studio Bella" — branch or service list with category pills, service cards (duration, price, + button) OR time slots selection with "Confirmar reserva". Must feel like the business brand, not Puntual.
  3) WHATSAPP CHAT (foreground right): Conversation showing automated messages in Spanish:
     - Confirmation: reserva confirmada with date, service, branch, code ABC123
     - Reminder: recordatorio 24h before, ask to reply SI
- Depth: overlapping devices, soft shadows, laptop largest; phone and WhatsApp in front.
- Mobile hero: simplify to phone + WhatsApp only.

PAGE STRUCTURE & COPY (Spanish):

1) Navbar
- Logo (attached), links: Features, Precios, Contacto
- CTA button: "Comenzar Gratis" (accent green)

2) Hero
- Badge: "⚡ Configuración rápida en menos de 5 minutos"
- H1: "Tu agenda bajo control, tus turnos automatizados"
- Sub: "Automatización de turnos por WhatsApp, cobro de señas y control total de tus clientes. Sin complicaciones."
- CTAs: "Comenzar Prueba Gratis (1 Mes)" (emerald/accent) + "Ver Demo" (secondary outline)
- Optional pill tabs under CTAs (only "Agenda online" active): Agenda online | Sitio de reservas | WhatsApp | Cobros | Multi-sucursal
- Then the 3-device product preview

3) Social proof banner
- "Más de 10.000 turnos procesados con éxito"
- 3–4 clean stat metrics (placeholders OK)

4) Features grid (6 cards with Lucide icons)
- Recordatorios automáticos por WhatsApp
- Cobro de señas y pagos online (Mercado Pago)
- Lista de espera inteligente
- Multi-sucursal y multi-profesional
- Reservas con código único de confirmación
- Adaptaciones a medida: "Software a la medida de tu negocio si necesitás ajustes específicos"

5) Industry tabs
- Peluquerías & Estética
- Consultorios Médicos
- Gimnasios & Wellness
(short benefit text per tab)

6) Optional section "Dos experiencias"
- Split: Lo que ve tu cliente (phone) | Lo que ves vos (CRM laptop) | WhatsApp

7) Pricing
- Banner: "🎁 Probala 1 mes gratis sin compromiso"
- 3 tier cards: Emprendedor | Profesional (highlighted) | Personalizado
- Placeholder prices or "Consultar"; CTA on each card

8) Contact / lead form
- Nombre, Negocio, Email, WhatsApp, vertical select, Mensaje
- CTA: "Solicitar demo"

9) FAQ (5 questions)
- ¿Necesito conocimientos técnicos?
- ¿Puedo usar mi marca y colores?
- ¿Funciona con Mercado Pago?
- ¿Manda recordatorios por WhatsApp?
- ¿Puedo tener varias sucursales?

10) Footer
- Minimal links
- Copyright line: "Puntual es un producto de 1M Tech"

CONTENT RULES:
- Do not invent features outside the list above.
- Do not show ecommerce UI.
- Use fictional business names in mockups (Studio Bella), not real client brands.
- Keep copy conversion-oriented, short, and clear for salon/clinic owners.
- Fully responsive.
- Prefer simulated UI components over stock photography.
```

---

## 10. Prompt corto para Cursor (después de exportar de v0)

```
Tomá esta landing de Puntual y:
1) Separala en componentes: Navbar, Hero, SocialProof, Features, Industries, Pricing, ContactForm, FAQ, Footer.
2) Aplicá exactamente las CSS variables (--text, --background, --primary, --secondary, --accent) y tipografía Plus Jakarta Sans / Inter con la escala indicada.
3) Asegurate de que el Hero mantenga: laptop=CRM, phone=cliente, WhatsApp=chat.
4) No agregues e-commerce.
5) Agregá fade-in suave al scroll en Features con Framer Motion.
6) Dejá el form de contacto listo para conectar después (sin backend por ahora).
```

---

*Archivo generado para la primera maqueta de landing de Puntual — listo para v0.dev + Vercel.*
