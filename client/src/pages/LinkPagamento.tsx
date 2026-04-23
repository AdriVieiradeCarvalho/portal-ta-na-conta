import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Link2, CheckCircle2, ArrowRight, Smartphone, Globe, Clock, Shield, DollarSign, Send, AlertTriangle, TrendingDown, TrendingUp, ChevronDown } from "lucide-react";

const TAP_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445116665/BfSy55ooS3GFRkNJUTk7V9/solar-tech_6600d13c.jpg";

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl p-4 border flex items-start gap-3"
      style={{ background: "rgba(0,208,132,0.06)", borderColor: "rgba(0,163,53,0.25)" }}
    >
      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#00A335" }} />
      <div className="text-sm text-foreground leading-relaxed">{children}</div>
    </div>
  );
}

const bancos3DS = [
  {
    nome: "Banco do Brasil",
    cor: "#FFD700",
    corTexto: "#1a1a1a",
    descricao: "No Banco do Brasil, a autenticação 3DS ocorre via token enviado por SMS ou pelo app BB.",
    passos: [
      "Passo 1: Após inserir os dados do cartão, uma janela de autenticação do Banco do Brasil é exibida.",
      "Passo 2: O banco envia um token por SMS para o celular cadastrado.",
      "Passo 3: Insira o token na tela para confirmar a compra.",
    ],
    nota: "O método de autenticação pode variar. Siga as instruções exibidas na tela do checkout.",
  },
  {
    nome: "Bradesco",
    cor: "#CC0000",
    corTexto: "#ffffff",
    descricao: "No Bradesco, a autenticação ocorre via SMS ou pelo app do banco.",
    passos: [
      'Passo 1: Após inserir os dados do cartão, uma janela do Bradesco exibe a mensagem: "Para continuar com sua compra online é necessária uma autenticação. Abaixo o seu método de autenticação com o Bradesco."',
      "Passo 2: O proprietário do cartão receberá no celular cadastrado no Bradesco um token para inserir no site de compra.",
    ],
    nota: "O método de autenticação apresentado é o mais comum. Pode haver situações em que apareça um desafio diferente durante o processo de compra.",
  },
  {
    nome: "Inter",
    cor: "#FF6600",
    corTexto: "#ffffff",
    descricao: "No Banco Inter, a autenticação ocorre com um token gerado pelo recurso i-Safe, disponível no aplicativo do banco.",
    passos: [
      "Passo 1: O cliente acessa o app do Inter e gera o token no i-Safe.",
      "Passo 2: Insere o código no site para confirmar a compra.",
      "Passo 3: A transação é aprovada.",
    ],
    nota: "O recurso já está ativo em todos os cartões Inter. Funciona com cartões físicos e virtuais.",
  },
  {
    nome: "Itaú",
    cor: "#003399",
    corTexto: "#ffffff",
    descricao: "No Itaú, o 3DS utiliza um token gerado diretamente no aplicativo do banco. Após inserir os dados do cartão em um site com a tecnologia implementada, o cliente recebe a solicitação para gerar um token no app.",
    passos: [
      "Passo 1: Acesse o app Itaú e gere o token de segurança.",
      "Passo 2: Insira o token na tela de checkout para confirmar a compra.",
      "Passo 3: A compra é autorizada.",
    ],
    nota: "O 3DS está ativo em todos os cartões Itaú automaticamente, através do Mastercard Identity Check. Funciona tanto com cartões físicos quanto virtuais.",
  },
  {
    nome: "Neon",
    cor: "#00CFFF",
    corTexto: "#1a1a1a",
    descricao: "O Neon utiliza biometria ou senha no app para validar compras online. Após a compra, o cliente recebe uma notificação e escolhe a forma de autenticação: selfie, senha ou digital.",
    passos: [
      'Passo 1: Será apresentada a seguinte mensagem através de push no app: "Está tentando realizar uma compra online?"',
      "Passo 2: O cliente deve confirmar a compra usando biometria, selfie ou senha.",
      "Passo 3: A transação é liberada após a validação.",
    ],
    nota: "O recurso já está disponível para todos os clientes Neon. É mais seguro usar cartões virtuais em compras online.",
  },
  {
    nome: "Nubank",
    cor: "#8A05BE",
    corTexto: "#ffffff",
    descricao: "No Nubank, a autenticação é feita diretamente no aplicativo. Após a compra, o cliente recebe uma notificação no celular e tem 3 minutos para aprovar ou negar a transação.",
    passos: [
      "Passo 1: Uma notificação aparece no app Nubank.",
      'Passo 2: O cliente escolhe "Sim" ou "Não" para confirmar ou recusar a compra.',
      "Sem a confirmação, a transação não é autorizada.",
    ],
    nota: "O processo usa o protocolo Mastercard Identity Check. Funciona com cartões físicos e virtuais.",
  },
  {
    nome: "PagBank",
    cor: "#F5C518",
    corTexto: "#1a1a1a",
    descricao: "O PagBank utiliza códigos de segurança enviados por SMS. Após inserir os dados do cartão, o cliente deve digitar o token recebido para confirmar a compra.",
    passos: [
      'Passo 1: Será apresentada a seguinte mensagem: "Para a segurança da sua compra online, precisamos do Token recebido por SMS no seu celular cadastrado."',
      "Passo 2: Insira o token.",
      "Passo 3: Transação aprovada.",
    ],
    nota: "Todos os cartões já contam com o 3DS habilitado. Funciona com cartões físicos e virtuais.",
  },
  {
    nome: "Santander",
    cor: "#EC0000",
    corTexto: "#ffffff",
    descricao: "No Santander, a autenticação 3DS é feita via token enviado por SMS ou pelo app do banco.",
    passos: [
      "Passo 1: Após inserir os dados do cartão, uma janela de autenticação do Santander é exibida.",
      "Passo 2: O banco envia um token por SMS para o celular cadastrado.",
      "Passo 3: Insira o token na tela para confirmar a compra.",
    ],
    nota: "O método de autenticação pode variar. Siga as instruções exibidas na tela do checkout.",
  },
];

