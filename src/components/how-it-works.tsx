"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/lib/language-context";
import { ChatBubbleIcon, ClipboardIcon, ZapIcon } from "./icons";

const condensed = "'Barlow Condensed',sans-serif";

function Step({
  icon,
  label,
  title,
  desc,
  delay,
}: {
  icon: ReactNode;
  label: string;
  title: string;
  desc: string;
  delay?: string;
}) {
  return (
    <div
      className={`fade-in-up${delay ? ` ${delay}` : ""}`}
      style={{ textAlign: "center", padding: "0 20px", position: "relative", zIndex: 1 }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          background: "rgba(249,115,22,.1)",
          border: "2px solid rgba(249,115,22,.3)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 20px",
        }}
      >
        {icon}
      </div>
      <div
        className="lb"
        style={{
          fontFamily: condensed,
          fontWeight: 800,
          fontSize: 12,
          color: "#F97316",
          letterSpacing: ".18em",
          textTransform: "uppercase",
          marginBottom: 12,
        }}
      >
        {label}
      </div>
      <h3 className="lh" style={{ fontFamily: condensed, fontWeight: 700, fontSize: 24, color: "#fff", marginBottom: 12 }}>
        {title}
      </h3>
      <p className="lb" style={{ color: "#94A3B8", fontSize: 14, lineHeight: 1.75 }}>
        {desc}
      </p>
    </div>
  );
}

export function HowItWorks() {
  const { t } = useLanguage();
  return (
    <section id="how-it-works" style={{ background: "#0F1923", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label lb" style={{ justifyContent: "center" }}>
            {t.hiwLabel}
          </div>
          <h2
            className="lh"
            style={{ fontFamily: condensed, fontWeight: 800, fontSize: 44, lineHeight: 1.05, color: "#fff" }}
          >
            {t.hiwHeading}
          </h2>
        </div>
        <div style={{ position: "relative" }}>
          <div className="step-line fade-in-up" />
          <div className="steps-grid">
            <Step icon={<ChatBubbleIcon width={28} height={28} />} label={t.hiw1l} title={t.hiw1t} desc={t.hiw1d} />
            <Step icon={<ClipboardIcon width={28} height={28} />} label={t.hiw2l} title={t.hiw2t} desc={t.hiw2d} delay="fd1" />
            <Step icon={<ZapIcon width={28} height={28} />} label={t.hiw3l} title={t.hiw3t} desc={t.hiw3d} delay="fd2" />
          </div>
        </div>
      </div>
    </section>
  );
}
