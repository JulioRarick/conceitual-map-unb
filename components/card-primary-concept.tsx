interface CardPrimaryConceptProps {
  title: string
  description: string
  goingTo: string
  linkLabel?: string
  author?: string
}

export function CardPrimaryConcept({
  description,
  title,
  goingTo,
  linkLabel,
  author,
}: CardPrimaryConceptProps) {
  return (
    <div className="flex flex-col gap-2 rounded-md bg-stone-100 p-4 shadow-sm dark:bg-stone-950">
      <h2 className="mb-2 text-center text-xl font-bold text-cyan-600 dark:text-cyan-400/80">
        {title}
      </h2>
      <div className="flex-1 space-y-2">
        <p className="text-center">
          {author ? `"${description}"` : description}
        </p>
        <p className="text-end italic">{author}</p>
      </div>
      <div className="mb-auto flex w-full items-center justify-center">
        <a
          href={goingTo}
          className="cursor-pointer select-none rounded-md bg-stone-300/60 px-3 py-2 font-semibold text-foreground hover:bg-stone-400/60 dark:bg-stone-800 dark:hover:bg-stone-700"
        >
          {linkLabel || `Ir para ${title}`}
        </a>
      </div>
    </div>
  )
}
