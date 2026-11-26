"use client";

import type { CSSProperties, ReactNode } from "react";
import { useLanguage } from "@/lib/language-context";
import { BoxIcon, ClockIcon, FileIcon, MessageIcon, TrendingUpIcon, UsersIcon } from "./icons";

function FeatureCard({
  icon,
  title,
  desc,
  color,
  pro,
  delay,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  color: string;
  pro?: boolean;
  delay?: string;
}) {
  return (
    <div className={`fade-in-up card${delay ? ` ${delay}` : ""}`} style={{ "--c": color } as CSSProperties}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <div className="icon-tile">{icon}</div>
        {pro && <span className="pro-tag">PRO</span>}
      </div>
      <h3 className="lh" style={{ marginBottom: 8 }}>
        {title}
      </h3>
      <p className="lb">{desc}</p>
    </div>
  );
}

export function Features() {
  const { t } = useLanguage();
  return (
    <section id="features" className="section" style={{ background: "var(--bg-soft)" }}>
      <div className="container">
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-label lb">{t.featLabel}</div>
          <h2 className="h2 lh">{t.featHeading}</h2>
        </div>
        <div className="features-grid">
          <FeatureCard icon={<UsersIcon width={24} height={24} />} title={t.feat1t} desc={t.feat1d} color="#3b82f6" />
          <FeatureCard icon={<MessageIcon width={24} height={24} />} title={t.feat2t} desc={t.feat2d} color="#22c55e" delay="fd1" />
          <FeatureCard icon={<ClockIcon width={24} height={24} />} title={t.feat3t} desc={t.feat3d} color="#f59e0b" delay="fd2" />
          <FeatureCard icon={<BoxIcon width={24} height={24} />} title={t.feat4t} desc={t.feat4d} color="#ec4899" pro />
          <FeatureCard icon={<FileIcon width={24} height={24} />} title={t.feat5t} desc={t.feat5d} color="#14b8a6" delay="fd1" />
          <FeatureCard icon={<TrendingUpIcon width={24} height={24} />} title={t.feat6t} desc={t.feat6d} color="#7c3aed" pro delay="fd2" />
        </div>
      </div>
    </section>
  );
}
