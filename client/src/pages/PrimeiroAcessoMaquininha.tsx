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
              Conheça a conexão, os recursos e o passo a passo completo para realizar sua primeira venda de projeto solar com a maquininha Tá na Conta.
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
      <section className="py-12" style={{ background: "#f5faf7" }}>
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,163,53,0.10)" }}>
              <ArrowRight className="w-5 h-5" style={{ color: "#00A335" }} />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Passo a Passo</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Siga o fluxo para realizar uma cobrança com a maquininha. Para o fluxo completo de Venda Solar, consulte o tutorial dedicado.
          </p>

          {/* Botão para Venda Solar */}
          <a href="/tutoriais/solar" className="inline-flex items-center gap-2 mb-6 px-4 py-2.5 rounded-xl font-semibold text-sm text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #00A335, #00d084)" }}>
            <ArrowRight className="w-4 h-4" />
            Ver Tutorial: Venda com a Plataforma Solar
          </a>

          <div className="space-y-4">
            <StepCard
              number={1}
              title="Consulte as taxas e simule o parcelamento"
              description="Acesse o Simulador de Taxas para calcular o valor a cobrar na maquininha. Você pode optar por assumir as taxas ou repassá-las ao cliente — o simulador mostra o valor líquido a receber em cada cenário."
            />
            <StepCard
              number={2}
              title="Mantenha a maquininha sempre carregada"
              description="Deixe a maquininha na tomada quando não estiver em uso. Clientes que visitam a loja precisam encontrá-la pronta para operar."
            />
            <StepCard
              number={3}
              title="Ligue e aguarde a inicialização"
              description='Pressione o botão cromado por 3 segundos até a bolinha laranja aparecer. Aguarde a inicialização completa antes de qualquer operação.'
            />
            <StepCard
              number={4}
              title='Digite o valor e toque em "Pagar" ou "Pix"'
              description="Insira o valor total da venda e selecione a forma de pagamento. Para Pix, o QR Code será gerado automaticamente."
            />
            <StepCard
              number={5}
              title="Selecione débito, crédito à vista ou parcelado"
              description="Em crédito parcelado, toque em 'Parcelado' e selecione o prazo combinado. Confira se a bandeira do cartão é a mesma usada na simulação!"
            />
            <StepCard
              number={6}
              title="Passe o cartão e imprima as 2 vias"
              highlight
            >
              <p className="text-sm text-muted-foreground leading-relaxed">
                Após a aprovação, imprima <strong>2 vias</strong>: uma para o cliente e uma para o seu controle.
              </p>
              <AttentionBox>
                <strong>Ponto de Atenção Importante!</strong> Não feche a transação antes de imprimir as 2 vias.
              </AttentionBox>
            </StepCard>
            <StepCard
              number={7}
              title="No dia seguinte, seu dinheiro Tá na Conta!"
            >
              <p className="text-sm text-muted-foreground leading-relaxed">
                O valor da venda estará disponível na sua Conta Digital no <strong>próximo dia útil</strong>.
              </p>
              <div className="mt-3 p-3 rounded-xl border flex items-center gap-3" style={{ background: "rgba(0,208,132,0.07)", borderColor: "rgba(0,163,53,0.25)" }}>
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "#00A335" }} />
                <p className="text-sm font-semibold" style={{ color: "#00A335" }}>Venda concluída com sucesso!</p>
              </div>
            </StepCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-12 text-white"
        style={{ background: "linear-gradient(135deg, #003318, #00A335)" }}
      >
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Pronto para vender?</h2>
          <p className="text-white/70 mb-6 text-sm">
            Veja o tutorial completo de como realizar uma venda na maquininha.
          </p>
          <a href="/tutoriais/maquininha">
            <Button
              size="lg"
              className="font-bold text-base px-8"
              style={{ background: "#00d084", color: "#003318" }}
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
