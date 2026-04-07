import Icon from "./Icon";
import Eyebrow from "./Eyebrow";

const FEATURES = [
  {
    icon: "trending" as const,
    title: "Proven ROI-Focused Strategy",
    desc: "Every project is underwritten to deliver 15–22% net annual returns, with full financial projections shared before you commit.",
  },
  {
    icon: "home" as const,
    title: "Completely Hands-Off",
    desc: "Our in-house team handles bookings, maintenance, staffing, and monthly reporting. You collect income — nothing else.",
  },
  {
    icon: "leaf" as const,
    title: "Sustainable by Design",
    desc: "Natural materials, passive cooling, and water-independent systems reduce operating costs and attract premium guests.",
  },
  {
    icon: "eye" as const,
    title: "Full Transparency",
    desc: "Live dashboards, monthly P&L reports, and legal documentation in plain language — no surprises, ever.",
  },
  {
    icon: "shield" as const,
    title: "Legally Structured & Secure",
    desc: "Every project uses a clean, investor-friendly legal structure reviewed by independent Bali property lawyers.",
  },
  {
    icon: "users" as const,
    title: "A Community of Co-owners",
    desc: "Join a network of international investors. Quarterly gatherings, shared intel, and genuine long-term community.",
  },
];

export default function Features() {
  return (
    <section id="philosophy" style={{ background: "var(--padi)", padding: "100px 0 112px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ maxWidth: "540px", marginBottom: "60px" }}>
          <div className="reveal" style={{ marginBottom: "18px" }}>
            <Eyebrow>Why Akura</Eyebrow>
          </div>
          <h2
            className="reveal font-display font-light"
            style={{
              fontSize: "clamp(36px, 5vw, 62px)",
              letterSpacing: "-0.03em",
              color: "var(--batu)",
              lineHeight: "1.02",
              marginBottom: "18px",
              transitionDelay: "80ms",
            }}
          >
            Built for investors,<br />
            <em style={{ fontStyle: "italic" }}>not just buyers.</em>
          </h2>
          <p
            className="reveal font-body"
            style={{ fontSize: "15px", color: "var(--kabut)", lineHeight: "1.82", transitionDelay: "160ms" }}
          >
            We combine premium architecture with institutional-grade investment discipline — so you get a beautiful asset and a reliable return.
          </p>
        </div>

        {/* Grid */}
        <div
          className="sm:grid-cols-2 lg:grid-cols-3"
          style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "20px" }}
        >
          {FEATURES.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="feature-card reveal"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(58,64,52,0.07)",
                borderRadius: "10px",
                padding: "28px",
                boxShadow: "0 2px 16px rgba(58,64,52,0.045)",
                transitionDelay: `${Math.min(i * 80, 320)}ms`,
              }}
            >
              <div style={{
                width: "46px", height: "46px",
                borderRadius: "11px",
                background: "rgba(147,162,117,0.13)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--padang)",
                marginBottom: "18px",
              }}>
                <Icon name={icon} size={21} />
              </div>
              <h3 style={{ fontSize: "15.5px", fontWeight: "500", color: "var(--batu)", marginBottom: "10px", lineHeight: "1.35" }}>
                {title}
              </h3>
              <p style={{ fontSize: "13.5px", color: "var(--kabut)", lineHeight: "1.78" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
