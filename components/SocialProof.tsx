import Icon from "./Icon";

const LOGOS = [
  { name: "Airbnb",      style: { fontFamily: "var(--font-cormorant), serif", fontSize: "22px", fontWeight: "500", letterSpacing: "-0.01em" } },
  { name: "Forbes",      style: { fontFamily: "var(--font-cormorant), serif", fontSize: "26px", fontWeight: "600", letterSpacing: "0.04em"  } },
  { name: "Booking.com", style: { fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "13px", fontWeight: "700", letterSpacing: "-0.01em" } },
  { name: "Tatler Asia", style: { fontFamily: "var(--font-cormorant), serif", fontSize: "17px", fontWeight: "400", fontStyle: "italic"       } },
  { name: "Agoda",       style: { fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "18px", fontWeight: "700", letterSpacing: "-0.02em" } },
  { name: "Dezeen",      style: { fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "14px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase" as const } },
];

const TRUST_TAGS = [
  "ROI as Projected",
  "Transparent Reporting",
  "Professional Management",
  "Would Reinvest",
];

export default function SocialProof() {
  return (
    <section id="portfolio" style={{ background: "var(--kabut)", padding: "72px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <p
          className="reveal"
          style={{
            textAlign: "center",
            fontSize: "10px",
            fontWeight: "500",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(238,237,235,0.32)",
            marginBottom: "44px",
          }}
        >
          Featured In &amp; Listed On
        </p>

        <div
          className="reveal grid grid-cols-3 md:grid-cols-6"
          style={{ gap: "32px 24px", alignItems: "center", justifyItems: "center", transitionDelay: "80ms" }}
        >
          {LOGOS.map(({ name, style: logoStyle }) => (
            <div key={name} className="logo-item" style={{ textAlign: "center" }}>
              <span style={{ color: "var(--padi)", ...logoStyle }}>{name}</span>
            </div>
          ))}
        </div>

        {/* Rating strip */}
        <div
          className="reveal"
          style={{
            marginTop: "64px",
            padding: "32px",
            border: "1px solid rgba(238,237,235,0.08)",
            borderRadius: "10px",
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            alignItems: "center",
            justifyContent: "space-between",
            transitionDelay: "160ms",
          }}
        >
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(238,237,235,0.35)", marginBottom: "6px" }}>
              Investor Average Rating
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span className="font-display font-light" style={{ fontSize: "36px", color: "var(--padang)", letterSpacing: "-0.02em" }}>4.9</span>
              <div>
                <div style={{ display: "flex", gap: "2px" }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} style={{ color: "var(--padang)", fontSize: "13px" }}>★</span>
                  ))}
                </div>
                <span style={{ fontSize: "11px", color: "rgba(238,237,235,0.4)" }}>from 47 verified investors</span>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {TRUST_TAGS.map((tag) => (
              <span
                key={tag}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "6px 12px",
                  border: "1px solid rgba(238,237,235,0.1)",
                  borderRadius: "20px",
                  fontSize: "11px",
                  color: "rgba(238,237,235,0.55)",
                  background: "rgba(238,237,235,0.03)",
                }}
              >
                <Icon name="check" size={11} style={{ color: "var(--padang)" }} /> {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
