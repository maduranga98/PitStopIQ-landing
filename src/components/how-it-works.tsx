"use client";

import type { CSSProperties, ReactNode } from "react";
import { useLanguage } from "@/lib/language-context";
import { ChatBubbleIcon, ClipboardIcon, ZapIcon } from "./icons";

function Step({
  icon,
  label,
  title,
  desc,
  color,
  soft,
  delay,
}: {
  icon: ReactNode;
  label: string;
  title: string;
  desc: string;
  color: string;
  soft: string;
  delay?: string;
}) {
  return (
    <div
      className={`fade-in-up${delay ? ` ${delay}` : ""}`}
      style={{ textAlign: "center", padding: "0 12px", position: "relative", "--c": color, "--c-soft": soft } as CSSProperties}
    >
      <div className="step-num">{icon}</div>
      <div className="lb" style={{ fontWeight: 800, fontSize: 12, color, letterSpacing: ".16em", textTransform: "uppercase", marginBottom: 10 }}>
        {label}
      </div>
      <h3 className="lh" style={{ fontWeight: 800, fontSize: 22, marginBottom: 10 }}>
        {title}
      </h3>
      <p className="lb" style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.7 }}>
        {desc}
      </p>
    </div>
  );
}

export function HowItWorks() {
  const { t } = useLanguage();
  return (
    <section id="how-it-works" className="section" style={{ background: "#fff" }}>
      <div className="container">
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label lb">
            {t.hiwLabel}
          </div>
          <h2 className="h2 lh">{t.hiwHeading}</h2>
        </div>
        <div style={{ position: "relative" }}>
          <div className="step-line" />
          <div className="steps-grid">
            <Step icon={<ChatBubbleIcon width={30} height={30} />} label={t.hiw1l} title={t.hiw1t} desc={t.hiw1d} color="#2563eb" soft="" />
            <Step icon={<ClipboardIcon width={30} height={30} />} label={t.hiw2l} title={t.hiw2t} desc={t.hiw2d} color="#4f46e5" soft="" delay="fd1" />
            <Step icon={<ZapIcon width={30} height={30} />} label={t.hiw3l} title={t.hiw3t} desc={t.hiw3d} color="#f97316" soft="" delay="fd2" />
          </div>
        </div>
      </div>
    </section>
  );
}
