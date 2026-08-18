import { Star } from "lucide-react";
import { reviews } from "@/content/site";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Reviews() {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {reviews.map((review, i) => (
        <article
          key={i}
          className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-card"
        >
          <div className="flex items-center gap-3">
            {review.photo ? (
              <img
                src={review.photo}
                alt={review.name}
                loading="lazy"
                width={44}
                height={44}
                className="size-11 rounded-full object-cover"
              />
            ) : (
              <span
                aria-hidden
                className="flex size-11 items-center justify-center rounded-full bg-secondary text-sm font-medium text-secondary-foreground"
              >
                {initials(review.name)}
              </span>
            )}
            <div>
              <p className="text-sm font-medium">{review.name}</p>
              {review.date && <p className="text-xs text-muted-foreground">{review.date}</p>}
            </div>
          </div>

          <div className="mt-4 flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, s) => (
              <Star
                key={s}
                aria-hidden
                className={
                  s < review.rating
                    ? "size-4 fill-primary text-primary"
                    : "size-4 text-muted-foreground/30"
                }
              />
            ))}
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{review.text}</p>
        </article>
      ))}
    </div>
  );
}