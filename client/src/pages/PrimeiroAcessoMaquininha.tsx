import { Button } from "@/components/ui/button";
import {
  CreditCard, CheckCircle2, AlertTriangle,
  ArrowRight, Wifi, Info, Zap, Shield, BarChart2
} from "lucide-react";

function AttentionBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-4 rounded-xl p-4 border flex items-start gap-3"
      style={{ background: "oklch(0.98 0.04 55 / 0.4)", borderColor: "oklch(0.72 0.18 55 / 0.4)" }}
    >
      <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.18 55)" }} />
      <div className="text-sm text-foreground leading-relaxed">{children}</div>
    </div>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-4 rounded-xl p-4 border flex items-start gap-3"
      style={{ background: "oklch(0.30 0.16 250 / 0.05)", borderColor: "oklch(0.30 0.16 250 / 0.2)" }}
    >
      <Info className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.30 0.16 250)" }} />
      <div className="text-sm text-foreground leading-relaxed">{children}</div>
    </div>
  );
}

export default function PrimeiroAcessoMaquininha() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-16 lg:py-20 text-white"
        style={{ background: "linear-gradient(135deg, oklch(0.20 0.10 250) 0%, oklch(0.30 0.16 250) 60%, oklch(0.40 0.18 250) 100%)" }}
      >
        <div className="container">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
              style={{ background: "oklch(1 0 0 / 0.12)", border: "1px solid oklch(1 0 0 / 0.2)" }}
            >
              <CreditCard className="w-3.5 h-3.5" />
              Primeiro Acesso
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Sua Maquininha
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Conheça tudo sobre a maquininha do Tá na Conta — conexão, funcionalidades, Pix e como tirar o máximo proveito dela.
            </p>
          </div>
        </div>
      </section>

      {/* Apresentação da maquininha */}
      <section className="py-12 bg-white">
        <div className="container max-w-3xl">
          <div
            className="rounded-2xl p-6 lg:p-8 border"
            style={{ background: "oklch(0.30 0.16 250 / 0.04)", borderColor: "oklch(0.30 0.16 250 / 0.15)" }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "oklch(0.30 0.16 250 / 0.1)" }}
              >
                <CreditCard className="w-6 h-6" style={{ color: "oklch(0.30 0.16 250)" }} />
              </div>
              <div>
                <h2 className="font-bold text-lg text-foreground mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
                  A maquininha mais moderna do mercado
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Você está recebendo a maquininha mais moderna do mercado! Ela tem sistema operacional <strong>Android</strong>, alta duração de bateria e seu uso é muito intuitivo. Sua experiência vai ser como a de usar celulares Android.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conexão */}
      <section className="py-10" style={{ background: "oklch(0.97 0.005 250)" }}>
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "oklch(0.30 0.16 250 / 0.1)" }}
            >
              <Wifi className="w-5 h-5" style={{ color: "oklch(0.30 0.16 250)" }} />
            </div>
            <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Sora, sans-serif" }}>
              Conexão da Maquininha
            </h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Sua maquininha está conectada com a <strong>Vivo</strong>! Mas sugerimos sempre mantê-la configurada também ao seu Wi-Fi da loja e plano de dados do celular. Assim, você sempre terá opções de conexão, mesmo instalando painéis solares no interior do Brasil.
          </p>
          <InfoBox>
            Para configurar o Wi-Fi, toque na tela da maquininha com um <strong>"arrastar para baixo"</strong> — o mesmo movimento que você faz para acessar o Wi-Fi no seu celular Android. Siga da mesma forma que configura no seu celular.
          </InfoBox>
        </div>
      </section>

      {/* Ligar a maquininha */}
      <section className="py-10 bg-white">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "oklch(0.72 0.18 55 / 0.12)" }}
            >
              <Zap className="w-5 h-5" style={{ color: "oklch(0.55 0.15 55)" }} />
            </div>
            <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Sora, sans-serif" }}>
              Como ligar a maquininha
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ background: "linear-gradient(135deg, oklch(0.30 0.16 250), oklch(0.55 0.20 250))" }}
              >
                1
              </div>
              <div>
                <h4 className="font-semibold text-base text-foreground mb-1">Pressione o botão cromado</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Segure o botão cromado por <strong>3 segundos</strong> até que a bolinha laranja apareça na tela.
                </p>
                <AttentionBox>
                  Aguarde a inicialização completa do terminal antes de realizar qualquer operação. A maquininha precisa carregar todos os aplicativos antes de estar pronta para uso.
                </AttentionBox>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pix na maquininha */}
      <section className="py-12" style={{ background: "oklch(0.97 0.005 250)" }}>
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "oklch(0.40 0.18 160 / 0.1)" }}
            >
              <CheckCircle2 className="w-5 h-5" style={{ color: "oklch(0.40 0.18 160)" }} />
            </div>
            <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Sora, sans-serif" }}>
              Pix na Maquininha
            </h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            A venda em Pix também está habilitada na maquininha. Usar o Pix na maquininha te dá vários benefícios:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Shield className="w-5 h-5" />,
                title: "Segurança",
                desc: "O recibo para o seu cliente sai na hora e você terá certeza de que o Pix cairá na conta correta, evitando golpes.",
              },
              {
                icon: <BarChart2 className="w-5 h-5" />,
                title: "Facilidade na conciliação",
                desc: "As vendas constarão no Portal e os valores cairão junto com as vendas em cartão.",
              },
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Flexibilidade",
                desc: "Qualquer funcionário pode fazer a venda sem precisar ter acesso à conta principal da empresa.",
              },
              {
                icon: <CheckCircle2 className="w-5 h-5" />,
                title: "Eficiência financeira",
                desc: "Os valores transacionados poderão ser usados para pagar os produtos descritos na proposta comercial de energia solar.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl border border-border bg-white shadow-sm"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: "oklch(0.40 0.18 160 / 0.1)" }}
                >
                  <span style={{ color: "oklch(0.40 0.18 160)" }}>{item.icon}</span>
                </div>
                <p className="font-semibold text-sm text-foreground mb-1">{item.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalidades aceitas */}
      <section className="py-12 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "Sora, sans-serif" }}>
            Modalidades aceitas
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Débito", desc: "Pagamento imediato no débito" },
              { label: "Crédito à Vista", desc: "Crédito em parcela única" },
              { label: "Crédito Parcelado", desc: "Até 21 vezes no crédito" },
              { label: "Pix", desc: "Pagamento instantâneo" },
              { label: "Contactless", desc: "Aproximação NFC" },
              { label: "Chip e Tarja", desc: "Inserção e passagem" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-xl border border-border text-center"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2"
                  style={{ background: "oklch(0.30 0.16 250 / 0.08)" }}
                >
                  <CreditCard className="w-4 h-4" style={{ color: "oklch(0.30 0.16 250)" }} />
                </div>
                <p className="font-semibold text-sm text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-12 text-white"
        style={{ background: "linear-gradient(135deg, oklch(0.20 0.10 250), oklch(0.30 0.16 250))" }}
      >
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
            Pronto para vender?
          </h2>
          <p className="text-white/70 mb-6 text-sm">
            Veja o tutorial completo de como realizar uma venda na maquininha.
          </p>
          <a href="/tutoriais/maquininha">
            <Button
              size="lg"
              className="font-bold text-base px-8"
              style={{ background: "linear-gradient(135deg, oklch(0.65 0.18 55), oklch(0.72 0.18 55))", color: "white" }}
            >
              Ver Tutorial de Venda
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
