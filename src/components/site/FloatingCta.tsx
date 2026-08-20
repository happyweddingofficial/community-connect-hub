import { MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/content/site";

export function FloatingCta() {
  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 sm:bottom-6 sm:right-6"
    >
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Chat with ${site.name} on WhatsApp`}
        className="group relative flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <span className="relative flex size-5 items-center justify-center">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-white opacity-40 duration-1000" />
          <MessageCircle className="relative size-5" aria-hidden />
        </span>
        <span className="hidden sm:inline font-medium">Chat on WhatsApp</span>
      </a>
    </aside>
  );
}
