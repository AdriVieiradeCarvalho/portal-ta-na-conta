import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  CreditCard, CheckCircle2, AlertTriangle,
  ArrowRight, Wifi, Info, Zap, Shield, BarChart2, TrendingDown, Upload, ChevronDown
} from "lucide-react";

function AttentionBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-4 rounded-xl p-4 border flex items-start gap-3"
      style={{ background: "#f0fdf4", borderColor: "rgba(0,163,53,0.25)" }}
    >
      <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#00A335" }} />
      <div className="text-sm text-foreground leading-relaxed">{children}</div>
    </div>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-4 rounded-xl p-4 border flex items-start gap-3"
      style={{ background: "rgba(0,208,132,0.07)", borderColor: "rgba(0,163,53,0.20)" }}
    >
      <Info className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#00A335" }} />
      <div className="text-sm text-foreground leading-relaxed">{children}</div>
    </div>
  );
}

function StepCard({ number, title, description, children, highlight }: {
  number: number;
  title: string;
  description?: string;
  children?: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className="flex gap-4 p-5 rounded-2xl border shadow-sm"
      style={{
        background: highlight ? "rgba(0,208,132,0.06)" : "white",
        borderColor: highlight ? "rgba(0,163,53,0.35)" : undefined,
      }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
        style={{ background: "linear-gradient(135deg, #00A335, #00d084)", color: "#FFFFFF" }}
      >
        {number}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-base text-foreground mb-1">{title}</h4>
        {description && <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>}
        {children}
      </div>
    </div>
  );
}

const configDistribuidor = [
  "Você irá receber sua maquininha desligada e com uma filipeta impressa com seus dados cadastrais.",
  "Na lateral, aperte e segure o botão para ligar o terminal até que apareça um sinal em laranja na tela.",
  "Aguarde a inicialização do sistema operacional.",
  "Pronto! Seu app Tá na Conta já está instalado e será aberto em instantes.",
  "Esta é a configuração inicial, onde você poderá confirmar seu cadastro e escolher seus distribuidores e seus produtos mais vendidos.",
  "Você poderá imprimir uma filipeta com seus dados cadastrais, se preferir.",
  "Se os dados estiverem corretos, toque em \"Meus dados estão corretos\".",
  "Agora, toque em \"Distribuidor preferencial\" para consultar os distribuidores associados ao CNPJ. E então, toque em 'Avançar'.",
  "Toque em 'Distribuidores Favoritos' para consultar os distribuidores associados ao CNPJ.",
  "Se o distribuidor ainda não estiver ativo no Portal, aparecerá uma sinalização ao lado e um passo a passo de como realizar esse processo.",
  "Selecione os distribuidores que deseja marcar como favoritos e então toque em \"Confirmar\".",
  "Em 'Produtos Vendidos', aparecerão as unidades de negócio e os produtos vendidos para que você possa ativar ou desativá-los.",
  "Depois de selecionado, toque em 'Concluir Configuração Inicial'.",
  "Pronto! Sua maquininha está pronta para vender! Em caso de dúvidas, acesse nosso suporte.",
];

const configSolar = [
  "Na lateral, aperte e segure o botão para ligar o terminal até que apareça um sinal laranja na tela.",
  "Aguarde a inicialização do sistema operacional.",
  "Pronto! Seu app Tá na Conta já está instalado e será aberto em instantes.",
  "Esta é a configuração inicial! Se os dados estiverem corretos, toque em \"Meus dados estão corretos\".",
];

const configDistribuidorTitulos = [
  "Recebimento da maquininha", "Ligar o terminal", "Inicialização", "Abertura do app Tá na Conta",
  "Configuração inicial", "Dados cadastrais", "Confirmar cadastro", "Distribuidor preferencial",
  "Distribuidores favoritos", "Ativação do distribuidor", "Selecionar favoritos", "Produtos vendidos",
  "Concluir configuração inicial", "Configuração concluída",
];

const configSolarTitulos = [
  "Ligar o terminal", "Inicialização", "Abertura do app Tá na Conta", "Confirmar cadastro",
];

function ConfiguracaoAbas() {
  const [aba, setAba] = useState<"distribuidor" | "solar">("distribuidor");
  const [passoAtivo, setPassoAtivo] = useState(0);
  const [maiorPassoVisitado, setMaiorPassoVisitado] = useState(0);
  const [indiceAberto, setIndiceAberto] = useState(false);
  const [concluida, setConcluida] = useState(false);
  const etapas = aba === "distribuidor" ? configDistribuidor : configSolar;
  const titulos = aba === "distribuidor" ? configDistribuidorTitulos : configSolarTitulos;
  const etapaAtual = etapas[passoAtivo] ?? etapas[0];
  const ultimaEtapa = passoAtivo === etapas.length - 1;
  const progresso = ((passoAtivo + 1) / etapas.length) * 100;

  const trocarAba = (novaAba: "distribuidor" | "solar") => {
    setAba(novaAba);
    setPassoAtivo(0);
    setMaiorPassoVisitado(0);
    setIndiceAberto(false);
    setConcluida(false);
  };

  const irParaPasso = (novoPasso: number) => {
    const passoSeguro = Math.max(0, Math.min(novoPasso, etapas.length - 1));
    setPassoAtivo(passoSeguro);
    setMaiorPassoVisitado((anterior) => Math.max(anterior, passoSeguro));
    setConcluida(false);
    setIndiceAberto(false);
  };

  return (
    <div className="config-stepper-root">
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <button
          onClick={() => trocarAba("distribuidor")}
          aria-pressed={aba === "distribuidor"}
          className={`flex-1 px-4 py-3 rounded-xl font-semibold text-sm border transition-all ${aba === "distribuidor" ? "text-white shadow-md" : "text-foreground bg-white hover:bg-gray-50"}`}
          style={aba === "distribuidor" ? { background: "linear-gradient(135deg, #00A335, #00d084)", borderColor: "#00A335" } : { borderColor: "#e4e7e8" }}
        >
          Configuração de Venda com o Distribuidor
        </button>
        <button
          onClick={() => trocarAba("solar")}
          aria-pressed={aba === "solar"}
          className={`flex-1 px-4 py-3 rounded-xl font-semibold text-sm border transition-all ${aba === "solar" ? "text-white shadow-md" : "text-foreground bg-white hover:bg-gray-50"}`}
          style={aba === "solar" ? { background: "linear-gradient(135deg, #00A335, #00d084)", borderColor: "#00A335" } : { borderColor: "#e4e7e8" }}
        >
          Configuração de Venda Solar Integrada com a Intelbras
        </button>
      </div>

      <div className="rounded-2xl border border-border p-5 bg-white shadow-sm config-stepper-card">
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
          Recebeu sua maquininha do Tá na Conta? Siga o passo a passo da configuração inicial para que seu terminal fique pronto para realizar vendas com Split automatizado!
        </p>

        <div className="config-stepper-progress" aria-label={`Progresso: etapa ${passoAtivo + 1} de ${etapas.length}`}>
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="config-stepper-progress-label">Etapa {passoAtivo + 1} de {etapas.length}</span>
            <span className="config-stepper-progress-percent">{Math.round(progresso)}%</span>
          </div>
          <div className="config-stepper-progress-track"><span style={{ width: `${progresso}%` }} /></div>
        </div>

        <div className="relative mb-4">
          <button
            type="button"
            className="config-stepper-index-toggle"
            onClick={() => setIndiceAberto((aberto) => !aberto)}
            aria-expanded={indiceAberto}
          >
            <span>Ver todas as etapas</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${indiceAberto ? "rotate-180" : ""}`} />
          </button>
          {indiceAberto && (
            <div className="config-stepper-index" role="list">
              {titulos.map((titulo, idx) => (
                <button
                  type="button"
                  key={`${aba}-${titulo}-${idx}`}
                  className={`config-stepper-index-item ${idx === passoAtivo ? "is-active" : ""}`}
                  aria-current={idx === passoAtivo ? "step" : undefined}
                  onClick={() => irParaPasso(idx)}
                >
                  <span className="config-stepper-index-number">{idx < maiorPassoVisitado || idx < passoAtivo ? "✓" : idx + 1}</span>
                  <span>{titulo}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="config-stepper-panel" key={`${aba}-${passoAtivo}`}>
          {!concluida ? (
            <>
              <div className="flex items-start gap-3 mb-4">
                <div className="config-stepper-current-number">{passoAtivo + 1}</div>
                <div>
                  <p className="config-stepper-kicker">Passo {passoAtivo + 1}</p>
                  <h3 className="config-stepper-title">{titulos[passoAtivo]}</h3>
                </div>
              </div>
              <p className="config-stepper-description">{etapaAtual}</p>
              <div className="config-stepper-navigation">
                <button type="button" className="config-stepper-secondary" onClick={() => irParaPasso(passoAtivo - 1)} disabled={passoAtivo === 0}>← Anterior</button>
                {ultimaEtapa ? (
                  <button type="button" className="config-stepper-primary" onClick={() => setConcluida(true)}>✓ Concluir configuração</button>
                ) : (
                  <button type="button" className="config-stepper-primary" onClick={() => irParaPasso(passoAtivo + 1)}>Próxima etapa →</button>
                )}
              </div>
            </>
          ) : (
            <div className="config-stepper-complete">
              <div className="config-stepper-complete-icon"><CheckCircle2 className="w-7 h-7" /></div>
              <p className="config-stepper-kicker">Configuração concluída</p>
              <h3 className="config-stepper-title">Sua maquininha está pronta para vender!</h3>
              <button type="button" className="config-stepper-secondary" onClick={() => { setConcluida(false); irParaPasso(0); }}>Rever etapas</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Taxas por bandeira — valores ANTECIPADOS conforme tabela oficial
// Colunas: parcela | Visa/Master | Amex | Elo | Hiper
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
    <div className="rounded-2xl border border-border shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-sm text-white transition-colors"
        style={{ background: "#00A335" }}
      >
        <span>Saiba mais — Tabela completa de taxas por bandeira</span>
        <ChevronDown
          className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      {open && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "#f0fdf4" }}>
                <th className="text-left px-4 py-3 font-semibold text-foreground">ANTECIPADA</th>
                <th className="text-center px-3 py-3 font-semibold text-foreground">Visa ou Master</th>
                <th className="text-center px-3 py-3 font-semibold text-foreground">Amex</th>
                <th className="text-center px-3 py-3 font-semibold text-foreground">Elo</th>
                <th className="text-center px-3 py-3 font-semibold text-foreground">Hiper</th>
              </tr>
            </thead>
            <tbody>
              {taxasBandeira.map((row, i) => (
                <tr
                  key={row.parcela}
                  style={{
                    background: row.pix
                      ? "rgba(0,208,132,0.10)"
                      : i % 2 === 0 ? "white" : "rgba(0,208,132,0.04)",
                  }}
                >
                  <td className="px-4 py-2.5 font-semibold text-foreground">
                    {row.parcela}
                    {row.pix && <span className="ml-2 text-xs font-normal text-muted-foreground">(Min R$0,30 por operação)</span>}
                  </td>
                  <td className="px-3 py-2.5 text-center text-muted-foreground">{row.visaMaster}</td>
                  <td className="px-3 py-2.5 text-center text-muted-foreground">{row.amex}</td>
                  <td className="px-3 py-2.5 text-center text-muted-foreground">{row.elo}</td>
                  <td className="px-3 py-2.5 text-center text-muted-foreground">{row.hiper}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default function PrimeiroAcessoMaquininha() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-16 lg:py-20 text-white"
        style={{ background: "linear-gradient(135deg, #003318 0%, #00A335 60%, #00d084 100%)" }}
      >
        <div className="container">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <CreditCard className="w-3.5 h-3.5" />
              Primeiro Acesso
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Sua Maquininha
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Conheça os recursos e o passo a passo completo para realizar sua primeira venda de projeto solar com a maquininha Tá na Conta.
            </p>
          </div>
        </div>
      </section>

      {/* Apresentação */}
      <section className="py-12 bg-white">
        <div className="container max-w-3xl">
          <div
            className="rounded-2xl p-6 lg:p-8 border"
            style={{ background: "rgba(0,163,53,0.04)", borderColor: "rgba(0,163,53,0.15)" }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,163,53,0.10)" }}>
                <CreditCard className="w-6 h-6" style={{ color: "#00A335" }} />
              </div>
              <div>
                <h2 className="font-bold text-lg text-foreground mb-2">A mais moderna do mercado</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Você está recebendo a maquininha mais moderna do mercado! Ela tem sistema operacional <strong>Android</strong>, alta duração de bateria e uso intuitivo — como um celular Android.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Conexão + Como Ligar lado a lado */}
      <section className="py-10 bg-white">
        <div className="container max-w-3xl">
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Conexão */}
            <div className="rounded-2xl border border-border p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,163,53,0.10)" }}>
                  <Wifi className="w-5 h-5" style={{ color: "#00A335" }} />
                </div>
                <h2 className="text-lg font-bold text-foreground">Conexão</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Sua maquininha está conectada com a <strong>Vivo</strong>. Sugerimos mantê-la configurada também ao Wi-Fi da loja e ao plano de dados do celular.
              </p>
              <div className="rounded-xl p-3 border text-xs text-foreground leading-relaxed" style={{ background: "rgba(0,208,132,0.07)", borderColor: "rgba(0,163,53,0.20)" }}>
                <strong>Dica:</strong> Para configurar o Wi-Fi, arraste a tela de cima para baixo — igual ao Android.
              </div>
            </div>
            {/* Como ligar */}
            <div className="rounded-2xl border border-border p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,208,132,0.12)" }}>
                  <Zap className="w-5 h-5" style={{ color: "#00A335" }} />
                </div>
                <h2 className="text-lg font-bold text-foreground">Como ligar</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Pressione o <strong>botão cromado por 3 segundos</strong> até a bolinha laranja aparecer. Aguarde a inicialização completa antes de qualquer operação.
              </p>
              <div className="rounded-xl p-3 border text-xs text-foreground leading-relaxed" style={{ background: "#f0fdf4", borderColor: "rgba(0,163,53,0.25)" }}>
                <strong>Atenção:</strong> A maquininha precisa carregar todos os aplicativos antes de estar pronta para uso.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Passo a passo ─── */}
      <section className="py-12" style={{ background: "#f5faf7" }} id="configuracao">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,163,53,0.10)" }}>
              <ArrowRight className="w-5 h-5" style={{ color: "#00A335" }} />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Configuração Inicial</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Recebeu sua maquininha? Escolha abaixo o tipo de configuração que deseja realizar:
          </p>

          {/* Abas de configuração */}
          <ConfiguracaoAbas />
        </div>
      </section>

      {/* Bloco de Interconexão */}
      <section className="py-10 bg-white">
        <div className="container max-w-3xl">
          <div className="rounded-2xl border p-6" style={{ background: "rgba(0,163,53,0.03)", borderColor: "rgba(0,163,53,0.15)" }}>
            <h3 className="font-bold text-lg text-foreground mb-4">O que sua maquininha pode fazer</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#00A335" }} />
                <p className="text-sm text-muted-foreground">A maquininha realiza <strong>venda de solar integrada com a Intelbras</strong>.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#00A335" }} />
                <p className="text-sm text-muted-foreground">As vendas são feitas com os <strong>Distribuidores vinculados à Intelbras</strong>.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#00A335" }} />
                <p className="text-sm text-muted-foreground">O campo <strong>"Outras Vendas"</strong> pode ser utilizado para outras opções de vendas ou serviços.</p>
              </div>
            </div>
            <div className="mt-4 p-3 rounded-xl border text-sm" style={{ background: "#fffbeb", borderColor: "#fbbf24" }}>
              <strong>Atenção:</strong> em "Outras Vendas", lembre-se de realizar a simulação previamente e inserir os valores já considerando as taxas que deverão ser repassadas.
            </div>
            <div className="mt-4">
              <a href="/tutoriais/maquininha" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm text-white transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #00A335, #00d084)" }}>
                <ArrowRight className="w-4 h-4" />
                Ver Como usar: Outras Vendas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-12 text-white"
        style={{ background: "linear-gradient(135deg, #003318, #00A335)" }}
      >
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Sua maquininha está pronta!</h2>
          <p className="text-white/70 mb-6 text-sm">
            Em caso de dúvidas, acesse nosso suporte técnico.
          </p>
          <a href="/suporte">
            <Button
              size="lg"
              className="font-bold text-base px-8"
              style={{ background: "#00d084", color: "#003318" }}
            >
              Suporte Técnico
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
