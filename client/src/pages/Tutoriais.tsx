import { useState, useEffect } from "react";
import { Link, useParams } from "wouter";
import TutorialDistribuidor from "@/components/TutorialDistribuidor";
import TutorialSolar from "@/components/TutorialSolar";
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
      <div className="text-sm text-foreground leading-relaxed" style={{fontSize: '15px'}}>{children}</div>
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
          Venda Solar com a Maquininha Tá na Conta
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Entenda o fluxo completo desde a criação do projeto na Plataforma Solar até o recebimento na sua conta digital — tudo em 1 dia útil, usando a maquininha Tá na Conta.
        </p>
      </div>

      {/* Botão Tutorial Drive */}
      <div className="mb-8">
        <a
          href="/Atualizado%20-%20Tutorial%20-%20Plataforma%20Solar%20Intelbras%20(2).pdf"
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
          <p>O parceiro digita na maquininha o valor do produto e o valor do serviço. A maquininha somará o valor total do projeto a ser pago pelo cliente.</p>
        </StepCard>

        <StepCard number={6} title="Escolha a forma de pagamento e confirme o orçamento">
          <p>Escolha a forma de pagamento e a bandeira do cartão. Na tela de "Confirmação do Orçamento", preencha "Nome do Cliente" e "Número do Projeto". Confira os valores de Produtos, Serviços e Total. Toque em "Prosseguir".</p>
        </StepCard>

        <StepCard number={7} title="Defina o parcelamento e conclua a venda">
          <p>Selecione a quantidade de parcelas desejada pelo cliente. Confira o resumo com o valor de cada parcela e o valor total da venda, incluindo as taxas. Toque em "Pagar". Em seguida, será exibida a tela para concluir a venda.</p>
        </StepCard>

        <StepCard number={8} title="Parceiro faz upload do comprovante na Plataforma Solar">
          <p>Após o pagamento, o parceiro volta à Plataforma Solar Intelbras, abre o projeto correspondente e realiza o <strong>upload do comprovante de pagamento</strong> (a via impressa da maquininha).</p>
          <AttentionBox>
            <strong>Ponto de Atenção:</strong> Imprima <strong>2 vias</strong> do comprovante — uma para o cliente e uma para você. Sem o comprovante, o processo de liberação dos equipamentos pode ser atrasado.
          </AttentionBox>
        </StepCard>

        <StepCard number={9} title="Tá na Conta realiza o split dos produtos para Intelbras">
          <p>A maquininha identifica o pagamento e realiza o <strong>split automático</strong>: a parte referente aos equipamentos é repassada à Intelbras e a parte dos serviços fica disponível para o parceiro na Conta Digital.</p>
        </StepCard>

        <StepCard number={10} title="Parceiro recebe sua parte na Conta Digital no dia seguinte">
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

        <StepCard number={11} title="Intelbras envia os equipamentos e emite NF dos produtos">
          <p>Após a confirmação do split, a Intelbras separa, envia os equipamentos ao endereço do projeto e emite a nota fiscal dos produtos.</p>
        </StepCard>

        <StepCard number={12} title="Parceiro instala os equipamentos">
          <p>Com os equipamentos em mãos, o parceiro executa a instalação e os serviços contratados.</p>
        </StepCard>

        <StepCard number={13} title="Parceiro emite NF do serviço">
          <p>Após a instalação, o parceiro emite a nota fiscal referente aos serviços prestados ao cliente.</p>
        </StepCard>
      </div>
    </div>
  );
}

