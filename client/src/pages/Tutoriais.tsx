import { useState } from "react";
import { Link, useParams } from "wouter";
import {
  Monitor, CreditCard, Link2, AlertTriangle, CheckCircle2,
  Info, Play, ChevronRight, ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";

function AttentionBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-4 rounded-xl p-4 border flex items-start gap-3"
      style={{ background: "rgba(240,165,0,0.08)", borderColor: "rgba(240,165,0,0.35)" }}
    >
      <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#b07800" }} />
      <div className="text-sm text-foreground leading-relaxed">{children}</div>
    </div>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-4 rounded-xl p-4 border flex items-start gap-3"
      style={{ background: "rgba(0,163,53,0.05)", borderColor: "rgba(0,163,53,0.20)" }}
    >
      <Info className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#00A335" }} />
      <div className="text-sm text-foreground leading-relaxed">{children}</div>
    </div>
  );
}

function StepCard({ number, title, children, attention }: {
  number: number;
  title: string;
  children?: React.ReactNode;
  attention?: string;
}) {
  return (
    <div className="flex gap-4 p-5 bg-white rounded-2xl border border-border shadow-sm">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
        style={{ background: "linear-gradient(135deg, #00A335, #00d084)", color: "#FFFFFF" }}
      >
        {number}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-base text-foreground mb-1">{title}</h4>
        {children && <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>}
        {attention && (
          <div
            className="mt-3 rounded-lg p-3 border flex items-start gap-2"
            style={{ background: "rgba(240,165,0,0.08)", borderColor: "rgba(240,165,0,0.30)" }}
          >
            <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#b07800" }} />
            <p className="text-xs" style={{ color: "#7a5200" }}>{attention}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── TUTORIAL: PLATAFORMA SOLAR ───
function TutorialPlataformaSolar() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-3">
          Como funciona o processo na Plataforma Solar
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Entenda o fluxo completo desde a criação do projeto até o recebimento na sua conta digital — tudo em 1 dia útil.
        </p>
      </div>

      {/* Botão Tutorial Drive */}
      <div className="mb-8">
        <a
          href="https://drive.google.com/file/d/17xa1VIVx4j0euizlTU6_GSob-1JHkZPw/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="font-bold gap-2"
            style={{ background: "#00d084", color: "#003318" }}
          >
            <ExternalLink className="w-5 h-5" />
            Ver Tutorial: Pagamento na Plataforma Solar
          </Button>
        </a>
        <p className="text-xs text-muted-foreground mt-2">Abre o tutorial completo em nova aba (Google Drive)</p>
      </div>

      <div className="space-y-4">
        <StepCard number={1} title="Parceiro cria o projeto na Plataforma Solar Intelbras">
          <p>Cadastre o projeto normalmente na <strong>Plataforma Solar Intelbras</strong> com todos os equipamentos do projeto.</p>
        </StepCard>

        <StepCard number={2} title="Parceiro apresenta a proposta com valor dos serviços e taxas de parcelamento">
          <p>Inclua no orçamento o valor dos serviços e, se houver parcelamento, as taxas correspondentes. Use o <Link href="/simular-taxas"><span className="text-primary underline cursor-pointer">Simulador de Taxas</span></Link> para calcular os valores.</p>
        </StepCard>

        <StepCard number={3} title="Cliente aprova o orçamento">
          <p>O cliente analisa e aprova formalmente o orçamento apresentado pelo parceiro.</p>
        </StepCard>

        <StepCard number={4} title="Parceiro retira o valor dos serviços da Plataforma Solar Intelbras">
          <p>Antes de cobrar na maquininha, o parceiro acessa a Plataforma Solar e retira (zera) o valor dos serviços do projeto, deixando apenas os produtos.</p>
        </StepCard>

        <StepCard number={5} title="Parceiro preenche valor dos produtos e serviços na maquininha">
          <p>O parceiro digita na maquininha o valor total — produtos + serviços — que será cobrado do cliente.</p>
        </StepCard>

        <StepCard number={6} title="Cliente paga pelo projeto completo na maquininha">
          <p>O cliente realiza o pagamento na maquininha (débito, crédito à vista ou parcelado).</p>
          <InfoBox>
            A venda pode ser feita com <strong>vários cartões</strong> — ideal para dividir o valor entre diferentes portadores.
          </InfoBox>
        </StepCard>

        <StepCard number={7} title="Cappta realiza o split dos produtos para Intelbras">
          <p>A plataforma identifica o pagamento e realiza o <strong>split automático</strong>: a parte referente aos equipamentos é repassada à Intelbras e a parte dos serviços fica disponível para o parceiro.</p>
        </StepCard>

        <StepCard number={8} title="Intelbras envia os equipamentos e emite NF dos produtos">
          <p>Após a confirmação do split, a Intelbras separa, envia os equipamentos ao endereço do projeto e emite a nota fiscal dos produtos.</p>
        </StepCard>

        <StepCard number={9} title="Parceiro instala os equipamentos">
          <p>Com os equipamentos em mãos, o parceiro executa a instalação e os serviços contratados.</p>
        </StepCard>

        <StepCard number={10} title="Parceiro emite NF do serviço">
          <p>Após a instalação, o parceiro emite a nota fiscal referente aos serviços prestados ao cliente.</p>
        </StepCard>

        <StepCard number={11} title="Parceiro recebe sua parte na Conta Digital no dia seguinte">
          <p>O valor dos serviços é depositado na conta digital do parceiro <strong>no próximo dia útil</strong>.</p>
          <div
            className="mt-3 p-3 rounded-lg border flex items-center gap-2"
            style={{ background: "rgba(0,208,132,0.08)", borderColor: "rgba(0,163,53,0.30)" }}
          >
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "#00A335" }} />
            <p className="text-xs font-semibold" style={{ color: "#00A335" }}>
              Recebimento em 1 dia útil — Tá na Conta!
            </p>
          </div>
        </StepCard>
      </div>
    </div>
  );
}

