import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Clock, Shield, CheckCircle2, ArrowRight } from "lucide-react";

const SUPORTE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445116665/BfSy55ooS3GFRkNJUTk7V9/suporte-ta-na-conta_9e0bdbe1.png";

export default function Suporte() {
  const whatsappUrl = "https://wa.me/5511974409760?text=Ol%C3%A1%2C%20preciso%20de%20suporte%20t%C3%A9cnico%20para%20o%20T%C3%A1%20na%20Conta.";

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-10 lg:py-14 text-white"
        style={{ background: "linear-gradient(135deg, #003318 0%, #00A335 60%, #00d084 100%)" }}
      >
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <Shield className="w-3.5 h-3.5" />
              Atendimento Exclusivo
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
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
          {/* Card de contato com imagem dentro */}
          <div
            className="rounded-3xl p-8 lg:p-12 text-center border"
            style={{ background: "#f5faf7", borderColor: "rgba(0,163,53,0.15)" }}
          >
            {/* Imagem de identidade do suporte — em destaque dentro do card */}
            <div className="flex justify-center mb-6">
              <img
                src={SUPORTE_IMG}
                alt="Tá na Conta - Suporte Intelbras"
                className="rounded-2xl object-cover shadow-lg"
                style={{ width: "180px", height: "180px" }}
              />
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Fale com nossa equipe
            </h2>
            <p className="text-muted-foreground mb-2 leading-relaxed">
              Atendimento exclusivo via WhatsApp por especialistas. Sem robôs, sem espera longa.
            </p>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-lg font-bold mb-8 mt-2"
              style={{ background: "rgba(0,163,53,0.08)", color: "#00A335" }}
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
                  className="font-bold text-base px-10 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto text-white"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chamar no WhatsApp
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
            {/* Horários horizontais dentro do card */}
            <div
              className="flex flex-wrap justify-center gap-x-5 gap-y-1 mt-5 pt-4 border-t"
              style={{ borderColor: "rgba(0,163,53,0.15)" }}
            >
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#00A335" }} />
                <span><strong className="text-foreground">Seg–Sex</strong> 07h–22h</span>
              </div>
              <span className="text-muted-foreground/30 text-xs hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#00A335" }} />
                <span><strong className="text-foreground">Sáb</strong> 08h–18h</span>
              </div>
              <span className="text-muted-foreground/30 text-xs hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#00A335" }} />
                <span><strong className="text-foreground">Dom/Feriado</strong> 09h–17h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temas de suporte */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
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
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "#00d084" }} />
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
                className="font-bold px-10 text-white"
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
        style={{ background: "#003318" }}
      >
        <div className="container">
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.60)" }}>
            Este suporte é destinado exclusivamente aos parceiros da solução de pagamento <strong className="text-white/80">Tá na Conta</strong> — uma parceria Intelbras e Cappta.
          </p>
        </div>
      </section>
    </div>
  );
}
