import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle2, ArrowRight, Monitor, CreditCard, Link2, ChevronRight } from "lucide-react";

function AttentionBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="attention-box my-5">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.60 0.16 55)" }} />
        <div className="text-sm text-foreground leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl p-4 my-5 flex items-start gap-3"
      style={{ background: "oklch(0.55 0.20 250 / 0.06)", border: "1px solid oklch(0.55 0.20 250 / 0.2)" }}
    >
      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.20 250)" }} />
      <div className="text-sm text-foreground leading-relaxed">{children}</div>
    </div>
  );
}

function StepItem({ number, title, description, children }: {
  number: number;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 group">
      <div className="flex flex-col items-center">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 transition-transform group-hover:scale-110"
          style={{ background: "linear-gradient(135deg, oklch(0.30 0.16 250), oklch(0.55 0.20 250))" }}
        >
          {number}
        </div>
        <div className="w-0.5 flex-1 mt-2" style={{ background: "oklch(0.90 0.01 250)" }} />
      </div>
      <div className="pb-8 flex-1">
        <h4 className="font-semibold text-base text-foreground mb-1">{title}</h4>
        {description && <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>}
        {children}
      </div>
    </div>
  );
}

// ─── TUTORIAIS CONTENT ────────────────────────────────────────────────────

function TutorialPlataformaSolar() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
          Como funciona o processo na Plataforma Solar
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          A Plataforma Solar é o sistema da Intelbras onde você cadastra e gerencia seus projetos de energia solar. Integrada ao Tá na Conta, ela permite que você cobre os clientes diretamente pela maquininha ou link de pagamento.
        </p>
      </div>

      <AttentionBox>
        <strong>Antes de começar:</strong> Certifique-se de que sua conta Tá na Conta já está ativa e vinculada ao seu CNPJ. Caso ainda não tenha feito isso, acesse a seção <strong>Ativar Conta</strong> primeiro.
      </AttentionBox>

      <div className="mt-8">
        <h3 className="text-lg font-bold text-foreground mb-6">Passo a passo</h3>
        <div>
          <StepItem
            number={1}
            title="Acesse a Plataforma Solar"
            description="Entre na Plataforma Solar com suas credenciais de integrador Intelbras."
          />
          <StepItem
            number={2}
            title="Crie ou selecione um projeto"
            description="Cadastre um novo projeto ou selecione um existente para realizar a cobrança."
          />
          <StepItem
            number={3}
            title="Preencha os dados do cliente"
            description="Informe nome, CPF/CNPJ e dados de contato do cliente para o projeto."
          />
          <StepItem
            number={4}
            title="Defina o valor e as parcelas"
          >
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              Insira o valor total do projeto e escolha o número de parcelas (até 21x).
            </p>
            <TipBox>
              <strong>Dica:</strong> Ofereça parcelamento para facilitar o fechamento do projeto. Parcelas menores tornam o investimento mais acessível para o cliente.
            </TipBox>
          </StepItem>
          <StepItem
            number={5}
            title="Escolha a forma de cobrança"
            description="Selecione se a cobrança será feita pela maquininha (presencialmente) ou por link de pagamento (à distância)."
          />
          <StepItem
            number={6}
            title="Confirme e envie"
            description="Revise os dados e confirme a cobrança. O sistema processará automaticamente."
          />
          <StepItem
            number={7}
            title="Acompanhe o recebimento"
          >
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              Após a confirmação do pagamento, o valor dos seus serviços será creditado em até 7 dias úteis na sua conta digital.
            </p>
            <TipBox>
              <strong>Lembre-se:</strong> A Intelbras retém automaticamente o valor dos equipamentos. Você recebe apenas o valor referente aos seus serviços.
            </TipBox>
          </StepItem>
        </div>
      </div>

      <AttentionBox>
        <strong>Ponto de atenção:</strong> O prazo de 7 dias é exclusivo para projetos Intelbras Solar. Para outras vendas realizadas pela maquininha, o prazo é D+2 (dois dias úteis).
      </AttentionBox>
    </div>
  );
}

