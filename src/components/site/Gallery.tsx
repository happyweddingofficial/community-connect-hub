import { gallery } from "@/content/site";

export function Gallery() {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {gallery.map((item, i) => (
        <figure key={i} className="overflow-hidden rounded-xl border border-border bg-card">
          <img
            src={item.image}
            alt={item.caption || "Community photo"}
            loading="lazy"
            width={900}
            height={700}
            className="h-52 w-full object-cover"
          />
          {item.caption && (
            <figcaption className="px-4 py-3 text-sm text-muted-foreground">{item.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}