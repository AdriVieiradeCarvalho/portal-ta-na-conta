import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Clock, Shield, Headphones, CheckCircle2, ArrowRight } from "lucide-react";

const SUPORTE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445116665/BfSy55ooS3GFRkNJUTk7V9/suporte-ta-na-conta_9e0bdbe1.png";

export default function Suporte() {
  const whatsappUrl = "https://wa.me/5511974409760?text=Ol%C3%A1%2C%20preciso%20de%20suporte%20t%C3%A9cnico%20para%20o%20T%C3%A1%20na%20Conta.";

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-16 lg:py-24 text-white"
        style={{ background: "linear-gradient(135deg, oklch(0.20 0.10 250) 0%, oklch(0.30 0.16 250) 60%, oklch(0.40 0.18 250) 100%)" }}
      >
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: "oklch(1 0 0 / 0.12)" }}
            >
              <Headphones className="w-10 h-10 text-white" />
            </div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
              style={{ background: "oklch(1 0 0 / 0.12)", border: "1px solid oklch(1 0 0 / 0.2)" }}
            >
              <Shield className="w-3.5 h-3.5" />
              Atendimento Exclusivo
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Suporte Técnico
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Quando precisar de ajuda, estamos aqui. Atendimento humano e especializado para resolver suas dúvidas rapidamente.
            </p>
          </div>
        </div>
      </section>

      {/* CTA principal */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container max-w-3xl">
          {/* Card de contato */}
          <div
            className="rounded-3xl p-8 lg:p-12 text-center border"
            style={{ background: "oklch(0.97 0.005 250)", borderColor: "oklch(0.90 0.01 250)" }}
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: "#25D366" }}
            >
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h2
              className="text-2xl lg:text-3xl font-bold text-foreground mb-3"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Fale com nossa equipe
            </h2>
            <p className="text-muted-foreground mb-2 leading-relaxed">
              Atendimento exclusivo via WhatsApp por especialistas. Sem robôs, sem espera longa.
            </p>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-lg font-bold mb-8 mt-2"
              style={{ background: "oklch(0.30 0.16 250 / 0.08)", color: "oklch(0.30 0.16 250)" }}
            >
              <Phone className="w-5 h-5" />
              (11) 97440-9760
            </div>
            <div className="block">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="text-white font-bold text-base px-10 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chamar no WhatsApp
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Ao clicar, você será redirecionado para o WhatsApp com uma mensagem pré-preenchida.
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 lg:py-16" style={{ background: "oklch(0.97 0.005 250)" }}>
        <div className="container max-w-4xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Horário de Atendimento",
                description: "Segunda a sexta, das 8h às 18h. Respondemos no menor tempo possível.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Atendimento Especializado",
                description: "Nossa equipe é treinada exclusivamente para o Tá na Conta e soluções de pagamento.",
              },
              {
                icon: <CheckCircle2 className="w-6 h-6" />,
                title: "Resolução Rápida",
                description: "A maioria dos problemas é resolvida no mesmo atendimento, sem necessidade de abertura de chamados.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-6 border border-border"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "oklch(0.30 0.16 250 / 0.08)" }}
                >
                  <span style={{ color: "oklch(0.30 0.16 250)" }}>{card.icon}</span>
                </div>
                <h3 className="font-bold text-base text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Temas de suporte */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container max-w-3xl">
          <h2
            className="text-2xl font-bold text-foreground mb-8 text-center"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Podemos ajudar com
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Ativação da conta digital",
              "Problemas com a maquininha",
              "Dúvidas sobre taxas e tarifas",
              "Configuração do portal web",
              "Geração de links de pagamento",
              "Recebimentos e prazos",
              "Portabilidade de chave Pix",
              "Cancelamento de transações",
              "Relatórios e extratos",
              "Cobranças recorrentes",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 rounded-xl border border-border">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.55 0.20 250)" }} />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="text-white font-bold px-10"
                style={{ background: "#25D366" }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Iniciar Atendimento
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section
        className="py-8 text-white text-center"
        style={{ background: "oklch(0.20 0.10 250)" }}
      >
        <div className="container">
          <p className="text-white/60 text-sm">
            Este suporte é destinado exclusivamente aos parceiros da solução de pagamento <strong className="text-white/80">Tá na Conta</strong> — uma parceria Intelbras e Cappta.
          </p>
        </div>
      </section>
    </div>
  );
}
