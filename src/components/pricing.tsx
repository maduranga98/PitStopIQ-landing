"use client";

import { useLanguage } from "@/lib/language-context";
import { waLink } from "@/lib/translations";

function FeatureLine({ label, included }: { label: string; included: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span className={included ? "check-yes" : "check-no"}>{included ? "✓" : "✕"}</span>
      <span className="lb" style={{ opacity: included ? 1 : 0.55, fontSize: 14 }}>
        {label}
      </span>
    </div>
  );
}

export function Pricing() {
  const { t } = useLanguage();

  const basicIncluded = [t.pf1, t.pf2, t.pf3, t.pf4, t.pf5, t.pf6, t.pf7];
  const basicExcluded = [t.pf8, t.pf9, t.pf10];
  const proFeatures = [t.pp1, t.pp2, t.pp3, t.pp4, t.pp5, t.pp6, t.pp7, t.pp8, t.pp9];

  return (
    <section id="pricing" className="section" style={{ background: "var(--bg-soft)" }}>
      <div className="container">
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-label lb">
            {t.priceLabel}
          </div>
          <h2 className="h2 lh">{t.priceHeading}</h2>
          <p className="section-sub lb">{t.priceSub}</p>
        </div>

        <div className="pricing-grid" style={{ maxWidth: 920, margin: "0 auto 32px" }}>
          <div className="fade-in-up pricing-card pricing-basic">
            <div className="lb" style={{ fontWeight: 800, fontSize: 13, color: "var(--ink-soft)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 16 }}>
              {t.basicLabel}
            </div>
            <div className="price lh">LKR 4,999</div>
            <div className="lb" style={{ color: "var(--ink-dim)", fontSize: 14, margin: "8px 0 28px" }}>
              {t.basicSub}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
              {basicIncluded.map((f) => (
                <FeatureLine key={f} label={f} included />
              ))}
              <div style={{ height: 1, background: "var(--line)", margin: "4px 0" }} />
              {basicExcluded.map((f) => (
                <FeatureLine key={f} label={f} included={false} />
              ))}
            </div>
            <a
              href={waLink("Hi, I'm interested in PitstopIQ Basic!")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary lb"
              style={{ width: "100%" }}
            >
              {t.basicCta}
            </a>
          </div>

          <div className="fade-in-up fd1 pricing-card pricing-pro">
            <div
              className="lb"
              style={{
                position: "absolute",
                top: -14,
                right: 28,
                background: "#f97316",
                color: "#fff",
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: ".08em",
                padding: "6px 14px",
                borderRadius: 999,
                textTransform: "uppercase",
                boxShadow: "0 8px 18px -6px rgba(0,0,0,.3)",
              }}
            >
              {t.popular}
            </div>
            <div className="lb" style={{ fontWeight: 800, fontSize: 13, color: "#fb923c", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 16 }}>
              {t.proLabel}
            </div>
            <div className="price lh">LKR 7,999</div>
            <div className="lb" style={{ color: "rgba(255,255,255,.8)", fontSize: 14, margin: "8px 0 28px" }}>
              {t.proSub}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
              {proFeatures.map((f) => (
                <FeatureLine key={f} label={f} included />
              ))}
            </div>
            <a
              href={waLink("Hi, I'm interested in PitstopIQ Pro!")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary lb"
              style={{ width: "100%" }}
            >
              {t.proCta}
            </a>
          </div>
        </div>

        <p className="lb" style={{ textAlign: "center", color: "var(--ink-dim)", fontSize: 13 }}>
          {t.priceNote}
        </p>
      </div>
    </section>
  );
}
