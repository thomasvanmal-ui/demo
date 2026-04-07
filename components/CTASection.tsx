import Icon from "./Icon";

const WA_LINK =
  "https://wa.me/6281234567890?text=Hello!%20I%20am%20interested%20in%20learning%20more%20about%20Akura%20Villas.";

export default function CTASection() {
  return (
    <section id="projects" style={{ background: "var(--batu)", padding: "104px 0" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <div className="reveal" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "24px" }}>
          <div style={{ width: "28px", height: "1px", background: "var(--padang)" }} />
          <span style={{ fontSize: "10px", fontWeight: "500", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--padang)" }}>
            Start Your Journey
          </span>
          <div style={{ width: "28px", height: "1px", background: "var(--padang)" }} />
        </div>

        <h2
          className="reveal font-display font-light"
          style={{
            fontSize: "clamp(38px, 5.5vw, 74px)",
            letterSpacing: "-0.03em",
            color: "var(--padi)",
            lineHeight: "1.02",
            marginBottom: "20px",
            transitionDelay: "80ms",
          }}
        >
          Ready to put your<br />
          <em style={{ fontStyle: "italic", color: "var(--padang)" }}>money to work?</em>
        </h2>

        <p
          className="reveal font-body"
          style={{
            fontSize: "16px",
            fontWeight: "300",
            color: "rgba(238,237,235,0.58)",
            lineHeight: "1.82",
            marginBottom: "44px",
            transitionDelay: "160ms",
          }}
        >
          Book a 30-minute call with our team. We'll walk you through our current project, financial projections, and answer every question — no pressure, no sales tactics.
        </p>

        <div
          className="reveal"
          style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", transitionDelay: "240ms" }}
        >
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ padding: "15px 32px", fontSize: "12px" }}>
            <Icon name="whatsapp" size={18} /> Get Started on WhatsApp
          </a>
          <a href="mailto:invest@akuravillas.com" className="btn btn-ghost-light" style={{ padding: "15px 32px", fontSize: "12px" }}>
            <Icon name="mail" size={15} /> Send Us an Email
          </a>
        </div>
      </div>
    </section>
  );
}