// ─── TUTORIAL: MAQUININHA ───
function TutorialMaquininha() {
  const [tab, setTab] = useState<"solar" | "outras">("solar");

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-3">
          Venda na Maquininha
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          Assista ao vídeo abaixo para ver o processo completo de venda na maquininha.
        </p>

        {/* Vídeo */}
        <div
          className="rounded-2xl overflow-hidden shadow-lg border border-border mb-6"
          style={{ aspectRatio: "16/9" }}
        >
          <iframe
            src="https://www.youtube.com/embed/TlWBqUZYfbs?start=250"
            title="Tutorial venda na maquininha"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Modalidades aceitas */}
        <div
          className="rounded-xl p-4 border mb-6"
          style={{ background: "rgba(0,163,53,0.04)", borderColor: "rgba(0,163,53,0.15)" }}
        >
          <p className="font-semibold text-sm text-foreground mb-3">Modalidades Aceitas</p>
          <div className="flex flex-wrap gap-2">
            {["Débito", "Crédito à Vista", "Crédito Parcelado"].map((m) => (
              <span
                key={m}
                className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                style={{ background: "#00A335" }}
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setTab("solar")}
            className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all ${
              tab === "solar" ? "text-white shadow-md" : "bg-white border border-border text-muted-foreground hover:text-foreground"
            }`}
            style={tab === "solar" ? { background: "linear-gradient(135deg, #00A335, #00d084)" } : {}}
          >
            Solar com Maquininha
          </button>
          <button
            onClick={() => setTab("outras")}
            className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all ${
              tab === "outras" ? "text-white shadow-md" : "bg-white border border-border text-muted-foreground hover:text-foreground"
            }`}
            style={tab === "outras" ? { background: "linear-gradient(135deg, #00A335, #00d084)" } : {}}
          >
            Outras Vendas
          </button>
        </div>
      </div>

      {/* Conteúdo Solar */}
      {tab === "solar" && (
        <div className="space-y-4">
          <div
            className="rounded-xl p-4 border mb-2"
            style={{ background: "rgba(0,163,53,0.04)", borderColor: "rgba(0,163,53,0.15)" }}
          >
            <p className="text-sm font-semibold text-foreground">Processo Plataforma Solar com Maquininha</p>
            <p className="text-xs text-muted-foreground mt-1">Siga este passo a passo para vendas de projetos de energia solar.</p>
          </div>

          <StepCard number={1} title="Consulte as taxas no simulador">
            <p>Antes de apresentar o orçamento, acesse o <Link href="/simular-taxas"><span className="text-primary underline cursor-pointer">Simulador de Taxas</span></Link> para calcular o valor com parcelamento.</p>
          </StepCard>

          <StepCard number={2} title="Envie o orçamento completo">
            <p>Envie o orçamento ao cliente com o valor dos produtos, serviços e taxas de parcelamento já incluídas.</p>
          </StepCard>

          <StepCard number={3} title="Leve a maquininha carregada até o cliente">
            <p>Após a aprovação do orçamento, leve a maquininha carregada ao local de instalação.</p>
          </StepCard>

          <StepCard
            number={4}
            title="Ligue a maquininha"
            attention="Segure o botão cromado por 3 segundos até que a bolinha verde apareça. Aguarde a inicialização completa antes de continuar."
          >
            <p>Pressione o botão cromado por 3 segundos até a bolinha verde aparecer e aguarde a inicialização.</p>
          </StepCard>

          <StepCard number={5} title='Digite o valor total e toque em "Pagar"'>
            <p>Digite o valor total da venda (produtos + serviços) e toque no botão <strong>"Pagar"</strong>.</p>
          </StepCard>

          <StepCard
            number={6}
            title='Escolha "Crédito" > "Parcelado" > prazo'
            attention="Escolha o mesmo prazo de parcelamento combinado com o cliente e simulado anteriormente."
          >
            <p>Selecione <strong>Crédito</strong>, depois <strong>Parcelado</strong> e clique no prazo combinado com o cliente.</p>
          </StepCard>

          <StepCard
            number={7}
            title="Passe o cartão"
            attention="Verifique se a bandeira do cartão é a mesma utilizada na simulação! Taxas variam por bandeira."
          >
            <p>Passe, aproxime ou insira o cartão do cliente.</p>
          </StepCard>

          <StepCard number={8} title="Imprima 2 vias">
            <p>Imprima <strong>2 vias</strong>: uma para o cliente e uma para você.</p>
            <div
              className="mt-3 rounded-xl p-4 border-2 flex items-start gap-3"
              style={{ background: "rgba(240,165,0,0.10)", borderColor: "rgba(240,165,0,0.55)" }}
            >
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#b07800" }} />
              <div>
                <p className="text-sm font-bold mb-1" style={{ color: "#7a5200" }}>Ponto de Atenção Importante!</p>
                <p className="text-sm" style={{ color: "#7a5200" }}>
                  Guarde bem o comprovante impresso! Você precisará dele para fazer o <strong>upload na Plataforma Solar</strong> e confirmar o pagamento do projeto. Sem o comprovante, o processo de liberação dos equipamentos pode ser atrasado.
                </p>
              </div>
            </div>
          </StepCard>

          <StepCard number={9} title="Acesse a Plataforma Solar Intelbras e entre no projeto">
            <p>Quando voltar para o escritório, acesse a <strong>Plataforma Solar Intelbras</strong> e abra o projeto correspondente.</p>
          </StepCard>

          <StepCard number={10} title="Zere o valor dos serviços e sinalize a visita técnica">
            <p>Garanta que o valor dos serviços esteja <strong>zerado</strong>, salve o projeto e sinalize que realizou a visita técnica.</p>
          </StepCard>

          <StepCard number={11} title='Escolha "Maquininha Intelbras" e faça upload do comprovante'>
            <p>Escolha o pagamento com a <strong>"Maquininha Intelbras"</strong>. Tire uma foto do seu comprovante e faça o upload. Pronto — agora é só acompanhar o envio dos produtos pelo status da Plataforma Solar!</p>
            <div
              className="mt-3 p-3 rounded-lg border flex items-center gap-2"
              style={{ background: "rgba(0,208,132,0.08)", borderColor: "rgba(0,163,53,0.30)" }}
            >
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "#00A335" }} />
              <p className="text-xs font-semibold" style={{ color: "#00A335" }}>
                Processo concluído! Acompanhe o envio pelo status da Plataforma Solar.
              </p>
            </div>
          </StepCard>
        </div>
      )}

      {/* Conteúdo Outras Vendas */}
      {tab === "outras" && (
        <div className="space-y-4">
          <div
            className="rounded-xl p-4 border mb-2"
            style={{ background: "rgba(0,163,53,0.04)", borderColor: "rgba(0,163,53,0.15)" }}
          >
            <p className="text-sm font-semibold text-foreground">Outras Vendas na Maquininha (Intelbras ou não)</p>
            <p className="text-xs text-muted-foreground mt-1">Para vendas de outros produtos e serviços além dos projetos solares.</p>
          </div>

          <StepCard number={1} title="Consulte as taxas no simulador">
            <p>Acesse o <Link href="/simular-taxas"><span className="text-primary underline cursor-pointer">Simulador de Taxas</span></Link> para calcular o valor com parcelamento.</p>
            <InfoBox>
              Você também pode optar por <strong>assumir as taxas de parcelamento</strong>. O simulador tem uma coluna de valor líquido a receber — confira!
            </InfoBox>
          </StepCard>

          <StepCard number={2} title="Mantenha a maquininha sempre carregada">
            <p>Deixe sempre a maquininha carregada para casos em que os clientes forem até a sua loja.</p>
          </StepCard>

          <StepCard
            number={3}
            title="Ligue a maquininha"
            attention="Segure o botão cromado por 3 segundos até que a bolinha verde apareça. Aguarde a inicialização completa."
          >
            <p>Pressione o botão cromado por 3 segundos até a bolinha verde aparecer e aguarde a inicialização.</p>
          </StepCard>

          <StepCard number={4} title='Digite o valor e toque em "Pagar" ou "Pix"'>
            <p>Digite o valor total da venda e toque no botão <strong>"Pagar"</strong> ou <strong>"Pix"</strong>.</p>
          </StepCard>

          <StepCard number={5} title='Escolha "Débito" ou "Crédito"'>
            <p>Selecione a modalidade desejada. Em caso de crédito parcelado, toque em <strong>"Parcelado"</strong> e depois no prazo combinado.</p>
          </StepCard>

          <StepCard
            number={6}
            title="Passe o cartão"
            attention="Verifique se a bandeira do cartão é a mesma utilizada na simulação! Taxas variam por bandeira."
          >
            <p>Passe, aproxime ou insira o cartão do cliente.</p>
          </StepCard>

          <StepCard number={7} title="Imprima 2 vias">
            <p>Imprima <strong>2 vias</strong>: uma para o cliente e uma para você.</p>
          </StepCard>

          <StepCard number={8} title="Antecipe o recebimento se necessário">
            <p>
              Lembre-se que a solução "Tá na Conta" acumula seus recebíveis, mas você pode antecipar o recebimento desse tipo de venda. Para isso:
            </p>
            <ol className="mt-2 space-y-1 list-decimal list-inside text-xs text-muted-foreground">
              <li>Acesse <a href="https://intelbras.posportal.com.br/" target="_blank" rel="noopener noreferrer" className="text-primary underline"><strong>intelbras.posportal.com.br</strong></a> com seu login e senha</li>
              <li>Clique em <strong>Gestão Financeira</strong> &gt; <strong>Agenda Financeira</strong></li>
              <li>Clique em <strong>Movimentar Agenda</strong> &gt; <strong>Antecipação de Agenda</strong></li>
              <li>Clique em <strong>Solicitar</strong></li>
            </ol>
          </StepCard>
        </div>
      )}
    </div>
  );
}

