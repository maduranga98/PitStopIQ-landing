"use client";

import { waLink } from "@/lib/translations";
import { WhatsAppIcon } from "./icons";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hi, I'm interested in PitstopIQ!")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="wa-float"
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 9999,
        width: 60,
        height: 60,
        background: "#25D366",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,.32)",
      }}
    >
      <WhatsAppIcon width={28} height={28} fill="white" />
    </a>
  );
}
