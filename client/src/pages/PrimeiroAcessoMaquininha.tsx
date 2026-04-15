import { Button } from "@/components/ui/button";
import {
  CreditCard, CheckCircle2, AlertTriangle,
  ArrowRight, Wifi, Info, Zap, Shield, BarChart2, TrendingDown, Upload
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
              Conheça as taxas, a conexão e o passo a passo completo para realizar sua primeira venda de projeto solar.
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

      {/* ─── Taxas Competitivas ─── */}
      <section className="py-12" style={{ background: "#f5faf7" }}>
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,163,53,0.10)" }}>
              <TrendingDown className="w-5 h-5" style={{ color: "#00A335" }} />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Taxas Competitivas por Bandeira</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Confira nossas taxas e compare com o mercado. Você vai perceber que o Tá na Conta oferece condições diferenciadas para integradores de energia solar.
          </p>

          {/* Tabela de taxas */}
          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#00A335", color: "#FFFFFF" }}>
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-2xl">ANTECIPADA</th>
                  <th className="text-center px-3 py-3 font-semibold">Visa ou Master</th>
                  <th className="text-center px-3 py-3 font-semibold">Amex</th>
                  <th className="text-center px-3 py-3 font-semibold">Elo</th>
                  <th className="text-center px-3 py-3 font-semibold rounded-tr-2xl">Hiper</th>
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
                      fontWeight: (row.parcela === "Débito" || row.parcela === "Pix") ? 600 : undefined
                    }}
                  >
                    <td className="px-4 py-2.5 font-semibold text-foreground">{row.parcela}{row.pix ? <span className="ml-2 text-xs font-normal text-muted-foreground">(Min R$0,30 por operação)</span> : null}</td>
                    <td className="px-3 py-2.5 text-center text-muted-foreground">{row.visaMaster}</td>
                    <td className="px-3 py-2.5 text-center text-muted-foreground">{row.amex}</td>
                    <td className="px-3 py-2.5 text-center text-muted-foreground">{row.elo}</td>
                    <td className="px-3 py-2.5 text-center text-muted-foreground">{row.hiper}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <div
              className="rounded-xl p-4 border flex items-start gap-3"
              style={{ background: "white", borderColor: "rgba(0,163,53,0.20)" }}
            >
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#00A335" }} />
              <div>
                <p className="font-semibold text-sm text-foreground mb-0.5">Recebimento em 1 dia útil</p>
                <p className="text-xs text-muted-foreground">O valor cai na sua conta no próximo dia útil após a venda.</p>
              </div>
            </div>
            <div
              className="rounded-xl p-4 border flex items-start gap-3"
              style={{ background: "white", borderColor: "rgba(0,163,53,0.20)" }}
            >
              <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#00A335" }} />
              <div>
                <p className="font-semibold text-sm text-foreground mb-0.5">Mesma taxa no Link de Pagamento</p>
                <p className="text-xs text-muted-foreground">As taxas acima também valem para vendas via link — sem surpresas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conexão */}
      <section className="py-10 bg-white">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,163,53,0.10)" }}>
              <Wifi className="w-5 h-5" style={{ color: "#00A335" }} />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Conexão</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Sua maquininha está conectada com a <strong>Vivo</strong>! Sugerimos mantê-la configurada também ao Wi-Fi da loja e ao plano de dados do celular — assim você sempre terá opções de conexão, mesmo em instalações no interior do Brasil.
          </p>
          <InfoBox>
            Para configurar o Wi-Fi, arraste a tela da maquininha de cima para baixo — o mesmo gesto que você faz no celular Android para acessar as configurações rápidas.
          </InfoBox>
        </div>
      </section>

      {/* Como ligar */}
      <section className="py-10" style={{ background: "#f5faf7" }}>
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,208,132,0.12)" }}>
              <Zap className="w-5 h-5" style={{ color: "#00A335" }} />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Como ligar</h2>
          </div>
          <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #00A335, #00d084)", color: "#FFFFFF" }}
              >
                1
              </div>
              <div>
                <h4 className="font-semibold text-base text-foreground mb-1">Pressione o botão cromado por 3 segundos</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Aguarde até que a tela acenda. Espere a inicialização completa antes de realizar qualquer operação.
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
      <section className="py-12 bg-white">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,163,53,0.10)" }}>
              <CheckCircle2 className="w-5 h-5" style={{ color: "#00A335" }} />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Pix na Maquininha</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            A venda em Pix também está habilitada. Usar o Pix na maquininha oferece vantagens importantes:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: <Shield className="w-5 h-5" />, title: "Segurança", desc: "O recibo sai na hora e você tem certeza de que o Pix cairá na conta correta, evitando golpes." },
              { icon: <BarChart2 className="w-5 h-5" />, title: "Conciliação fácil", desc: "As vendas constarão no Portal e os valores cairão junto com as vendas em cartão." },
              { icon: <Zap className="w-5 h-5" />, title: "Flexibilidade", desc: "Qualquer colaborador pode fazer a venda sem precisar ter acesso à conta principal." },
              { icon: <CheckCircle2 className="w-5 h-5" />, title: "Eficiência financeira", desc: "Os valores transacionados podem ser usados para pagar os produtos da proposta comercial solar." },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-2xl border border-border bg-white shadow-sm">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ background: "rgba(0,163,53,0.10)" }}>
                  <span style={{ color: "#00A335" }}>{item.icon}</span>
                </div>
                <p className="font-semibold text-sm text-foreground mb-1">{item.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Passo a passo: Venda Solar ─── */}
      <section className="py-12" style={{ background: "#f5faf7" }}>
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,163,53,0.10)" }}>
              <ArrowRight className="w-5 h-5" style={{ color: "#00A335" }} />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Passo a Passo: Venda Solar</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Siga o fluxo completo para realizar uma cobrança de projeto solar com a maquininha integrada à Plataforma Solar Intelbras.
          </p>
          <div className="space-y-4">
            <StepCard
              number={1}
              title="Finalize o projeto na Plataforma Solar"
              description='Antes de cobrar, certifique-se de que o projeto está salvo e aprovado na Plataforma Solar Intelbras. Clique em "Salvar" para confirmar o orçamento.'
            />
            <StepCard
              number={2}
              title="Retire o valor dos serviços da Plataforma Solar"
              description="Na Plataforma Solar, identifique o valor dos serviços (mão de obra, instalação etc.) que ficará com o integrador. Esse é o valor que será cobrado na maquininha."
            />
            <StepCard
              number={3}
              title="Preencha o valor na maquininha"
              description="No app da maquininha, insira o valor total do projeto (produtos + serviços) conforme acordado com o cliente."
            />
            <StepCard
              number={4}
              title="Cliente realiza o pagamento"
              description="O cliente paga pelo projeto completo na maquininha — em débito, crédito à vista ou parcelado em até 21x."
            />
            <StepCard
              number={5}
              title="Imprima as 2 vias do comprovante"
              highlight
            >
              <p className="text-sm text-muted-foreground leading-relaxed">
                Imprima <strong>2 vias</strong>: uma para o cliente e uma para o seu controle. Guarde o comprovante — ele será necessário para o próximo passo.
              </p>
              <AttentionBox>
                <strong>Ponto de Atenção Importante!</strong> Imprima sempre as 2 vias do comprovante. Não feche a transação antes de imprimir.
              </AttentionBox>
            </StepCard>
            <StepCard
              number={6}
              title="Faça o upload do comprovante na Plataforma Solar"
            >
              <p className="text-sm text-muted-foreground leading-relaxed">
                Após o pagamento, acesse a Plataforma Solar Intelbras e faça o <strong>upload do comprovante de pagamento</strong> no projeto correspondente. Esse registro é obrigatório para que a Cappta processe o split corretamente.
              </p>
              <div className="flex items-center gap-2 mt-3 p-3 rounded-xl border" style={{ background: "rgba(0,208,132,0.07)", borderColor: "rgba(0,163,53,0.20)" }}>
                <Upload className="w-4 h-4 flex-shrink-0" style={{ color: "#00A335" }} />
                <p className="text-xs text-muted-foreground">Acesse o projeto na Plataforma Solar → Pagamentos → Anexar comprovante.</p>
              </div>
            </StepCard>
            <StepCard
              number={7}
              title="Cappta realiza o split automaticamente"
              description="A Cappta identifica o pagamento e realiza o split: o valor dos produtos é direcionado para a Intelbras e o valor dos serviços fica na sua Conta Digital."
            />
            <StepCard
              number={8}
              title="Intelbras envia os equipamentos e emite a NF"
              description="Com o split confirmado, a Intelbras processa o pedido, emite a nota fiscal dos produtos e envia os equipamentos para a instalação."
            />
            <StepCard
              number={9}
              title="Instale os equipamentos e emita sua NF de serviço"
              description="Após receber os equipamentos, realize a instalação e emita a nota fiscal dos serviços prestados."
            />
            <StepCard
              number={10}
              title="Receba na Conta Digital no próximo dia útil"
            >
              <p className="text-sm text-muted-foreground leading-relaxed">
                O valor dos seus serviços estará disponível na Conta Digital no <strong>próximo dia útil</strong> após a confirmação do split.
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
