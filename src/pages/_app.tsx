import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("../utils/bootstrap.client");
  }, []);
  return (
    <>
      {/* Bootstrap JS Bundle (includes Popper) */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}
