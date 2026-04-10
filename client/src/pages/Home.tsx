import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  CreditCard, Smartphone, Link2, BarChart3, RefreshCw, Zap,
  CheckCircle2, ArrowRight, ChevronDown, ChevronUp,
  Clock, TrendingUp, Shield, DollarSign, Star, CreditCard as CardIcon
} from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445116665/BfSy55ooS3GFRkNJUTk7V9/card-payment_1b90ae04.jpg";
const SOLAR_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445116665/BfSy55ooS3GFRkNJUTk7V9/solar-installer_3459730d.jpg";
const BUSINESS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445116665/BfSy55ooS3GFRkNJUTk7V9/business-payment_30f7d57c.jpg";

const FORM_ADESAO = "https://docs.google.com/forms/d/e/1FAIpQLSeLbIIAsCJgrfCjGZ7u5YgRBLlENhksEa4w9Zmgkz1Fg4rnWg/viewform";

const benefits = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Receba em 1 dia",
    description: "Serviços pagos em 1 dia útil direto na sua conta digital.",
    highlight: "1 dia",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Parcele em até 21x",
    description: "Ofereça mais opções ao cliente com parcelamento estendido e taxas competitivas.",
    highlight: "21x",
  },
  {
    icon: <Link2 className="w-6 h-6" />,
    title: "Link = Maquininha",
    description: "Taxa do link de pagamento idêntica à da maquininha. Sem pegadinhas.",
    highlight: "Mesma taxa",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Conta Digital Completa",
    description: "Portabilidade de Pix, pagamento de boletos e visualização de vendas pelo app.",
    highlight: "App incluso",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Cobranças Recorrentes",
    description: "Automatize cobranças mensais e mantenha o fluxo de caixa sempre positivo.",
    highlight: "Automático",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Relatórios Online",
    description: "Acompanhe todas as suas vendas e transações em tempo real pelo portal.",
    highlight: "Tempo real",
  },
];

const steps = [
  {
    number: "01",
    title: "Crie seu projeto",
    description: "Cadastre o projeto na Plataforma Solar com todos os dados do cliente.",
    detail: "Acesse a Plataforma Solar e registre o projeto normalmente.",
  },
  {
    number: "02",
    title: "Cobre parcelado",
    description: "Use a maquininha ou o link de pagamento para cobrar parcelas que cabem no orçamento.",
    detail: "Parcele em até 21x com taxas transparentes e sem IOF.",
  },
  {
    number: "03",
    title: "Equipamentos retidos automaticamente",
    description: "O valor dos equipamentos é retido automaticamente no processo de split.",
    detail: "Sem necessidade de gerenciar pagamentos de fornecedores.",
  },
  {
    number: "04",
    title: "Tá na Conta!",
    description: "Em 1 dia útil, o valor dos seus serviços cai na sua conta digital.",
    detail: "Receba rápido e feche mais projetos com capital de giro.",
  },
];

