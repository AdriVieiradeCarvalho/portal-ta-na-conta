import { Link } from "wouter";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white" style={{ background: "#003318" }}>
      {/* Main Footer */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <p className="font-bold text-xl leading-tight" style={{ color: "#00d084", fontFamily: "Roboto, sans-serif" }}>
                Tá na Conta
              </p>
              <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.70)" }}>
                Uma parceria Intelbras e Cappta
              </p>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
              Solução completa de pagamentos para integradores. Maquininha, link de pagamento e conta digital em um só lugar.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>Navegação</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Conhecer o Portal", href: "/" },
                { label: "Ativar Conta", href: "/primeiro-acesso/conta" },
                { label: "Acessar o Portal", href: "/primeiro-acesso/portal" },
                { label: "Simular Taxas", href: "/simular-taxas" },
                { label: "Suporte Técnico", href: "/suporte" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span className="text-sm transition-colors cursor-pointer" style={{ color: "rgba(255,255,255,0.65)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#00d084")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tutoriais */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>Tutoriais</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Plataforma Solar", href: "/tutoriais/plataforma-solar" },
                { label: "Venda na Maquininha", href: "/tutoriais/maquininha" },

              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span className="text-sm transition-colors cursor-pointer" style={{ color: "rgba(255,255,255,0.65)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#00d084")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>Suporte</h4>
              <a
                href="https://wa.me/5511974409760"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: "#25D366" }}
              >
                <MessageCircle className="w-4 h-4" />
                (11) 97440-9760
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="container py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-center sm:text-left" style={{ color: "rgba(255,255,255,0.35)" }}>
              © 2025 Portal Tá na Conta. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