// ─── TUTORIAL: LINK DE PAGAMENTO ───
function TutorialLinkPagamento() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-3">
          Venda com Link de Pagamento
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          Assista ao vídeo abaixo para aprender a criar e enviar links de pagamento.
        </p>

        {/* Vídeo */}
        <div
          className="rounded-2xl overflow-hidden shadow-lg border border-border mb-6"
          style={{ aspectRatio: "16/9" }}
        >
          <iframe
            src="https://www.youtube.com/embed/oQiHxWyy8wU"
            title="Tutorial link de pagamento"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        <InfoBox>
          <strong>Vantagem exclusiva Tá na Conta:</strong> As taxas do Link de Pagamento são <strong>iguais</strong> às da maquininha. Em empresas concorrentes, as vendas por link de pagamento são mais caras que as de maquininha. Esse é mais um benefício do Tá na Conta para você!
        </InfoBox>
      </div>

      <div className="space-y-4">
        <StepCard number={1} title="Consulte o valor das parcelas no simulador">
          <p>Acesse o <Link href="/simular-taxas"><span className="text-primary underline cursor-pointer">Simulador de Taxas</span></Link> para calcular o valor com parcelamento. As taxas do link de pagamento são as mesmas da maquininha.</p>
        </StepCard>

        <StepCard number={2} title="Envie o orçamento completo">
          <p>Envie o orçamento ao cliente com o valor dos produtos, serviços e taxas de parcelamento incluídas.</p>
        </StepCard>

        <StepCard number={3} title="Acesse o portal de vendas">
          <p>Após a aprovação, acesse <a href="https://intelbras.posportal.com.br/" target="_blank" rel="noopener noreferrer" className="text-primary underline"><strong>intelbras.posportal.com.br</strong></a> com seu e-mail e senha.</p>
        </StepCard>

        <StepCard number={4} title='Clique em "Financeiro" > "Links de Pagamento"'>
          <p>No menu principal, clique em <strong>Financeiro</strong> e em seguida em <strong>Links de Pagamento</strong>.</p>
        </StepCard>

        <StepCard number={5} title='Clique em "Cadastrar novo Link"'>
          <p>Clique no botão <strong>"Cadastrar novo Link"</strong> para iniciar a criação.</p>
        </StepCard>

        <StepCard number={6} title="Preencha os dados do link">
          <div className="space-y-2 mt-1">
            <p><strong>Nome do Produto:</strong> Cole o número do projeto da Plataforma Solar.</p>
            <p><strong>Valor:</strong> Preencha o valor total da venda.</p>
            <p><strong>Data de expiração:</strong> Defina a data limite para pagamento.</p>
            <p><strong>Descrição do Produto:</strong> Aparecerá integralmente para o cliente — aproveite para se comunicar, lembrando descontos ou prazos para execução.</p>
            <p><strong>Dados do Pagador:</strong> Preencha todos os dados.</p>
            <p><strong>Tipo:</strong> Escolha <strong>Único/Avulso</strong>.</p>
          </div>
        </StepCard>

        <StepCard
          number={7}
          title="Mantenha as taxas ao portador DESABILITADAS"
          attention="Deixe a opção de taxas ao portador como 'Não', pois você já adicionou os juros pelo simulador. Habilitar essa opção geraria cobrança dupla."
        >
          <p>Mantenha a opção de taxas ao portador <strong>DESABILITADA</strong> (selecione "Não").</p>
        </StepCard>

        <StepCard number={8} title="Configure as formas de pagamento">
          <p>Em <strong>Formas de Pagamento</strong>, escolha <strong>Cartão de Crédito</strong> e em <strong>Tipo de Parcela</strong> selecione:</p>
          <ul className="mt-2 space-y-1 list-disc list-inside text-xs text-muted-foreground">
            <li><strong>Parcela Aberta:</strong> O cliente escolhe a parcela no momento do pagamento.</li>
            <li><strong>Parcela Fechada:</strong> Você define em quantas vezes ele vai pagar (ele não poderá alterar no momento do pagamento).</li>
          </ul>
        </StepCard>

        <StepCard number={9} title="Crie o link e envie para o cliente">
          <p>Clique em <strong>"Criar Link de Pagamento"</strong>. Copie a URL de pagamento encurtada e envie para o cliente.</p>
        </StepCard>

        <StepCard number={10} title="Acompanhe o pagamento">
          <p>Acesse o Menu <strong>Financeiro</strong> &gt; <strong>Link de Pagamento</strong>. Quando o cliente efetuar o pagamento, o status mudará de <strong>"Pendente"</strong> para <strong>"Ativo"</strong>.</p>
        </StepCard>

        <StepCard number={11} title="Acesse a Plataforma Solar e finalize o projeto">
          <p>Acesse a Plataforma Solar e entre no projeto. Garanta que o valor dos serviços seja <strong>ZERO</strong>, salve-o e sinalize que realizou a visita técnica. Mesmo com pagamento sendo feito por link, escolha <strong>"Maquininha Intelbras"</strong>.</p>
        </StepCard>

        <StepCard number={12} title="Faça upload das comprovações">
          <p>Tire um print dos links pagos na Plataforma Cappta. Faça o upload dessas comprovações na Plataforma Solar. Pronto — agora é só acompanhar o envio dos produtos e instalar!</p>
          <div
            className="mt-3 p-3 rounded-lg border flex items-center gap-2"
            style={{ background: "rgba(0,208,132,0.08)", borderColor: "rgba(0,163,53,0.30)" }}
          >
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "#00A335" }} />
            <p className="text-xs font-semibold" style={{ color: "#00A335" }}>
              Processo concluído! Acompanhe o envio pelo status da Plataforma Solar.
            </p>
          </div>
        </StepCard>
      </div>
    </div>
  );
}

