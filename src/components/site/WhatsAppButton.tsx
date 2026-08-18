import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/content/site";

type Props = {
  label?: string;
  message?: string;
  className?: string;
  size?: "sm" | "default" | "lg";
  variant?: "default" | "outline" | "secondary";
};

export function WhatsAppButton({
  label = "Join on WhatsApp",
  message,
  className,
  size = "default",
  variant = "default",
}: Props) {
  return (
    <Button asChild size={size} variant={variant} className={cn(className)}>
      <a href={whatsappLink(message)} target="_blank" rel="noreferrer noopener">
        <MessageCircle className="size-4" aria-hidden />
        {label}
      </a>
    </Button>
  );
}