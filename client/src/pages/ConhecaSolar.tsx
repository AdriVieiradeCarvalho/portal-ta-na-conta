import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Sun, ArrowRight, CheckCircle2, Clock, DollarSign, Smartphone,
  Layers, BarChart3, Play, CreditCard
} from "lucide-react";
import { useEffect, useState } from "react";

const GAROTO_INTELBRAS = "/garoto-intelbras.png";
const FORM_ADESAO = "https://appintelbras.netlify.app/adesao";

/* ─── Dados dos 7 passos ─── */
const passos = [
  {
    titulo: "Escolha Energia Solar",
    desc: "Na tela inicial, toque em \"Energia Solar\". Na tela seguinte, clique em \"Vender Projeto Solar\".",
  },
  {
    titulo: "Selecione a opção",
    desc: "No menu \"Energia Solar\", selecione \"Vender Projeto Solar — Venda com retenção Intelbras\".",
  },
  {
    titulo: "Informe os valores",
    desc: "Em \"Produtos (R$)\", informe o valor dos equipamentos/produtos do projeto. Em \"Serviços (R$)\", informe o valor dos serviços de instalação. O app soma tudo em \"Total do Projeto\" automaticamente.",
  },
  {
    titulo: "Escolha a forma de pagamento",
    desc: "Escolha entre Pagamento com Pix (via plataforma Solar) ou Pagamento com Cartão. Se cartão, escolha a bandeira (Visa, Mastercard, Elo, Hipercard ou Amex).",
  },
  {
    titulo: "Confirme o orçamento",
    desc: "Na tela \"Confirmação do Orçamento\", preencha \"Nome do Cliente\" e \"Número do Projeto\". Confira os valores de Produtos, Serviços e Total. Toque em \"Prosseguir\".",
  },
  {
    titulo: "Defina o parcelamento",
    desc: "Selecione a quantidade de parcelas desejada pelo cliente. Confira o resumo com o valor de cada parcela e o total geral com taxas inclusos.",
  },
  {
    titulo: "Passe ou aproxime o cartão",
    desc: "Toque em \"Pagar\". No aviso importante, selecione \"Entendi, prosseguir\". Em seguida, a tela exibirá \"Aproxime, insira ou passe o cartão\" para concluir a venda.",
  },
];

