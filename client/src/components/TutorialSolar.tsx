import { useState, useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle2, AlertTriangle, Info, ExternalLink, Monitor, Smartphone, Upload, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Telas ampliadas para modal ─── */
function TelaAmpS(props: { children: React.ReactNode }) {
  return <div className="dist-screen-amp">{props.children}</div>;
}

/* ─── Modal Lightbox ─── */
function ScreenModal({ passo, titulo, children, onClose }: { passo: number; titulo: string; children: React.ReactNode; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.7)" }} onClick={onClose}>
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-lg transition-colors">✕</button>
        <p className="text-xs font-semibold text-gray-500 mb-3">Passo {passo} — {titulo}</p>
        <div className="dist-modal-screen">{children}</div>
      </div>
    </div>
  );
}

/* ─── Wrapper clicável ─── */
function ScreenWrap({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <div className="dist-screen-wrap mt-3" onClick={onClick}>
      {children}
      <p className="dist-zoom-hint">🔍 Clique para ampliar</p>
    </div>
  );
}

/* ─── Fase Header ─── */
function FaseHeader({ numero, titulo, icon }: { numero: number; titulo: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6 mt-10 first:mt-0">
      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#12a34a" }}>
        {icon}
      </div>
      <h3 className="text-lg lg:text-xl font-bold text-foreground">
        Fase {numero}: {titulo}
      </h3>
    </div>
  );
}

type SolarStep = { numero: number; fase: 1 | 2 | 3; faseTitulo: string; titulo: string; descricao: string; preview: string };

const solarSteps: SolarStep[] = [
  { numero: 1, fase: 1, faseTitulo: "Preparação e Aprovação", titulo: "Cadastro", descricao: "Cadastre o projeto normalmente na Plataforma Solar Intelbras, inserindo todos os equipamentos necessários.", preview: "Resumo do Projeto" },
  { numero: 2, fase: 1, faseTitulo: "Preparação e Aprovação", titulo: "Orçamento", descricao: "Monte a proposta para o cliente. Inclua o valor dos seus serviços e, se houver parcelamento, use o Simulador de Taxas para calcular os acréscimos.", preview: "Orçamento do projeto" },
  { numero: 3, fase: 1, faseTitulo: "Preparação e Aprovação", titulo: "Aprovação", descricao: "Apresente a proposta. O cliente analisa e aprova formalmente o orçamento.", preview: "Projeto aprovado" },
  { numero: 4, fase: 1, faseTitulo: "Preparação e Aprovação", titulo: "Ajuste Crucial", descricao: "Antes de passar o cartão, acesse a Plataforma Solar, retire (zere) o valor dos serviços do projeto, deixando apenas os produtos, e clique em Salvar.", preview: "Ajuste de valores" },
  { numero: 5, fase: 2, faseTitulo: "O Pagamento", titulo: "Iniciar Venda", descricao: "Na tela inicial, toque em Energia Solar e depois em Vender Projeto Solar.", preview: "Escolha uma opção" },
  { numero: 6, fase: 2, faseTitulo: "O Pagamento", titulo: "Configurar o Split", descricao: "Digite o valor dos Produtos (R$) e o valor dos Serviços (R$). O app soma tudo automaticamente. Essa separação garante que você não pague imposto em duplicidade.", preview: "Informe os valores do projeto" },
  { numero: 7, fase: 2, faseTitulo: "O Pagamento", titulo: "Cartões e Bandeira", descricao: "Informe a Quantidade de Cartões (essencial caso o cliente queira dividir o valor em mais de um cartão) e selecione a Bandeira do cartão.", preview: "Selecione a forma de pagamento" },
  { numero: 8, fase: 2, faseTitulo: "O Pagamento", titulo: "Dados do Projeto", descricao: "Digite o Nome e o Número do Projeto para que a venda seja vinculada corretamente ao sistema.", preview: "Confirmação do Orçamento" },
  { numero: 9, fase: 2, faseTitulo: "O Pagamento", titulo: "Parcelamento e Cobrança", descricao: "Escolha o número de parcelas combinado com o cliente, clique em Pagar, confirme o aviso de segurança e peça para o cliente aproximar ou inserir o cartão.", preview: "Parcelamento" },
  { numero: 10, fase: 3, faseTitulo: "Pós-Venda, Envio e Recebimento", titulo: "Upload do Comprovante", descricao: "Volte para a Plataforma Solar Intelbras, abra o projeto e faça o upload da foto/imagem do comprovante impresso da maquininha. Sem isso, a liberação dos equipamentos pode atrasar.", preview: "Comprovante enviado" },
  { numero: 11, fase: 3, faseTitulo: "Pós-Venda, Envio e Recebimento", titulo: "O Split e Faturamento", descricao: "A Cappta processa o pagamento e divide o dinheiro: o valor dos produtos vai direto para a Intelbras e o valor do serviço vai para você. A Intelbras emite a Nota Fiscal dos produtos e envia os equipamentos para o endereço do projeto.", preview: "Split processado" },
  { numero: 12, fase: 3, faseTitulo: "Pós-Venda, Envio e Recebimento", titulo: "Instalação e Sua NF", descricao: "Com os equipamentos em mãos, faça a instalação na propriedade do cliente. Assim que terminar, emita a sua Nota Fiscal de prestação de serviços para ele.", preview: "Instalação concluída" },
  { numero: 13, fase: 3, faseTitulo: "Pós-Venda, Envio e Recebimento", titulo: "Dinheiro na Conta", descricao: "O valor do seu serviço cai na sua Conta Digital no próximo dia útil após o pagamento na maquininha. Tá na conta!", preview: "Pagamento recebido" },
];

