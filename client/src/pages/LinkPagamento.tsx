import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Link2, CheckCircle2, ArrowRight, Smartphone, Globe, Clock, Shield, DollarSign, Send } from "lucide-react";

const TAP_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445116665/BfSy55ooS3GFRkNJUTk7V9/solar-tech_6600d13c.jpg";

export default function LinkPagamento() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-16 lg:py-24 text-white"
        style={{ background: "linear-gradient(135deg, oklch(0.20 0.10 250) 0%, oklch(0.30 0.16 250) 60%, oklch(0.40 0.18 250) 100%)" }}
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
                style={{ background: "oklch(1 0 0 / 0.12)", border: "1px solid oklch(1 0 0 / 0.2)" }}
              >
                <Link2 className="w-3.5 h-3.5" />
                Link de Pagamento
              </div>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                Cobre de qualquer lugar,{" "}
                <span style={{ color: "oklch(0.85 0.15 55)" }}>sem maquininha</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Gere um link de pagamento em segundos e envie por WhatsApp, e-mail ou SMS. Seu cliente paga de onde estiver, com a mesma taxa da maquininha.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/tutoriais/link-pagamento">
                  <Button
                    size="lg"
                    className="text-white font-bold text-base px-8"
                    style={{ background: "linear-gradient(135deg, oklch(0.65 0.18 55), oklch(0.72 0.18 55))" }}
                  >
                    Ver Tutorial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/simular-taxas">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-semibold text-base px-8 border-white/30 text-white hover:bg-white/10"
                  >
                    Simular Taxas
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <img
                src={TAP_IMAGE}
                alt="Pagamento por link no celular"
                className="rounded-2xl w-full object-cover shadow-2xl"
                style={{ height: "400px" }}
              />
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-border"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: "oklch(0.30 0.16 250 / 0.1)" }}
                  >
                    <CheckCircle2 className="w-5 h-5" style={{ color: "oklch(0.30 0.16 250)" }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">Mesma taxa</p>
                    <p className="text-xs text-muted-foreground">que a maquininha</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2
              className="text-3xl font-bold text-foreground mb-4"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Por que usar o{" "}
              <span className="brand-gradient-text">Link de Pagamento?</span>
            </h2>
            <p className="text-muted-foreground">
              Flexibilidade para fechar mais negócios, independentemente da distância.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Venda à distância",
                description: "Feche projetos em outras cidades sem precisar estar presencialmente.",
              },
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: "Mesma taxa da maquininha",
                description: "Sem custo adicional para cobranças remotas. Transparência total.",
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "Funciona em qualquer dispositivo",
                description: "O cliente paga pelo celular, tablet ou computador com facilidade.",
              },
              {
                icon: <Send className="w-6 h-6" />,
                title: "Compartilhe por qualquer canal",
                description: "Envie por WhatsApp, e-mail, SMS ou qualquer outra plataforma.",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Cobranças recorrentes",
                description: "Automatize cobranças mensais para contratos de manutenção.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Pagamento seguro",
                description: "Transações protegidas com criptografia e autenticação do banco.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-border card-hover bg-white"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "oklch(0.30 0.16 250 / 0.08)" }}
                >
                  <span style={{ color: "oklch(0.30 0.16 250)" }}>{item.icon}</span>
                </div>
                <h3 className="font-bold text-base text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona resumido */}
      <section className="py-16 lg:py-20" style={{ background: "oklch(0.97 0.005 250)" }}>
        <div className="container max-w-3xl">
          <h2
            className="text-2xl font-bold text-foreground mb-8 text-center"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Como funciona em 3 passos
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Gere o link",
                description: "Acesse o portal, informe o valor e crie o link em segundos.",
              },
              {
                step: "2",
                title: "Compartilhe",
                description: "Envie o link para o cliente por WhatsApp, e-mail ou SMS.",
              },
              {
                step: "3",
                title: "Receba",
                description: "O cliente paga e o valor cai na sua conta em D+2.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, oklch(0.30 0.16 250), oklch(0.55 0.20 250))" }}
                >
                  {item.step}
                </div>
                <h3 className="font-bold text-base text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/tutoriais/link-pagamento">
              <Button
                size="lg"
                className="text-white font-bold px-10"
                style={{ background: "linear-gradient(135deg, oklch(0.30 0.16 250), oklch(0.55 0.20 250))" }}
              >
                Ver Tutorial Completo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