function TutorialMaquininha() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
          Como vender com a Maquininha
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          A maquininha do Tá na Conta aceita cartões de débito, crédito e Pix. Siga o passo a passo abaixo para realizar uma venda com segurança.
        </p>
      </div>

      <AttentionBox>
        <strong>Pré-requisito:</strong> A maquininha deve estar ligada, conectada à internet e com login realizado. Consulte a seção <strong>Ativar Conta</strong> se ainda não configurou o dispositivo.
      </AttentionBox>

      <div className="mt-8">
        <h3 className="text-lg font-bold text-foreground mb-6">Realizando uma venda</h3>
        <div>
          <StepItem
            number={1}
            title="Ligue a maquininha"
            description="Pressione o botão de energia e aguarde a tela inicial aparecer."
          />
          <StepItem
            number={2}
            title="Selecione 'Venda'"
            description="Na tela inicial, toque na opção Venda ou Cobrar."
          />
          <StepItem
            number={3}
            title="Digite o valor"
          >
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              Informe o valor da venda usando o teclado numérico. Confirme pressionando OK ou Enter.
            </p>
            <AttentionBox>
              <strong>Atenção:</strong> Sempre confirme o valor com o cliente antes de apresentar a maquininha para o pagamento.
            </AttentionBox>
          </StepItem>
          <StepItem
            number={4}
            title="Escolha a modalidade de pagamento"
          >
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              Selecione entre: Débito, Crédito à vista ou Crédito parcelado.
            </p>
            <TipBox>
              <strong>Para parcelamento:</strong> Após selecionar Crédito parcelado, informe o número de parcelas desejado (até 21x).
            </TipBox>
          </StepItem>
          <StepItem
            number={5}
            title="Apresente ao cliente"
            description="Entregue a maquininha ao cliente para que ele insira, aproxime ou passe o cartão."
          />
          <StepItem
            number={6}
            title="Cliente insere a senha"
          >
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              Para transações de débito e crédito com chip, o cliente deverá digitar a senha do cartão.
            </p>
            <AttentionBox>
              <strong>Privacidade:</strong> Garanta que o cliente tenha privacidade ao digitar a senha. Nunca peça para o cliente informar a senha em voz alta.
            </AttentionBox>
          </StepItem>
          <StepItem
            number={7}
            title="Aguarde a aprovação"
            description="A maquininha processará a transação. Aguarde a confirmação na tela."
          />
          <StepItem
            number={8}
            title="Comprovante"
          >
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              Após a aprovação, você pode imprimir o comprovante ou enviá-lo por SMS/e-mail ao cliente.
            </p>
            <TipBox>
              <strong>Boa prática:</strong> Sempre ofereça o comprovante ao cliente. Isso transmite profissionalismo e gera confiança.
            </TipBox>
          </StepItem>
        </div>
      </div>

      <div
        className="mt-4 p-5 rounded-2xl"
        style={{ background: "oklch(0.30 0.16 250 / 0.05)", border: "1px solid oklch(0.30 0.16 250 / 0.15)" }}
      >
        <h4 className="font-bold text-foreground mb-3">Modalidades aceitas</h4>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { label: "Débito", taxa: "A partir de 1,49%", prazo: "D+2" },
            { label: "Crédito à vista", taxa: "A partir de 2,69%", prazo: "D+2" },
            { label: "Crédito parcelado", taxa: "A partir de 3,49%", prazo: "D+2 por parcela" },
          ].map((m) => (
            <div key={m.label} className="bg-white rounded-xl p-4 border border-border">
              <p className="font-semibold text-sm text-foreground mb-1">{m.label}</p>
              <p className="text-xs text-muted-foreground">{m.taxa}</p>
              <p className="text-xs text-muted-foreground">Recebimento: {m.prazo}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TutorialLinkPagamento() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
          Como vender com Link de Pagamento
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          O link de pagamento permite que você cobre clientes à distância, sem precisar estar presencialmente. Ideal para fechar projetos em outras cidades ou para cobranças remotas.
        </p>
      </div>

      <TipBox>
        <strong>Vantagem exclusiva:</strong> No Tá na Conta, a taxa do link de pagamento é <strong>idêntica</strong> à taxa da maquininha. Sem custo adicional para vendas remotas.
      </TipBox>

      <div className="mt-8">
        <h3 className="text-lg font-bold text-foreground mb-6">Gerando um link de pagamento</h3>
        <div>
          <StepItem
            number={1}
            title="Acesse o Portal"
            description="Entre no portal web da Cappta com suas credenciais."
          />
          <StepItem
            number={2}
            title="Vá em 'Link de Pagamento'"
            description="No menu principal, localize a opção Link de Pagamento ou Cobranças."
          />
          <StepItem
            number={3}
            title="Crie uma nova cobrança"
          >
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              Clique em Novo Link ou Nova Cobrança e preencha os dados:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
              <li>Valor da cobrança</li>
              <li>Descrição (ex: "Instalação Solar - João Silva")</li>
              <li>Número de parcelas permitidas</li>
              <li>Data de vencimento (opcional)</li>
            </ul>
          </StepItem>
          <StepItem
            number={4}
            title="Gere o link"
          >
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              Clique em Gerar Link. O sistema criará um link único para aquela cobrança.
            </p>
            <AttentionBox>
              <strong>Atenção:</strong> Cada link é único e vinculado a uma cobrança específica. Não compartilhe o mesmo link para cobranças diferentes.
            </AttentionBox>
          </StepItem>
          <StepItem
            number={5}
            title="Compartilhe com o cliente"
          >
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              Copie o link e envie por WhatsApp, e-mail ou SMS. O cliente acessará a página de pagamento diretamente pelo celular ou computador.
            </p>
            <TipBox>
              <strong>Dica:</strong> Envie o link com uma mensagem personalizada explicando o que está sendo cobrado. Isso aumenta a taxa de conversão e evita dúvidas.
            </TipBox>
          </StepItem>
          <StepItem
            number={6}
            title="Cliente realiza o pagamento"
            description="O cliente abre o link, escolhe a forma de pagamento (cartão de crédito/débito ou Pix) e conclui a transação."
          />
          <StepItem
            number={7}
            title="Acompanhe o status"
          >
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              No portal, você pode acompanhar em tempo real se o link foi acessado e se o pagamento foi realizado.
            </p>
            <TipBox>
              <strong>Notificação:</strong> Você receberá uma notificação quando o pagamento for confirmado.
            </TipBox>
          </StepItem>
        </div>
      </div>

      <AttentionBox>
        <strong>Cobranças recorrentes:</strong> Para contratos mensais (como manutenção), utilize a função de Cobrança Recorrente. O sistema gerará e enviará automaticamente o link todo mês para o cliente.
      </AttentionBox>
    </div>
  );
}

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────