function Accordion3DS() {
  const [aberto, setAberto] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {bancos3DS.map((banco, idx) => (
        <div key={banco.nome} className="rounded-xl border border-border overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left font-bold text-base transition-colors"
            style={{
              background: aberto === idx ? banco.cor : "#f9fafb",
              color: aberto === idx ? banco.corTexto : "#1a1a1a",
            }}
            onClick={() => setAberto(aberto === idx ? null : idx)}
          >
            <span>{banco.nome}</span>
            <ChevronDown
              className="w-5 h-5 transition-transform"
              style={{ transform: aberto === idx ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>
          {aberto === idx && (
            <div className="px-5 py-4 bg-white border-t border-border">
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{banco.descricao}</p>
              <ul className="space-y-2 mb-4">
                {banco.passos.map((passo, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#00A335" }} />
                    {passo}
                  </li>
                ))}
              </ul>
              <div
                className="rounded-lg p-3 text-xs leading-relaxed"
                style={{ background: "rgba(0,163,53,0.06)", color: "#555" }}
              >
                <strong>Importante:</strong> {banco.nota}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function LinkPagamento() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        id="link-pagamento"
        className="py-16 lg:py-24 text-white"
        style={{ background: "linear-gradient(135deg, #003318 0%, #00A335 60%, #00d084 100%)" }}
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <Link2 className="w-3.5 h-3.5" />
                Link de Pagamento
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Cobre de qualquer lugar,{" "}
                <span style={{ color: "#00d084" }}>sem maquininha</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Gere um link de pagamento em segundos e envie por WhatsApp, e-mail ou SMS. Seu cliente paga de onde estiver, com a <strong>mesma taxa da maquininha</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/tutoriais/link-pagamento">
                  <Button
                    size="lg"
                    className="font-bold text-base px-8"
                    style={{ background: "#00d084", color: "#003318" }}
                  >
                    Ver Guia Completo
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
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(0,163,53,0.1)" }}
                  >
                    <CheckCircle2 className="w-5 h-5" style={{ color: "#00A335" }} />
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
      <section className="py-16 lg:py-20" style={{ background: "#f5faf7" }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Por que usar o{" "}
              <span style={{ color: "#00A335" }}>Link de Pagamento?</span>
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
                description: "Sem custo adicional para cobranças remotas — vantagem exclusiva do Tá na Conta.",
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
                description: "Automatize cobranças mensais para contratos de manutenção e monitoramento.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Pagamento seguro",
                description: "Transações protegidas com criptografia e autenticação do banco.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-border bg-white"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(0,163,53,0.08)" }}
                >
                  <span style={{ color: "#00A335" }}>{item.icon}</span>
                </div>
                <h3 className="font-bold text-base text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona resumido */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
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
                description: "O cliente paga e o valor cai na sua conta no próximo dia útil.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, #00A335, #00d084)", color: "#FFFFFF" }}
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
                className="font-bold px-10"
                style={{ background: "#00d084", color: "#003318" }}
              >
                Ver Guia Completo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Link Recorrente: Substitua o boleto */}
      <section className="py-16 lg:py-20" style={{ background: "#f5faf7" }}>
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Link Recorrente: substitua o boleto
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              O uso recomendado para o <strong>Link de Pagamento Recorrente</strong> é a troca da cobrança em boleto nas vendas de outros produtos e serviços, pela cobrança em cartão.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Boleto - lado negativo */}
            <div
              className="rounded-2xl p-6 border"
              style={{ background: "rgba(220,50,50,0.04)", borderColor: "rgba(200,50,50,0.2)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(200,50,50,0.1)" }}
                >
                  <TrendingDown className="w-5 h-5" style={{ color: "#c03030" }} />
                </div>
                <h3 className="font-bold text-base text-foreground">Cobrança em Boleto</h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Gera custo com pessoas e processos",
                  "Alta inadimplência",
                  "Possibilidade de perdas para a revenda",
                  "Exige acompanhamento intenso",
                  "Processo manual e demorado",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#c03030" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Link Recorrente - lado positivo */}
            <div
              className="rounded-2xl p-6 border"
              style={{ background: "rgba(0,208,132,0.05)", borderColor: "rgba(0,163,53,0.25)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(0,163,53,0.1)" }}
                >
                  <TrendingUp className="w-5 h-5" style={{ color: "#00A335" }} />
                </div>
                <h3 className="font-bold text-base text-foreground">Link Recorrente Tá na Conta</h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Funciona como mensalidade ou assinatura",
                  "Não compromete o limite do cartão do cliente",
                  "Pouco acompanhamento da gestão de cobranças",
                  "Redução drástica da inadimplência",
                  "Automatizado e sem burocracia",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#00A335" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <InfoBox>
            Assim como você paga o seu streaming de filmes como <strong>Netflix ou Prime Vídeo</strong>, o link recorrente automatiza cobranças mensais de contratos de manutenção, monitoramento ou outros serviços da sua revenda.
          </InfoBox>
        </div>
      </section>

      {/* Seção 3D Secure */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
              style={{ background: "#e6f4ec", color: "#00A335" }}
            >
              Segurança
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">O que é 3D Secure?</h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              O 3DS é uma camada extra de proteção nas compras online. Veja abaixo como funciona o passo a passo em cada banco.
            </p>
          </div>

          {/* Accordion passo a passo por banco */}
          <Accordion3DS />

          {/* iframe da Cappta */}
          <div className="mt-10">
            <p className="text-sm text-muted-foreground text-center mb-4">Confira a página completa de informações sobre o 3DS:</p>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                overflow: "hidden",
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
              }}
            >
              <iframe
                src="https://www.cappta.com.br/3ds"
                style={{ width: "100%", height: "100%", border: "none" }}
                loading="lazy"
                title="3D Secure — Segurança nos pagamentos online"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
