"use client";

import { useLanguage } from "@/lib/language-context";
import { waLink } from "@/lib/translations";
import { WhatsAppIcon } from "./icons";

const condensed = "'Barlow Condensed',sans-serif";

export function CtaBanner() {
  const { t } = useLanguage();
  return (
    <section
      style={{
        background: "linear-gradient(135deg,#070C14 0%,#160a02 55%,#1f0c00 100%)",
        padding: "100px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(249,115,22,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(249,115,22,.05) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%,#000 10%,transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%,#000 10%,transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 760,
          height: 520,
          background: "radial-gradient(ellipse at center,rgba(249,115,22,.12) 0%,transparent 62%)",
          pointerEvents: "none",
        }}
      />
      <div className="fade-in-up" style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <h2
          className="lh cta-heading"
          style={{ fontFamily: condensed, fontWeight: 800, color: "#fff", marginBottom: 20 }}
        >
          {t.ctaHeading}
        </h2>
        <p className="lb" style={{ color: "#94A3B8", fontSize: 18, marginBottom: 40 }}>
          {t.ctaSub}
        </p>
        <a
          href={waLink("Hi, I'm interested in PitstopIQ!")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary lb"
          style={{ fontSize: 18, padding: "18px 40px" }}
        >
          <WhatsAppIcon width={20} height={20} />
          {t.ctaBtn}
        </a>
        <p className="lb" style={{ color: "#64748B", fontSize: 13, marginTop: 20 }}>
          {t.ctaNote}
        </p>
      </div>
    </section>
  );
}
