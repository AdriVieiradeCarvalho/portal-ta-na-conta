import { useEffect, useRef, useState } from "react";

export default function SimularTaxas() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(820);

  // Auto-resize iframe based on its content height
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const checkHeight = () => {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc && doc.body) {
          const h = doc.documentElement.scrollHeight || doc.body.scrollHeight;
          if (h > 100) setIframeHeight(h + 40);
        }
      } catch {
        // cross-origin: ignore
      }
    };

    const interval = setInterval(checkHeight, 400);
    iframe.addEventListener("load", checkHeight);
    return () => {
      clearInterval(interval);
      iframe.removeEventListener("load", checkHeight);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#f5faf7" }}>

      {/* Hero */}
      <section
        className="py-14 text-white"
        style={{ background: "linear-gradient(135deg, #003318 0%, #00A335 60%, #00d084 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-300 inline-block" />
            Simulador de Taxas
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Simule o pagamento
          </h1>
          <p className="text-white/80 text-base max-w-xl mx-auto leading-relaxed">
            Simule o valor a ser cobrado na maquininha ou no link de pagamento. Parcelamento de 1 a 21 vezes com taxas detalhadas e suporte a múltiplos cartões. Exporte o resultado em PDF.
          </p>
        </div>
      </section>

      {/* Simulator */}
      <main className="flex-1 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl overflow-hidden border shadow-sm"
            style={{ borderColor: "rgba(0,163,53,0.20)", background: "#fff" }}
          >
            <iframe
              ref={iframeRef}
              src="/simulador-taxas-html"
              title="Simulador de Taxas"
              width="100%"
              height={iframeHeight}
              style={{ border: "none", display: "block" }}
              sandbox="allow-scripts allow-same-origin allow-downloads allow-popups allow-modals allow-forms"
            />
          </div>

          {/* Link planilha offline */}
          <div className="mt-6 mb-4">
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl px-6 py-5 border"
              style={{ background: "rgba(0,208,132,0.06)", borderColor: "rgba(0,163,53,0.20)" }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#3E5055" }}>Prefere trabalhar offline?</p>
                  <p className="text-xs mt-0.5" style={{ color: "#3E5055", opacity: 0.7 }}>
                    Baixe a planilha de cálculo de taxas para simular sem internet.
                  </p>
                </div>
              </div>
              <a
                href="https://docs.google.com/spreadsheets/d/12nK4LYA5gCsHEDPZIluhaLL6RoHfy8YatRZWsoMyQow/edit?gid=0#gid=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-all hover:opacity-90"
                style={{ background: "#00d084", color: "#003318" }}
              >
                Acessar Planilha Offline
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