const salesArguments = [
  {
    icon: <CardIcon className="w-6 h-6" />,
    title: "Pagar com Cartão é mais barato que pegar empréstimo!",
    description: "Mostre ao seu cliente que parcelar no cartão tem juros menores que qualquer linha de crédito.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Você pode acumular milhas nessa operação!",
    description: "Clientes que pagam com cartão de crédito acumulam pontos e milhas — mais um benefício para fechar o projeto.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Encontre parcelas que cabem no orçamento!",
    description: "Com parcelamento em até 21x, você adapta o valor ao bolso do cliente e fecha mais projetos.",
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
    answer: "Sim! Sabemos que o link é importante para fechar projetos mais distantes, por isso as taxas são iguais. Embora concorrentes cobrem mais nas transações via link, no Tá na Conta você tem condições especiais e transparentes, sem pegadinhas.",
  },
  {
    question: "Consigo isenção da mensalidade da maquininha?",
    answer: "A mensalidade da maquininha é de R$79,90. Mas basta passar R$15.000,00 no mês que a mensalidade do mês seguinte será gratuita!",
  },
  {
    question: "Tem taxa de adesão?",
    answer: "Não. Além disso, não há custo de frete para o envio da máquina. O regime é de comodato, então a maquininha deve ser devolvida no final do contrato.",
  },
  {
    question: "Posso me credenciar com CPF?",
    answer: "Não. O credenciamento deve ser feito com CNPJ. Consulte nosso suporte para mais informações sobre os requisitos.",
  },
  {
    question: "Qual o prazo para receber outras vendas (não projetos solares)?",
    answer: "Para vendas de outros produtos e serviços, o prazo de recebimento é de D+2 (dois dias úteis após a transação).",
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
      style={{ background: open ? "oklch(0.98 0.005 145)" : "white" }}
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
  return (
    <div className="min-h-screen">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative container py-20 lg:py-28">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Seu projeto em{" "}
              <span style={{ color: "#00d084" }}>1 dia</span>
              <br />
              <span className="text-white">Tá na Conta!</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
              Em parceria com a Cappta, desenvolvemos uma solução financeira completa para integradores terem mais opções de pagamento, receberem em 1 dia e aumentarem seus ganhos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={FORM_ADESAO}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="text-white font-bold text-base px-8 shadow-lg hover:shadow-xl transition-all"
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
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Simular Taxas
                </Button>
              </Link>
            </div>

            {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/15">
              {[
                { value: "21x", label: "Parcelamento" },
                { value: "1 dia", label: "Recebimento" },
                { value: "D+2", label: "Outros valores" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/60 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── O QUE É ─── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
                style={{ background: "rgba(0,163,53,0.08)", color: "#00A335" }}
              >
                <Zap className="w-3.5 h-3.5" />
                Solução Completa
              </div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-foreground mb-5"
              >
                O que é o Portal{" "}
                <span className="brand-gradient-text">Tá na Conta?</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                O <strong>Tá na Conta</strong> é uma solução financeira desenvolvida em parceria com a Cappta, pensada especialmente para integradores de energia solar. Com ela, você tem acesso a uma maquininha de cartão, link de pagamento e conta digital — tudo integrado à Plataforma Solar.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Feche mais projetos, ofereça mais opções de pagamento aos seus clientes e receba seus serviços em 1 dia, sem burocracia.
              </p>
              <div className="space-y-3">
                {[
                  "Maquininha com parcelamento em até 21x",
                  "Link de pagamento com mesma taxa da maquininha",
                  "Conta digital com Pix e pagamento de boletos",
                  "Sem taxa de adesão e sem mensalidade condicional",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#00A335" }} />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-2xl opacity-20"
                style={{ background: "linear-gradient(135deg, #00A335, #00d084)" }}
              />
              <img
                src={BUSINESS_IMAGE}
                alt="Lojista usando maquininha de pagamento"
                className="relative rounded-2xl w-full object-cover shadow-2xl"
                style={{ height: "400px" }}
              />
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-border"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(0,163,53,0.10)" }}
                >
                  <TrendingUp className="w-5 h-5" style={{ color: "#00A335" }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">+10% de lucro</p>
                    <p className="text-xs text-muted-foreground">nos serviços solares</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ARGUMENTOS DE VENDAS ─── */}
      <section className="py-14 lg:py-20" style={{ background: "oklch(0.97 0.005 145)" }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2
              className="text-2xl lg:text-3xl font-bold text-foreground mb-3"
            >
              Por que seu cliente vai <span className="brand-gradient-text">fechar com você?</span>
            </h2>
            <p className="text-muted-foreground text-sm">Use esses argumentos na hora de apresentar o parcelamento.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {salesArguments.map((arg) => (
              <div
                key={arg.title}
                className="bg-white rounded-2xl p-6 border border-border shadow-sm flex flex-col gap-3"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(0,163,53,0.08)" }}
                >
                  <span style={{ color: "#00A335" }}>{arg.icon}</span>
                </div>
                <p className="font-bold text-sm text-foreground leading-snug">{arg.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{arg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFÍCIOS ─── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
              style={{ background: "rgba(0,163,53,0.08)", color: "#00A335" }}
            >
              <Shield className="w-3.5 h-3.5" />
              Benefícios
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
              >
                Benefícios que vão além{" "}
              <span className="brand-gradient-text">da maquininha</span>
            </h2>
            <p className="text-muted-foreground">
              Uma plataforma financeira completa para impulsionar o seu negócio de energia solar.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-2xl p-6 border border-border card-hover group"
                style={{ background: "oklch(0.98 0.005 145)" }}
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

      {/* ─── PROCESSO ─── */}
      <section className="py-16 lg:py-24 overflow-hidden" style={{ background: "oklch(0.97 0.005 145)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
                style={{ background: "rgba(0,163,53,0.08)", color: "#00A335" }}
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Processo Financeiro
              </div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-foreground mb-8"
              >
                Como funciona o{" "}
                <span className="brand-gradient-text">processo financeiro?</span>
              </h2>
              <div className="space-y-6">
                {steps.map((step, idx) => (
                  <div key={step.number} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                        style={{ background: "linear-gradient(135deg, #00A335, #00d084)", color: "#FFFFFF" }}
                      >
                        {step.number}
                      </div>
                      {idx < steps.length - 1 && (
                        <div className="w-0.5 h-full mt-2" style={{ background: "oklch(0.90 0.01 145)" }} />
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="font-bold text-base text-foreground mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                      <p className="text-xs text-muted-foreground/70 mt-1 italic">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img
                src={SOLAR_IMAGE}
                alt="Instalador de energia solar"
                className="rounded-2xl w-full object-cover shadow-2xl"
                style={{ height: "500px" }}
              />

            </div>
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
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
            >
              Condições Comerciais
            </h2>
            <p className="text-white/70">
              Transparência total, sem letras miúdas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { icon: <Clock className="w-5 h-5" />, title: "Receba em 1 dia", desc: "Serviços solares" },
              { icon: <DollarSign className="w-5 h-5" />, title: "D+2 outras vendas", desc: "Para demais produtos" },
              { icon: <Shield className="w-5 h-5" />, title: "Sem taxa de adesão", desc: "Zero custo para começar" },
              { icon: <Smartphone className="w-5 h-5" />, title: "Sem mensalidade", desc: "Acima de R$15.000/mês" },
              { icon: <CreditCard className="w-5 h-5" />, title: "R$79,90/mês", desc: "Se não atingir a meta" },
              { icon: <CheckCircle2 className="w-5 h-5" />, title: "Frete grátis", desc: "Envio da maquininha" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 p-4 rounded-xl"
                style={{ background: "oklch(1 0 0 / 0.08)", border: "1px solid oklch(1 0 0 / 0.12)" }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,208,132,0.18)" }}
                >
                  <span style={{ color: "#00d084" }}>{item.icon}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">{item.title}</p>
                  <p className="text-xs text-white/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href={FORM_ADESAO}
              target="_blank"
              rel="noopener noreferrer"
            >
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
      <section className="py-16 lg:py-24" style={{ background: "oklch(0.97 0.005 145)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
                style={{ background: "rgba(0,163,53,0.08)", color: "#00A335" }}
              >
                Perguntas Frequentes
              </div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
              >
                Tire suas <span className="brand-gradient-text">dúvidas</span>
              </h2>
              <p className="text-muted-foreground">
                As perguntas mais comuns sobre o Portal Tá na Conta.
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
