import Link from "next/link";

const condensed = "var(--font-barlow), 'Barlow Condensed', sans-serif";

export interface LegalSection {
  heading: string;
  body: string[];
  list?: string[];
}

export function LegalPage({
  title,
  lastUpdated,
  intro,
  sections,
}: {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <div style={{ background: "#070C14", minHeight: "100vh" }}>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(11,17,32,0.92)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid #1E3A5F",
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
          <Link href="/" style={{ display: "flex", alignItems: "center", lineHeight: 1 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="PitstopIQ"
              style={{ height: 40, width: "auto", display: "block" }}
            />
          </Link>
          <Link href="/" className="nav-link">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px 96px" }}>
        <h1
          style={{
            fontFamily: condensed,
            fontWeight: 800,
            fontSize: "clamp(36px, 6vw, 52px)",
            lineHeight: 1.05,
            color: "#fff",
            marginBottom: 12,
          }}
        >
          {title}
        </h1>
        <p style={{ color: "#64748B", fontSize: 13, marginBottom: 40 }}>
          Last updated: {lastUpdated}
        </p>
        <p style={{ color: "#94A3B8", fontSize: 15, lineHeight: 1.8, marginBottom: 40 }}>
          {intro}
        </p>

        {sections.map((section, i) => (
          <section key={section.heading} style={{ marginBottom: 36 }}>
            <h2
              style={{
                fontFamily: condensed,
                fontWeight: 700,
                fontSize: 24,
                color: "#fff",
                marginBottom: 14,
              }}
            >
              {i + 1}. {section.heading}
            </h2>
            {section.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                style={{ color: "#94A3B8", fontSize: 15, lineHeight: 1.8, marginBottom: 12 }}
              >
                {paragraph}
              </p>
            ))}
            {section.list && (
              <ul style={{ paddingLeft: 22, marginTop: 4 }}>
                {section.list.map((item) => (
                  <li
                    key={item.slice(0, 40)}
                    style={{ color: "#94A3B8", fontSize: 15, lineHeight: 1.8, marginBottom: 8 }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <div
          style={{
            marginTop: 56,
            paddingTop: 24,
            borderTop: "1px solid #1E3A5F",
            color: "#64748B",
            fontSize: 14,
            lineHeight: 1.8,
          }}
        >
          <p style={{ marginBottom: 4 }}>
            Questions? Contact us at{" "}
            <a href="mailto:info@lumoraventures.com" style={{ color: "#F97316" }}>
              info@lumoraventures.com
            </a>{" "}
            or on WhatsApp at{" "}
            <a
              href="https://wa.me/94711100800"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#F97316" }}
            >
              +94 71 110 0800
            </a>
            .
          </p>
          <p>© 2026 Lumora Ventures PVT Ltd. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
}
