import { MessageCircle, Phone } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/905519354800"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <a
        href="tel:+905519354480"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-300 text-slate-950 shadow-2xl transition hover:scale-110"
        aria-label="Call"
      >
        <Phone className="h-7 w-7" />
      </a>
    </div>
  );
}