"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { ChevronDownIcon } from "./icons";

export function Faq() {
  const { t, faqs } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div className="fade-in-up" style={{ marginBottom: 44, textAlign: "center" }}>
          <div className="section-label lb">
            {t.faqLabel}
          </div>
          <h2 className="h2 lh">{t.faqHeading}</h2>
        </div>
        <div>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className={`faq-item${isOpen ? " open" : ""}`}>
                <button type="button" className="faq-question lb" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
                  <span>{faq.q}</span>
                  <ChevronDownIcon
                    width={18}
                    height={18}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      flexShrink: 0,
                      color: isOpen ? "#2563eb" : "#7b86a6",
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
                  <p className="lb" style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.8 }}>
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