// ─── TUTORIAL: MAQUININHA ───
function TutorialMaquininha() {
  const [modalPasso, setModalPasso] = useState<number | null>(null);
  const [ativoOV, setAtivoOV] = useState(0);

  const telasOV = [
    // Tela 1 — Menu principal com "Outras Vendas" destacado
    () => (
      <div className="dist-screen"><div className="ds-h">tá na conta ✓</div><div className="ds-b"><p className="text-[8px] font-semibold text-center mb-2" style={{color:"#333"}}>Escolha uma opção</p><div className="ds-mi"><b>Energia Solar</b><span>Simular, Vender e Orçamentos</span></div><div className="ds-mi"><b>Distribuição</b><span>Vendas com Split automatizado</span></div><div className="ds-mi ds-mi-active"><b>Outras Vendas</b><span>Vendas simples, sem integrações</span></div><div className="ds-mi"><b>Gerenciar</b><span>Consultar, Cancelar, Reimprimir e Reconfigurar</span></div><p className="text-[7px] text-gray-400 text-center mt-2">Uma parceria Intelbras + Cappta<br/>Versão Pax 2.0.3</p></div></div>
    ),
    // Tela 2 — Venda Geral: Valor (R$)
    () => (
      <div className="dist-screen dist-screen-light"><div className="ds-h2">← Venda Geral</div><p className="text-[7px] text-gray-400 text-center mb-2">Fora do Programa de Parceiros Solar</p><div className="ds-b"><div className="text-[9px] font-semibold mb-1">Valor (R$)</div><div className="ds-fi text-[10px]">0,00</div><div className="flex gap-2 mt-3"><div className="ds-btn-outline flex-1 text-[9px]">Cancelar</div><div className="ds-btn flex-1 text-[9px]">Continuar</div></div></div></div>
    ),
    // Tela 3 — Digite o valor (teclado numérico)
    () => (
      <div className="dist-screen dist-screen-light"><div className="ds-h2">← Digite o valor</div><p className="text-[7px] text-gray-400 text-center mb-2">Use o teclado para inserir o valor</p><div className="ds-b"><div className="text-center py-3 border rounded mb-2"><span className="text-lg font-bold" style={{color:"#333"}}>62,70</span></div><div className="grid grid-cols-3 gap-1 text-center text-[10px] font-semibold">{[1,2,3,4,5,6,7,8,9,0].map(n=><div key={n} className="py-1.5 rounded bg-gray-50 border border-gray-200">{n}</div>)}<div className="py-1.5 rounded bg-gray-50 border border-gray-200">⌫</div></div><div className="flex gap-2 mt-3"><div className="ds-btn-outline flex-1 text-[9px]">Limpar</div><div className="ds-btn flex-1 text-[9px]">Confirmar</div></div></div></div>
    ),
    // Tela 4 — Confirme o valor
    () => (
      <div className="dist-screen dist-screen-light"><div className="ds-h2">← Venda Geral</div><p className="text-[7px] text-gray-400 text-center mb-2">Fora do Programa de Parceiros Solar</p><div className="ds-b"><div className="text-[9px] font-semibold mb-1">Valor (R$)</div><div className="ds-fi text-[10px]">62,70</div><div className="text-[9px] font-semibold mt-3 mb-1">Valor a processar</div><div className="text-[12px] font-bold" style={{color:"#333"}}>R$ 62,70</div><div className="flex gap-2 mt-3"><div className="ds-btn-outline flex-1 text-[9px]">Cancelar</div><div className="ds-btn flex-1 text-[9px]">Continuar</div></div></div></div>
    ),
    // Tela 5 — Forma de pagamento
    () => (
      <div className="dist-screen dist-screen-light"><div className="ds-h2">← Venda Geral</div><p className="text-[7px] text-gray-400 text-center mb-2">Fora do Programa de Parceiros Solar</p><div className="ds-b"><p className="text-[8px] font-semibold text-gray-500 mb-2">SELECIONE A OPÇÃO DE PAGAMENTO</p><div className="ds-mi"><b>Crédito</b><span>À vista ou parcelado</span></div><div className="ds-mi"><b>Débito</b><span>Pagamento à vista no débito</span></div><div className="ds-mi"><b>PIX</b><span>Pagamento via QR Code</span></div><div className="ds-btn-outline mt-3 text-[9px]">Cancelar</div></div></div>
    ),
    // Tela 6 — Escolha a condição (parcelamento)
    () => (
      <div className="dist-screen dist-screen-light"><div className="ds-h2">← Venda Geral</div><p className="text-[7px] text-gray-400 text-center mb-2">Fora do Programa de Parceiros Solar</p><div className="ds-b"><p className="text-[8px] font-semibold text-gray-500 mb-2">CRÉDITO — ESCOLHA A CONDIÇÃO</p><div className="space-y-1 text-[9px]"><div className="flex justify-between border-b border-gray-100 pb-1"><span>À vista</span><span>R$ 62,70</span><span className="text-green-600">●</span></div><div className="flex justify-between border-b border-gray-100 pb-1"><span>2x</span><span>R$ 32,21</span><span className="text-gray-300">○</span></div><div className="flex justify-between border-b border-gray-100 pb-1"><span>3x</span><span>R$ 21,74</span><span className="text-gray-300">○</span></div><div className="flex justify-between border-b border-gray-100 pb-1"><span>6x</span><span>R$ 11,62</span><span className="text-gray-300">○</span></div><div className="flex justify-between border-b border-gray-100 pb-1"><span>12x</span><span>R$ 6,06</span><span className="text-gray-300">○</span></div><div className="flex justify-between"><span>21x</span><span>R$ 3,28</span><span className="text-gray-300">○</span></div></div><div className="border-t border-gray-200 mt-2 pt-2"><div className="ds-mi"><b>Débito</b><span>Pagamento à vista no débito</span></div><div className="ds-mi"><b>PIX</b><span>Pagamento via QR Code</span></div></div></div></div>
    ),
    // Tela 7 — Finalize a cobrança
    () => (
      <div className="dist-screen"><div className="ds-h">tá na conta ✓</div><div className="ds-b flex flex-col items-center text-center py-4"><p className="text-lg font-bold mb-0.5" style={{color:"#333"}}>R$ 62,70</p><p className="text-[8px] text-gray-500 mb-3">Crédito</p><div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center mb-2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"><path d="M8.5 16.5a5 5 0 0 1 0-9"/><path d="M11.5 18.5a8 8 0 0 1 0-13"/><path d="M14.5 20.5a11 11 0 0 1 0-17"/></svg></div><p className="text-[9px] font-bold uppercase" style={{color:"#d32f2f"}}>APROXIME, INSIRA OU PASSE O CARTÃO</p><div className="ds-btn mt-3 text-[9px] px-4">Cancelar</div></div></div>
    ),
  ];

  const telasAmpOV = telasOV.map((Tela, i) => () => {
    const el = Tela();
    return <div className="dist-screen-amp">{el.props.children}</div>;
  });

  const titulosOV = [
    "Selecione Outras Vendas",
    "Informe o valor",
    "Digite e confirme",
    "Confira e continue",
    "Escolha a forma de pagamento",
    "Defina a condição",
    "Finalize a cobrança"
  ];

  const descsOV = [
    'Na tela inicial da maquininha, toque em "Outras Vendas" — vendas simples, sem integrações.',
    'A tela "Venda Geral — Fora do Programa de Parceiros Solar" será aberta. Toque no campo "Valor (R$)".',
    'Digite o valor total da cobrança e toque em "Confirmar". Se houver taxas, utilize o total previamente calculado no simulador.',
    'Confira o valor informado e o valor a processar. Se estiver correto, toque em "Continuar".',
    "Selecione como o cliente deseja pagar: Crédito, Débito ou PIX.",
    "No Crédito, escolha à vista ou parcelado em até 21x. No Débito, selecione pagamento à vista. No PIX, siga o pagamento via QR Code.",
    "Para Crédito ou Débito, peça ao cliente para aproximar, inserir ou passar o cartão. Para PIX, siga as instruções do QR Code."
  ];

  function ScreenModalOV({ passo, onClose }: { passo: number; onClose: () => void }) {
    const Tela = telasAmpOV[passo];
    useEffect(() => {
      const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
      window.addEventListener("keydown", handler);
      return () => window.removeEventListener("keydown", handler);
    }, [onClose]);
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.7)" }} onClick={onClose}>
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6" onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-lg transition-colors">✕</button>
          <p className="text-xs font-semibold text-gray-500 mb-3">Passo {passo + 1} — {titulosOV[passo]}</p>
          <div className="dist-modal-screen"><Tela /></div>
        </div>
      </div>
    );
  }

  return (
    <div className="dist-passo-a-passo" style={{ background: "linear-gradient(180deg, #f7fbf8 0%, #eef7f0 100%)", borderRadius: "16px", padding: "24px", margin: "-8px" }}>
      {/* Cabeçalho */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-1">Passo a passo de Outras Vendas na maquininha</h2>
          <p className="text-muted-foreground text-sm">Venda rápida, simples e sem integrações</p>
        </div>
      </div>

      {/* Bloco — Antes de começar */}
      <div className="rounded-xl border-2 p-5 mb-8 flex gap-4 items-start" style={{ borderColor: "#12a34a", background: "#f5faf7" }}>
        <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#e8f5e9" }}>
          <CheckCircle2 className="w-6 h-6" style={{ color: "#12a34a" }} />
        </div>
        <div>
          <h3 className="font-bold text-sm text-foreground mb-2" style={{fontSize: '16px'}}>Antes de começar: confira o valor que será cobrado</h3>
          <p className="text-xs text-muted-foreground leading-relaxed mb-2" style={{fontSize: '14px'}}>
            Se precisar considerar as taxas da transação no valor pago pelo cliente, faça a simulação antes de iniciar a venda. Utilize o Simulador de Pagamento da maquininha ou do Portal Tá na Conta para consultar condições, taxas e valores conforme a forma de pagamento e o parcelamento desejado. Depois, insira em Outras Vendas o valor total que deverá ser efetivamente cobrado do cliente.
          </p>
          <div className="flex items-start gap-2 mt-2 p-2 rounded-lg" style={{ background: "rgba(0,163,53,0.06)" }}>
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#d97706" }} />
            <p className="text-xs text-muted-foreground leading-relaxed" style={{fontSize: '14px'}}>
              <strong>Importante:</strong> no fluxo de Outras Vendas, o valor informado no início da operação será utilizado como valor da cobrança. Por isso, faça previamente o cálculo adequado caso queira considerar as taxas no valor final.
            </p>
          </div>
          <p className="text-xs mt-3">
            <strong style={{fontSize: '14px'}}>Acesse para simular taxas:</strong>{" "}
            <Link href="/simular-taxas" style={{fontSize: '14px'}}><span className="underline font-semibold cursor-pointer" style={{ color: "#12a34a", fontSize: '14px' }}>Simulador de Taxas</span></Link>
          </p>
        </div>
      </div>

      {/* Box de recebimento D+1 */}
      <div className="rounded-xl p-4 mb-8 flex items-start gap-3" style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,163,53,0.2)" }}>
        <Info className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#00A335" }} />
        <p className="text-sm text-muted-foreground leading-relaxed">
          Recebimento em <strong>1 dia útil</strong> para todas as vendas — débito, crédito à vista, parcelado e Pix. Consulte as taxas no <Link href="/simular-taxas"><span className="text-primary underline cursor-pointer">Simulador de Taxas</span></Link> antes de apresentar o orçamento.
        </p>
      </div>

      {/* Interactive Vertical Stepper — etapas e preview sincronizado */}
      <div className="distribuidor-stepper outras-vendas-stepper max-w-6xl mx-auto mb-8" aria-label="Passo a passo interativo de Outras Vendas">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="distribuidor-stepper-steps lg:w-[45%] flex-shrink-0">
            <div className="relative">
              <div className="absolute left-[18px] top-4 bottom-4 w-[3px] rounded-full" style={{ background: "#e8e8e8" }} />
              <div
                className="absolute left-[18px] top-4 w-[3px] rounded-full transition-all duration-500"
                style={{ background: "#12a34a", height: `${(ativoOV / (titulosOV.length - 1)) * 90}%` }}
              />
              <div className="space-y-1">
                {titulosOV.map((titulo, i) => (
                  <button
                    key={titulo}
                    type="button"
                    onClick={() => setAtivoOV(i)}
                    aria-current={i === ativoOV ? "step" : undefined}
                    className={`relative flex items-start gap-3 w-full text-left px-2 py-3 rounded-xl transition-all ${i === ativoOV ? "bg-white shadow-md border border-green-200" : "hover:bg-white/60"}`}
                  >
                    <div
                      className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-all ${i <= ativoOV ? "text-white shadow-sm" : "text-gray-400 bg-white border-2 border-gray-200"}`}
                      style={i <= ativoOV ? { background: "#12a34a" } : {}}
                    >
                      {i + 1}
                    </div>
                    <div className="pt-1">
                      <p className={`outras-vendas-step-title font-semibold ${i === ativoOV ? "text-foreground" : "text-muted-foreground"}`}>{titulo}</p>
                      {i === ativoOV && <p className="outras-vendas-step-description text-muted-foreground">{descsOV[i]}</p>}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="distribuidor-stepper-preview lg:w-[55%] flex-1 flex items-start justify-center lg:sticky lg:top-24">
            <button type="button" className="distribuidor-preview-frame" onClick={() => setModalPasso(ativoOV)} aria-label={`Ampliar visual da etapa ${ativoOV + 1}`}>
              <div className="distribuidor-preview-heading"><span>Etapa {ativoOV + 1}</span><strong>{titulosOV[ativoOV]}</strong></div>
              <div className="distribuidor-preview-stage interactive-guide-preview">
                {telasAmpOV[ativoOV]()}
              </div>
              <p className="dist-zoom-hint">🔍 Clique para ampliar</p>
            </button>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6 pt-4 border-t border-gray-200">Fluxo ilustrativo — Tá na Conta | Intelbras + Cappta</p>
      </div>

      {/* Fluxo resumido */}
      {/* Recebimento D+1 final */}
      <div className="mt-4 p-3 rounded-lg border flex items-center gap-2" style={{ background: "rgba(0,208,132,0.08)", borderColor: "rgba(0,163,53,0.30)" }}>
        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "#00A335" }} />
        <p className="text-xs font-semibold" style={{ color: "#00A335" }}>
          No dia seguinte, seu dinheiro Tá na Conta! O valor estará disponível na sua Conta Digital no próximo dia útil — independente da modalidade.
        </p>
      </div>


      {/* Modal */}
      {modalPasso !== null && <ScreenModalOV passo={modalPasso} onClose={() => setModalPasso(null)} />}
    </div>
  );
}

// ─── TUTORIAL: LINK DE PAGAMENTO ───
function TutorialLinkPagamento() {
  const [ativoLink, setAtivoLink] = useState(0);
  const [modalLink, setModalLink] = useState<number | null>(null);

  return (
    <div className="dist-passo-a-passo" style={{ background: "linear-gradient(180deg, #f7fbf8 0%, #eef7f0 100%)", borderRadius: "16px", padding: "24px", margin: "-8px" }}>
      {/* Cabeçalho */}
      <div className="mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-1">Como criar um Link de Pagamento</h2>
        <p className="text-muted-foreground text-sm">Guia rápido para gerar, configurar e enviar o link ao cliente</p>
      </div>

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

      {/* Box vantagem */}
      <InfoBox>
        <strong>Vantagem exclusiva Tá na Conta:</strong> As taxas do Link de Pagamento são <strong>iguais</strong> às da maquininha. Em empresas concorrentes, as vendas por link costumam custar <strong>3% a 4% a mais</strong> do que as transações na maquininha. Esse é mais um benefício do Tá na Conta para você!
      </InfoBox>

      {(() => {
        const linkSteps = [
          { titulo: "Crie o link", descricao: "Após a aprovação, acesse o Portal de Gestão. No menu, clique em Gestão de Cobrança > Links de Pagamento > Cadastrar novo Link." },
          { titulo: "Preencha os campos obrigatórios", descricao: "Preencha Estabelecimento/Documento, Nome do Produto, Valor da venda e Data de Expiração. Inclua a Descrição do Produto e os dados do Pagador: nome, e-mail e CPF/CNPJ." },
          { titulo: "Escolha o tipo de cobrança", descricao: <>Selecione o tipo de cobrança: pagamento <strong>único</strong> ou <strong>recorrente</strong>. Use o pagamento único para uma cobrança pontual e o recorrente quando houver cobranças periódicas.</> },
          { titulo: "Configure Taxas ao Portador", descricao: <>Essa opção define quem paga as taxas do parcelamento. <strong>Não</strong>: use quando as taxas já estiverem incluídas no valor total. <strong>Sim</strong>: use ao inserir o valor original sem taxas; o sistema recalcula conforme a bandeira. Recomendação: valor original + <strong>Taxas ao Portador: SIM</strong>, evitando cobrança dupla e protegendo o valor líquido.</> },
          { titulo: "Defina o parcelamento", descricao: "Escolha Parcela Aberta, em que o cliente decide o número de parcelas, ou Parcela Fechada, em que você define a quantidade e o cliente não pode alterar." },
          { titulo: "Crie o link e copie a URL", descricao: "Confira Nome do Produto, Valor e Vencimento. Clique em Criar link de Pagamento; depois, copie a URL completa ou a URL encurtada exibida na tela Link de pagamento criado." },
          { titulo: "Envie para o cliente", descricao: "Envie o link para o cliente pelo canal de sua preferência: WhatsApp, E-mail, SMS/Chat ou Outro canal. Antes de enviar, revise os dados e confirme que a URL está correta." },
        ];
        const linkPreview = (step: number, compact = false) => {
          const shell = (children: React.ReactNode) => <div className={`link-preview-screen ${step === 0 ? "is-link-navigation" : ""} ${compact ? "is-compact" : ""}`}><div className="link-preview-header">tá na conta ✓</div>{children}</div>;
          if (step === 0) return shell(<div className="link-preview-body"><div className="link-preview-sidebar"><b>Gestão de Cobrança</b><span>Visão Geral</span><span className="is-active">Links de Pagamento</span></div><div className="link-preview-content"><b>Links de Pagamento</b><div className="link-preview-panel">Acesse os Links de Pagamento para cadastrar uma nova cobrança</div><div className="link-preview-button">Cadastrar Novo Link</div></div></div>);
          if (step === 1) return shell(<div className="link-preview-body"><div className="link-preview-content is-wide"><b>Cadastrar novo Link</b><div className="link-preview-fields"><span>Estabelecimento / Documento</span><span>Nome do Produto</span><span>Valor da venda</span><span>Data de Expiração</span><span className="wide">Descrição do Produto</span><span className="wide">Nome, e-mail e CPF/CNPJ do Pagador</span></div><div className="link-preview-button">Prosseguir</div></div></div>);
          if (step === 2) return shell(<div className="link-preview-body"><div className="link-preview-content is-narrow"><b>Tipo de cobrança</b><div className="link-preview-option is-selected">Pagamento Único <span>✓</span></div><div className="link-preview-option">Recorrente</div><small>Escolha o tipo adequado para esta cobrança.</small></div></div>);
          if (step === 3) return shell(<div className="link-preview-body"><div className="link-preview-content is-narrow"><b>Taxas ao Portador ⓘ</b><div className="link-preview-toggle"><span>Não</span><i></i><strong>Sim</strong></div><div className="link-preview-note">Use Sim quando inserir o valor original sem taxas. O sistema recalcula conforme a bandeira do cartão.</div><div className="link-preview-recommendation">Recomendação: valor original + Taxas ao Portador: SIM.</div></div></div>);
          if (step === 4) return shell(<div className="link-preview-body"><div className="link-preview-content is-narrow"><b>Defina o parcelamento</b><div className="link-preview-option is-selected">Parcela Aberta <span>✓</span></div><div className="link-preview-option">Parcela Fechada</div><small>O cliente escolhe ou você define a quantidade de parcelas.</small></div></div>);
          if (step === 5) return shell(<div className="link-preview-body"><div className="link-preview-content is-narrow"><b>Link de pagamento criado!</b><div className="link-preview-url">https://pagamentos.cappta.com.br/easylink/cliente</div><div className="link-preview-button">Copiar URL</div><small>Confira os dados antes de enviar ao cliente.</small></div></div>);
          return shell(<div className="link-preview-body"><div className="link-preview-content"><b>Envie para o cliente</b><div className="link-preview-url">https://pagamentos.cappta.com.br/easylink/cliente</div><div className="link-preview-channels"><span>WhatsApp</span><span>E-mail</span><span>SMS/Chat</span><span>Outro canal</span></div></div></div>);
        };
        return <div className="distribuidor-stepper outras-vendas-stepper link-pagamento-stepper max-w-6xl mx-auto mt-8 mb-8" aria-label="Passo a passo interativo de Venda com Link">
          <div className="distribuidor-stepper-steps lg:w-[45%] flex-shrink-0"><div className="relative"><div className="absolute left-[18px] top-4 bottom-4 w-[3px] rounded-full" style={{ background: "#e8e8e8" }} /><div className="absolute left-[18px] top-4 w-[3px] rounded-full transition-all duration-500" style={{ background: "#12a34a", height: `${(ativoLink / (linkSteps.length - 1)) * 90}%` }} /><div className="space-y-1">{linkSteps.map((item, i) => <button key={item.titulo} type="button" onClick={() => setAtivoLink(i)} aria-current={i === ativoLink ? "step" : undefined} className={`relative flex items-start gap-3 w-full text-left px-2 py-3 rounded-xl transition-all ${i === ativoLink ? "bg-white shadow-md border border-green-200" : "hover:bg-white/60"}`}><div className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-all ${i <= ativoLink ? "text-white shadow-sm" : "text-gray-400 bg-white border-2 border-gray-200"}`} style={i <= ativoLink ? { background: "#12a34a" } : {}}>{i + 1}</div><div className="pt-1"><p className={`outras-vendas-step-title font-semibold ${i === ativoLink ? "text-foreground" : "text-muted-foreground"}`}>{item.titulo}</p>{i === ativoLink && <p className="outras-vendas-step-description text-muted-foreground">{item.descricao}</p>}</div></button>)}</div></div></div>
          <div className="distribuidor-stepper-preview lg:w-[55%] flex-1 flex items-start justify-center lg:sticky lg:top-24"><button type="button" className="distribuidor-preview-frame" onClick={() => setModalLink(ativoLink)} aria-label={`Ampliar visual da etapa ${ativoLink + 1}`}><div className="distribuidor-preview-heading"><span>Etapa {ativoLink + 1}</span><strong>{linkSteps[ativoLink].titulo}</strong></div><div className={`distribuidor-preview-stage interactive-guide-preview ${ativoLink === 0 ? "is-link-navigation-preview" : ""}`}>{linkPreview(ativoLink)}</div><p className="dist-zoom-hint">🔍 Clique para ampliar</p></button></div>
          <p className="text-center text-xs text-muted-foreground mt-6 pt-4 border-t border-gray-200 lg:col-span-2">Fluxo ilustrativo — Tá na Conta | Intelbras + Cappta</p>
          {modalLink !== null && <div className="dist-modal-overlay" role="dialog" aria-modal="true" aria-label={`Visual ampliado da etapa ${modalLink + 1}`} onClick={() => setModalLink(null)}><div className="dist-modal-content link-modal-content" onClick={(e) => e.stopPropagation()}><button type="button" className="dist-modal-close" onClick={() => setModalLink(null)} aria-label="Fechar">×</button>{linkPreview(modalLink, true)}</div></div>}
        </div>;
      })()}

      <div className="rounded-xl p-4 mb-6 flex items-start gap-3" style={{ background: "rgba(240,165,0,0.08)", border: "1px solid rgba(240,165,0,0.35)" }}>
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#b07800" }} />
        <div className="text-sm leading-relaxed" style={{ color: "#7a5200" }}><strong>Dica:</strong> revise os dados antes de enviar o link ao cliente.</div>
      </div>

      <div className="link-pagamento-legacy-flow">
      {/* ═══ PASSO 1 — Crie o link ═══ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 mb-4">
        <div className="dist-card">
          <div className="dist-num">1</div>
          <h4 className="dist-title">Crie o link</h4>
          <p className="dist-desc">Vá em Gestão de Cobrança &gt; Links de Pagamento e clique em Cadastrar novo link.</p>
          {/* Tela do portal */}
          <div className="mt-4 rounded-lg border overflow-hidden" style={{background:"#fff", borderColor:"#e5e7eb"}}>
            <div className="p-2 flex items-center gap-2" style={{background:"#12a34a"}}>
              <span className="text-[8px] text-white font-bold">tá na conta ✓</span>
            </div>
            <div className="p-2 text-[7px]">
              <div className="flex gap-2">
                <div className="w-24 space-y-1">
                  <div className="p-1 rounded text-[6px] text-gray-600">Visão Geral</div>
                  <div className="p-1 rounded text-[6px] text-gray-600">Gestão do Meu Negócio</div>
                  <div className="p-1 rounded text-[6px] text-gray-600">Cadastros</div>
                  <div className="p-1 rounded text-[6px] text-gray-600">Financeiro</div>
                  <div className="p-1 rounded text-[6px] text-gray-600">Relatórios</div>
                  <div className="p-1 rounded text-[6px] font-bold" style={{color:"#12a34a", background:"rgba(18,163,74,0.08)"}}>Gestão de Cobrança ▸</div>
                </div>
                <div className="flex-1 border-l pl-2">
                  <p className="text-[6px] text-gray-500">Saldo Disponível</p>
                  <p className="text-[7px] font-bold">R$ 0,00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 — Preencha os campos obrigatórios */}
        <div className="dist-card">
          <div className="dist-num">2</div>
          <h4 className="dist-title">Preencha os campos obrigatórios</h4>
          <ul className="space-y-2 text-xs text-muted-foreground mt-2">
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{color:"#12a34a"}} /><span><strong>Nome do Produto:</strong> cole o número do projeto da Plataforma Solar</span></li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{color:"#12a34a"}} /><span><strong>Descrição do Produto:</strong> escreva um texto claro para o cliente (ex: desconto concedido, prazo de instalação, etc.)</span></li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{color:"#12a34a"}} /><span><strong>Valor da venda e data de expiração</strong></span></li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{color:"#12a34a"}} /><span><strong>Pagador:</strong> nome, e-mail e CPF/CNPJ</span></li>
          </ul>
          {/* Tela formulário */}
          <div className="mt-4 rounded-lg border overflow-hidden" style={{background:"#fff", borderColor:"#e5e7eb"}}>
            <div className="p-3 text-[7px] space-y-2">
              <div className="grid grid-cols-4 gap-1">
                <div><p className="text-[6px] text-gray-500">* Estabelecimento/Documento</p><div className="border rounded p-1 text-[6px]">DANDARA LIMA SANTANA DE JE</div></div>
                <div><p className="text-[6px] text-gray-500">Nome do Produto</p><div className="border rounded p-1 text-[6px]">xxxxxx</div></div>
                <div><p className="text-[6px] text-gray-500">* Valor da venda</p><div className="border rounded p-1 text-[6px]">R$ 1.000,00</div></div>
                <div><p className="text-[6px] text-gray-500">Data de Expiração</p><div className="border rounded p-1 text-[6px]">24/08/2026</div></div>
              </div>
              <div><p className="text-[6px] text-gray-500">Descrição do Produto ⓘ</p><div className="border rounded p-1 text-[6px] h-6">Insira uma descrição para o produto</div></div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ PASSO 3 — Escolha o tipo ═══ */}
      <div className="dist-card mb-4">
        <div className="dist-num">3</div>
        <h4 className="dist-title">Escolha o tipo</h4>
        <p className="dist-desc">Selecione o tipo de cobrança: <strong>Único</strong> ou <strong>Recorrente</strong>.</p>
        {/* Tela dropdown */}
        <div className="mt-3 rounded-lg border overflow-hidden max-w-xs" style={{background:"#fff", borderColor:"#e5e7eb"}}>
          <div className="p-2 text-[8px]">
            <p className="text-[7px] text-gray-500 mb-1">* Tipo</p>
            <div className="border rounded p-1.5 text-[8px] flex justify-between items-center"><span>Pagamento Único</span><span>▾</span></div>
            <div className="mt-1 border rounded text-[7px]">
              <div className="p-1.5 flex justify-between items-center" style={{background:"rgba(18,163,74,0.05)"}}><span className="font-semibold">Pagamento Único</span><span style={{color:"#12a34a"}}>✓</span></div>
              <div className="p-1.5 border-t text-gray-500">Recorrente</div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ PASSO 4 — Configure Taxas ao Portador ═══ */}
      <div className="dist-card mb-4">
        <div className="dist-num">4</div>
        <h4 className="dist-title">Configure "Taxas ao Portador"</h4>
        <p className="dist-desc">Essa opção define quem paga as taxas do parcelamento.</p>
        {/* Toggle visual */}
        <div className="mt-3 rounded-lg border p-3" style={{background:"#fff", borderColor:"#e5e7eb"}}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[8px] font-semibold">Taxas ao Portador ⓘ</span>
            <div className="flex gap-1 ml-auto">
              <span className="ds-flag text-[7px]" style={{color:"#1a237e"}}>VISA</span>
              <span className="ds-flag text-[7px]" style={{color:"#eb001b"}}>MC</span>
              <span className="ds-flag text-[7px]" style={{color:"#000"}}>elo</span>
              <span className="ds-flag text-[7px]" style={{color:"#006fcf"}}>Amex</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[8px]">
            <span>Não</span>
            <div className="w-8 h-4 rounded-full relative" style={{background:"#12a34a"}}><div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div></div>
            <span className="font-bold">Sim</span>
          </div>
          <div className="mt-2 space-y-1 text-[7px] text-muted-foreground">
            <p><span className="text-red-500">✕</span> <strong>Não:</strong> use quando as taxas já estiverem incluídas no valor total informado no link.</p>
            <p><span style={{color:"#12a34a"}}>✓</span> <strong>Sim:</strong> use quando você inserir o valor original sem taxas. O sistema recalcula automaticamente conforme a bandeira do cartão, protegendo o seu valor líquido.</p>
          </div>
        </div>
        {/* Recomendação integrada */}
        <div className="mt-3 rounded-lg p-3 flex items-start gap-3" style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,163,53,0.25)" }}>
          <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{background:"#12a34a"}}>
            <span className="text-white text-[9px] font-bold">★</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed"><strong style={{color:"#12a34a"}}>Recomendação:</strong> Coloque o <strong>valor original (sem taxas)</strong> no link e habilite <strong>Taxas ao Portador: SIM</strong>. Isso evita cobrança dupla e garante que o cliente pague o valor correto conforme a bandeira do cartão.</p>
        </div>
      </div>

      {/* ═══ PASSO 5 — Defina o parcelamento ═══ */}
      <div className="dist-card mb-4">
        <div className="dist-num">5</div>
        <h4 className="dist-title">Defina o parcelamento</h4>
        <p className="dist-desc mb-3">Escolha como será o parcelamento:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Parcela Aberta */}
          <div className="rounded-lg border p-3" style={{background:"#fff", borderColor:"#e5e7eb"}}>
            <p className="text-xs font-bold text-center mb-2">PARCELA ABERTA</p>
            <p className="text-[9px] text-center text-muted-foreground mb-2">O cliente escolhe o número de parcelas.</p>
            <div className="border rounded p-2 text-[8px]">
              <p className="text-[7px] text-gray-500 mb-0.5">Tipo de Parcela ⓘ</p>
              <div className="border rounded p-1 flex justify-between"><span>Parcela Aberta</span><span>▾</span></div>
            </div>
          </div>
          {/* Parcela Fechada */}
          <div className="rounded-lg border p-3" style={{background:"#fff", borderColor:"#e5e7eb"}}>
            <p className="text-xs font-bold text-center mb-2">PARCELA FECHADA</p>
            <p className="text-[9px] text-center text-muted-foreground mb-2">Você define o número de parcelas e o cliente não pode alterar.</p>
            <div className="border rounded p-2 text-[8px]">
              <div className="grid grid-cols-2 gap-1">
                <div><p className="text-[7px] text-gray-500 mb-0.5">Tipo de Parcela ⓘ</p><div className="border rounded p-1 text-[7px]">Parcela Fechada</div></div>
                <div><p className="text-[7px] text-gray-500 mb-0.5">Selecione a Parcela</p><div className="border rounded p-1 text-[7px]">21x de R$ 47,62 (R$ 1.000,00)</div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{background:"rgba(18,163,74,0.1)", color:"#12a34a"}}>ou</span>
        </div>
      </div>

      {/* ═══ PASSO 6 — Crie o link e copie a URL ═══ */}
      <div className="dist-card mb-4">
        <div className="dist-num">6</div>
        <h4 className="dist-title">Crie o link e copie a URL</h4>
        <div className="mt-2 space-y-1 text-xs text-muted-foreground">
          <p><span className="inline-flex w-5 h-5 rounded-full bg-red-100 items-center justify-center text-[9px] font-bold text-red-600 mr-1">1</span> Clique em <strong>Criar Link de Pagamento</strong>.</p>
          <p><span className="inline-flex w-5 h-5 rounded-full bg-red-100 items-center justify-center text-[9px] font-bold text-red-600 mr-1">2</span> Copie a URL completa ou a URL encurtada gerada pelo sistema.</p>
        </div>
        {/* Botão visual */}
        <div className="mt-3 rounded-lg border p-2" style={{background:"#fff", borderColor:"#e5e7eb"}}>
          <div className="flex items-center gap-2">
            <div className="ds-btn text-[8px] px-3">🔗 Criar Link de Pagamento</div>
            <div className="text-[7px] text-gray-400">Data de Expiração ⓘ &nbsp; 24/08/2026</div>
          </div>
        </div>
        {/* Link criado — integrado no mesmo card */}
        <div className="mt-4 rounded-lg border p-3" style={{background:"#fff", borderColor:"#12a34a"}}>
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-5 h-5" style={{color:"#12a34a"}} />
            <span className="text-xs font-bold" style={{color:"#12a34a"}}>Link de pagamento criado!</span>
          </div>
          <p className="text-[8px] text-muted-foreground mb-2">Clique no botão ou selecione a url abaixo para copiar o link de pagamento.</p>
          <div className="space-y-1.5 text-[7px]">
            <div><span className="text-gray-500">Nome do Produto:</span> xxxxxx &nbsp; <span className="text-gray-500">Valor:</span> R$ 1.000,00 &nbsp; <span className="text-gray-500">Vencimento:</span> 24/08/26</div>
            <div><span className="text-gray-500">URL Completa:</span><br/><span className="text-[7px] break-all" style={{color:"#12a34a"}}>https://pagamentos.cappta.com.br/easylink/dandara-lima-santana-de-jesus</span></div>
            <div><span className="text-gray-500">URL Encurtada:</span><br/><span className="text-[7px]" style={{color:"#12a34a"}}>quita.me/d3dJ2K</span></div>
          </div>
        </div>
      </div>

      {/* ═══ PASSO 7 — Envie para o cliente ═══ */}
      <div className="dist-card mb-6">
        <div className="dist-num">7</div>
        <h4 className="dist-title">Envie para o cliente</h4>
        <p className="dist-desc mb-3">Envie o link para o cliente pelo canal de sua preferência.</p>
        <div className="flex flex-wrap items-center gap-3 justify-center">
          <div className="rounded-lg border p-2 text-[8px] max-w-xs break-all" style={{background:"#fff", borderColor:"#e5e7eb"}}>
            https://pagamentos.cappta.com.br/easylink/dandara-lima-santana-de-jesus
          </div>
          <span className="text-lg" style={{color:"#12a34a"}}>→</span>
          <div className="flex gap-3">
            <div className="text-center"><div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background:"#e8f5e9"}}><svg className="w-5 h-5" style={{color:"#25d366"}} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg></div><p className="text-[8px] mt-1">WhatsApp</p></div>
            <div className="text-center"><div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background:"#e8f5e9"}}><svg className="w-5 h-5" style={{color:"#12a34a"}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div><p className="text-[8px] mt-1">E-mail</p></div>
            <div className="text-center"><div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background:"#e8f5e9"}}><svg className="w-5 h-5" style={{color:"#12a34a"}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg></div><p className="text-[8px] mt-1">SMS/Chat</p></div>
            <div className="text-center"><div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background:"#e8f5e9"}}><svg className="w-5 h-5" style={{color:"#12a34a"}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg></div><p className="text-[8px] mt-1">Outro canal</p></div>
          </div>
        </div>
      </div>

      {/* Dica final */}
      <div className="rounded-xl p-4 mb-6 flex items-start gap-3" style={{ background: "rgba(240,165,0,0.08)", border: "1px solid rgba(240,165,0,0.35)" }}>
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#b07800" }} />
        <div className="text-sm leading-relaxed" style={{ color: "#7a5200" }}>
          <strong>Dica:</strong> revise os dados antes de enviar o link ao cliente.
        </div>
      </div>

      {/* Rodapé */}
      <div className="text-center pt-4 border-t" style={{ borderColor: "rgba(0,163,53,0.15)" }}>
        <p className="text-xs text-muted-foreground">Fluxo ilustrativo — Tá na Conta | Intelbras + Cappta</p>
      </div>

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

// TutorialDistribuidor importado de @/components/TutorialDistribuidor

// ─── COMPONENTE PRINCIPAL ───
const tabs = [
  {
    id: "plataforma-solar",
    label: "Venda Solar",
    icon: <Monitor className="w-4 h-4" />,
    component: <TutorialSolar />,
  },
  {
    id: "distribuidor",
    label: "Venda integrada com o Distribuidor",
    icon: <CreditCard className="w-4 h-4" />,
    component: <TutorialDistribuidor />,
  },
  {
    id: "maquininha",
    label: "Outras Vendas (Maquininha)",
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
