"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/lib/language-context";
import {
  BoxIcon,
  ClockIcon,
  FileIcon,
  MessageIcon,
  TrendingUpIcon,
  UsersIcon,
} from "./icons";

const condensed = "'Barlow Condensed',sans-serif";

function FeatureCard({
  icon,
  title,
  desc,
  pro,
  delay,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  pro?: boolean;
  delay?: string;
}) {
  return (
    <div
      className={`fade-in-up feature-card${delay ? ` ${delay}` : ""}`}
      style={{
        background: "#0F1923",
        border: "1px solid #1E3A5F",
        borderLeft: "3px solid #F97316",
        borderRadius: 14,
        padding: 28,
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
        <div
          style={{
            width: 44,
            height: 44,
            background: "rgba(249,115,22,.12)",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <h3 className="lh" style={{ fontFamily: condensed, fontWeight: 700, fontSize: 20, color: "#fff" }}>
              {title}
            </h3>
            {pro && (
              <span
                style={{
                  background: "#F97316",
                  color: "#fff",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: ".08em",
                  padding: "2px 8px",
                  borderRadius: 20,
                  textTransform: "uppercase",
                  flexShrink: 0,
                }}
              >
                PRO
              </span>
            )}
          </div>
          <p className="lb" style={{ color: "#94A3B8", fontSize: 14, lineHeight: 1.75 }}>
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Features() {
  const { t } = useLanguage();
  return (
    <section id="features" style={{ background: "#0B1120", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-label lb" style={{ justifyContent: "center" }}>
            {t.featLabel}
          </div>
          <h2
            className="lh"
            style={{ fontFamily: condensed, fontWeight: 800, fontSize: 44, lineHeight: 1.05, color: "#fff" }}
          >
            {t.featHeading}
          </h2>
        </div>
        <div className="features-grid">
          <FeatureCard icon={<UsersIcon width={22} height={22} />} title={t.feat1t} desc={t.feat1d} />
          <FeatureCard icon={<MessageIcon width={22} height={22} />} title={t.feat2t} desc={t.feat2d} delay="fd1" />
          <FeatureCard icon={<ClockIcon width={22} height={22} />} title={t.feat3t} desc={t.feat3d} />
          <FeatureCard icon={<BoxIcon width={22} height={22} />} title={t.feat4t} desc={t.feat4d} pro delay="fd1" />
          <FeatureCard icon={<FileIcon width={22} height={22} />} title={t.feat5t} desc={t.feat5d} pro />
          <FeatureCard icon={<TrendingUpIcon width={22} height={22} />} title={t.feat6t} desc={t.feat6d} pro delay="fd1" />
        </div>
      </div>
    </section>
  );
}
