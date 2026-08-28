import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  CreditCard, Smartphone, Link2, BarChart3, RefreshCw, Zap,
  CheckCircle2, ArrowRight, ChevronDown, ChevronUp,
  Clock, Shield, DollarSign, Star, Layers, Sun, Building2
} from "lucide-react";

// Taxas por bandeira — valores ANTECIPADOS conforme tabela oficial
const taxasBandeira = [
  { parcela: "Débito",     visaMaster: "1,29%",  amex: "—",      elo: "2,49%",  hiper: "—" },
  { parcela: "Crédito 1x", visaMaster: "3,49%",  amex: "4,29%",  elo: "4,99%",  hiper: "4,99%" },
  { parcela: "2x",         visaMaster: "5,19%",  amex: "5,74%",  elo: "6,29%",  hiper: "6,29%" },
  { parcela: "3x",         visaMaster: "5,99%",  amex: "6,54%",  elo: "7,09%",  hiper: "7,09%" },
  { parcela: "4x",         visaMaster: "6,67%",  amex: "7,23%",  elo: "7,79%",  hiper: "7,79%" },
  { parcela: "5x",         visaMaster: "7,39%",  amex: "7,94%",  elo: "8,49%",  hiper: "8,49%" },
  { parcela: "6x",         visaMaster: "7,99%",  amex: "8,59%",  elo: "9,19%",  hiper: "9,19%" },
  { parcela: "7x",         visaMaster: "8,79%",  amex: "9,39%",  elo: "9,99%",  hiper: "9,99%" },
  { parcela: "8x",         visaMaster: "9,49%",  amex: "9,99%",  elo: "10,59%", hiper: "10,59%" },
  { parcela: "9x",         visaMaster: "9,99%",  amex: "10,64%", elo: "11,29%", hiper: "11,29%" },
  { parcela: "10x",        visaMaster: "10,99%", amex: "11,49%", elo: "11,99%", hiper: "11,99%" },
  { parcela: "11x",        visaMaster: "11,59%", amex: "12,09%", elo: "12,59%", hiper: "12,59%" },
  { parcela: "12x",        visaMaster: "12,29%", amex: "12,79%", elo: "13,29%", hiper: "13,29%" },
  { parcela: "13x",        visaMaster: "12,64%", amex: "13,26%", elo: "14,29%", hiper: "14,29%" },
  { parcela: "14x",        visaMaster: "12,99%", amex: "14,14%", elo: "15,29%", hiper: "15,29%" },
  { parcela: "15x",        visaMaster: "13,99%", amex: "15,14%", elo: "16,29%", hiper: "16,29%" },
  { parcela: "16x",        visaMaster: "14,99%", amex: "16,14%", elo: "17,29%", hiper: "17,29%" },
  { parcela: "17x",        visaMaster: "15,99%", amex: "17,14%", elo: "18,29%", hiper: "18,29%" },
  { parcela: "18x",        visaMaster: "16,99%", amex: "18,14%", elo: "19,29%", hiper: "19,29%" },
  { parcela: "19x",        visaMaster: "17,99%", amex: "19,14%", elo: "20,29%", hiper: "20,29%" },
  { parcela: "20x",        visaMaster: "18,99%", amex: "20,14%", elo: "21,29%", hiper: "21,29%" },
  { parcela: "21x",        visaMaster: "19,99%", amex: "21,14%", elo: "22,29%", hiper: "22,29%" },
  { parcela: "Pix",        visaMaster: "1,29%",  amex: "—",      elo: "—",      hiper: "—", pix: true },
];