const solarPreviewDetails: Record<number, { titulo: string; detalhe: string; acao: string }> = {
  1: { titulo: "Resumo do Projeto", detalhe: "Produtos, produção mensal e equipamentos cadastrados", acao: "Salvar projeto" },
  2: { titulo: "Monte o orçamento", detalhe: "Produtos + serviços + condições de pagamento", acao: "Gerar proposta" },
  3: { titulo: "Aprovação do cliente", detalhe: "Proposta pronta para análise e aprovação formal", acao: "Projeto aprovado" },
  4: { titulo: "Ajuste de valores", detalhe: "Serviços zerados antes da cobrança na maquininha", acao: "Salvar alteração" },
  10: { titulo: "Comprovante da venda", detalhe: "Anexe a foto do comprovante impresso ao projeto", acao: "Enviar comprovante" },
  11: { titulo: "Split processado", detalhe: "Produtos para a Intelbras e serviços para você", acao: "Ver faturamento" },
  12: { titulo: "Instalação concluída", detalhe: "Equipamentos instalados e Nota Fiscal emitida", acao: "Finalizar projeto" },
  13: { titulo: "Pagamento recebido", detalhe: "O serviço será creditado no próximo dia útil", acao: "Ver saldo" },
};

function TelaEtapa1Detalhada({ compact = false }: { compact?: boolean }) {
  const titleClass = compact ? "text-[7px]" : "text-[10px]";
  const rowClass = compact ? "space-y-0.5 text-[6px]" : "space-y-1 text-[9px]";
  const itemClass = compact ? "space-y-0.5 text-[5px]" : "space-y-1 text-[8px]";
  return <div className={compact ? "solar-device-screen" : "dist-screen-amp"}>
    <div className="ds-h2">≡ Intelbras &nbsp; Plataforma Solar Intelbras</div>
    <div className="ds-b">
      <p className={`${titleClass} font-bold mb-2`}>Resumo do Projeto</p>
      <div className={rowClass}>
        <div className="flex justify-between border-b border-gray-100 pb-1"><span>Produtos</span><span className="font-bold">7,92 kWp</span></div>
        <div className="flex justify-between border-b border-gray-100 pb-1"><span>Produção Mensal</span><span className="font-bold">950 kWh</span></div>
        <div className="flex justify-between border-b border-gray-100 pb-1"><span>Economia Mensal</span><span className="font-bold">R$ 620,00</span></div>
      </div>
      <p className={`${compact ? "text-[6px]" : "text-[9px]"} font-bold mt-3 mb-1`}>Equipamentos</p>
      <div className={itemClass}>
        <div className="flex justify-between border-b border-gray-100 pb-0.5"><span>Módulos Fotovoltaicos</span><span>26 un</span></div>
        <div className="flex justify-between border-b border-gray-100 pb-0.5"><span>Inversor</span><span>1 un</span></div>
        <div className="flex justify-between border-b border-gray-100 pb-0.5"><span>Estrutura de Fixação</span><span>1 un</span></div>
        <div className="flex justify-between"><span>Cabo Solar</span><span>120 m</span></div>
      </div>
      <div className={`ds-btn ${compact ? "mt-2 text-[6px]" : "mt-3 text-[9px]"}`}>Salvar projeto</div>
    </div>
  </div>;
}

