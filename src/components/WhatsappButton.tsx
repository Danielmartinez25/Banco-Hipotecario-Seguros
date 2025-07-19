import Image from "next/image";
import whatsAppLogo from "../../public/whatsapp-logo.svg";

export default function WhatsAppButton() {
  return (
    <a href="/" target="_blank" rel="noreferrer">
      <Image
        src={whatsAppLogo}
        alt="WhatsApp Logo"
        style={{
          position: "fixed",
          bottom: "1.25rem",
          right: "1rem",
          width: "3rem",
          height: "3rem",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          zIndex: 10,
        }}
      />
    </a>
  );
}
