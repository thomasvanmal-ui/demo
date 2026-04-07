import Icon from "./Icon";
import Eyebrow from "./Eyebrow";
import InvestmentCard from "./InvestmentCard";

const WA_LINK =
  "https://wa.me/6281234567890?text=Hello!%20I%20am%20interested%20in%20learning%20more%20about%20Akura%20Villas.";

const STATS = [
  { value: "12+", label: "Completed Villas"   },
  { value: "4",   label: "Active Projects"     },
  { value: "8yr", label: "In Bali Market"      },
  { value: "18%", label: "Avg. Net Annual ROI" },
];

const COUNTRIES = ["🇳🇱 Netherlands", "🇩🇪 Germany", "🇦🇺 Australia", "🇺🇸 United States"];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        background: "var(--batu)",
      }}
    >
      {/* Background gradients */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: `
          radial-gradient(ellipse at 18% 28%, rgba(147,162,117,0.18) 0%, transparent 55%),
          radial-gradient(ellipse at 82% 75%, rgba(118,101,92,0.16) 0%, transparent 50%),
          linear-gradient(145deg, rgba(58,64,52,1) 0%, rgba(74,71,65,0.96) 100%)
        `,
      }} />

      {/* Main content */}
      <div style={{
        position: "relative", zIndex: 10,
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 24px",
        width: "100%",
        flex: 1,
        display: "flex",
        alignItems: "center",
      }}>
        <div
          className="lg:grid-cols-2"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "center",
            width: "100%",
            paddingTop: "96px",
            paddingBottom: "80px",
          }}
        >
          {/* Left — Copy */}
          <div>
            <div className="reveal" style={{ marginBottom: "28px" }}>
              <Eyebrow>Premium Villa Investment · Bali &amp; Lombok</Eyebrow>
            </div>

            <h1
              className="reveal font-display font-light"
              style={{
                fontSize: "clamp(50px, 7.8vw, 108px)",
                letterSpacing: "-0.03em",
                color: "var(--padi)",
                lineHeight: "0.93",
                marginBottom: "28px",
                transitionDelay: "80ms",
              }}
            >
              Invest in Bali.<br />
              <em style={{ fontStyle: "italic", color: "var(--padang)" }}>Live</em> Off Returns.
            </h1>

            <p
              className="reveal font-body"
              style={{
                fontSize: "16px",
                fontWeight: "300",
                color: "rgba(238,237,235,0.62)",
                lineHeight: "1.82",
                maxWidth: "390px",
                marginBottom: "44px",
                transitionDelay: "160ms",
              }}
            >
              Akura Villas develops premium, investor-grade villas in Bali and Lombok — fully managed, designed to yield, and built to last generations.
            </p>

            <div
              className="reveal"
              style={{ display: "flex", flexWrap: "wrap", gap: "12px", transitionDelay: "240ms" }}
            >
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
                <Icon name="whatsapp" size={18} /> Get Started
              </a>
              <a href="#portfolio" className="btn btn-ghost-light">
                View Projects <Icon name="arrowDown" size={13} />
              </a>
            </div>

            {/* Social trust */}
            <div
              className="reveal"
              style={{
                marginTop: "44px",
                paddingTop: "28px",
                borderTop: "1px solid rgba(238,237,235,0.08)",
                transitionDelay: "320ms",
              }}
            >
              <p style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(238,237,235,0.32)", marginBottom: "12px" }}>
                Investors from
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {COUNTRIES.map((c) => (
                  <span key={c} style={{ fontSize: "12px", color: "rgba(238,237,235,0.48)", fontWeight: "400" }}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Card visual */}
          <div
            className="reveal hidden lg:flex items-center justify-center"
            style={{ transitionDelay: "200ms" }}
          >
            <InvestmentCard />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        style={{
          position: "relative", zIndex: 10,
          background: "rgba(58,64,52,0.52)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderTop: "1px solid rgba(238,237,235,0.07)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "24px" }}>
          <div
            className="md:grid-cols-4"
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}
          >
            {STATS.map(({ value, label }, i) => (
              <div key={label} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div
                  className="font-display font-light"
                  style={{ fontSize: "clamp(28px, 3.5vw, 38px)", color: "var(--padang)", letterSpacing: "-0.02em", lineHeight: 1 }}
                >
                  {value}
                </div>
                <div style={{ fontSize: "10px", fontWeight: "500", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(238,237,235,0.38)", marginTop: "5px" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