/* ─── Telas compactas da maquininha (HTML/CSS puro) ─── */
function Tela1() {
  return (
    <div className="gs-screen">
      <div className="gs-sh">tá na conta ✓</div>
      <div className="gs-sb">
        <p className="text-[9px] font-semibold text-center mb-2" style={{ color: "#333" }}>Escolha uma opção</p>
        <div className="gs-mi"><b>Energia Solar</b><span>Simular, Vender e Orçamentos</span></div>
        <div className="gs-mi"><b>Distribuição</b><span>Vendas com Split automatizado</span></div>
        <div className="gs-mi"><b>Outras Vendas</b><span>Vendas simples, sem integrações</span></div>
        <div className="gs-mi"><b>Gerenciar</b><span>Consultar, Cancelar, Reimprimir e Reconfigurar</span></div>
        <p className="text-[7px] text-gray-400 text-center mt-2">Uma parceria Intelbras + Cappta · Versão Pax 2.0.3</p>
      </div>
    </div>
  );
}
function Tela2() {
  return (
    <div className="gs-screen">
      <div className="gs-sh2">← Energia Solar<br/><span className="text-[8px] font-normal opacity-80">Escolha uma opção</span></div>
      <div className="gs-sb">
        <div className="gs-mi"><b>Simular</b><span>Calcule taxas e valores de transações</span></div>
        <div className="gs-mi gs-mi-active"><b>Vender Projeto Solar</b><span>Venda com retenção Intelbras</span></div>
        <div className="gs-mi"><b>Orçamentos</b><span>Acessar orçamentos salvos</span></div>
        <p className="text-[8px] text-center mt-3 font-bold" style={{ color: "#12a34a" }}>tá na conta ✓</p>
        <p className="text-[7px] text-gray-400 text-center">Uma parceria Intelbras + Cappta · Versão Pax 2.0.3</p>
      </div>
    </div>
  );
}
function Tela3() {
  return (
    <div className="gs-screen">
      <div className="gs-sh2">← Projeto de Energia Solar<br/><span className="text-[8px] font-normal opacity-80">Informe os valores do projeto</span></div>
      <div className="gs-sb">
        <p className="gs-fl">Produtos (R$)</p><p className="text-[7px] text-gray-400">Valor dos equipamentos/produtos do projeto</p>
        <div className="gs-fi">11.000,00</div>
        <p className="gs-fl mt-2">Serviços (R$)</p><p className="text-[7px] text-gray-400">Valor dos serviços de instalação</p>
        <div className="gs-fi">5.000,00</div>
        <div className="flex justify-between mt-2 pt-1 border-t border-gray-100 text-[9px]">
          <span className="font-semibold">Total do Projeto</span>
          <span className="font-bold" style={{ color: "#12a34a" }}>R$ 16.000,00</span>
        </div>
        <p className="gs-fl mt-2">Quantidade de Cartões</p><p className="text-[7px] text-gray-400">Quantos cartões serão usados nesta transação</p>
        <div className="gs-fi">1</div>
        <div className="gs-bg mt-2">🏷 Pagar</div>
      </div>
    </div>
  );
}
function Tela4() {
  return (
    <div className="gs-screen">
      <div className="gs-sh2">← Projeto de Energia Solar<br/><span className="text-[8px] font-normal opacity-80">Selecione a forma de pagamento</span></div>
      <div className="gs-sb">
        <div className="flex justify-between text-[9px] mb-2"><span className="font-semibold">Valor Total</span><span className="font-bold" style={{ color: "#12a34a" }}>R$ 16.000,00</span></div>
        <div className="rounded border border-gray-200 p-2 mb-2">
          <p className="text-[9px] font-semibold">Pagamento com Pix</p>
          <p className="text-[7px] text-gray-400">Para pagar o projeto com Pix, use a plataforma Solar</p>
        </div>
        <p className="text-[9px] font-semibold mb-1">Pagamento com Cartão — Escolha a Bandeira</p>
        <div className="flex gap-1 flex-wrap">
          <span className="gs-fg">VISA</span><span className="gs-fg" style={{color:"#eb001b"}}>MC</span><span className="gs-fg" style={{color:"#000"}}>elo</span><span className="gs-fg" style={{color:"#822124"}}>Hiper</span><span className="gs-fg" style={{color:"#006fcf"}}>Amex</span>
        </div>
      </div>
    </div>
  );
}
function Tela5() {
  return (
    <div className="gs-screen gs-screen-light">
      <div className="gs-sb">
        <p className="text-[10px] font-bold text-center mb-2">Confirmação do Orçamento</p>
        <p className="text-[7px] font-semibold text-gray-500 mb-1">DADOS DO PROJETO</p>
        <p className="gs-fl">Nome do Cliente *</p><div className="gs-fi">x</div>
        <p className="gs-fl mt-1">Número do Projeto *</p><div className="gs-fi">2</div>
        <p className="text-[7px] font-semibold text-gray-500 mt-2 mb-1">VALORES DO PROJETO</p>
        <div className="flex justify-between text-[8px]"><span>Produtos</span><span className="font-semibold">R$ 11.000,00</span></div>
        <div className="flex justify-between text-[8px]"><span>Serviços</span><span className="font-semibold">R$ 5.000,00</span></div>
        <div className="flex justify-between text-[8px] font-bold border-t border-gray-200 pt-1 mt-1"><span>Total</span><span>R$ 16.000,00</span></div>
        <p className="text-[7px] text-gray-400 mt-2">ℹ Confirme os dados antes de prosseguir. Para alterar o orçamento, saia e refaça a simulação.</p>
        <div className="flex gap-1 mt-2"><div className="gs-bo flex-1">Sair</div><div className="gs-bg flex-1">Prosseguir</div></div>
      </div>
    </div>
  );
}
function Tela6() {
  return (
    <div className="gs-screen gs-screen-light">
      <div className="gs-sb">
        <p className="text-[10px] font-bold text-center mb-1">Parcelamento</p>
        <div className="rounded p-1.5 mb-2 text-center" style={{ background: "#12a34a" }}>
          <p className="text-[8px] text-white font-bold">MASTERCARD</p>
          <p className="text-[7px] text-white/80">Em quantas vezes o cliente deseja pagar?</p>
        </div>
        <div className="grid grid-cols-2 gap-1 text-[8px] mb-2">
          <div className="rounded border border-gray-200 p-1 text-center"><b>1x</b><br/>R$ 16.578,59</div>
          <div className="rounded border border-gray-200 p-1 text-center"><b>2x</b><br/>R$ 8.437,93</div>
          <div className="rounded border border-gray-200 p-1 text-center"><b>3x</b><br/>R$ 5.673,16</div>
          <div className="rounded border border-gray-200 p-1 text-center"><b>4x</b><br/>R$ 4.285,87</div>
          <div className="rounded border-2 p-1 text-center font-bold" style={{ borderColor: "#12a34a", color: "#12a34a" }}><b>5x</b><br/>R$ 3.455,35</div>
          <div className="rounded border border-gray-200 p-1 text-center"><b>6x</b><br/>R$ 2.898,24</div>
        </div>
        <div className="rounded border border-gray-200 p-1.5 text-center mb-2">
          <p className="text-[8px] font-semibold">Resumo</p>
          <p className="text-[9px] font-bold">5x de R$ 3.455,35</p>
          <p className="text-[7px] text-gray-500">Total: R$ 17.276,75</p>
        </div>
        <div className="flex gap-1"><div className="gs-bo flex-1">Cancelar</div><div className="gs-bg flex-1">Pagar</div></div>
      </div>
    </div>
  );
}
function Tela7() {
  return (
    <div className="gs-screen">
      <div className="gs-sh">tá na conta ✓</div>
      <div className="gs-sb flex flex-col items-center text-center py-4">
        <p className="text-base font-bold mb-0.5" style={{ color: "#d32f2f" }}>R$ 17.276,75</p>
        <p className="text-[8px] text-gray-500 mb-3">Parcelado</p>
        <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center mb-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round">
            <path d="M8.5 16.5a5 5 0 0 1 0-9"/><path d="M11.5 18.5a8 8 0 0 1 0-13"/><path d="M14.5 20.5a11 11 0 0 1 0-17"/>
          </svg>
        </div>
        <p className="text-[8px] font-bold uppercase" style={{ color: "#d32f2f" }}>APROXIME, INSIRA OU PASSE O CARTÃO</p>
        <div className="gs-bg mt-2 text-[8px] px-4">Cancelar</div>
      </div>
    </div>
  );
}

