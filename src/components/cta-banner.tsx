"use client";

import { useLanguage } from "@/lib/language-context";
import { waLink } from "@/lib/translations";
import { WhatsAppIcon } from "./icons";

export function CtaBanner() {
  const { t } = useLanguage();
  return (
    <section className="cta">
      <div className="hero-dots" />
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
          className="btn-primary lb"
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
