"use client";

import { useLanguage } from "@/lib/language-context";
import { waLink } from "@/lib/translations";
import { MessageIcon, WhatsAppIcon } from "./icons";

function DashboardRow({
  plate,
  name,
  status,
  color,
  bg,
}: {
  plate: string;
  name: string;
  status: string;
  color: string;
  bg: string;
}) {
  return (
    <div className="dash-row">
      <div>
        <div className="lh" style={{ fontWeight: 800, fontSize: 15, letterSpacing: ".04em" }}>
          {plate}
        </div>
        <div style={{ fontSize: 12, color: "var(--ink-dim)", marginTop: 2 }}>{name}</div>
      </div>
      <span style={{ background: bg, color, fontSize: 11, fontWeight: 700, padding: "5px 12px", borderRadius: 999 }}>
        {status}
      </span>
    </div>
  );
}

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-dots" />
      <div className="hero-blob" style={{ top: -120, left: -120, width: 420, height: 420, background: "rgba(59,130,246,.55)" }} />
      <div className="hero-blob" style={{ bottom: 40, right: -100, width: 460, height: 460, background: "rgba(255,160,40,.5)", animationDelay: "-5s" }} />

      <div className="container" style={{ zIndex: 1 }}>
        <div className="hero-grid">
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

          <div className="dashboard-float">
            <div className="float-chip" style={{ top: -22, right: 8, zIndex: 2 }}>
              <span style={{ width: 22, height: 22, borderRadius: 7, background: "#22c55e", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>✓</span>
              Service complete
            </div>
            <div className="dash-card">
              <div
                style={{
                  background: "linear-gradient(135deg,#7c3aed,#ec4899)",
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#fff",
                }}
              >
                <span className="lh" style={{ fontWeight: 800, fontSize: 15 }}>
                  Active Services Today
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div className="live-dot" style={{ width: 8, height: 8, background: "#4ade80", borderRadius: "50%" }} />
                  <span style={{ fontSize: 12, fontWeight: 700 }}>Live</span>
                </div>
              </div>
              <DashboardRow plate="CAB-1234" name="Kamal Perera" status="In Progress" color="#b45309" bg="#fef3c7" />
              <DashboardRow plate="WP-KG-5678" name="Nimal Silva" status="Done" color="#15803d" bg="#dcfce7" />
              <DashboardRow plate="NB-3421" name="Sunil Fernando" status="Pending" color="#4338ca" bg="#e0e7ff" />
              <div
                style={{
                  background: "var(--bg-soft)",
                  padding: "13px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--ink-soft)" }}>
                  <MessageIcon width={15} height={15} />
                  <span style={{ fontSize: 12, fontWeight: 600 }}>3 reminder SMS sent today</span>
                </div>
                <span style={{ background: "var(--grad-brand)", color: "#fff", fontSize: 11, fontWeight: 800, padding: "3px 10px", borderRadius: 999 }}>
                  +3
                </span>
              </div>
              <div style={{ padding: "9px 20px", textAlign: "center", borderTop: "1px solid var(--line)" }}>
                <span style={{ fontSize: 10, color: "var(--ink-dim)", letterSpacing: ".06em" }}>
                  Lumora Tech · Sent via PitstopIQ
                </span>
              </div>
            </div>
            <div className="float-chip" style={{ bottom: -20, left: -16, zIndex: 2 }}>
              <span style={{ width: 22, height: 22, borderRadius: 7, background: "#f59e0b", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>★</span>
              Customers come back
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