function SolarPreview({ step }: { step: SolarStep }) {
  const detail = solarPreviewDetails[step.numero];
  if (step.numero === 1) return <div className="solar-preview-unit"><TelaEtapa1Detalhada compact /><p className="dist-zoom-hint">Clique para ampliar</p></div>;
  return <div className="solar-preview-unit">
    <div className="solar-device-screen">
      <div className={step.fase === 1 ? "ds-h2" : "ds-h"}>{step.fase === 1 ? "≡ Plataforma Solar Intelbras" : "tá na conta ✓"}</div>
      <div className="ds-b solar-preview-body">
        <p className="solar-preview-kicker">{step.preview}</p>
        {step.numero === 5 && <><div className="ds-mi ds-mi-active"><b>Energia Solar</b><span>Simular, Vender e Orçamentos</span></div><div className="ds-mi"><b>Distribuição</b><span>Vendas com Split automatizado</span></div></>}
        {step.numero === 6 && <><label>Produtos (R$)</label><div className="ds-fi">1.000,00</div><label>Serviços (R$)</label><div className="ds-fi">500,00</div><div className="solar-total"><span>Valor Total</span><b>R$ 1.500,00</b></div><div className="ds-btn">Pagar</div></>}
        {step.numero === 7 && <><div className="ds-mi"><b>Pagamento com Pix</b><span>Use a plataforma Solar</span></div><p className="solar-preview-label">Escolha a bandeira</p><div className="flex gap-1 flex-wrap"><span className="ds-flag">VISA</span><span className="ds-flag">MC</span><span className="ds-flag">elo</span><span className="ds-flag">Amex</span></div></>}
        {step.numero === 8 && <><label>Nome do Cliente *</label><div className="ds-fi">teste</div><label>Número do Projeto *</label><div className="ds-fi">123</div><div className="solar-total"><span>Total</span><b>R$ 1.500,00</b></div><div className="ds-btn">Prosseguir</div></>}
        {step.numero === 9 && <><div className="grid grid-cols-2 gap-1 solar-installments"><div className="selected">1x<br/>R$ 1.554,24</div><div>2x<br/>R$ 791,06</div><div>3x<br/>R$ 531,86</div><div>4x<br/>R$ 401,80</div></div><div className="solar-total"><span>Resumo</span><b>1x de R$ 1.554,24</b></div><div className="ds-btn">Pagar</div></>}
        {step.fase !== 2 && detail && <>
          <div className="solar-status"><CheckCircle2 className="w-5 h-5" />{step.fase === 1 ? "Etapa registrada" : "Processo concluído"}</div>
          {step.numero === 2 && <><div className="solar-preview-detail-title">Monte o orçamento</div><div className="solar-preview-rows"><div><span>Produtos</span><b>R$ 1.000,00</b></div><div><span>Serviços</span><b>R$ 500,00</b></div><div><span>Parcelamento</span><b>Consulte as taxas</b></div></div></>}
          {step.numero === 3 && <><div className="solar-preview-detail-title">Aprovação do cliente</div><div className="solar-approval">✓ Orçamento aprovado formalmente</div><div className="ds-fi">Cliente aprovou a proposta do projeto.</div></>}
          {step.numero === 4 && <><div className="solar-preview-detail-title">Ajuste de valores</div><div className="solar-preview-rows"><div><span>Produtos</span><b>R$ 1.000,00</b></div><div><span>Serviços</span><b>R$ 0,00</b></div><div><span>Status</span><b>Pronto para cobrar</b></div></div></>}
          {step.numero === 10 && <><div className="solar-preview-detail-title">Comprovante da venda</div><div className="solar-upload"><Upload className="w-8 h-8" /><b>Foto do comprovante</b><span>Arraste ou selecione o arquivo</span></div></>}
          {step.numero === 11 && <><div className="solar-preview-detail-title">Split processado</div><div className="solar-split-grid"><div><b>Intelbras</b><span>Produtos<br/>R$ 1.000,00</span></div><div><b>Você</b><span>Serviços<br/>R$ 500,00</span></div></div></>}
          {step.numero === 12 && <><div className="solar-preview-detail-title">Instalação concluída</div><div className="solar-checklist"><span>✓ Equipamentos instalados</span><span>✓ Nota Fiscal emitida</span></div></>}
          {step.numero === 13 && <><div className="solar-preview-detail-title">Pagamento recebido</div><div className="solar-received"><strong>R$ 500,00</strong><span>Disponível no próximo dia útil</span></div></>}
          <div className="ds-btn">{detail.acao}</div>
        </>}
      </div>
    </div>
    <p className="dist-zoom-hint">Clique para ampliar</p>
  </div>;
}

function SolarStepper() {
  const [ativo, setAtivo] = useState(0);
  const [modalStep, setModalStep] = useState<SolarStep | null>(null);
  const step = solarSteps[ativo];
  return <>
  <div className="solar-stepper" aria-label="Passo a passo interativo da Venda Solar">
    <div className="solar-stepper-list">
      {([1, 2, 3] as const).map((fase) => {
        const faseSteps = solarSteps.filter((item) => item.fase === fase);
        return <div key={fase} className="solar-stepper-phase">
          <div className="solar-phase-label" style={{ fontSize: "16px" }}><span>Fase {fase}</span>{faseSteps[0].faseTitulo}</div>
          {faseSteps.map((item) => <button key={item.numero} type="button" className={`solar-stepper-item ${item.numero - 1 === ativo ? "is-active" : ""}`} onClick={() => setAtivo(item.numero - 1)} aria-current={item.numero - 1 === ativo ? "step" : undefined}>
            <span className="solar-step-number">{item.numero}</span><span><strong>{item.titulo}</strong>{item.numero - 1 === ativo && <small>{item.descricao}</small>}</span>
          </button>)}
        </div>;
      })}
    </div>
    <button type="button" className="solar-stepper-preview interactive-guide-preview" onClick={() => setModalStep(step)} aria-label={`Ampliar visual da etapa ${step.numero}`}>
      <div className="solar-preview-heading"><span>Etapa {step.numero}</span><strong>{step.titulo}</strong></div>
      <SolarPreview step={step} />
    </button>
  </div>
  {modalStep && <ScreenModal passo={modalStep.numero} titulo={modalStep.titulo} onClose={() => setModalStep(null)}><SolarPreview step={modalStep} /></ScreenModal>}
  </>;
}

/* ═══════════════════════════════════════════════════════════════
   COMPONENTE PRINCIPAL
   ═══════════════════════════════════════════════════════════════ */
