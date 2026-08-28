import { Link } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Building2, ArrowRight, CheckCircle2, RefreshCw, CreditCard,
  Zap, Star, Users, ShoppingCart, Receipt, Package, Wrench,
  ArrowRightLeft
} from "lucide-react";

const FORM_ADESAO = "https://appintelbras.netlify.app/adesao";

const beneficios = [
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Parcelamento em até 21x liberado pelo PCI",
    description: "Oferecendo mais flexibilidade ao cliente final.",
    highlight: "Até 21x",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Split flexível pela maquininha",
    description: "Faça o split diretamente pela maquininha, direcionando valores ao Distribuidor.",
    highlight: "Split direto",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Conta Digital com Pix ilimitado",
    description: "Conta Digital completa com Pix ilimitado para movimentar seus recebimentos.",
    highlight: "Pix ilimitado",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Comunicação automática ao Distribuidor",
    description: "O Distribuidor é notificado automaticamente sempre que um split for gerado.",
    highlight: "Automático",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Quite boletos ou gere crédito",
    description: "Possibilidade de quitar boletos em aberto ou gerar crédito para compras futuras com o Distribuidor.",
    highlight: "Flexibilidade",
  },
];

/* Fluxo processual simplificado */
const fluxoEtapas = [
  { icon: <Users className="w-5 h-5" />, label: "Cliente Final", desc: "Compra o serviço/produto" },
  { icon: <CreditCard className="w-5 h-5" />, label: "Maquininha", desc: "Cobra o valor total" },
  { icon: <ArrowRightLeft className="w-5 h-5" />, label: "Split", desc: "Divide automaticamente" },
  { icon: <ShoppingCart className="w-5 h-5" />, label: "Revenda", desc: "Recebe pelo serviço" },
  { icon: <Building2 className="w-5 h-5" />, label: "Distribuidor", desc: "Recebe pelo produto" },
];