function TaxasAccordion() {
  const [open, setOpen] = useState(false);
  return (
    <div className="taxas-accordion rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.20)" }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="taxas-por-bandeira"
        className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-sm transition-colors"
        style={{ background: "rgba(255,255,255,0.12)", color: "#FFFFFF" }}
      >
        <span>Ver tabela completa de taxas por bandeira</span>
        <ChevronDown
          className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", color: "#00d084" }}
        />
      </button>
      <div
        id="taxas-por-bandeira"
        className={`taxas-accordion-panel ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="taxas-accordion-panel-inner">
          <div className="taxas-table-scroll" style={{ background: "rgba(0,0,0,0.20)" }}>
          <table className="taxas-table">
            <colgroup>
              <col className="taxas-col-modalidade" />
              <col className="taxas-col-visa" />
              <col className="taxas-col-bandeira" />
              <col className="taxas-col-bandeira" />
              <col className="taxas-col-bandeira" />
            </colgroup>
            <thead>
              <tr style={{ background: "rgba(0,208,132,0.15)" }}>
                <th className="text-left font-semibold text-white">ANTECIPADA</th>
                <th className="text-center font-semibold text-white">Visa ou Master</th>
                <th className="text-center font-semibold text-white">Amex</th>
                <th className="text-center font-semibold text-white">Elo</th>
                <th className="text-center font-semibold text-white">Hiper</th>
              </tr>
            </thead>
            <tbody>
              {taxasBandeira.map((row, i) => (
                <tr
                  key={row.parcela}
                  style={{
                    background: row.pix
                      ? "rgba(0,208,132,0.12)"
                      : i % 2 === 0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.08)",
                  }}
                >
                  <td className="font-semibold text-white">
                    {row.parcela}
                    {row.pix && <span className="ml-2 text-xs font-normal text-white/60">(Min R$0,30 por operação)</span>}
                  </td>
                  <td className="text-center text-white/80">{row.visaMaster}</td>
                  <td className="text-center text-white/80">{row.amex}</td>
                  <td className="text-center text-white/80">{row.elo}</td>
                  <td className="text-center text-white/80">{row.hiper}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}

const SOLAR_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445116665/BfSy55ooS3GFRkNJUTk7V9/solar-panels-bg_1672229c.webp";
const HERO_BG = "/hero-multiprodutos.png";
const MOBILE_P2_SALDO = "/mobile-p2-saldo.webp";

const FORM_ADESAO = "https://appintelbras.netlify.app/adesao";

// Benefícios Solar
const beneficiosSolar = [
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
    description: "Faça a simulação diretamente na maquininha, eliminando a necessidade de utilizar a Calculadora do Cidadão.",
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

// Benefícios Distribuidor / Demais Segmentos
const beneficiosDistribuidor = [
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

const faqs = [
  {
    question: "A Conta Digital já vem com chave Pix?",
    answer: "Sim. Além da chave Pix da Conta Digital que você receberá, é possível fazer a portabilidade e trazer sua chave Pix de outro banco para essa conta.",
  },
  {
    question: "Posso usar para vender outros produtos e serviços?",
    answer: "Sim, a parceria do Tá na Conta permite o uso da maquininha para outras vendas além dos projetos solares.",
  },
  {
    question: "A taxa do link de pagamento é igual à taxa da maquininha?",
    answer: "Sim! Sabemos que o link é importante para fechar projetos mais distantes, por isso as taxas são iguais. Em média, o mercado cobra entre 3% a 4% a mais pelas transações via link. No Tá na Conta, você tem condições especiais e transparentes, sem pegadinhas.",
  },
  {
    question: "Quando a mensalidade da maquininha é gratuita?",
    answer: "É simples: só passar R$15.000,00 ou mais por mês na maquininha que a mensalidade do mês seguinte será grátis! A mensalidade da maquininha Tá na Conta é de R$79,90.",
  },
  {
    question: "Tem taxa de adesão?",
    answer: "Não. Além disso, não há custo de frete para o envio da máquina. O regime é de comodato, então a maquininha deve ser devolvida no final do contrato.",
  },
  {
    question: "Posso me credenciar com CPF?",
    answer: "Não, apenas com CNPJ. Para reter o valor dos equipamentos pelo sistema da Cappta, a Intelbras precisa que seu cadastro seja feito no mesmo CNPJ de revenda da vertical de Energia Solar.",
  },
  {
    question: "O que é o regime de comodato da maquininha?",
    answer: "No comodato, a maquininha é emprestada gratuitamente durante o período do contrato. Ao final, ela deve ser devolvida em boas condições de uso.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-border rounded-xl overflow-hidden transition-all duration-200"
      style={{ background: open ? "#f5faf7" : "white" }}
    >
      <button
        className="w-full flex items-center justify-between p-5 text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-sm sm:text-base text-foreground">{question}</span>
        <span className="flex-shrink-0 text-muted-foreground">
          {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48" : "max-h-0"}`}
      >
        <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [beneficioTab, setBeneficioTab] = useState<"solar" | "distribuidor">("solar");

  return (
    <div className="min-h-screen">
      {/* ─── HERO ─── */}
      <section className="relative flex items-center overflow-hidden" style={{ height: "75vh", minHeight: "480px", maxHeight: "620px" }}>
        {/* Fundo: imagem hero multiprodutos */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        {/* Overlay verde escuro */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(105deg, rgba(0,51,24,0.92) 0%, rgba(0,51,24,0.82) 45%, rgba(0,40,18,0.60) 70%, rgba(0,30,12,0.75) 100%)" }}
        />

        {/* Seta pulsante — indica que há mais conteúdo abaixo */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10 cursor-pointer" onClick={() => window.scrollBy({ top: window.innerHeight * 0.75, behavior: 'smooth' })}>
          <span className="text-white/60 text-xs tracking-widest uppercase font-semibold animate-pulse">Saiba mais</span>
          <ChevronDown className="w-7 h-7 text-white animate-bounce" />
        </div>

        {/* Conteúdo principal */}
        <div className="relative container py-12 lg:py-16">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Uma maquininha.{" "}
              <span style={{ color: "#00d084" }}>Várias formas</span>{" "}
              de vender mais.
            </h1>
            <p className="text-base text-white/80 leading-relaxed mb-6 max-w-lg">
              Conheça as soluções do Tá na Conta para energia solar, venda integrada com o Distribuidor e outros segmentos Intelbras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/conheca/solar">
                <Button
                  size="lg"
                  className="font-bold text-base px-8 shadow-lg hover:shadow-xl transition-all"
                  style={{ background: "#00d084", color: "#003318" }}
                >
                  Conhecer solução Solar
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/conheca/distribuidor">
               <Button
                 size="lg"
                  className="font-bold text-base px-8 shadow-lg hover:shadow-xl transition-all"
                  style={{ background: "#00d084", color: "#003318" }}
                >
                  Venda integrada com o Distribuidor
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/15">
              {[
                { value: "1 Dia", label: "Recebimento" },
                { value: "Até 21x", label: "Parcelamento" },
                { value: "Taxa do Link", label: "= Taxa da Maquininha" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl sm:text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/60 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── HUB: ENCONTRE A SOLUÇÃO ─── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
              style={{ background: "rgba(0,163,53,0.08)", color: "#00A335" }}
            >
              <Zap className="w-3.5 h-3.5" />
              Soluções
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Encontre a solução para o{" "}
              <span className="brand-gradient-text">seu negócio</span>
            </h2>
            <p className="text-muted-foreground">
              O Tá na Conta é a solução financeira da Cappta em parceria com a Intelbras, pensada para diferentes segmentos de negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Card 1 — Energia Solar */}
            <div className="rounded-2xl border border-border p-6 shadow-sm flex flex-col gap-4 card-hover group" style={{ background: "#f5faf7" }}>
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                style={{ background: "rgba(0,163,53,0.10)" }}
              >
                <Sun className="w-7 h-7" style={{ color: "#00A335" }} />
              </div>
              <h3 className="font-bold text-lg text-foreground">Energia Solar</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                Simule, gere orçamentos e receba pelas vendas de energia solar diretamente na maquininha.
              </p>
              <Link href="/conheca/solar">
                <Button className="w-full font-semibold" style={{ background: "#00A335", color: "#FFFFFF" }}>
                  Conhecer solução Solar
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Card 2 — Vendas com Distribuidor */}
            <div className="rounded-2xl border border-border p-6 shadow-sm flex flex-col gap-4 card-hover group" style={{ background: "#f5faf7" }}>
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                style={{ background: "rgba(0,163,53,0.10)" }}
              >
                <Building2 className="w-7 h-7" style={{ color: "#00A335" }} />
              </div>
              <h3 className="font-bold text-lg text-foreground">Venda integrada com o Distribuidor</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                Venda, faça split, quite boletos ou gere crédito diretamente com o seu distribuidor.
              </p>
              <Link href="/conheca/distribuidor">
                <Button className="w-full font-semibold" style={{ background: "#00A335", color: "#FFFFFF" }}>
                  Conhecer essa solução
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── IMAGEM DESTAQUE: MAQUININHA + APP ─── */}
      <section className="py-14 lg:py-20" style={{ background: "#f5faf7" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
                style={{ background: "rgba(0,163,53,0.08)", color: "#00A335" }}
              >
                <Smartphone className="w-3.5 h-3.5" />
                Maquininha + App
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-5">
                Tudo na palma da{" "}
                <span className="brand-gradient-text">sua mão</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A maquininha Tá na Conta e o aplicativo trabalham juntos para oferecer uma solução financeira completa. Pelo app, acesse recursos como simulação, orçamentos, venda, split e integração com o Distribuidor.
              </p>
              <div className="space-y-3">
                {[
                  "Maquininha com parcelamento em até 21x",
                  "Link de pagamento com mesma taxa da maquininha",
                  "Pagamento com múltiplos cartões",
                  "Split automático com o Distribuidor",
                  "Conta Digital com Pix ilimitado",
                  "Use para qualquer tipo de venda",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#00A335" }} />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
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
                <Link href="/simular-taxas">
                  <Button size="lg" variant="outline" className="font-semibold text-base px-8">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Simular Taxas
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center">
              <img
                src={MOBILE_P2_SALDO}
                alt="Maquininha Tá na Conta e aplicativo mostrando saldo"
                className="rounded-2xl w-full max-w-md object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── BENEFÍCIOS POR SEGMENTO ─── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
              style={{ background: "rgba(0,163,53,0.08)", color: "#00A335" }}
            >
              <Shield className="w-3.5 h-3.5" />
              Benefícios Reais
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Benefícios que vão além{" "}
              <span className="brand-gradient-text">da maquininha</span>
            </h2>
            <p className="text-muted-foreground">
              Veja os benefícios específicos para cada segmento de negócio.
            </p>
          </div>

          {/* Tabs de segmento */}
          <div className="flex justify-center gap-3 mb-8">
            <button
              onClick={() => setBeneficioTab("solar")}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                beneficioTab === "solar"
                  ? "text-white shadow-md"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
              style={beneficioTab === "solar" ? { background: "linear-gradient(135deg, #00A335, #00d084)" } : {}}
            >
              <Sun className="w-4 h-4 inline mr-2" />
              Energia Solar
            </button>
            <button
              onClick={() => setBeneficioTab("distribuidor")}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                beneficioTab === "distribuidor"
                  ? "text-white shadow-md"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
              style={beneficioTab === "distribuidor" ? { background: "linear-gradient(135deg, #00A335, #00d084)" } : {}}
            >
              <Building2 className="w-4 h-4 inline mr-2" />
              Distribuidor e demais segmentos
            </button>
          </div>

          {/* Mensagem de abertura para Distribuidor */}
          {beneficioTab === "distribuidor" && (
            <p className="text-center text-muted-foreground text-sm mb-8 max-w-xl mx-auto">
              Gere créditos, quite boletos em aberto e receba rapidamente pelas suas vendas agenciadas.
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
            {(beneficioTab === "solar" ? beneficiosSolar : beneficiosDistribuidor).map((benefit, index) => (
              <div
                key={benefit.title}
                className={`rounded-2xl p-6 border border-border card-hover group lg:col-span-2 ${
                  beneficioTab === "distribuidor" && index === 3
                    ? "lg:col-start-2"
                    : beneficioTab === "distribuidor" && index === 4
                      ? "lg:col-start-4"
                      : ""
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

      {/* ─── CONDIÇÕES COMERCIAIS ─── */}
      <section
        className="py-16 lg:py-20 text-white"
        style={{ background: "linear-gradient(135deg, #003318 0%, #00A335 60%, #00d084 100%)" }}
      >
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Condições Comerciais
            </h2>
            <p className="text-white/70">
              Transparência total, sem letras miúdas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {/* Card 1 */}
            <div
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,208,132,0.18)" }}>
                <span style={{ color: "#00d084" }}><Shield className="w-5 h-5" /></span>
              </div>
              <div>
                <p className="font-semibold text-sm text-white">Sem taxa de adesão</p>
                <p className="text-xs text-white/60">Zero custo para começar</p>
              </div>
            </div>
            {/* Card 2 — mensalidade isenta */}
            <div
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,208,132,0.18)" }}>
                <span style={{ color: "#00d084" }}><CreditCard className="w-5 h-5" /></span>
              </div>
              <div>
                <p className="font-semibold text-sm text-white">
                  Isento de mensalidade{" "}
                  <span className="line-through text-white/50">(R$ 79,90)</span>
                </p>
                <p className="text-xs text-white/60">Faturando no mínimo R$15.000/mês</p>
              </div>
            </div>
            {/* Card 3 */}
            <div
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,208,132,0.18)" }}>
                <span style={{ color: "#00d084" }}><CheckCircle2 className="w-5 h-5" /></span>
              </div>
              <div>
                <p className="font-semibold text-sm text-white">Frete grátis</p>
                <p className="text-xs text-white/60">Envio da maquininha</p>
              </div>
            </div>
          </div>
          {/* Tabela de taxas por bandeira */}
          <div className="max-w-4xl mx-auto mt-8 mb-4">
            <TaxasAccordion />
          </div>

          <div className="text-center mt-8">
            <a href={FORM_ADESAO} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="font-bold text-base px-10 shadow-lg"
                style={{ background: "#00d084", color: "#003318" }}
              >
                Peça Agora a Sua Maquininha
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 lg:py-24" style={{ background: "#f5faf7" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
                style={{ background: "rgba(0,163,53,0.08)", color: "#00A335" }}
              >
                Perguntas Frequentes
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Tire suas <span className="brand-gradient-text">dúvidas</span>
              </h2>
              <p className="text-muted-foreground">
                As perguntas mais comuns sobre o Tá na Conta.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
