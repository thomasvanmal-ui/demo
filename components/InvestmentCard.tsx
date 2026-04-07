import Icon from "./Icon";

const WA_LINK =
  "https://wa.me/6281234567890?text=Hello!%20I%20am%20interested%20in%20learning%20more%20about%20Akura%20Villas.";

const METRICS = [
  { label: "Net Annual ROI", value: "18.5%",      accent: true  },
  { label: "Avg. Occupancy", value: "84%",         accent: false },
  { label: "Entry Price",    value: "from $185k",  accent: false },
  { label: "Est. Payback",   value: "5.4 years",   accent: false },
];

export default function InvestmentCard() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "400px" }}>
      {/* Ambient glow */}
      <div style={{
        position: "absolute",
        inset: "-20px",
        background: "radial-gradient(ellipse at 50% 50%, rgba(147,162,117,0.14) 0%, transparent 70%)",
        borderRadius: "50%",
        pointerEvents: "none",
      }} />

      {/* Card */}
      <div style={{
        position: "relative",
        background: "rgba(238,237,235,0.055)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(238,237,235,0.1)",
        borderRadius: "12px",
        padding: "28px",
      }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "24px" }}>
          <div>
            <div style={{ fontSize: "10px", letterSpacing: "0.13em", textTransform: "uppercase", color: "var(--padang)", marginBottom: "5px" }}>
              Akura · Satu
            </div>
            <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "20px", fontWeight: "400", color: "var(--padi)", letterSpacing: "-0.01em" }}>
              Canggu, Bali
            </div>
          </div>
          <div style={{
            background: "rgba(37,211,102,0.14)",
            border: "1px solid rgba(37,211,102,0.25)",
            borderRadius: "20px",
            padding: "4px 11px",
            display: "flex", alignItems: "center", gap: "5px",
          }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#25D366" }} />
            <span style={{ fontSize: "9px", color: "#3dd87c", fontWeight: "600", letterSpacing: "0.07em" }}>AVAILABLE</span>
          </div>
        </div>

        {/* Metrics */}
        {METRICS.map(({ label, value, accent }, i) => (
          <div
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "13px 0",
              borderBottom: i < METRICS.length - 1 ? "1px solid rgba(238,237,235,0.07)" : "none",
            }}
          >
            <span style={{ fontSize: "12px", color: "rgba(238,237,235,0.48)" }}>{label}</span>
            <span style={{
              fontFamily: accent ? "var(--font-cormorant), serif" : "inherit",
              fontSize: accent ? "20px" : "14px",
              fontWeight: accent ? "400" : "500",
              color: accent ? "var(--padang)" : "var(--padi)",
              letterSpacing: accent ? "-0.02em" : "0",
            }}>
              {value}
            </span>
          </div>
        ))}

        {/* CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-wa"
          style={{ width: "100%", justifyContent: "center", marginTop: "20px" }}
        >
          <Icon name="whatsapp" size={17} /> Request Info Pack
        </a>
      </div>

      {/* Urgency badge */}
      <div style={{
        position: "absolute",
        top: "-14px", right: "22px",
        background: "var(--padang)",
        borderRadius: "6px",
        padding: "7px 13px",
      }}>
        <span style={{ fontSize: "9px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--batu)" }}>
          2 Units Left
        </span>
      </div>

      {/* Decorative corner lines */}
      <div style={{
        position: "absolute",
        bottom: "-18px", left: "-18px",
        width: "40px", height: "40px",
        borderLeft: "1px solid rgba(147,162,117,0.28)",
        borderBottom: "1px solid rgba(147,162,117,0.28)",
        borderRadius: "0 0 0 4px",
      }} />
    </div>
  );
}