export default function ConhecaDistribuidor() {
  const [casoAtivo, setCasoAtivo] = useState<"tradicional" | "agenciada">("tradicional");

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="conheca-distribuidor-hero relative isolate overflow-hidden py-16 lg:py-20 text-white"
        style={{ background: "linear-gradient(135deg, #003318 0%, #00A335 60%, #00d084 100%)" }}
      >
        <div
          aria-hidden="true"
          className="conheca-distribuidor-hero-image absolute inset-0 -z-10"
          style={{
            backgroundColor: "#00863b",
            backgroundImage: "url('/conheca-distribuidor-hero.png')",
            backgroundBlendMode: "multiply",
          }}
        />
        <div aria-hidden="true" className="conheca-distribuidor-hero-overlay absolute inset-0 -z-10" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <Building2 className="w-3.5 h-3.5" />
              Venda integrada com o Distribuidor
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Venda integrada com o{" "}
              <span style={{ color: "#00d084" }}>Distribuidor</span>
            </h1>
            <p className="text-white/80 text-base leading-relaxed mb-8">
              Faça vendas integradas com o Distribuidor através do split de pagamentos, evite dupla tributação e gere mais lucro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={FORM_ADESAO} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="font-bold text-base px-8 shadow-lg"
                  style={{ background: "#00d084", color: "#003318" }}
                >
                  Peça sua Maquininha
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Link href="/tutoriais/distribuidor">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold text-base px-8 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                >
                  Como funciona
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fluxo processual visual (substitui o vídeo) */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Entenda como funciona a venda com o Distribuidor
            </h2>
            <p className="text-muted-foreground">
              Visão geral do fluxo de pagamento integrado.
            </p>
          </div>

          {/* Fluxo com bifurcação após Split */}
          <div className="mb-8">
            {/* Desktop: fluxo horizontal contínuo com bifurcação */}
            <div className="hidden lg:block">
              <div className="flex items-center justify-center">
                {/* Cliente */}
                {fluxoEtapas.slice(0, 1).map((etapa) => (
                  <div key={etapa.label} className="flex flex-col items-center text-center w-28">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2 shadow-md" style={{ background: "rgba(0,163,53,0.1)", border: "2px solid #00A335" }}>
                      <span style={{ color: "#00A335" }}>{etapa.icon}</span>
                    </div>
                    <p className="font-bold text-xs text-foreground" style={{fontSize: '14px'}}>{etapa.label}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5" style={{fontSize: '12px'}}>{etapa.desc}</p>
                  </div>
                ))}
                <ArrowRight className="w-5 h-5 text-green-500 flex-shrink-0 mx-2" />
                {/* Maquininha */}
                {fluxoEtapas.slice(1, 2).map((etapa) => (
                  <div key={etapa.label} className="flex flex-col items-center text-center w-28">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2 shadow-md" style={{ background: "rgba(0,163,53,0.1)", border: "2px solid #00A335" }}>
                      <span style={{ color: "#00A335" }}>{etapa.icon}</span>
                    </div>
                    <p className="font-bold text-xs text-foreground" style={{fontSize: '14px'}}>{etapa.label}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5" style={{fontSize: '12px'}}>{etapa.desc}</p>
                  </div>
                ))}
                <ArrowRight className="w-5 h-5 text-green-500 flex-shrink-0 mx-2" />
                {/* Split */}
                {fluxoEtapas.slice(2, 3).map((etapa) => (
                  <div key={etapa.label} className="flex flex-col items-center text-center w-28">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2 shadow-md" style={{ background: "#00A335", border: "2px solid #00A335" }}>
                      <span className="text-white">{etapa.icon}</span>
                    </div>
                    <p className="font-bold text-xs text-foreground" style={{fontSize: '14px'}}>{etapa.label}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5" style={{fontSize: '12px'}}>{etapa.desc}</p>
                  </div>
                ))}

                {/* Bifurcação: SVG com duas setas saindo do Split */}
                <div className="relative flex-shrink-0" style={{ width: "80px", height: "120px" }}>
                  <svg width="80" height="120" viewBox="0 0 80 120" fill="none" className="absolute inset-0">
                    <defs><marker id="arrowFlux" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#00A335"/></marker></defs>
                    {/* Seta para cima → Distribuidor */}
                    <path d="M0 60 Q30 60 70 20" stroke="#00A335" strokeWidth="2.5" fill="none" markerEnd="url(#arrowFlux)" />
                    {/* Seta para baixo → Revenda */}
                    <path d="M0 60 Q30 60 70 100" stroke="#00A335" strokeWidth="2.5" fill="none" markerEnd="url(#arrowFlux)" />
                  </svg>
                </div>

                {/* Distribuidor (cima) e Revenda (baixo) em paralelo */}
                <div className="flex flex-col items-center gap-6">
                  {/* Distribuidor */}
                  <div className="flex flex-col items-center text-center w-32">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2 shadow-md" style={{ background: "rgba(0,163,53,0.1)", border: "2px solid #00A335" }}>
                      <span style={{ color: "#00A335" }}><Building2 className="w-5 h-5" /></span>
                    </div>
                    <p className="font-bold text-xs text-foreground" style={{fontSize: '14px'}}>Distribuidor</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5" style={{fontSize: '12px'}}>Recebe pelo produto</p>
                  </div>
                  {/* Revenda */}
                  <div className="flex flex-col items-center text-center w-32">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2 shadow-md" style={{ background: "rgba(0,163,53,0.1)", border: "2px solid #00A335" }}>
                      <span style={{ color: "#00A335" }}><ShoppingCart className="w-5 h-5" /></span>
                    </div>
                    <p className="font-bold text-xs text-foreground" style={{fontSize: '14px'}}>Revenda</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5" style={{fontSize: '12px'}}>Recebe pelo serviço</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: fluxo vertical com bifurcação */}
            <div className="lg:hidden flex flex-col items-center gap-3">
              {fluxoEtapas.slice(0, 3).map((etapa, idx) => (
                <div key={etapa.label} className="flex flex-col items-center gap-3">
                  <div className="flex flex-col items-center text-center w-32">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-2 shadow-md"
                      style={idx === 2 ? { background: "#00A335", border: "2px solid #00A335" } : { background: "rgba(0,163,53,0.1)", border: "2px solid #00A335" }}
                    >
                      <span style={{ color: idx === 2 ? "#fff" : "#00A335" }}>{etapa.icon}</span>
                    </div>
                    <p className="font-bold text-xs text-foreground">{etapa.label}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{etapa.desc}</p>
                  </div>
                  {idx < 2 && <ArrowRight className="w-5 h-5 text-green-500 rotate-90" />}
                </div>
              ))}
              {/* Bifurcação mobile */}
              <div className="flex items-start gap-8 mt-2">
                <div className="flex flex-col items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-green-500 rotate-90" />
                  <div className="flex flex-col items-center text-center w-28">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2 shadow-md" style={{ background: "rgba(0,163,53,0.1)", border: "2px solid #00A335" }}>
                      <span style={{ color: "#00A335" }}><Building2 className="w-5 h-5" /></span>
                    </div>
                    <p className="font-bold text-xs text-foreground">Distribuidor</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Recebe pelo produto</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-green-500 rotate-90" />
                  <div className="flex flex-col items-center text-center w-28">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2 shadow-md" style={{ background: "rgba(0,163,53,0.1)", border: "2px solid #00A335" }}>
                      <span style={{ color: "#00A335" }}><ShoppingCart className="w-5 h-5" /></span>
                    </div>
                    <p className="font-bold text-xs text-foreground">Revenda</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Recebe pelo serviço</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resumo do fluxo */}
          <div
            className="rounded-xl p-5 border max-w-3xl mx-auto"
            style={{ background: "rgba(0,208,132,0.04)", borderColor: "rgba(0,163,53,0.2)" }}
          >
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div>
                <Receipt className="w-5 h-5 mx-auto mb-1" style={{ color: "#00A335" }} />
                <p className="text-xs font-semibold text-foreground" style={{fontSize: '14px'}}>Cobrança única</p>
                <p className="text-[10px] text-muted-foreground" style={{fontSize: '12px'}}>Cliente paga uma vez</p>
              </div>
              <div>
                <ArrowRightLeft className="w-5 h-5 mx-auto mb-1" style={{ color: "#00A335" }} />
                <p className="text-xs font-semibold text-foreground" style={{fontSize: '14px'}}>Split automático</p>
                <p className="text-[10px] text-muted-foreground" style={{fontSize: '12px'}}>Valores divididos na hora</p>
              </div>
              <div>
                <Package className="w-5 h-5 mx-auto mb-1" style={{ color: "#00A335" }} />
                <p className="text-xs font-semibold text-foreground" style={{fontSize: '14px'}}>NFs separadas</p>
                <p className="text-[10px] text-muted-foreground" style={{fontSize: '12px'}}>Produto + Serviço</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/tutoriais/distribuidor">
              <Button size="lg" className="font-semibold" style={{ background: "#00A335", color: "#FFFFFF", fontSize: '16px' }}>
                Ver passo a passo completo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Casos de Uso — reconstruídos em componentes */}
      <section className="py-14 lg:py-20" style={{ background: "#f5faf7" }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Casos de uso com o{" "}
              <span className="brand-gradient-text">Tá na Conta</span>
            </h2>
            <p className="text-muted-foreground">
              Conheça os modelos de venda integrada com o Distribuidor.
            </p>
          </div>

          {/* Tabs de seleção */}
          {/* Tabs de seleção — Venda Agenciada oculta (em aprovação) */}
          {/* Quando aprovada, descomentar o botão abaixo e o bloco {casoAtivo === "agenciada"} */}
          {/*
          <div className="flex justify-center gap-3 mb-8">
            <button
              onClick={() => setCasoAtivo("tradicional")}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                casoAtivo === "tradicional"
                  ? "text-white shadow-md"
                  : "text-foreground border border-border bg-white hover:bg-gray-50"
              }`}
              style={casoAtivo === "tradicional" ? { background: "#00A335" } : {}}
            >
              Uso da Venda Tradicional
            </button>
            <button
              onClick={() => setCasoAtivo("agenciada")}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                casoAtivo === "agenciada"
                  ? "text-white shadow-md"
                  : "text-foreground border border-border bg-white hover:bg-gray-50"
              }`}
              style={casoAtivo === "agenciada" ? { background: "#00A335" } : {}}
            >
              Uso da Venda Agenciada
            </button>
          </div>
          */}

          {/* Venda Tradicional */}
          {/* Exibição direta — sem tabs enquanto Venda Agenciada está em aprovação */}
          {true && (
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-5">
                {/* A) Quitar Boletos */}
                <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: "#00A335" }}
                    >A</span>
                    <h4 className="font-bold text-sm text-foreground">Quitar boletos em aberto</h4>
                  </div>
                  <ol className="space-y-3">
                    {[
                      "A Revenda compra o produto no Distribuidor;",
                      "O Distribuidor emite nota fiscal a prazo para a Revenda;",
                      "A Revenda realiza a instalação;",
                      "A Revenda cobra o Cliente Final na maquininha;",
                      "A Revenda faz o split para o Distribuidor no valor da compra, quitando os títulos em aberto."
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5" style={{ background: "rgba(0,163,53,0.1)", color: "#00A335" }}>{i + 1}</span>
                        <span className="text-sm text-muted-foreground leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* B) Comprar à Vista */}
                <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: "#00A335" }}
                    >B</span>
                    <h4 className="font-bold text-sm text-foreground">Comprar à vista</h4>
                  </div>
                  <ol className="space-y-3">
                    {[
                      "A Revenda realiza o orçamento e reserva o produto no Distribuidor;",
                      "A Revenda cobra o Cliente Final na maquininha;",
                      "A Revenda faz o split para o Distribuidor no valor da compra, realizando o pagamento à vista;",
                      "A Revenda retira o produto no Distribuidor;",
                      "A Revenda realiza a instalação."
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5" style={{ background: "rgba(0,163,53,0.1)", color: "#00A335" }}>{i + 1}</span>
                        <span className="text-sm text-muted-foreground leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* C) Gerar Crédito */}
                <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: "#00A335" }}
                    >C</span>
                    <h4 className="font-bold text-sm text-foreground">Gerar crédito</h4>
                  </div>
                  <ol className="space-y-3">
                    {[
                      "A Revenda vende um produto que já possui em estoque;",
                      "A Revenda realiza a instalação;",
                      "A Revenda cobra o Cliente Final na maquininha;",
                      "A Revenda faz o split para o Distribuidor no valor que considerar necessário, gerando crédito para uma próxima compra."
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5" style={{ background: "rgba(0,163,53,0.1)", color: "#00A335" }}>{i + 1}</span>
                        <span className="text-sm text-muted-foreground leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          )}

          {/* Venda Agenciada */}
          {/* Venda Agenciada — OCULTA (em aprovação). Descomentar quando aprovada. */}
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Benefícios da Venda Integrada com o{" "}
              <span className="brand-gradient-text">Distribuidor</span>
            </h2>
            <p className="text-muted-foreground">
              Vantagens da venda integrada com o Distribuidor realizada pela maquininha Tá na Conta.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 max-w-5xl mx-auto">
            {beneficios.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`rounded-2xl p-6 border border-border card-hover group lg:col-span-2 ${
                  index === 3 ? "lg:col-start-2" : index === 4 ? "lg:col-start-4" : ""
                }`}
                style={{ background: "#f5faf7" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                  style={{ background: "rgba(0,163,53,0.08)" }}
                >
                  <span style={{ color: "#00A335" }}>{benefit.icon}</span>
                </div>
                <div
                  className="inline-block px-2 py-0.5 rounded-full text-xs font-bold mb-2"
                  style={{ background: "rgba(0,208,132,0.15)", color: "#00A335" }}
                >
                  {benefit.highlight}
                </div>
                <h3 className="font-bold text-base text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section
        className="py-14 text-white"
        style={{ background: "linear-gradient(135deg, #003318, #00A335)" }}
      >
        <div className="container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Pronto para integrar com o seu Distribuidor?
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Solicite sua maquininha e comece a usar o split, gerar crédito e quitar boletos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={FORM_ADESAO} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="font-bold text-base px-10 shadow-lg"
                style={{ background: "#00d084", color: "#003318" }}
              >
                Peça sua Maquininha
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <Link href="/simular-taxas">
              <Button
                size="lg"
                variant="outline"
                className="font-semibold text-base px-8 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Simular Taxas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
