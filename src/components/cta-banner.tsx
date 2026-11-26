"use client";

import { useLanguage } from "@/lib/language-context";
import { waLink } from "@/lib/translations";
import { WhatsAppIcon } from "./icons";

export function CtaBanner() {
  const { t } = useLanguage();
  return (
    <section className="cta">
      <div className="hero-dots" />
      <div className="hero-blob" style={{ top: -100, right: -80, width: 360, height: 360, background: "rgba(255,224,138,.5)" }} />
      <div className="hero-blob" style={{ bottom: -120, left: -80, width: 380, height: 380, background: "rgba(59,130,246,.5)", animationDelay: "-6s" }} />
      <div className="fade-in-up" style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <h2 className="lh cta-heading" style={{ marginBottom: 18 }}>
          {t.ctaHeading}
        </h2>
        <p className="lb" style={{ color: "rgba(255,255,255,.92)", fontSize: 18, marginBottom: 36 }}>
          {t.ctaSub}
        </p>
        <a
          href={waLink("Hi, I'm interested in PitstopIQ!")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-white lb"
          style={{ fontSize: 17, padding: "17px 38px" }}
        >
          <WhatsAppIcon width={20} height={20} />
          {t.ctaBtn}
        </a>
        <p className="lb" style={{ color: "rgba(255,255,255,.8)", fontSize: 13, marginTop: 20 }}>
          {t.ctaNote}
        </p>
      </div>
    </section>
  );
}
