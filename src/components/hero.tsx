"use client";

import { useLanguage } from "@/lib/language-context";
import { waLink } from "@/lib/translations";
import { MessageIcon, WhatsAppIcon } from "./icons";

const headingStyle = {
  fontFamily: "'Barlow Condensed',sans-serif",
  fontWeight: 700,
} as const;

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
    <div
      style={{
        padding: "14px 20px",
        borderBottom: "1px solid rgba(30,58,95,.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: ".06em",
            color: "#fff",
          }}
        >
          {plate}
        </div>
        <div style={{ fontSize: 11, color: "#64748B", marginTop: 2 }}>{name}</div>
      </div>
      <span
        style={{
          background: bg,
          color,
          fontSize: 11,
          fontWeight: 600,
          padding: "4px 11px",
          borderRadius: 20,
        }}
      >
        {status}
      </span>
    </div>
  );
}

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      style={{
        background: "#070C14",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "140px 24px 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -120,
          width: 800,
          height: 800,
          background:
            "radial-gradient(ellipse at center,rgba(249,115,22,.08) 0%,transparent 65%)",
          pointerEvents: "none",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 500,
          height: 500,
          background:
            "radial-gradient(ellipse at center,rgba(249,115,22,.04) 0%,transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <div className="hero-grid">
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(249,115,22,.1)",
                border: "1px solid rgba(249,115,22,.28)",
                borderLeft: "3px solid #F97316",
                borderRadius: 4,
                padding: "6px 14px",
                marginBottom: 28,
              }}
            >
              <span
                className="lb"
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "#F97316",
                }}
              >
                {t.heroEyebrow}
              </span>
            </div>
            <h1 className="hero-headline lh">
              <span className="hw hw0">{t.heroH1a}</span>
              <br />
              <span className="hw hw1">{t.heroH1b}</span>
            </h1>
            <p
              className="hero-sub lb"
              style={{
                marginTop: 24,
                fontSize: 18,
                color: "#94A3B8",
                lineHeight: 1.75,
                maxWidth: 540,
              }}
            >
              {t.heroSub}
            </p>
            <div className="hero-cta-row hero-ctas" style={{ marginTop: 36 }}>
              <a
                href={waLink("Hi, I'm interested in PitstopIQ!")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary lb"
                style={{ fontSize: 16, padding: "16px 32px" }}
              >
                <WhatsAppIcon width={18} height={18} />
                {t.heroCta1}
              </a>
              <a
                href="#pricing"
                className="btn-secondary lb"
                style={{ fontSize: 16, padding: "14px 32px" }}
              >
                {t.heroCta2}
              </a>
            </div>
            <div className="hero-trust trust-stats">
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    width: 7,
                    height: 7,
                    background: "#F97316",
                    borderRadius: "50%",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                <span className="lb" style={{ fontSize: 14, color: "#94A3B8", fontWeight: 500 }}>
                  {t.heroStat1}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    width: 7,
                    height: 7,
                    background: "#1E3A5F",
                    borderRadius: "50%",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                <span className="lb" style={{ fontSize: 14, color: "#64748B" }}>
                  {t.heroStat2}
                </span>
              </div>
            </div>
          </div>

          <div className="dashboard-float">
            <div
              style={{
                background: "#0F1923",
                border: "1px solid #1E3A5F",
                borderRadius: 18,
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(0,0,0,.6)",
              }}
            >
              <div
                style={{
                  background: "#162032",
                  padding: "16px 20px",
                  borderBottom: "1px solid #1E3A5F",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ ...headingStyle, fontSize: 15, color: "#fff", letterSpacing: ".02em" }}>
                  Active Services — Today
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div
                    className="live-dot"
                    style={{
                      width: 8,
                      height: 8,
                      background: "#22C55E",
                      borderRadius: "50%",
                      boxShadow: "0 0 8px rgba(34,197,94,.6)",
                    }}
                  />
                  <span style={{ fontSize: 12, color: "#22C55E", fontWeight: 600 }}>Live</span>
                </div>
              </div>
              <DashboardRow plate="CAB-1234" name="Kamal Perera" status="In Progress" color="#F59E0B" bg="rgba(245,158,11,.14)" />
              <DashboardRow plate="WP-KG-5678" name="Nimal Silva" status="Done" color="#22C55E" bg="rgba(34,197,94,.14)" />
              <DashboardRow plate="NB-3421" name="Sunil Fernando" status="Pending" color="#94A3B8" bg="rgba(148,163,184,.1)" />
              <div
                style={{
                  background: "#162032",
                  borderTop: "1px solid #1E3A5F",
                  padding: "12px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <MessageIcon width={14} height={14} stroke="#94A3B8" />
                  <span style={{ fontSize: 12, color: "#94A3B8" }}>3 reminder SMS sent today</span>
                </div>
                <span
                  style={{
                    background: "rgba(249,115,22,.2)",
                    color: "#F97316",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "3px 9px",
                    borderRadius: 12,
                  }}
                >
                  +3
                </span>
              </div>
              <div
                style={{
                  background: "#070C14",
                  padding: "9px 20px",
                  textAlign: "center",
                  borderTop: "1px solid rgba(30,58,95,.3)",
                }}
              >
                <span style={{ fontSize: 10, color: "#374151", letterSpacing: ".06em" }}>
                  Lumora Tech · Sent via PitstopIQ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
