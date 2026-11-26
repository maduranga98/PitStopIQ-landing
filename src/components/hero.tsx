"use client";

import { useLanguage } from "@/lib/language-context";
import { waLink } from "@/lib/translations";
import { WhatsAppIcon } from "./icons";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-dots" />
      <div className="hero-blob" style={{ top: -120, left: -120, width: 420, height: 420, background: "rgba(59,130,246,.55)" }} />
      <div className="hero-blob" style={{ bottom: 40, right: -100, width: 460, height: 460, background: "rgba(255,160,40,.5)", animationDelay: "-5s" }} />

      <div className="container" style={{ zIndex: 1 }}>
        <div className="hero-center">
          <div>
            <div className="hero-pill hero-a1 lb">
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", flexShrink: 0 }} />
              {t.heroEyebrow}
            </div>
            <h1 className="hero-headline lh hero-a2">
              {t.heroH1a}
              <br />
              <span className="hero-hl-accent">{t.heroH1b}</span>
            </h1>
            <p className="hero-sub lb hero-a3">{t.heroSub}</p>
            <div className="hero-ctas hero-a3">
              <a
                href={waLink("Hi, I'm interested in PitstopIQ!")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white lb"
                style={{ fontSize: 16, padding: "16px 32px" }}
              >
                <WhatsAppIcon width={18} height={18} />
                {t.heroCta1}
              </a>
              <a href="#pricing" className="btn-ghost lb" style={{ fontSize: 16, padding: "14px 32px" }}>
                {t.heroCta2}
              </a>
            </div>
            <div className="trust-stats hero-a4 lb">
              <span className="trust-chip">✦ {t.heroStat1}</span>
              <span className="trust-chip">✓ {t.heroStat2}</span>
            </div>
          </div>

        </div>
      </div>

      <svg className="wave" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true">
        <path fill="#ffffff" d="M0,40 C240,80 480,0 720,30 C960,60 1200,70 1440,20 L1440,70 L0,70 Z" />
      </svg>
    </section>
  );
}
