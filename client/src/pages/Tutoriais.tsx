import { useState } from "react";
import { Link, useParams } from "wouter";
import {
  Monitor, CreditCard, Link2, AlertTriangle, CheckCircle2,
  Info, Play, ChevronRight, ExternalLink, ChevronDown
} from "lucide-react";

const bancos3DS = [
  {
    nome: "Banco do Brasil",
    cor: "#FFD700",
    corTexto: "#1a1a1a",
    descricao: "No Banco do Brasil, a autenticação 3DS ocorre via token enviado por SMS ou pelo app BB.",
    passos: [
      "Após inserir os dados do cartão, uma janela de autenticação do Banco do Brasil é exibida.",
      "O banco envia um token por SMS para o celular cadastrado.",
      "Insira o token na tela para confirmar a compra.",
    ],
    nota: "O método de autenticação pode variar. Siga as instruções exibidas na tela do checkout.",
  },
  {
    nome: "Bradesco",
    cor: "#CC0000",
    corTexto: "#ffffff",
    descricao: "No Bradesco, a autenticação ocorre via SMS ou pelo app do banco.",
    passos: [
      'Após inserir os dados do cartão, uma janela do Bradesco exibe: \"Para continuar com sua compra online é necessária uma autenticação. Abaixo o seu método de autenticação com o Bradesco.\"',
      "O proprietário do cartão receberá no celular cadastrado no Bradesco um token para inserir no site.",
    ],
    nota: "O método apresentado é o mais comum. Pode haver situações em que apareça um desafio diferente.",
  },
  {
    nome: "Inter",
    cor: "#FF6600",
    corTexto: "#ffffff",
    descricao: "No Banco Inter, a autenticação ocorre com um token gerado pelo recurso i-Safe, disponível no aplicativo do banco.",
    passos: [
      "O cliente acessa o app do Inter e gera o token no i-Safe.",
      "Insere o código no site para confirmar a compra.",
      "A transação é aprovada.",
    ],
    nota: "O recurso já está ativo em todos os cartões Inter. Funciona com cartões físicos e virtuais.",
  },
  {
    nome: "Itaú",
    cor: "#003399",
    corTexto: "#ffffff",
    descricao: "No Itaú, o 3DS utiliza um token gerado no aplicativo do banco. O cliente recebe a solicitação para gerar um token no app após inserir os dados do cartão.",
    passos: [
      "Acesse o app Itaú e gere o token de segurança.",
      "Insira o token na tela de checkout para confirmar a compra.",
      "A compra é autorizada.",
    ],
    nota: "O 3DS está ativo em todos os cartões Itaú via Mastercard Identity Check. Funciona com cartões físicos e virtuais.",
  },
  {
    nome: "Neon",
    cor: "#00CFFF",
    corTexto: "#1a1a1a",
    descricao: "O Neon utiliza biometria ou senha no app para validar compras online. O cliente recebe uma notificação e escolhe a forma de autenticação: selfie, senha ou digital.",
    passos: [
      'Uma notificação push aparece no app: \"Está tentando realizar uma compra online?\"',
      "O cliente confirma usando biometria, selfie ou senha.",
      "A transação é liberada após a validação.",
    ],
    nota: "O recurso já está disponível para todos os clientes Neon. É mais seguro usar cartões virtuais em compras online.",
  },
  {
    nome: "Nubank",
    cor: "#8A05BE",
    corTexto: "#ffffff",
    descricao: "No Nubank, a autenticação é feita no aplicativo. O cliente recebe uma notificação e tem 3 minutos para aprovar ou negar a transação.",
    passos: [
      "Uma notificação aparece no app Nubank.",
      'O cliente escolhe \"Sim\" ou \"Não\" para confirmar ou recusar a compra.',
      "Sem a confirmação, a transação não é autorizada.",
    ],
    nota: "Usa o protocolo Mastercard Identity Check. Funciona com cartões físicos e virtuais.",
  },
  {
    nome: "PagBank",
    cor: "#F5C518",
    corTexto: "#1a1a1a",
    descricao: "O PagBank utiliza códigos de segurança enviados por SMS. O cliente digita o token recebido para confirmar a compra.",
    passos: [
      'A mensagem exibida: \"Para a segurança da sua compra online, precisamos do Token recebido por SMS no seu celular cadastrado.\"',
      "Insira o token.",
      "Transação aprovada.",
    ],
    nota: "Todos os cartões já contam com o 3DS habilitado. Funciona com cartões físicos e virtuais.",
  },
  {
    nome: "Santander",
    cor: "#EC0000",
    corTexto: "#ffffff",
    descricao: "No Santander, a autenticação 3DS é feita via token enviado por SMS ou pelo app do banco.",
    passos: [
      "Após inserir os dados do cartão, uma janela de autenticação do Santander é exibida.",
      "O banco envia um token por SMS para o celular cadastrado.",
      "Insira o token na tela para confirmar a compra.",
    ],
    nota: "O método de autenticação pode variar. Siga as instruções exibidas na tela do checkout.",
  },
];

