import Icon from "./Icon";

const WA_LINK =
  "https://wa.me/6281234567890?text=Hello!%20I%20am%20interested%20in%20learning%20more%20about%20Akura%20Villas.";

export default function WAFab() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="wa-fab"
      style={{
        position: "fixed",
        bottom: "24px", right: "24px",
        width: "52px", height: "52px",
        borderRadius: "50%",
        background: "#25D366",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#fff",
        boxShadow: "0 4px 22px rgba(37,211,102,0.38)",
        zIndex: 40,
        textDecoration: "none",
      }}
    >
      <Icon name="whatsapp" size={22} />
    </a>
  );
}