export default function TutorialSolar() {
  const [modal, setModal] = useState<{ passo: number; titulo: string; content: React.ReactNode } | null>(null);

  return (
    <div className="dist-passo-a-passo" style={{ background: "linear-gradient(180deg, #f7fbf8 0%, #eef7f0 100%)", borderRadius: "16px", padding: "24px", margin: "-8px" }}>
      {/* Cabeçalho */}
      <div className="mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-1">Fluxo Completo da Venda de Energia Solar</h2>
        <p className="text-muted-foreground text-sm">Da preparação do projeto ao recebimento do serviço</p>
        <p className="text-muted-foreground text-xs mt-1">Plataforma Solar Intelbras para preparação e fechamento &bull; App "Tá na Conta" para transação segura do pagamento</p>
      </div>

      {/* Botão PDF */}
      <div className="mb-8">
        <a href="/Atualizado%20-%20Tutorial%20-%20Plataforma%20Solar%20Intelbras%20(2).pdf" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="font-bold gap-2" style={{ background: "#00d084", color: "#003318", fontSize: '16px', fontWeight: '800' }}>
            <ExternalLink className="w-5 h-5" />
            Ver guia completo em PDF
          </Button>
        </a>
        <p className="text-xs text-muted-foreground mt-2">Veja o guia completo da Plataforma Solar.</p>
      </div>

      <SolarStepper />

      <div className="solar-legacy-content hidden">
      {/* ═══════════════════════════════════════════
          FASE 1: Preparação e Aprovação
         ═══════════════════════════════════════════ */}
      <FaseHeader numero={1} titulo="Preparação e Aprovação (Plataforma Intelbras)" icon={<Monitor className="w-5 h-5 text-white" />} />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
        {/* Passo 1 — Cadastro */}
        <div className="dist-card">
          <div className="dist-num">1</div>
          <h4 className="dist-title">Cadastro</h4>
          <p className="dist-desc">Cadastre o projeto normalmente na Plataforma Solar Intelbras, inserindo todos os equipamentos necessários.</p>
          <ScreenWrap onClick={() => setModal({ passo: 1, titulo: "Cadastro", content: (
            <TelaAmpS><div className="ds-h2">≡ Intelbras &nbsp; Plataforma Solar Intelbras</div><div className="ds-b"><p className="text-[10px] font-bold mb-2">Resumo do Projeto</p><div className="space-y-1 text-[9px]"><div className="flex justify-between border-b border-gray-100 pb-1"><span>Produtos</span><span className="font-bold">7,92 kWp</span></div><div className="flex justify-between border-b border-gray-100 pb-1"><span>Produção Mensal</span><span className="font-bold">950 kWh</span></div><div className="flex justify-between border-b border-gray-100 pb-1"><span>Economia Mensal</span><span className="font-bold">R$ 620,00</span></div></div><p className="text-[9px] font-bold mt-3 mb-1">Equipamentos</p><div className="space-y-1 text-[8px]"><div className="flex justify-between border-b border-gray-100 pb-0.5"><span>Módulos Fotovoltaicos</span><span>26 un</span></div><div className="flex justify-between border-b border-gray-100 pb-0.5"><span>Inversor</span><span>1 un</span></div><div className="flex justify-between border-b border-gray-100 pb-0.5"><span>Estrutura de Fixação</span><span>1 un</span></div><div className="flex justify-between"><span>Cabo Solar</span><span>120 m</span></div></div><div className="ds-btn mt-3 text-[9px]">Salvar projeto</div></div></TelaAmpS>
          )})}>
            <div className="dist-screen dist-screen-light">
              <div className="ds-h2">≡ Intelbras &nbsp; Plataforma Solar</div>
              <div className="ds-b">
                <p className="text-[7px] font-bold mb-1">Resumo do Projeto</p>
                <div className="space-y-0.5 text-[6px]">
                  <div className="flex justify-between"><span>Produtos</span><span className="font-bold">7,92 kWp</span></div>
                  <div className="flex justify-between"><span>Produção Mensal</span><span className="font-bold">950 kWh</span></div>
                  <div className="flex justify-between"><span>Economia Mensal</span><span className="font-bold">R$ 620,00</span></div>
                </div>
                <p className="text-[6px] font-bold mt-2 mb-0.5">Equipamentos</p>
                <div className="space-y-0.5 text-[5px]">
                  <div className="flex justify-between"><span>Módulos Fotovoltaicos</span><span>26 un</span></div>
                  <div className="flex justify-between"><span>Inversor</span><span>1 un</span></div>
                  <div className="flex justify-between"><span>Estrutura de Fixação</span><span>1 un</span></div>
                  <div className="flex justify-between"><span>Cabo Solar</span><span>120 m</span></div>
                </div>
                <div className="ds-btn mt-2 text-[6px]">Salvar projeto</div>
              </div>
            </div>
          </ScreenWrap>
        </div>

        {/* Passo 2 — Orçamento */}
        <div className="dist-card">
          <div className="dist-num">2</div>
          <h4 className="dist-title">Orçamento</h4>
          <p className="dist-desc">Monte a proposta para o cliente. Inclua o valor dos seus serviços e, se houver parcelamento, use o <Link href="/simular-taxas"><span className="underline cursor-pointer" style={{ color: "#12a34a" }}>Simulador de Taxas</span></Link> para calcular os acréscimos.</p>
        </div>

        {/* Passo 3 — Aprovação */}
        <div className="dist-card">
          <div className="dist-num">3</div>
          <h4 className="dist-title">Aprovação</h4>
          <p className="dist-desc">Apresente a proposta. O cliente analisa e aprova formalmente o orçamento.</p>
        </div>

        {/* Passo 4 — Ajuste Crucial */}
        <div className="dist-card">
          <div className="dist-num">4</div>
          <h4 className="dist-title">Ajuste Crucial</h4>
          <p className="dist-desc">Antes de passar o cartão, acesse a Plataforma Solar, retire (zere) o valor dos serviços do projeto, deixando apenas os produtos, e clique em "Salvar".</p>
        </div>
      </div>

      {/* Box — Por que fazer isso? */}
      <div className="rounded-xl p-4 mb-4 flex items-start gap-3" style={{ background: "rgba(240,165,0,0.08)", border: "1px solid rgba(240,165,0,0.35)" }}>
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#b07800" }} />
        <div className="text-sm leading-relaxed" style={{ color: "#7a5200" }}>
          <strong>Por que fazer isso?</strong> Isso garante que o sistema da Intelbras fature apenas as peças, deixando o campo livre para o split que será feito na maquininha.
        </div>
      </div>

      {/* Seta de transição */}
      <div className="flex justify-center my-6">
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#12a34a" }}>
          <ArrowRight className="w-5 h-5 text-white rotate-90" />
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          FASE 2: O Pagamento (App "Tá na Conta")
         ═══════════════════════════════════════════ */}
      <FaseHeader numero={2} titulo='O Pagamento (App "Tá na Conta" da Maquininha)' icon={<Smartphone className="w-5 h-5 text-white" />} />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
        {/* Passo 5 — Iniciar Venda */}
        <div className="dist-card">
          <div className="dist-num">5</div>
          <h4 className="dist-title">Iniciar Venda</h4>
          <p className="dist-desc">Na tela inicial, toque em "Energia Solar" e depois em "Vender Projeto Solar".</p>
          <ScreenWrap onClick={() => setModal({ passo: 5, titulo: "Iniciar Venda", content: (
            <TelaAmpS><div className="ds-h">tá na conta ✓</div><div className="ds-b"><p className="text-[10px] font-semibold text-center mb-3" style={{color:"#333"}}>Escolha uma opção</p><div className="ds-mi ds-mi-active"><b>Energia Solar</b><span>Simular, Vender e Orçamentos</span></div><div className="ds-mi"><b>Distribuição</b><span>Vendas com Split automatizado</span></div><div className="ds-mi"><b>Outras Vendas</b><span>Vendas simples, sem integrações</span></div><div className="ds-mi"><b>Gerenciar</b><span>Consultar, Cancelar, Reimprimir e Reconfigurar</span></div><p className="text-[8px] text-gray-400 text-center mt-3">Uma parceria Intelbras + Cappta<br/>Versão Pax 2.0.3</p></div></TelaAmpS>
          )})}>
            <div className="dist-screen">
              <div className="ds-h">tá na conta ✓</div>
              <div className="ds-b">
                <p className="text-[7px] font-semibold text-center mb-1" style={{color:"#333"}}>Escolha uma opção</p>
                <div className="ds-mi ds-mi-active"><b>Energia Solar</b><span>Simular, Vender e Orçamentos</span></div>
                <div className="ds-mi"><b>Distribuição</b></div>
                <div className="ds-mi"><b>Outras Vendas</b></div>
                <div className="ds-mi"><b>Gerenciar</b></div>
              </div>
            </div>
          </ScreenWrap>
        </div>

        {/* Passo 6 — Configurar o Split */}
        <div className="dist-card">
          <div className="dist-num">6</div>
          <h4 className="dist-title">Configurar o Split</h4>
          <p className="dist-desc">Digite o valor dos Produtos (R$) e o valor dos Serviços (R$). O app soma tudo automaticamente. Essa separação garante que você não pague imposto em duplicidade.</p>
          <ScreenWrap onClick={() => setModal({ passo: 6, titulo: "Configurar o Split", content: (
            <TelaAmpS><div className="ds-h2">← Projeto de Energia Solar</div><p className="text-[8px] text-gray-400 text-center mb-2">Informe os valores do projeto</p><div className="ds-b"><div className="text-[9px] font-semibold mb-1">Produtos (R$)</div><div className="ds-fi text-[10px]">1.000,00</div><div className="text-[9px] font-semibold mt-2 mb-1">Serviços (R$)</div><div className="ds-fi text-[10px]">500,00</div><div className="text-[9px] font-semibold mt-2 mb-1">Quantidade de Cartões</div><div className="ds-fi text-[10px]">1</div><div className="flex justify-between mt-3 text-[10px]"><span className="font-semibold">Valor Total</span><span className="font-bold" style={{color:"#12a34a"}}>R$ 1.500,00</span></div><div className="ds-btn mt-3 text-[9px]">🏷 Pagar</div></div></TelaAmpS>
          )})}>
            <div className="dist-screen dist-screen-light">
              <div className="ds-h2">← Projeto de Energia Solar</div>
              <div className="ds-b">
                <div className="text-[7px] font-semibold mb-0.5">Produtos (R$)</div>
                <div className="ds-fi text-[7px]">1.000,00</div>
                <div className="text-[7px] font-semibold mt-1 mb-0.5">Serviços (R$)</div>
                <div className="ds-fi text-[7px]">500,00</div>
                <div className="text-[7px] font-semibold mt-1 mb-0.5">Qtd. Cartões</div>
                <div className="ds-fi text-[7px]">1</div>
                <div className="flex justify-between mt-2 text-[7px]"><span>Valor Total</span><span className="font-bold" style={{color:"#12a34a"}}>R$ 1.500,00</span></div>
                <div className="ds-btn mt-2 text-[6px]">🏷 Pagar</div>
              </div>
            </div>
          </ScreenWrap>
        </div>

        {/* Passo 7 — Cartões e Bandeira */}
        <div className="dist-card">
          <div className="dist-num">7</div>
          <h4 className="dist-title">Cartões e Bandeira</h4>
          <p className="dist-desc">Informe a Quantidade de Cartões (essencial caso o cliente queira dividir o valor em mais de um cartão) e selecione a Bandeira do cartão.</p>
          <ScreenWrap onClick={() => setModal({ passo: 7, titulo: "Cartões e Bandeira", content: (
            <TelaAmpS><div className="ds-h2">← Projeto de Energia Solar</div><p className="text-[8px] text-gray-400 text-center mb-2">Selecione a forma de pagamento</p><div className="ds-b"><div className="flex justify-between text-[10px] mb-3"><span>Valor Total</span><span className="font-bold" style={{color:"#12a34a"}}>R$ 1.500,00</span></div><div className="ds-mi"><b>Pagamento com Pix</b><span>Para pagar o projeto com Pix, use a plataforma Solar.</span></div><p className="text-[9px] font-semibold mt-3 mb-2">Pagamento com Cartão — Escolha a Bandeira</p><div className="flex gap-1.5 flex-wrap"><span className="ds-flag text-[9px]" style={{color:"#1a237e"}}>VISA</span><span className="ds-flag text-[9px]" style={{color:"#eb001b"}}>MC</span><span className="ds-flag text-[9px]" style={{color:"#000"}}>elo</span><span className="ds-flag text-[9px]" style={{color:"#822124"}}>Hiper</span><span className="ds-flag text-[9px]" style={{color:"#006fcf"}}>Amex</span></div></div></TelaAmpS>
          )})}>
            <div className="dist-screen dist-screen-light">
              <div className="ds-h2">← Projeto de Energia Solar</div>
              <div className="ds-b">
                <div className="flex justify-between text-[7px] mb-2"><span>Valor Total</span><span className="font-bold" style={{color:"#12a34a"}}>R$ 1.500,00</span></div>
                <div className="ds-mi"><b>Pagamento com Pix</b></div>
                <p className="text-[6px] font-semibold mt-2 mb-1">Cartão — Escolha a Bandeira</p>
                <div className="flex gap-1 flex-wrap"><span className="ds-flag text-[6px]" style={{color:"#1a237e"}}>VISA</span><span className="ds-flag text-[6px]" style={{color:"#eb001b"}}>MC</span><span className="ds-flag text-[6px]" style={{color:"#000"}}>elo</span><span className="ds-flag text-[6px]" style={{color:"#822124"}}>Hiper</span><span className="ds-flag text-[6px]" style={{color:"#006fcf"}}>Amex</span></div>
              </div>
            </div>
          </ScreenWrap>
        </div>

        {/* Passo 8 — Dados do Projeto */}
        <div className="dist-card">
          <div className="dist-num">8</div>
          <h4 className="dist-title">Dados do Projeto</h4>
          <p className="dist-desc">Digite o Nome e o Número do Projeto para que a venda seja vinculada corretamente ao sistema.</p>
          <ScreenWrap onClick={() => setModal({ passo: 8, titulo: "Dados do Projeto", content: (
            <TelaAmpS><div className="ds-b"><p className="text-[11px] font-bold text-center mb-3">Confirmação do Orçamento</p><p className="text-[9px] font-semibold text-gray-500 mb-1">DADOS DO PROJETO</p><div className="text-[9px] mb-1">Nome do Cliente *</div><div className="ds-fi text-[10px]">teste</div><div className="text-[9px] mt-2 mb-1">Número do Projeto *</div><div className="ds-fi text-[10px]">123</div><p className="text-[9px] font-semibold text-gray-500 mt-3 mb-1">VALORES DO PROJETO</p><div className="space-y-1 text-[9px]"><div className="flex justify-between"><span>Produtos</span><span className="font-bold" style={{color:"#12a34a"}}>R$ 1.000,00</span></div><div className="flex justify-between"><span>Serviços</span><span className="font-bold" style={{color:"#12a34a"}}>R$ 500,00</span></div><div className="flex justify-between border-t border-gray-200 pt-1 mt-1"><span className="font-bold">Total</span><span className="font-bold" style={{color:"#12a34a"}}>R$ 1.500,00</span></div></div><div className="ds-btn mt-3 text-[10px]">Prosseguir</div></div></TelaAmpS>
          )})}>
            <div className="dist-screen dist-screen-light">
              <div className="ds-b">
                <p className="text-[7px] font-bold text-center mb-1">Confirmação do Orçamento</p>
                <p className="text-[6px] text-gray-500 mb-0.5">DADOS DO PROJETO</p>
                <div className="text-[6px]">Nome do Cliente *</div>
                <div className="ds-fi text-[6px]">teste</div>
                <div className="text-[6px] mt-1">Número do Projeto *</div>
                <div className="ds-fi text-[6px]">123</div>
                <p className="text-[6px] text-gray-500 mt-1 mb-0.5">VALORES</p>
                <div className="space-y-0.5 text-[6px]">
                  <div className="flex justify-between"><span>Produtos</span><span className="font-bold" style={{color:"#12a34a"}}>R$ 1.000,00</span></div>
                  <div className="flex justify-between"><span>Serviços</span><span className="font-bold" style={{color:"#12a34a"}}>R$ 500,00</span></div>
                  <div className="flex justify-between border-t pt-0.5 mt-0.5"><span className="font-bold">Total</span><span className="font-bold" style={{color:"#12a34a"}}>R$ 1.500,00</span></div>
                </div>
                <div className="ds-btn mt-2 text-[6px]">Prosseguir</div>
              </div>
            </div>
          </ScreenWrap>
        </div>
      </div>

      {/* Passos 9 — Parcelamento e Cobrança */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="dist-card">
          <div className="dist-num">9</div>
          <h4 className="dist-title">Parcelamento e Cobrança</h4>
          <p className="dist-desc">Escolha o número de parcelas combinado com o cliente, clique em "Pagar", confirme o aviso de segurança da tela e peça para o cliente aproximar ou inserir o cartão.</p>
          <ScreenWrap onClick={() => setModal({ passo: 9, titulo: "Parcelamento e Cobrança", content: (
            <TelaAmpS>
              <div className="ds-b">
                <p className="text-[12px] font-bold text-left mb-3">Parcelamento</p>
                <p className="text-[11px] font-bold text-center mb-1">MASTERCARD</p>
                <p className="text-[9px] text-center text-gray-600 mb-3">Em quantas vezes o cliente deseja pagar?</p>
                <div className="grid grid-cols-2 gap-2 text-[10px] mb-3">
                  <div className="rounded-lg p-2 text-center text-white font-bold" style={{background:"linear-gradient(135deg, #12a34a, #4caf50)"}}><b>1x</b><br/>R$ 1.554,24</div>
                  <div className="border border-gray-200 rounded-lg p-2 text-center"><b>2x</b><br/>R$ 791,06</div>
                  <div className="border border-gray-200 rounded-lg p-2 text-center"><b>3x</b><br/>R$ 531,86</div>
                  <div className="border border-gray-200 rounded-lg p-2 text-center"><b>4x</b><br/>R$ 401,80</div>
                  <div className="border border-gray-200 rounded-lg p-2 text-center"><b>5x</b><br/>R$ 323,94</div>
                  <div className="border border-gray-200 rounded-lg p-2 text-center"><b>6x</b><br/>R$ 271,71</div>
                  <div className="border border-gray-200 rounded-lg p-2 text-center"><b>7x</b></div>
                  <div className="border border-gray-200 rounded-lg p-2 text-center"><b>8x</b></div>
                </div>
                <div className="text-center mt-3 mb-3">
                  <p className="text-[10px] font-semibold text-gray-600">Resumo</p>
                  <p className="text-[11px] font-bold">1x de R$ 1.554,24</p>
                  <p className="text-[9px] text-gray-500">Total: R$ 1.554,24</p>
                </div>
                <div className="flex gap-2 mt-3">
                  <div className="ds-btn-outline flex-1 text-[10px]">Cancelar</div>
                  <div className="ds-btn flex-1 text-[10px]">Pagar</div>
                </div>
              </div>
            </TelaAmpS>
          )})}>
            <div className="dist-screen dist-screen-light" style={{minHeight:"200px"}}>
              <div className="ds-b">
                <p className="text-[7px] font-bold text-left mb-1">Parcelamento</p>
                <p className="text-[7px] font-bold text-center">MASTERCARD</p>
                <p className="text-[6px] text-center text-gray-500 mb-1.5">Em quantas vezes o cliente deseja pagar?</p>
                <div className="grid grid-cols-2 gap-0.5 text-[6px] mb-1.5">
                  <div className="rounded p-1 text-center text-white font-bold" style={{background:"linear-gradient(135deg, #12a34a, #4caf50)"}}><b>1x</b><br/>R$ 1.554,24</div>
                  <div className="border border-gray-200 rounded p-1 text-center"><b>2x</b><br/>R$ 791,06</div>
                  <div className="border border-gray-200 rounded p-1 text-center"><b>3x</b><br/>R$ 531,86</div>
                  <div className="border border-gray-200 rounded p-1 text-center"><b>4x</b><br/>R$ 401,80</div>
                  <div className="border border-gray-200 rounded p-1 text-center"><b>5x</b><br/>R$ 323,94</div>
                  <div className="border border-gray-200 rounded p-1 text-center"><b>6x</b><br/>R$ 271,71</div>
                  <div className="border border-gray-200 rounded p-1 text-center"><b>7x</b></div>
                  <div className="border border-gray-200 rounded p-1 text-center"><b>8x</b></div>
                </div>
                <div className="text-center text-[6px] mb-1">
                  <p className="font-semibold text-gray-500">Resumo</p>
                  <p className="font-bold">1x de R$ 1.554,24</p>
                  <p className="text-gray-400">Total: R$ 1.554,24</p>
                </div>
                <div className="flex gap-1 mt-1"><div className="ds-btn-outline flex-1 text-[5px]">Cancelar</div><div className="ds-btn flex-1 text-[5px]">Pagar</div></div>
              </div>
            </div>
          </ScreenWrap>
        </div>

        {/* Tela final — Aproxime o cartão */}
        <div className="dist-card flex flex-col items-center justify-center">
          <ScreenWrap onClick={() => setModal({ passo: 9, titulo: "Finalize a cobrança", content: (
            <TelaAmpS><div className="ds-h">tá na conta ✓</div><div className="ds-b flex flex-col items-center text-center py-6"><p className="text-2xl font-bold mb-1" style={{color:"#333"}}>R$ 1.554,24</p><p className="text-[10px] text-gray-500 mb-4">Crédito</p><div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center mb-3"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"><path d="M8.5 16.5a5 5 0 0 1 0-9"/><path d="M11.5 18.5a8 8 0 0 1 0-13"/><path d="M14.5 20.5a11 11 0 0 1 0-17"/></svg></div><p className="text-[11px] font-bold uppercase" style={{color:"#d32f2f"}}>APROXIME, INSIRA OU PASSE O CARTÃO</p><div className="ds-btn mt-4 text-[10px] px-8">Cancelar</div></div></TelaAmpS>
          )})}>
            <div className="dist-screen" style={{minHeight:"200px"}}>
              <div className="ds-h">tá na conta ✓</div>
              <div className="ds-b flex flex-col items-center text-center py-4">
                <p className="text-lg font-bold mb-0.5" style={{color:"#333"}}>R$ 1.554,24</p>
                <p className="text-[8px] text-gray-500 mb-3">Crédito</p>
                <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center mb-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"><path d="M8.5 16.5a5 5 0 0 1 0-9"/><path d="M11.5 18.5a8 8 0 0 1 0-13"/><path d="M14.5 20.5a11 11 0 0 1 0-17"/></svg>
                </div>
                <p className="text-[7px] font-bold uppercase" style={{color:"#d32f2f"}}>APROXIME, INSIRA OU PASSE O CARTÃO</p>
                <div className="ds-btn mt-2 text-[7px] px-4">Cancelar</div>
              </div>
            </div>
          </ScreenWrap>
        </div>
      </div>

      {/* Ponto de Atenção */}
      <div className="rounded-xl p-4 mb-4 flex items-start gap-3" style={{ background: "rgba(240,165,0,0.08)", border: "1px solid rgba(240,165,0,0.35)" }}>
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#b07800" }} />
        <div className="text-sm leading-relaxed" style={{ color: "#7a5200" }}>
          <strong>Ponto de Atenção:</strong> Imprima 2 vias do comprovante de papel da maquininha — uma para o cliente e outra para você.
        </div>
      </div>

      {/* Seta de transição */}
      <div className="flex justify-center my-6">
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#12a34a" }}>
          <ArrowRight className="w-5 h-5 text-white rotate-90" />
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          FASE 3: Pós-Venda, Envio e Recebimento
         ═══════════════════════════════════════════ */}
      <FaseHeader numero={3} titulo="Pós-Venda, Envio e Recebimento (Plataforma e Campo)" icon={<Upload className="w-5 h-5 text-white" />} />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {/* Passo 10 — Upload do Comprovante */}
        <div className="dist-card">
          <div className="dist-num">10</div>
          <h4 className="dist-title">Upload do Comprovante</h4>
          <p className="dist-desc">Volte para a Plataforma Solar Intelbras, abra o projeto e faça o upload da foto/imagem do comprovante impresso da maquininha. Sem isso, a liberação dos equipamentos pode atrasar.</p>
        </div>

        {/* Passo 11 — O Split e Faturamento */}
        <div className="dist-card">
          <div className="dist-num">11</div>
          <h4 className="dist-title">O Split e Faturamento</h4>
          <p className="dist-desc">A Cappta processa o pagamento e divide o dinheiro: o valor dos produtos vai direto para a Intelbras e o valor do serviço vai para você. A Intelbras emite a Nota Fiscal dos produtos e envia os equipamentos para o endereço do projeto.</p>
          <div className="flex gap-2 mt-3 justify-center">
            <div className="text-center">
              <div className="w-8 h-8 rounded-full mx-auto flex items-center justify-center" style={{background:"#e8f5e9"}}><span className="text-[10px] font-bold" style={{color:"#12a34a"}}>I</span></div>
              <p className="text-[7px] mt-1 text-muted-foreground">Intelbras<br/>(Produtos)</p>
            </div>
            <div className="flex items-center"><ArrowRight className="w-4 h-4 text-gray-400" /></div>
            <div className="text-center">
              <div className="w-8 h-8 rounded-full mx-auto flex items-center justify-center" style={{background:"#e8f5e9"}}><span className="text-[10px] font-bold" style={{color:"#12a34a"}}>V</span></div>
              <p className="text-[7px] mt-1 text-muted-foreground">Você<br/>(Serviços)</p>
            </div>
          </div>
        </div>

        {/* Passo 12 — Instalação e Sua NF */}
        <div className="dist-card">
          <div className="dist-num">12</div>
          <h4 className="dist-title">Instalação e Sua NF</h4>
          <p className="dist-desc">Com os equipamentos em mãos, faça a instalação na propriedade do cliente. Assim que terminar, emita a sua Nota Fiscal de prestação de serviços para ele.</p>
        </div>

        {/* Passo 13 — Dinheiro na Conta */}
        <div className="dist-card">
          <div className="dist-num">13</div>
          <h4 className="dist-title">Dinheiro na Conta</h4>
          <p className="dist-desc">O valor do seu serviço cai na sua Conta Digital no próximo dia útil após o pagamento na maquininha. Tá na conta!</p>
          <div className="mt-3 p-2 rounded-lg flex items-center gap-2" style={{ background: "rgba(0,208,132,0.08)", border: "1px solid rgba(0,163,53,0.30)" }}>
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "#00A335" }} />
            <p className="text-[9px] font-semibold" style={{ color: "#00A335" }}>Pagamento Recebido! Tá na conta!</p>
          </div>
        </div>
      </div>

      </div>

      {/* Rodapé */}
      <div className="text-center pt-4 border-t" style={{ borderColor: "rgba(0,163,53,0.15)" }}>
        <p className="text-xs text-muted-foreground">Fluxo ilustrativo — Tá na Conta | Intelbras + Cappta</p>
      </div>

      {/* Modal */}
      {modal && (
        <ScreenModal passo={modal.passo} titulo={modal.titulo} onClose={() => setModal(null)}>
          {modal.content}
        </ScreenModal>
      )}
    </div>
  );
}