const telaComponents = [Tela1, Tela2, Tela3, Tela4, Tela5, Tela6, Tela7];

function GuiaSolarModal({ passo, onClose }: { passo: number; onClose: () => void }) {
  const Tela = telaComponents[passo];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="solar-guide-modal-overlay" role="dialog" aria-modal="true" aria-label={`Visual ampliado da etapa ${passo + 1}`} onClick={onClose}>
      <div className="solar-guide-modal-content" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="solar-guide-modal-close" onClick={onClose} aria-label="Fechar visual ampliado">×</button>
        <p className="solar-guide-modal-title">Etapa {passo + 1} — {passos[passo].titulo}</p>
        <div className="solar-guide-modal-screen"><Tela /></div>
      </div>
    </div>
  );
}

/* ─── Guia Interativo com barra de progresso ─── */
function GuiaInterativo() {
  const [ativo, setAtivo] = useState(0);
  const [modalPasso, setModalPasso] = useState<number | null>(null);
  const TelaAtiva = telaComponents[ativo];

  return (
    <div className="guia-solar-layout max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Barra de progresso lateral + lista de passos */}
        <div className="guia-solar-steps lg:w-[45%] flex-shrink-0">
          <div className="relative">
            {/* Linha de progresso vertical */}
            <div className="absolute left-[18px] top-4 bottom-4 w-[3px] rounded-full" style={{ background: "#e8e8e8" }} />
            <div
              className="absolute left-[18px] top-4 w-[3px] rounded-full transition-all duration-500"
              style={{ background: "#12a34a", height: `${(ativo / (passos.length - 1)) * (100 - 10)}%` }}
            />

            <div className="space-y-1">
              {passos.map((passo, i) => (
                <button
                  key={i}
                  onClick={() => setAtivo(i)}
                  className={`relative flex items-start gap-3 w-full text-left px-2 py-3 rounded-xl transition-all ${
                    i === ativo ? "bg-white shadow-md border border-green-200" : "hover:bg-white/60"
                  }`}
                >
                  {/* Número do passo */}
                  <div
                    className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-all ${
                      i <= ativo ? "text-white shadow-sm" : "text-gray-400 bg-white border-2 border-gray-200"
                    }`}
                    style={i <= ativo ? { background: "#12a34a" } : {}}
                  >
                    {i + 1}
                  </div>
                  {/* Texto */}
                  <div className="pt-1">
                    <p className={`font-semibold text-sm leading-tight ${i === ativo ? "text-foreground" : "text-muted-foreground"}`} style={{ fontSize: "16px" }}>
                      {passo.titulo}
                    </p>
                    {i === ativo && (
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        {passo.desc}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tela da maquininha — coluna direita */}
        <div className="guia-solar-demo lg:w-[55%] flex-1 flex items-start justify-center lg:sticky lg:top-24">
          <button
            type="button"
            className="guia-solar-demo-trigger"
            onClick={() => setModalPasso(ativo)}
            aria-label={`Ampliar visual da etapa ${ativo + 1}`}
          >
            <div className="guia-solar-demo-stage interactive-guide-preview transition-all duration-300">
              <TelaAtiva />
            </div>
            <span className="guia-solar-zoom-hint">🔍 Clique para ampliar</span>
          </button>
        </div>
      </div>
      {modalPasso !== null && <GuiaSolarModal passo={modalPasso} onClose={() => setModalPasso(null)} />}
    </div>
  );
}

const beneficios = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Chega de esperar 45 dias para receber pelo seu serviço!",
    description: "O valor dos seus serviços cai direto na sua Conta Digital no próximo dia útil, sem custos de antecipação!",
    highlight: "D+1",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Burocracia zero: vendeu energia solar, recebeu!",
    description: "Não exige processo de comissionamento para receber pelas vendas de energia solar. Vendeu, recebeu.",
    highlight: "Sem burocracia",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Ganhe até 10% em eficiência fiscal de PIS/Cofins.",
    description: "Ao separar o valor dos serviços dos produtos, você evita dupla tributação e garante economia real.",
    highlight: "+10% lucro",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Esqueça as calculadoras externas: a conta já vem pronta!",
    description: "Faça a simulação diretamente na maquininha, eliminando a necessidade de cálculos externos.",
    highlight: "Prático",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Uso de múltiplos cartões de forma simplificada: mais limite para o cliente, mais vendas para você.",
    description: "Possibilidade de simular e receber utilizando múltiplos cartões na mesma operação, aumentando o poder de compra do cliente.",
    highlight: "Multi-cartões",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Salve e imprima orçamentos",
    description: "Salve e imprima orçamentos diretamente na maquininha para apresentar ao cliente.",
    highlight: "Orçamentos",
  },
];

export default function ConhecaSolar() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 text-white overflow-hidden">
        {/* Gradiente verde de fundo */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #003318 0%, #004d25 30%, #006b30 60%, #00A335 100%)" }} />
        {/* Imagem do garoto integrada como background com blend */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${GAROTO_INTELBRAS})`,
            backgroundSize: "contain",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
            opacity: 0.18,
            mixBlendMode: "multiply",
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <Sun className="w-3.5 h-3.5" />
                Energia Solar
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Venda energia solar e receba{" "}
                <span style={{ color: "#00d084" }}>no dia seguinte</span>
              </h1>
              <p className="text-white/80 text-base leading-relaxed mb-8">
                A solução financeira da Cappta em parceria com a Intelbras para instaladores de energia solar. Faça vendas integradas com a Intelbras, crie orçamentos, gere simulações e receba no dia seguinte, com mais agilidade e sem burocracias.
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
                <Link href="/tutoriais/plataforma-solar">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-semibold text-base px-8 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Como funciona
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Por que usar o Tá na Conta para{" "}
              <span className="brand-gradient-text">Energia Solar</span>?
            </h2>
            <p className="text-muted-foreground">
              Benefícios exclusivos para instaladores de energia solar.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {beneficios.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl p-6 border border-border card-hover group"
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

      {/* Guia Rápido — reconstruído em componentes */}
      <section className="guia-solar py-14 lg:py-20" style={{ background: "#f5faf7" }} id="guia-rapido">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Guia Rápido
            </h2>
            <p className="text-muted-foreground text-lg">
              Fluxo de venda na maquininha - Energia Solar
            </p>
          </div>

          <GuiaInterativo />

          {/* Nota sobre o split */}
          <div
            className="max-w-4xl mx-auto mt-8 rounded-xl p-5 border text-center"
            style={{ background: "rgba(0,208,132,0.05)", borderColor: "rgba(0,163,53,0.2)" }}
          >
            <div className="flex items-start gap-3 justify-center">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#00A335" }} />
              <div>
                <p className="font-semibold text-sm text-foreground mb-1">Importante: Split automático</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Essa divisão é o split de pagamento: a parte da Intelbras e a sua parte são separadas automaticamente, ajudando a evitar dupla tributação.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/tutoriais/plataforma-solar">
              <Button size="lg" className="font-semibold" style={{ background: "#00A335", color: "#FFFFFF" }}>
                Ver tutorial completo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
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
            Pronto para vender energia solar com o Tá na Conta?
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Solicite sua maquininha gratuitamente e comece a receber no dia seguinte.
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
