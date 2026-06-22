"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { type Lang, waLink } from "@/lib/translations";
import { WhatsAppIcon } from "./icons";

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "si", label: "සිං" },
  { code: "ta", label: "தமி" },
];

function LangSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  return (
    <div className={className}>
      {LANGS.map(({ code, label }) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            style={{
              background: active ? "#F97316" : "transparent",
              color: active ? "#fff" : "#64748B",
              border: "none",
              borderRadius: 5,
              padding: "5px 10px",
              fontSize: 12,
              fontWeight: active ? 700 : 600,
              cursor: "pointer",
              transition: "background .2s",
              fontFamily: "inherit",
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "rgba(11,17,32,0.92)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid #1E3A5F" : "1px solid transparent",
        transition: "border-color 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#" style={{ display: "flex", alignItems: "baseline", lineHeight: 1 }}>
          <span className="brand">PITSTOP</span>
          <span className="brand brand-accent">IQ</span>
        </a>

        <div className="desktop-nav">
          <a href="#features" className="nav-link lb">
            {t.navFeatures}
          </a>
          <a href="#how-it-works" className="nav-link lb">
            {t.navHiw}
          </a>
          <a href="#pricing" className="nav-link lb">
            {t.navPricing}
          </a>
          <a href="#faq" className="nav-link lb">
            {t.navFaq}
          </a>
          <LangSwitcher className="lang-switcher" />
          <a
            href={waLink("Hi, I'm interested in PitstopIQ!")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary lb"
            style={{ fontSize: 13, padding: "10px 18px" }}
          >
            <WhatsAppIcon width={15} height={15} />
            {t.navCta}
          </a>
        </div>

        <button
          type="button"
          className="mobile-nav-btn"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            flexDirection: "column",
            gap: 5,
            alignItems: "center",
          }}
        >
          <span style={{ display: "block", width: 22, height: 2, background: "#fff", borderRadius: 1 }} />
          <span style={{ display: "block", width: 22, height: 2, background: "#fff", borderRadius: 1 }} />
          <span style={{ display: "block", width: 22, height: 2, background: "#fff", borderRadius: 1 }} />
        </button>
      </div>

      <div
        style={{
          display: menuOpen ? "block" : "none",
          background: "#0F1923",
          borderTop: "1px solid #1E3A5F",
        }}
      >
        <div style={{ padding: "8px 24px 20px", display: "flex", flexDirection: "column" }}>
          {[
            { href: "#features", label: t.navFeatures },
            { href: "#how-it-works", label: t.navHiw },
            { href: "#pricing", label: t.navPricing },
            { href: "#faq", label: t.navFaq },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="lb"
              style={{
                color: "#94A3B8",
                fontSize: 16,
                fontWeight: 500,
                padding: "14px 0",
                borderBottom: "1px solid rgba(30,58,95,.4)",
              }}
            >
              {item.label}
            </a>
          ))}
          <LangSwitcher
            className="lang-switcher"
            // styling for mobile row handled inline
          />
          <a
            href={waLink("Hi, I'm interested in PitstopIQ!")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary lb"
            onClick={closeMenu}
            style={{ marginTop: 16, justifyContent: "center" }}
          >
            <WhatsAppIcon width={16} height={16} />
            {t.navCta}
          </a>
        </div>
      </div>
    </nav>
  );
}
