interface EyebrowProps {
  children: React.ReactNode;
}

export default function Eyebrow({ children }: EyebrowProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <div style={{ width: "28px", height: "1px", background: "var(--padang)", flexShrink: 0 }} />
      <span style={{
        fontSize: "10px",
        fontWeight: "500",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--padang)",
      }}>
        {children}
      </span>
    </div>
  );
}