// ─── COMPONENTE PRINCIPAL ───
const tabs = [
  {
    id: "plataforma-solar",
    label: "Plataforma Solar",
    icon: <Monitor className="w-4 h-4" />,
    component: <TutorialPlataformaSolar />,
  },
  {
    id: "maquininha",
    label: "Venda na Maquininha",
    icon: <CreditCard className="w-4 h-4" />,
    component: <TutorialMaquininha />,
  },
  {
    id: "link-pagamento",
    label: "Venda com Link",
    icon: <Link2 className="w-4 h-4" />,
    component: <TutorialLinkPagamento />,
  },
];

export default function Tutoriais() {
  const params = useParams<{ tipo?: string }>();
  const tipo = params.tipo || "plataforma-solar";
  const activeTab = tabs.find((t) => t.id === tipo) || tabs[0];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-14 lg:py-18 text-white"
        style={{ background: "linear-gradient(135deg, #003318 0%, #00A335 60%, #00d084 100%)" }}
      >
        <div className="container">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <Play className="w-3.5 h-3.5" />
              Tutoriais
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Passo a passo descomplicado
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Aprenda a usar o Tá na Conta com tutoriais didáticos, pontos de atenção destacados e vídeos explicativos.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile: abas horizontais */}
      <div className="lg:hidden sticky top-16 z-30 bg-white border-b border-border shadow-sm">
        <div className="container">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <Link key={tab.id} href={`/tutoriais/${tab.id}`}>
                <button
                  className={`flex items-center gap-2 px-4 py-3.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-all ${
                    activeTab.id === tab.id
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: layout com sidebar lateral */}
      <div className="py-10" style={{ background: "#f5faf7" }}>
        <div className="container">
          <div className="flex gap-8 items-start">

            {/* Sidebar lateral — visível apenas em desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-24">
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                <div className="px-4 py-3 border-b border-border">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tutoriais</p>
                </div>
                <nav className="p-2">
                  {tabs.map((tab) => (
                    <Link key={tab.id} href={`/tutoriais/${tab.id}`}>
                      <div
                        className={`flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer transition-all group ${
                          activeTab.id === tab.id
                            ? "text-white shadow-md"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                        style={activeTab.id === tab.id ? { background: "linear-gradient(135deg, #00A335, #00d084)" } : {}}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            activeTab.id === tab.id ? "bg-white/20" : ""
                          }`}
                          style={activeTab.id !== tab.id ? { background: "rgba(0,163,53,0.08)" } : {}}
                        >
                          <span style={{ color: activeTab.id === tab.id ? "white" : "#00A335" }}>
                            {tab.icon}
                          </span>
                        </div>
                        <span className="text-sm font-semibold leading-tight">{tab.label}</span>
                        {activeTab.id === tab.id && (
                          <ChevronRight className="w-4 h-4 ml-auto opacity-70" />
                        )}
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Conteúdo principal */}
            <div className="flex-1 min-w-0">
              {activeTab.component}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
