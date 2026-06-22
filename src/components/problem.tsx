"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/lib/language-context";
import { BarChartIcon, BellOffIcon, FileIcon } from "./icons";

const condensed = "'Barlow Condensed',sans-serif";

function ProblemCard({
  icon,
  title,
  desc,
  delay,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  delay?: string;
}) {
  return (
    <div
      className={`fade-in-up feature-card${delay ? ` ${delay}` : ""}`}
      style={{
        background: "#162032",
        border: "1px solid #1E3A5F",
        borderRadius: 14,
        padding: 32,
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          background: "rgba(249,115,22,.1)",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        {icon}
      </div>
      <h3
        className="lh"
        style={{ fontFamily: condensed, fontWeight: 700, fontSize: 22, color: "#fff", marginBottom: 10 }}
      >
        {title}
      </h3>
      <p className="lb" style={{ color: "#94A3B8", fontSize: 14, lineHeight: 1.75 }}>
        {desc}
      </p>
    </div>
  );
}

export function Problem() {
  const { t } = useLanguage();
  return (
    <section style={{ background: "#0F1923", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="fade-in-up">
          <div className="section-label lb">{t.probLabel}</div>
          <h2
            className="lh"
            style={{
              fontFamily: condensed,
              fontWeight: 700,
              fontSize: 44,
              lineHeight: 1.05,
              color: "#fff",
              maxWidth: 580,
            }}
          >
            {t.probHeading}
          </h2>
        </div>
        <div className="problem-grid" style={{ marginTop: 52 }}>
          <ProblemCard icon={<FileIcon width={26} height={26} />} title={t.probC1t} desc={t.probC1d} />
          <ProblemCard icon={<BellOffIcon width={26} height={26} />} title={t.probC2t} desc={t.probC2d} delay="fd1" />
          <ProblemCard icon={<BarChartIcon width={26} height={26} />} title={t.probC3t} desc={t.probC3d} delay="fd2" />
        </div>
      </div>
    </section>
  );
}
