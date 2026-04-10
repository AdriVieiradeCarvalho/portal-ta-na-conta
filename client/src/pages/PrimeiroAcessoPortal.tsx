import { Button } from "@/components/ui/button";
import {
  Monitor, ExternalLink, AlertTriangle, CheckCircle2, KeyRound, Mail, Users, Shield
} from "lucide-react";

function AttentionBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-4 rounded-xl p-4 border flex items-start gap-3"
      style={{ background: "#f0fdf4", borderColor: "rgba(0,163,53,0.25)" }}
    >
      <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.18 55)" }} />
      <div className="text-sm text-foreground leading-relaxed">{children}</div>
    </div>
  );
}

export default function PrimeiroAcessoPortal() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-16 lg:py-20 text-white"
        style={{ background: "linear-gradient(135deg, oklch(0.20 0.10 145) 0%, oklch(0.35 0.18 145) 60%, oklch(0.45 0.20 145) 100%)" }}
      >
        <div className="container">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
              style={{ background: "oklch(1 0 0 / 0.12)", border: "1px solid oklch(1 0 0 / 0.2)" }}
            >
              <Monitor className="w-3.5 h-3.5" />
              Primeiro Acesso
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Acessar o Portal de Gestão
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Conheça as funções básicas do seu portal de vendas e recebíveis e faça seu primeiro acesso com segurança.
            </p>
          </div>
        </div>
      </section>

      {/* Vídeo introdutório */}
      <section className="py-12 bg-white">
        <div className="container max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: "Roboto, sans-serif" }}>
              Funções Básicas do Portal
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mx-auto">
              Separamos um vídeo super rápido para apresentar as funções básicas do seu portal de vendas e recebíveis. Embora o portal seja intuitivo, recomendamos assistir antes do seu primeiro acesso.
            </p>
          </div>
          <div
            className="rounded-2xl overflow-hidden shadow-xl border border-border"
            style={{ aspectRatio: "16/9" }}
          >
            <iframe
              src="https://www.youtube.com/embed/GX7VDMsA72A"
              title="Funções básicas do portal Tá na Conta"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Usuário e Senha */}
      <section className="py-12" style={{ background: "oklch(0.97 0.005 145)" }}>
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "oklch(0.35 0.18 145 / 0.1)" }}>
              <KeyRound className="w-5 h-5" style={{ color: "oklch(0.35 0.18 145)" }} />
            </div>
            <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Roboto, sans-serif" }}>
              Usuário e Senha
            </h2>
          </div>

          <div
            className="rounded-2xl p-6 border mb-6"
            style={{ background: "oklch(0.35 0.18 145 / 0.04)", borderColor: "oklch(0.35 0.18 145 / 0.15)" }}
          >
            <div className="flex items-start gap-3 mb-4">
              <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.35 0.18 145)" }} />
              <div>
                <p className="font-semibold text-sm text-foreground mb-1">Mensagem de boas-vindas</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Você receberá uma mensagem de boas-vindas no seu <strong>e-mail ou WhatsApp</strong> contendo seu <strong>login de usuário Máster</strong> e <strong>senha de acesso</strong>. Digite-os no Portal e acesse.
                </p>
              </div>
            </div>
          </div>

          <AttentionBox>
            <strong>Atenção!</strong>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Esse usuário pode criar outros usuários de forma autônoma.</li>
              <li>Seu portal é uma <strong>ferramenta bancária</strong> e não apenas de pagamentos! Além da função de pagamento de boletos, ele também realiza transferências utilizando seus recebíveis. Portanto, crie usuários apenas para <strong>pessoas de sua confiança</strong>.</li>
            </ul>
          </AttentionBox>
        </div>
      </section>

      {/* Como acessar */}
      <section className="py-12 bg-white">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "oklch(0.35 0.18 145 / 0.1)" }}>
              <Monitor className="w-5 h-5" style={{ color: "oklch(0.35 0.18 145)" }} />
            </div>
            <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Roboto, sans-serif" }}>
              Como acessar o Portal
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4 p-5 bg-white rounded-2xl border border-border shadow-sm">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ background: "linear-gradient(135deg, oklch(0.35 0.18 145), oklch(0.60 0.20 145))" }}
              >
                1
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-base text-foreground mb-2">Abra a Plataforma de Gestão</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Clique no botão abaixo para acessar a plataforma de gestão do Tá na Conta.
                </p>
                <a
                  href="https://intelbras.posportal.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    className="text-white font-semibold"
                    style={{ background: "linear-gradient(135deg, oklch(0.35 0.18 145), oklch(0.60 0.20 145))" }}
                  >
                    Acessar Plataforma de Gestão
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-white rounded-2xl border border-border shadow-sm">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ background: "linear-gradient(135deg, oklch(0.35 0.18 145), oklch(0.60 0.20 145))" }}
              >
                2
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-base text-foreground mb-1">Digite seu usuário e senha</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Use as credenciais recebidas por e-mail ou WhatsApp. Seu login é o usuário Máster criado no credenciamento.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-white rounded-2xl border border-border shadow-sm">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ background: "linear-gradient(135deg, oklch(0.35 0.18 145), oklch(0.60 0.20 145))" }}
              >
                3
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-base text-foreground mb-1">Explore o portal</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Acesse o menu de Gestão Financeira, Agenda Financeira, Links de Pagamento e muito mais. Assista ao vídeo acima para conhecer todas as funções.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos do Portal */}
      <section className="py-12" style={{ background: "oklch(0.97 0.005 145)" }}>
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "Roboto, sans-serif" }}>
            O que você pode fazer no Portal
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: <CheckCircle2 className="w-5 h-5" />, title: "Gestão Financeira", desc: "Acompanhe sua agenda financeira e antecipe recebíveis." },
              { icon: <Shield className="w-5 h-5" />, title: "Links de Pagamento", desc: "Crie e gerencie links avulsos e recorrentes." },
              { icon: <Users className="w-5 h-5" />, title: "Gestão de Usuários", desc: "Crie usuários adicionais para sua equipe com segurança." },
              { icon: <Monitor className="w-5 h-5" />, title: "Relatórios", desc: "Visualize todas as suas transações e vendas em tempo real." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-5 border border-border flex items-start gap-3"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "oklch(0.35 0.18 145 / 0.1)" }}
                >
                  <span style={{ color: "oklch(0.35 0.18 145)" }}>{item.icon}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-12 text-white"
        style={{ background: "linear-gradient(135deg, oklch(0.20 0.10 145), oklch(0.35 0.18 145))" }}
      >
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "Roboto, sans-serif" }}>
            Pronto para começar?
          </h2>
          <p className="text-white/70 mb-6 text-sm">
            Acesse o portal agora e comece a gerenciar suas vendas e recebíveis.
          </p>
          <a
            href="https://intelbras.posportal.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="font-bold text-base px-8"
              style={{ background: "linear-gradient(135deg, #00d084, #00A335)", color: "white" }}
            >
              Acessar o Portal Agora
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
