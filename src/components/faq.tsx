"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { ChevronDownIcon } from "./icons";

const condensed = "'Barlow Condensed',sans-serif";

export function Faq() {
  const { t, faqs } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: "#0F1923", padding: "96px 24px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div className="fade-in-up" style={{ marginBottom: 48 }}>
          <div className="section-label lb">{t.faqLabel}</div>
          <h2 className="lh" style={{ fontFamily: condensed, fontWeight: 800, fontSize: 44, color: "#fff" }}>
            {t.faqHeading}
          </h2>
        </div>
        <div>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} style={{ borderBottom: "1px solid #1E3A5F" }}>
                <button
                  type="button"
                  className="faq-question lb"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{faq.q}</span>
                  <ChevronDownIcon
                    width={18}
                    height={18}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      flexShrink: 0,
                      color: isOpen ? "#F97316" : "#64748B",
                      display: "inline-block",
                    }}
                  />
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? 280 : 0,
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.38s ease, opacity 0.28s ease",
                    paddingBottom: isOpen ? 20 : 0,
                  }}
                >
                  <p className="lb" style={{ color: "#94A3B8", fontSize: 15, lineHeight: 1.8, paddingBottom: 4 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