const tutorialRoutes: Record<string, { title: string; icon: React.ReactNode; component: React.ReactNode }> = {
  "plataforma-solar": {
    title: "Plataforma Solar",
    icon: <Monitor className="w-5 h-5" />,
    component: <TutorialPlataformaSolar />,
  },
  "maquininha": {
    title: "Venda na Maquininha",
    icon: <CreditCard className="w-5 h-5" />,
    component: <TutorialMaquininha />,
  },
  "link-pagamento": {
    title: "Venda com Link",
    icon: <Link2 className="w-5 h-5" />,
    component: <TutorialLinkPagamento />,
  },
};

export default function Tutoriais() {
  const [matchSolar] = useRoute("/tutoriais/plataforma-solar");
  const [matchMaquininha] = useRoute("/tutoriais/maquininha");
  const [matchLink] = useRoute("/tutoriais/link-pagamento");

  const currentKey = matchSolar ? "plataforma-solar" : matchMaquininha ? "maquininha" : matchLink ? "link-pagamento" : null;
  const current = currentKey ? tutorialRoutes[currentKey] : null;

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
              Tutoriais
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              {current ? current.title : "Tutoriais"}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Guias passo a passo para você usar o Tá na Conta com confiança e eficiência.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-10 lg:py-14">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-border p-4 sticky top-24">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
                Tutoriais disponíveis
              </p>
              <nav className="space-y-1">
                {Object.entries(tutorialRoutes).map(([key, tut]) => (
                  <Link key={key} href={`/tutoriais/${key}`}>
                    <div
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                        currentKey === key
                          ? "text-white shadow-sm"
                          : "text-foreground hover:bg-muted"
                      }`}
                      style={currentKey === key ? { background: "linear-gradient(135deg, oklch(0.30 0.16 250), oklch(0.55 0.20 250))" } : {}}
                    >
                      <span className={currentKey === key ? "text-white" : "text-muted-foreground"}>
                        {tut.icon}
                      </span>
                      {tut.title}
                      {currentKey === key && <ChevronRight className="w-4 h-4 ml-auto" />}
                    </div>
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {current ? (
              <div className="bg-white rounded-2xl border border-border p-6 lg:p-8">
                {current.component}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-border p-8 text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "oklch(0.30 0.16 250 / 0.08)" }}
                >
                  <Monitor className="w-8 h-8" style={{ color: "oklch(0.30 0.16 250)" }} />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
                  Selecione um tutorial
                </h2>
                <p className="text-muted-foreground mb-6">
                  Escolha um dos tutoriais disponíveis no menu ao lado para começar.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {Object.entries(tutorialRoutes).map(([key, tut]) => (
                    <Link key={key} href={`/tutoriais/${key}`}>
                      <div className="p-4 rounded-xl border border-border hover:border-primary/40 hover:shadow-md transition-all cursor-pointer text-center group">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform"
                          style={{ background: "oklch(0.30 0.16 250 / 0.08)" }}
                        >
                          <span style={{ color: "oklch(0.30 0.16 250)" }}>{tut.icon}</span>
                        </div>
                        <p className="font-semibold text-sm text-foreground">{tut.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