function Accordion3DS() {
  const [aberto, setAberto] = useState<number | null>(null);
  return (
    <div className="space-y-2">
      {bancos3DS.map((banco, idx) => (
        <div key={banco.nome} className="rounded-xl border border-border overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left font-bold text-sm transition-colors"
            style={{
              background: aberto === idx ? banco.cor : "#f9fafb",
              color: aberto === idx ? banco.corTexto : "#1a1a1a",
            }}
            onClick={() => setAberto(aberto === idx ? null : idx)}
          >
            <span>{banco.nome}</span>
            <ChevronDown
              className="w-4 h-4 transition-transform flex-shrink-0"
              style={{ transform: aberto === idx ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>
          {aberto === idx && (
            <div className="px-5 py-4 bg-white border-t border-border">
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{banco.descricao}</p>
              <ul className="space-y-2 mb-3">
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
          href="/manus-storage/tutorial-plataforma-solar_9bc3e3f6.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="font-bold gap-2"
            style={{ background: "#00d084", color: "#003318" }}
          >
            <ExternalLink className="w-5 h-5" />
            Ver Como usar: Pagamento na Plataforma Solar
          </Button>
        </a>
        <p className="text-xs text-muted-foreground mt-2">Veja o guia completo em PDF.</p>
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

        <StepCard number={4} title="Parceiro retira o valor dos serviços e clica em Salvar">
          <p>Antes de cobrar na maquininha, o parceiro acessa a Plataforma Solar, retira (zera) o valor dos serviços do projeto, deixando apenas os produtos, e clica em <strong>"Salvar"</strong> para confirmar o orçamento.</p>
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

        <StepCard number={7} title="Parceiro faz upload do comprovante na Plataforma Solar">
          <p>Após o pagamento, o parceiro volta à Plataforma Solar Intelbras, abre o projeto correspondente e realiza o <strong>upload do comprovante de pagamento</strong> (a via impressa da maquininha).</p>
          <AttentionBox>
            <strong>Ponto de Atenção:</strong> Imprima <strong>2 vias</strong> do comprovante — uma para o cliente e uma para você. Sem o comprovante, o processo de liberação dos equipamentos pode ser atrasado.
          </AttentionBox>
        </StepCard>

        <StepCard number={8} title="Cappta realiza o split dos produtos para Intelbras">
          <p>A plataforma identifica o pagamento e realiza o <strong>split automático</strong>: a parte referente aos equipamentos é repassada à Intelbras e a parte dos serviços fica disponível para o parceiro.</p>
        </StepCard>

        <StepCard number={9} title="Intelbras envia os equipamentos e emite NF dos produtos">
          <p>Após a confirmação do split, a Intelbras separa, envia os equipamentos ao endereço do projeto e emite a nota fiscal dos produtos.</p>
        </StepCard>

        <StepCard number={10} title="Parceiro instala os equipamentos">
          <p>Com os equipamentos em mãos, o parceiro executa a instalação e os serviços contratados.</p>
        </StepCard>

        <StepCard number={11} title="Parceiro emite NF do serviço">
          <p>Após a instalação, o parceiro emite a nota fiscal referente aos serviços prestados ao cliente.</p>
        </StepCard>

        <StepCard number={12} title="Parceiro recebe sua parte na Conta Digital no dia seguinte">
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
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-3">
          Venda na Maquininha
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          Assista ao vídeo abaixo para ver o processo completo de venda na maquininha. O recebimento é em <strong>1 dia útil</strong> para todas as modalidades.
        </p>

        {/* Vídeo */}
        <div
          className="rounded-2xl overflow-hidden shadow-lg border border-border mb-6"
          style={{ aspectRatio: "16/9" }}
        >
          <iframe
            src="https://www.youtube.com/embed/TlWBqUZYfbs?start=250"
            title="Como usar: venda na maquininha"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        <InfoBox>
          Recebimento em <strong>1 dia útil</strong> para todas as vendas — débito, crédito à vista, parcelado e Pix. Consulte as taxas no <Link href="/simular-taxas"><span className="text-primary underline cursor-pointer">Simulador de Taxas</span></Link> antes de apresentar o orçamento.
        </InfoBox>
      </div>

      <div className="space-y-4">
        <StepCard number={1} title="Simule as taxas e envie o orçamento">
          <p>Acesse o <Link href="/simular-taxas"><span className="text-primary underline cursor-pointer">Simulador de Taxas</span></Link> para calcular o valor com parcelamento. Você pode optar por assumir as taxas ou repassá-las ao cliente — o simulador mostra o valor líquido a receber. Envie o orçamento com todos os valores já incluídos.</p>
        </StepCard>

        <StepCard number={2} title="Ligue a maquininha e aguarde a inicialização"
          attention="Segure o botão cromado por 3 segundos até a bolinha laranja aparecer. Aguarde a inicialização completa antes de continuar."
        >
          <p>Mantenha a maquininha sempre carregada. Pressione o botão cromado por 3 segundos e aguarde a inicialização completa.</p>
        </StepCard>

        <StepCard number={3} title='Digite o valor, toque em "Pagar" ou "Pix" e escolha a modalidade'>
          <p>Insira o valor total da venda e selecione a forma de pagamento. Para Pix, o QR Code é gerado automaticamente. Para crédito parcelado, toque em <strong>"Parcelado"</strong> e selecione o prazo combinado.</p>
        </StepCard>

        <StepCard
          number={4}
          title="Passe o cartão e imprima as 2 vias"
          attention="Verifique se a bandeira do cartão é a mesma da simulação! Taxas variam por bandeira. Imprima sempre as 2 vias antes de fechar a transação."
        >
          <p>Passe, aproxime ou insira o cartão. Após a aprovação, imprima <strong>2 vias</strong>: uma para o cliente e uma para o seu controle.</p>
        </StepCard>

        <StepCard number={5} title="No dia seguinte, seu dinheiro Tá na Conta!">
          <p>O valor da venda estará disponível na sua Conta Digital no <strong>próximo dia útil</strong>.</p>
          <div
            className="mt-3 p-3 rounded-lg border flex items-center gap-2"
            style={{ background: "rgba(0,208,132,0.08)", borderColor: "rgba(0,163,53,0.30)" }}
          >
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "#00A335" }} />
            <p className="text-xs font-semibold" style={{ color: "#00A335" }}>
              Venda concluída! Para o fluxo completo de Venda Solar, consulte o guia <Link href="/tutoriais/plataforma-solar"><span className="underline cursor-pointer">Plataforma Solar</span></Link>.
            </p>
          </div>
        </StepCard>
      </div>
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
            title="Como usar: link de pagamento"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        <InfoBox>
          <strong>Vantagem exclusiva Tá na Conta:</strong> As taxas do Link de Pagamento são <strong>iguais</strong> às da maquininha. Em empresas concorrentes, as vendas por link costumam custar <strong>3% a 4% a mais</strong> do que as transações na maquininha. Esse é mais um benefício do Tá na Conta para você!
        </InfoBox>
      </div>

      <div className="space-y-4">
        <StepCard number={1} title="Simule as taxas e envie o orçamento">
          <p>Acesse o <Link href="/simular-taxas"><span className="text-primary underline cursor-pointer">Simulador de Taxas</span></Link> para calcular o valor com parcelamento. As taxas do link são as mesmas da maquininha. Envie o orçamento com todos os valores já incluídos.</p>
        </StepCard>

        <StepCard number={2} title="Acesse o portal e crie o link">
          <p>Após a aprovação, acesse <a href="https://intelbras.posportal.com.br/" target="_blank" rel="noopener noreferrer" className="text-primary underline"><strong>intelbras.posportal.com.br</strong></a>. No menu, clique em <strong>Financeiro &gt; Links de Pagamento &gt; Cadastrar novo Link</strong>.</p>
        </StepCard>

        <StepCard number={3} title="Preencha os dados do link">
          <div className="space-y-2 mt-1">
            <p><strong>Nome do Produto:</strong> Cole o número do projeto da Plataforma Solar.</p>
            <p><strong>Valor:</strong> Preencha o valor total da venda (sem taxas — veja o passo 4).</p>
            <p><strong>Data de expiração:</strong> Defina a data limite para pagamento.</p>
            <p><strong>Descrição:</strong> Aparecerá para o cliente — use para reforçar prazos ou condições.</p>
            <p><strong>Dados do Pagador:</strong> Preencha todos os campos. <strong>Tipo:</strong> Único/Avulso.</p>
          </div>
        </StepCard>

        <StepCard
          number={4}
          title="Taxas ao Portador: entenda e configure corretamente"
        >
          <p className="mb-3">Esta opção define quem paga as taxas do parcelamento:</p>
          <div className="space-y-3">
            <div className="p-3 rounded-lg border" style={{ background: "rgba(0,163,53,0.05)", borderColor: "rgba(0,163,53,0.20)" }}>
              <p className="text-sm font-semibold text-foreground mb-1">Taxas ao Portador: <span style={{ color: "#00A335" }}>SIM</span></p>
              <p className="text-xs text-muted-foreground">O sistema recalcula as taxas automaticamente conforme a bandeira do cartão (Visa, Amex, Elo etc.), protegendo o seu valor líquido. Use quando você colocar o valor <strong>original sem taxas</strong> no link.</p>
            </div>
            <div className="p-3 rounded-lg border" style={{ background: "rgba(240,165,0,0.06)", borderColor: "rgba(240,165,0,0.30)" }}>
              <p className="text-sm font-semibold text-foreground mb-1">Taxas ao Portador: <span style={{ color: "#b07800" }}>NÃO</span></p>
              <p className="text-xs text-muted-foreground">Use quando você já incluiu as taxas no valor total informado no link (calculado pelo simulador).</p>
            </div>
          </div>
          <AttentionBox>
            <strong>Recomendação:</strong> Coloque o valor original (sem taxas) no link e habilite <strong>Taxas ao Portador: SIM</strong>. Isso evita cobrança dupla e garante que o cliente pague exatamente o valor correto conforme a bandeira do cartão.
          </AttentionBox>
        </StepCard>

        <StepCard number={5} title="Configure as formas de pagamento e crie o link">
          <p>Em <strong>Formas de Pagamento</strong>, escolha <strong>Cartão de Crédito</strong> e defina o <strong>Tipo de Parcela</strong>:</p>
          <ul className="mt-2 space-y-1 list-disc list-inside text-xs text-muted-foreground">
            <li><strong>Parcela Aberta:</strong> O cliente escolhe o prazo no pagamento.</li>
            <li><strong>Parcela Fechada:</strong> Você define o prazo (o cliente não pode alterar).</li>
          </ul>
          <p className="mt-2 text-sm text-muted-foreground">Clique em <strong>"Criar Link de Pagamento"</strong>, copie a URL e envie ao cliente.</p>
        </StepCard>

        <StepCard number={6} title="Acompanhe o pagamento e finalize na Plataforma Solar">
          <p>Acesse <strong>Financeiro &gt; Link de Pagamento</strong> para monitorar o status. Quando o cliente pagar, o status mudará de <strong>"Pendente"</strong> para <strong>"Ativo"</strong>.</p>
          <p className="mt-2 text-sm text-muted-foreground">Em seguida, acesse a Plataforma Solar, abra o projeto, confirme que o valor dos serviços está <strong>zerado</strong>, salve, sinalize a visita técnica e escolha <strong>"Maquininha Intelbras"</strong> como forma de pagamento.</p>
        </StepCard>

        <StepCard number={7} title="Faça upload do comprovante na Plataforma Solar">
          <p>Tire um print dos links pagos na Plataforma Cappta e faça o upload na Plataforma Solar. Pronto — agora é só acompanhar o envio dos produtos e instalar!</p>
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

      {/* Seção 3D Secure */}
      <div className="mt-12 pt-8 border-t border-border">
        <div className="mb-4">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
            style={{ background: "#e6f4ec", color: "#00A335" }}
          >
            Segurança
          </span>
          <h3 className="text-xl font-bold text-foreground mb-1">3D Secure (3DS)</h3>
          <p className="text-sm text-muted-foreground">Informações completas sobre autenticação 3DS por banco:</p>
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "2800px",
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
              Como usar
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Passo a passo descomplicado
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Aprenda a usar o Tá na Conta com guias didáticos, pontos de atenção destacados e vídeos explicativos.
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
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Como usar</p>
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
