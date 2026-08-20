import { Star, MapPin } from "lucide-react";
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
          className="flex h-full flex-col rounded-xl border border-border bg-card p-5 sm:p-6 shadow-card"
        >
          {/* Header with Avatar, Name & Location */}
          <div className="flex items-center gap-3">
            {"photo" in review && review.photo ? (
              <img
                src={review.photo as string}
                alt={review.name}
                loading="lazy"
                width={40}
                height={40}
                className="size-10 shrink-0 rounded-full object-cover"
              />
            ) : (
              <span
                aria-hidden
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary"
              >
                {initials(review.name)}
              </span>
            )}
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-foreground">{review.name}</p>
              {"location" in review && review.location && (
                <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="size-3 shrink-0 text-primary" aria-hidden />
                  <span className="truncate">{review.location}</span>
                </p>
              )}
            </div>
          </div>

          {/* Rating Stars & Date */}
          <div className="mt-4 flex items-center justify-between gap-2">
            <div className="flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
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
            {review.date && <span className="text-xs text-muted-foreground/80">{review.date}</span>}
          </div>

          {/* Review Text */}
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{review.text}</p>
        </article>
      ))}
    </div>
  );
}
