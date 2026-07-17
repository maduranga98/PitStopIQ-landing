"use client";

import { useLanguage } from "@/lib/language-context";
import { WHATSAPP_NUMBER } from "@/lib/translations";

const condensed = "'Barlow Condensed',sans-serif";

const colTitleStyle = {
  fontFamily: condensed,
  fontWeight: 700,
  fontSize: 13,
  color: "#fff",
  letterSpacing: ".1em",
  textTransform: "uppercase" as const,
  marginBottom: 20,
};

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer style={{ background: "#070C14", padding: "72px 24px 32px", borderTop: "1px solid #1E3A5F" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="footer-grid" style={{ marginBottom: 56 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 14 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="PitstopIQ"
                style={{ height: 48, width: "auto", display: "block" }}
              />
            </div>
            <p
              className="lb"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "#F97316",
                marginBottom: 16,
              }}
            >
              {t.footTagline}
            </p>
            <p className="lb" style={{ color: "#64748B", fontSize: 13, lineHeight: 1.75, marginBottom: 20, maxWidth: 260 }}>
              {t.footDesc}
            </p>
            <p className="lb" style={{ color: "#374151", fontSize: 12, lineHeight: 1.6, whiteSpace: "pre-line" }}>
              {t.footCopy}
            </p>
          </div>

          <div>
            <div className="lb" style={colTitleStyle}>
              {t.footProduct}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="#features" className="lb footer-link">
                {t.navFeatures}
              </a>
              <a href="#how-it-works" className="lb footer-link">
                {t.navHiw}
              </a>
              <a href="#pricing" className="lb footer-link">
                {t.navPricing}
              </a>
            </div>
          </div>

          <div>
            <div className="lb" style={colTitleStyle}>
              {t.footSupport}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                +94 71 110 0800
              </a>
              <a href="mailto:info@lumoraventures.com" className="footer-link">
                info@lumoraventures.com
              </a>
            </div>
          </div>

          <div>
            <div className="lb" style={colTitleStyle}>
              {t.footLegal}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="/privacy" className="lb footer-link">
                {t.footPrivacy}
              </a>
              <a href="/terms" className="lb footer-link">
                {t.footTerms}
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1E3A5F", paddingTop: 24, textAlign: "center" }}>
          <p className="lb" style={{ color: "#374151", fontSize: 12, letterSpacing: ".06em" }}>
            {t.footBuilt}
          </p>
        </div>
      </div>
    </footer>
  );
}
