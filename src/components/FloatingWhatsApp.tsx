import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../lib/site";

export default function FloatingWhatsApp() {
  return (
    <div className="no-print fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener"
        aria-label="Chat with Pixelpearl Technologies on WhatsApp"
        className="group flex items-center gap-2.5 bg-[#128c4b] hover:bg-[#0e7440] text-white rounded-full pl-4 pr-4 sm:pr-5 py-3 shadow-[0_16px_36px_-10px_rgba(18,140,75,0.7)] transition-transform hover:-translate-y-0.5 min-h-[52px]"
      >
        <span className="relative" aria-hidden="true">
          <span className="absolute inset-0 rounded-full bg-white/60" style={{ animation: "pulseRing 2s ease-out infinite" }} />
          <MessageCircle className="relative w-6 h-6" />
        </span>
        <span className="text-[14px] font-bold leading-tight text-left">WhatsApp Us<span className="hidden sm:block text-[11.5px] font-medium opacity-90"> Replies during business hours</span></span>
      </a>
    </div>
  );
}
