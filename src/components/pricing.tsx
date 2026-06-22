"use client";

import { useLanguage } from "@/lib/language-context";
import { waLink } from "@/lib/translations";

const condensed = "'Barlow Condensed',sans-serif";

function FeatureLine({ label, included }: { label: string; included: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span className={included ? "check-yes" : "check-no"}>{included ? "✓" : "✗"}</span>
      <span className="lb" style={{ color: included ? "#94A3B8" : "#374151", fontSize: 14 }}>
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
    <section id="pricing" style={{ background: "#0B1120", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-label lb" style={{ justifyContent: "center" }}>
            {t.priceLabel}
          </div>
          <h2 className="lh" style={{ fontFamily: condensed, fontWeight: 800, fontSize: 44, color: "#fff", marginBottom: 12 }}>
            {t.priceHeading}
          </h2>
          <p className="lb" style={{ color: "#94A3B8", fontSize: 16 }}>
            {t.priceSub}
          </p>
        </div>

        <div className="pricing-grid" style={{ maxWidth: 900, margin: "0 auto 32px" }}>
          {/* Basic */}
          <div
            className="fade-in-up pricing-card pricing-card-basic"
            style={{ background: "#0F1923", border: "1px solid #1E3A5F", borderRadius: 20, padding: 40, position: "relative" }}
          >
            <div
              className="lb"
              style={{
                fontFamily: condensed,
                fontWeight: 700,
                fontSize: 13,
                color: "#94A3B8",
                letterSpacing: ".16em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              {t.basicLabel}
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 2, marginBottom: 6 }}>
              <span style={{ fontFamily: condensed, fontWeight: 800, fontSize: 52, color: "#fff", lineHeight: 1 }}>
                LKR 4,999
              </span>
            </div>
            <div className="lb" style={{ color: "#64748B", fontSize: 14, marginBottom: 28 }}>
              {t.basicSub}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
              {basicIncluded.map((f) => (
                <FeatureLine key={f} label={f} included />
              ))}
              <div style={{ height: 1, background: "#1E3A5F", margin: "4px 0" }} />
              {basicExcluded.map((f) => (
                <FeatureLine key={f} label={f} included={false} />
              ))}
            </div>
            <a
              href={waLink("Hi, I'm interested in PitstopIQ Basic!")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary lb"
              style={{ width: "100%", justifyContent: "center", fontSize: 15 }}
            >
              {t.basicCta}
            </a>
          </div>

          {/* Pro */}
          <div
            className="fade-in-up fd1 pricing-card pricing-card-pro pricing-pro-border"
            style={{ borderRadius: 20, padding: 40, position: "relative", overflow: "hidden" }}
          >
            <div className="pro-shimmer" />
            <div
              className="lb"
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                background: "#F97316",
                color: "#fff",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: ".1em",
                padding: "4px 12px",
                borderRadius: 20,
                textTransform: "uppercase",
              }}
            >
              {t.popular}
            </div>
            <div
              className="lb"
              style={{
                fontFamily: condensed,
                fontWeight: 700,
                fontSize: 13,
                color: "#F97316",
                letterSpacing: ".16em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              {t.proLabel}
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 2, marginBottom: 6 }}>
              <span style={{ fontFamily: condensed, fontWeight: 800, fontSize: 52, color: "#fff", lineHeight: 1 }}>
                LKR 7,999
              </span>
            </div>
            <div className="lb" style={{ color: "#64748B", fontSize: 14, marginBottom: 28 }}>
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
              style={{ width: "100%", justifyContent: "center", fontSize: 15 }}
            >
              {t.proCta}
            </a>
          </div>
        </div>

        <p className="lb" style={{ textAlign: "center", color: "#64748B", fontSize: 13 }}>
          {t.priceNote}
        </p>
      </div>
    </section>
  );
}
