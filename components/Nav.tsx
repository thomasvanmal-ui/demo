"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Icon from "./Icon";

const WA_LINK =
  "https://wa.me/6281234567890?text=Hello!%20I%20am%20interested%20in%20learning%20more%20about%20Akura%20Villas.";

const NAV_LINKS = [
  { label: "Portfolio",  href: "#portfolio"  },
  { label: "Projects",   href: "#projects"   },
  { label: "Philosophy", href: "#philosophy" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const linkColor = scrolled ? "var(--batu)" : "rgba(238,237,235,0.72)";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        background: scrolled ? "var(--padi)" : "transparent",
        boxShadow: scrolled ? "0 1px 0 rgba(58,64,52,0.08)" : "none",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "72px",
      }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={scrolled ? "/brand-assets/1.png" : "/brand-assets/2.png"}
            alt="Akura Villas"
            width={120}
            height={36}
            style={{ height: "36px", width: "auto" }}
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: "40px", display: "none" }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="nav-link"
              style={{ color: linkColor, fontSize: "13px", fontWeight: "500", letterSpacing: "0.04em" }}
            >
              {label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              padding: "9px 20px",
              fontSize: "11px",
              background: scrolled ? "var(--batu)" : "transparent",
              color: "var(--padi)",
              border: `1.5px solid ${scrolled ? "var(--batu)" : "rgba(238,237,235,0.32)"}`,
            }}
          >
            Get Started <Icon name="arrowUpRight" size={12} />
          </a>
        </div>

        {/* Hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="block md:hidden"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: "20px", height: "1.5px",
                marginBottom: i < 2 ? "5px" : 0,
                background: scrolled ? "var(--batu)" : "var(--padi)",
                transformOrigin: "center",
                transform: mobileOpen
                  ? i === 0 ? "rotate(45deg) translate(4.5px, 4.5px)"
                  : i === 2 ? "rotate(-45deg) translate(4.5px, -4.5px)"
                  : "none"
                  : "none",
                opacity: mobileOpen && i === 1 ? 0 : 1,
                transition: "transform 0.25s ease, opacity 0.25s ease",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{
          background: "var(--padi)",
          padding: "8px 24px 24px",
          borderTop: "1px solid rgba(58,64,52,0.07)",
        }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                color: "var(--batu)",
                fontSize: "14px",
                fontWeight: "500",
                textDecoration: "none",
                borderBottom: "1px solid rgba(58,64,52,0.06)",
              }}
            >
              {label}
            </a>
          ))}
          <div style={{ marginTop: "16px" }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
