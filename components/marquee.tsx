type MarqueeProps = {
  items: string[]
  reverse?: boolean
  className?: string
}

export function Marquee({ items, reverse, className }: MarqueeProps) {
  const row = [...items, ...items]
  return (
    <div className={`flex overflow-hidden ${className ?? ''}`}>
      <div
        className={`flex shrink-0 items-center gap-6 pr-6 ${
          reverse ? 'animate-marquee-rev' : 'animate-marquee'
        }`}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-6 whitespace-nowrap">
            <span className="font-heading text-2xl uppercase tracking-tight md:text-3xl">
              {item}
            </span>
            <span aria-hidden className="text-2xl md:text-3xl">
              {'★'}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
