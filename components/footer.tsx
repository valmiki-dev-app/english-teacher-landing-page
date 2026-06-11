export function Footer() {
  return (
    <footer className="border-t-2 border-foreground px-5 py-12 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-foreground bg-taxi font-heading text-lg text-taxi-foreground">
            EN
          </span>
          <span className="font-heading text-lg uppercase tracking-tight">
            NYC English
          </span>
        </div>
        <p className="font-hand text-2xl text-taxi">
          понимать и говорить. с нуля.
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} · Английский с вайбом Нью-Йорка
        </p>
      </div>
    </footer>
  )
}
