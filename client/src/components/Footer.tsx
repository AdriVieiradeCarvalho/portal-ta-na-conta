import { Link } from "wouter";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white" style={{ background: "oklch(0.12 0.06 145)" }}>
      {/* Main Footer */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{ background: "linear-gradient(135deg, oklch(0.60 0.20 145), oklch(0.72 0.18 55))" }}
              >
                TNC
              </div>
              <div>
                <p className="font-bold text-lg leading-tight" style={{ fontFamily: "Sora, sans-serif" }}>
                  Tá na Conta
                </p>
                <p className="text-xs opacity-60 leading-tight">Portal de Pagamentos</p>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed max-w-sm mb-6">
              Solução completa de pagamentos para integradores. Maquininha, link de pagamento e conta digital em um só lugar.
            </p>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{ background: "oklch(0.72 0.18 55 / 0.15)", border: "1px solid oklch(0.72 0.18 55 / 0.3)" }}
            >
              <span style={{ color: "oklch(0.85 0.15 55)" }}>Uma parceria Intelbras e Cappta</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider opacity-50 mb-4">Navegação</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Conhecer o Portal", href: "/" },
                { label: "Ativar Conta", href: "/primeiro-acesso/conta" },
                { label: "Acessar o Portal", href: "/primeiro-acesso/portal" },
                { label: "Simular Taxas", href: "/simular-taxas" },
                { label: "Link de Pagamento", href: "/link-pagamento" },
                { label: "Suporte Técnico", href: "/suporte" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span className="text-sm opacity-70 hover:opacity-100 hover:text-white transition-opacity cursor-pointer">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tutoriais */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider opacity-50 mb-4">Tutoriais</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Plataforma Solar", href: "/tutoriais/plataforma-solar" },
                { label: "Venda na Maquininha", href: "/tutoriais/maquininha" },
                { label: "Venda com Link", href: "/tutoriais/link-pagamento" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span className="text-sm opacity-70 hover:opacity-100 hover:text-white transition-opacity cursor-pointer">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold text-sm uppercase tracking-wider opacity-50 mb-4">Suporte</h4>
              <a
                href="https://wa.me/5511974409760"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-opacity hover:opacity-100 opacity-70"
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
      <div className="border-t" style={{ borderColor: "oklch(1 0 0 / 0.08)" }}>
        <div className="container py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs opacity-40 text-center sm:text-left">
              © 2025 Portal Tá na Conta. Todos os direitos reservados.
            </p>
            <p className="text-xs opacity-40 text-center sm:text-right">
              Uma parceria Intelbras e Cappta
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
