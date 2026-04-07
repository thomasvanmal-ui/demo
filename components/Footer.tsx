"use client";

import Image from "next/image";
import Icon from "./Icon";

const WA_LINK =
  "https://wa.me/6281234567890?text=Hello!%20I%20am%20interested%20in%20learning%20more%20about%20Akura%20Villas.";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--batu)", borderTop: "1px solid rgba(238,237,235,0.07)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 24px 40px" }}>
        {/* Top grid */}
        <div
          className="lg:grid-cols-4"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "40px", marginBottom: "48px" }}
        >
          {/* Brand */}
          <div className="lg:col-span-1" style={{ gridColumn: "1 / -1" }}>
            <Image
              src="/brand-assets/2.png"
              alt="Akura Villas"
              width={120}
              height={34}
              style={{ height: "34px", width: "auto", marginBottom: "16px" }}
            />
            <p style={{ fontSize: "13px", color: "rgba(238,237,235,0.42)", lineHeight: "1.75", maxWidth: "210px", marginBottom: "20px" }}>
              Premium villa developments in Bali &amp; Lombok. Built for investors who expect more.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              <SocialBtn iconName="instagram" href="#"       label="Instagram" />
              <SocialBtn iconName="linkedin"  href="#"       label="LinkedIn"  />
              <SocialBtn iconName="whatsapp"  href={WA_LINK} label="WhatsApp"  />
            </div>
          </div>

          {/* Company */}
          <div>
            <FooterColHead>Company</FooterColHead>
            {["About Us", "Portfolio", "Our Process", "Investor FAQ"].map((l) => (
              <FooterLink key={l}>{l}</FooterLink>
            ))}
          </div>

          {/* Locations */}
          <div>
            <FooterColHead>Locations</FooterColHead>
            {["Canggu", "Seminyak", "Uluwatu", "Lombok"].map((l) => (
              <FooterLink key={l}>{l}</FooterLink>
            ))}
          </div>

          {/* Connect */}
          <div>
            <FooterColHead>Connect</FooterColHead>
            <FooterLink href={WA_LINK}>WhatsApp Us</FooterLink>
            <FooterLink href="mailto:invest@akuravillas.com">invest@akuravillas.com</FooterLink>
            <FooterLink href="tel:+62812345678">+62 812 345 678</FooterLink>
            <FooterLink href="#">Schedule a Call</FooterLink>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(238,237,235,0.07)",
          paddingTop: "24px",
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <p style={{ fontSize: "11px", color: "rgba(238,237,235,0.28)", letterSpacing: "0.04em" }}>
            © {year} Akura Villas Pte. Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a
                key={l}
                href="#"
                style={{ fontSize: "11px", color: "rgba(238,237,235,0.28)", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(238,237,235,0.6)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(238,237,235,0.28)")}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialBtn({ iconName, href, label }: { iconName: "instagram" | "linkedin" | "whatsapp"; href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: "36px", height: "36px",
        border: "1px solid rgba(238,237,235,0.1)",
        borderRadius: "7px",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "rgba(238,237,235,0.4)",
        textDecoration: "none",
        transition: "border-color 0.2s ease, color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(147,162,117,0.38)";
        e.currentTarget.style.color = "var(--padang)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(238,237,235,0.1)";
        e.currentTarget.style.color = "rgba(238,237,235,0.4)";
      }}
    >
      <Icon name={iconName} size={16} />
    </a>
  );
}

function FooterColHead({ children }: { children: React.ReactNode }) {
  return (
    <h4 style={{ fontSize: "10px", fontWeight: "500", letterSpacing: "0.13em", textTransform: "uppercase", color: "var(--padang)", marginBottom: "16px" }}>
      {children}
    </h4>
  );
}

function FooterLink({ children, href = "#" }: { children: React.ReactNode; href?: string }) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel={href.startsWith("http") ? "noopener noreferrer" : ""}
      style={{ display: "block", fontSize: "13px", color: "rgba(238,237,235,0.45)", textDecoration: "none", marginBottom: "10px", transition: "color 0.2s ease" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--padi)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(238,237,235,0.45)")}
    >
      {children}
    </a>
  );
}
