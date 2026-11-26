"use client";

import type { CSSProperties, ReactNode } from "react";
import { useLanguage } from "@/lib/language-context";
import { BarChartIcon, BellOffIcon, FileIcon } from "./icons";

function ProblemCard({
  icon,
  title,
  desc,
  color,
  delay,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  color: string;
  delay?: string;
}) {
  return (
    <div className={`fade-in-up card${delay ? ` ${delay}` : ""}`} style={{ "--c": color } as CSSProperties}>
      <div className="icon-tile" style={{ marginBottom: 20 }}>
        {icon}
      </div>
      <h3 className="lh" style={{ marginBottom: 10 }}>
        {title}
      </h3>
      <p className="lb">{desc}</p>
    </div>
  );
}

export function Problem() {
  const { t } = useLanguage();
  return (
    <section className="section" style={{ background: "#fff", paddingTop: 56 }}>
      <div className="container">
        <div className="fade-in-up" style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
          <div className="section-label lb">
            {t.probLabel}
          </div>
          <h2 className="h2 lh">{t.probHeading}</h2>
        </div>
        <div className="problem-grid" style={{ marginTop: 52 }}>
          <ProblemCard icon={<FileIcon width={26} height={26} />} title={t.probC1t} desc={t.probC1d} color="#f97316" />
          <ProblemCard icon={<BellOffIcon width={26} height={26} />} title={t.probC2t} desc={t.probC2d} color="#2563eb" delay="fd1" />
          <ProblemCard icon={<BarChartIcon width={26} height={26} />} title={t.probC3t} desc={t.probC3d} color="#4f46e5" delay="fd2" />
        </div>
      </div>
    </section>
  );
}
