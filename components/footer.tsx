export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Puntual. Todos los derechos reservados.
        </p>
        <p className="text-sm font-medium text-muted-foreground">
          Puntual es un producto de{' '}
          <a
            href="https://onemtech.com/es"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground transition-colors hover:text-primary"
          >
            1M &gt;_tech
          </a>
        </p>
      </div>
    </footer>
  )
}
