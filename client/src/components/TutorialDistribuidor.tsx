import { useState, useEffect } from "react";
import { CheckCircle2, Info } from "lucide-react";

/* ─── Telas ampliadas para o modal ─── */
function TelaAmp0() {
  return (
    <div className="dist-screen-amp"><div className="ds-h">tá na conta ✓</div><div className="ds-b"><p className="text-[10px] font-semibold text-center mb-3" style={{color:"#333"}}>Escolha uma opção</p><div className="ds-mi"><b>Energia Solar</b><span>Simular, Vender e Orçamentos</span></div><div className="ds-mi ds-mi-active"><b>Distribuição</b><span>Vendas com Split automatizado</span></div><div className="ds-mi"><b>Outras Vendas</b><span>Vendas simples, sem integrações</span></div><div className="ds-mi"><b>Gerenciar</b><span>Consultar, Cancelar, Reimprimir e Reconfigurar</span></div><p className="text-[8px] text-gray-400 text-center mt-3">Uma parceria Intelbras + Cappta<br/>Versão Pax 2.0.3</p></div></div>
  );
}
function TelaAmp1() {
  return (
    <div className="dist-screen-amp"><div className="ds-h2">← ESCOLHER DISTRIBUIDOR</div><div className="ds-b"><p className="text-[9px] font-semibold text-gray-500 mb-2">DISTRIBUIDOR PREFERENCIAL</p><div className="ds-mi ds-mi-active"><b>DISTRIBUIDOR DEMONSTRAÇÃO</b><span>Código T - Banco 1</span><span>012.000.314-00 · ✓Preferencial <span className="text-[8px] px-1 rounded text-white" style={{background:"#12a34a"}}>Ativo</span></span></div><p className="text-[9px] font-semibold text-gray-500 mt-3 mb-2">OUTROS DISTRIBUIDORES (1)</p><div className="ds-mi"><b>DEMONSTRAÇÃO DISTR. 2</b><span>Código T - Banco 1</span><span>011.000.311-10 <span className="text-[8px] px-1 rounded text-white" style={{background:"#12a34a"}}>Ativo</span></span></div></div></div>
  );
}
function TelaAmp2() {
  return (
    <div className="dist-screen-amp"><div className="ds-h2">← DISTRIBUIÇÃO</div><div className="ds-b"><div className="flex justify-between text-[10px] mb-2"><span>Valor Total</span><span className="font-bold">R$ 10.000,00</span></div><div className="text-[9px] text-gray-500 mb-2">Split Distribuidor — DEMONSTRAÇÃO DISTR. 2 — 011.222.111-10</div><div className="ds-fi font-bold text-[10px]">R$ 5.000,00</div><div className="text-[9px] mt-2 mb-1">Produtos + Serviços Revenda</div><div className="text-[11px] font-bold mb-1" style={{color:"#12a34a"}}>R$ 5.000,00</div><p className="text-[8px] text-gray-400">Calculado automaticamente (Valor Total - Split Distribuidor)</p><div className="text-[9px] mt-3 mb-1">Identificador da Venda</div><div className="ds-fi text-[10px]">x</div><p className="text-[8px] text-gray-400 mt-1">Nº da venda, NF ou pedido</p><div className="ds-btn mt-3 text-[10px]">PROSSEGUIR</div></div></div>
  );
}
function TelaAmp3() {
  return (
    <div className="dist-screen-amp dist-screen-light dist-screen-step4"><div className="ds-b"><div className="rounded p-3 mb-3 border" style={{borderColor:"#fbbf24",background:"#fffbeb"}}><p className="text-[10px] font-bold text-center mb-1">⚠ AVISO IMPORTANTE!</p><p className="text-[8px] text-gray-600 leading-relaxed">Os valores inseridos como "Split Distribuidor" serão repassados diretamente para o Distribuidor, como pagamento da Venda identificada pelo código x.</p><p className="text-[8px] text-gray-600 leading-relaxed mt-1">Esta transferência será identificada na Plataforma de Pagamento como "Split de Recebíveis" (também chamada de Split EC).</p><p className="text-[8px] text-gray-600 leading-relaxed mt-1">No próximo dia útil bancário, os valores acima serão creditados nas respectivas Contas Digitais, conforme termos da RBCB nº 264/22 do Banco Central do Brasil.</p></div><div className="text-[9px] space-y-1"><div className="flex justify-between"><span>Distribuidor</span><span className="font-semibold">DEMONSTRAÇÃO DISTR. 2</span></div><div className="flex justify-between"><span>CNPJ</span><span>011.222.111-10</span></div><div className="flex justify-between"><span>Identificador</span><span>x</span></div><div className="flex justify-between border-t border-gray-200 pt-1 mt-1"><span>Valor Total</span><span className="font-bold">R$ 10.000,00</span></div><div className="flex justify-between"><span>Repasse ao Distribuidor</span><span className="font-bold">R$ 5.000,00</span></div><div className="flex justify-between"><span>Valor Bruto Revenda*</span><span className="font-bold">R$ 5.000,00</span></div></div><p className="text-[7px] text-gray-400 mt-2">* Valor líquido pode variar conforme financiamento escolhido.</p><p className="text-[9px] text-center mt-3 mb-2">Gostaria realmente de prosseguir?</p><div className="flex gap-2"><div className="ds-btn flex-1 text-[9px]">Sim, prosseguir</div><div className="ds-btn-outline flex-1 text-[9px]">Não, retornar</div></div></div></div>
  );
}
function TelaAmp4() {
  return (
    <div className="dist-screen-amp dist-screen-light"><div className="ds-b"><p className="text-[10px] font-bold text-center mb-3">SIMULAR VENDA COM DISTRIBUIDOR</p><div className="text-[9px] mb-2">Identificador: x</div><div className="text-[9px] font-semibold mb-2">Taxas de Parcelamento</div><div className="flex gap-2 mb-3"><div className="flex-1 text-center py-1.5 rounded text-[10px] font-bold text-white" style={{background:"#12a34a"}}>Cliente</div><div className="flex-1 text-center py-1.5 rounded text-[10px] font-semibold border border-gray-300">Revenda</div></div><div className="text-[9px] mb-2">Quantidador de Cartões</div><div className="ds-fi text-[10px]">1</div><div className="flex gap-2 mt-4"><div className="ds-btn-outline flex-1 text-[9px]">← Voltar</div><div className="ds-btn flex-1 text-[9px]">🏷 Prosseguir</div></div></div></div>
  );
}
function TelaAmp5() {
  return (
    <div className="dist-screen-amp dist-screen-light"><div className="ds-b"><p className="text-[10px] font-bold text-center mb-3">SIMULAR VENDA COM DISTRIBUIDOR</p><div className="text-[9px] font-semibold mb-2">Bandeira</div><div className="flex gap-1.5 mb-3 flex-wrap"><span className="ds-flag text-[9px]" style={{color:"#1a237e"}}>VISA</span><span className="ds-flag text-[9px]" style={{color:"#eb001b"}}>MC</span><span className="ds-flag text-[9px]" style={{color:"#000"}}>elo</span><span className="ds-flag text-[9px]" style={{color:"#822124"}}>Hiper</span><span className="ds-flag text-[9px]" style={{color:"#006fcf"}}>Amex</span></div><div className="text-[9px] font-semibold mb-2">Forma de Pagamento</div><div className="rounded border border-gray-200 p-2 mb-3"><p className="text-[9px] font-semibold">Crédito</p><p className="text-[8px] text-gray-400">À vista ou parcelado</p></div><div className="space-y-1 text-[9px]"><div className="flex justify-between border-b border-gray-100 pb-1"><span>À Vista</span><span>R$ 10.361,62</span></div><div className="flex justify-between border-b border-gray-100 pb-1"><span>2x</span><span>R$ 5.273,71</span></div><div className="flex justify-between border-b border-gray-100 pb-1"><span>3x</span><span>R$ 3.545,72</span></div><div className="flex justify-between border-b border-gray-100 pb-1"><span>4x</span><span>R$ 2.678,67</span></div><div className="flex justify-between border-b border-gray-100 pb-1"><span>5x</span><span>R$ 2.159,50</span></div></div><div className="flex justify-between text-[9px] mt-2"><span>Taxa efetiva:</span><span className="font-bold">3,49%</span></div><div className="flex justify-between text-[9px]"><span>Valor cobrado:</span><span className="font-bold">R$ 10.361,62</span></div><div className="ds-btn mt-3 text-[10px]">Pagar Agora</div></div></div>
  );
}
function TelaAmp6() {
  return (
    <div className="dist-screen-amp"><div className="ds-h">tá na conta ✓</div><div className="ds-b flex flex-col items-center text-center py-6"><p className="text-xl font-bold mb-1" style={{color:"#333"}}>R$ 10.361,62</p><p className="text-[9px] text-gray-500 mb-4">Crédito</p><div className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center mb-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"><path d="M8.5 16.5a5 5 0 0 1 0-9"/><path d="M11.5 18.5a8 8 0 0 1 0-13"/><path d="M14.5 20.5a11 11 0 0 1 0-17"/></svg></div><p className="text-[10px] font-bold uppercase" style={{color:"#d32f2f"}}>APROXIME, INSIRA OU PASSE O CARTÃO</p><div className="ds-btn mt-3 text-[10px] px-6">Cancelar</div></div></div>
  );
}

const telasAmp = [TelaAmp0, TelaAmp1, TelaAmp2, TelaAmp3, TelaAmp4, TelaAmp5, TelaAmp6];
const titulos = ["Toque em Distribuição", "Escolha o distribuidor", "Preencha os valores", "Confirme o resumo", "Defina taxas e cartões", "Escolha bandeira e parcelamento", "Finalize o pagamento"];
const descricoes = [
  "Com o distribuidor já ativo, toque em \"Distribuição\" para iniciar a venda integrada com split automatizado.",
  "Selecione o distribuidor com quem deseja realizar a venda integrada.",
  "Informe o valor total da venda, somando produtos e serviço. Depois, informe quanto será repassado ao distribuidor. O valor restante da revenda aparecerá em verde. Identifique a venda com OS, NF ou outro código.",
  "Confira o resumo da transação. O split será repassado diretamente ao distribuidor e identificado como \"Split de Recebíveis\". Verifique valor total, repasse ao distribuidor e valor bruto da revenda. Se estiver tudo certo, toque em \"Sim, prosseguir\".",
  "Escolha se a taxa será repassada ao \"Cliente\" ou assumida pela \"Revenda\". Informe a quantidade de cartões e toque em \"Prosseguir\".",
  "Selecione a bandeira do cartão e a opção de crédito, à vista ou parcelado. Confira parcelas, taxas e valor cobrado. É possível dividir em até 21 vezes.",
  "Toque em \"Pagar Agora\" e peça ao cliente para aproximar, inserir ou passar o cartão na maquininha.",
];


/* ─── Modal Lightbox ─── */
function ScreenModal({ passo, onClose }: { passo: number; onClose: () => void }) {
  const Tela = telasAmp[passo];
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.7)" }} onClick={onClose}>
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-lg transition-colors">✕</button>
        <p className="text-xs font-semibold text-gray-500 mb-3">Passo {passo + 1} — {titulos[passo]}</p>
        <div className="dist-modal-screen"><Tela /></div>
      </div>
    </div>
  );
}

/* ─── Wrapper clicável para tela ─── */
function ScreenWrap({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <div className="dist-screen-wrap mt-3" onClick={onClick}>
      {children}
      <p className="dist-zoom-hint">🔍 Clique para ampliar</p>
    </div>
  );
}

export default function TutorialDistribuidor() {
  const [modalPasso, setModalPasso] = useState<number | null>(null);
  const [ativo, setAtivo] = useState(0);
  const TelaAtiva = telasAmp[ativo];

  return (
    <div className="dist-passo-a-passo" style={{ background: "linear-gradient(180deg, #f7fbf8 0%, #eef7f0 100%)", borderRadius: "16px", padding: "24px", margin: "-8px" }}>
      {/* Cabeçalho */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-1">Passo a passo de venda na maquininha</h2>
          <p className="text-muted-foreground text-sm">Venda com split automatizado para Distribuição</p>
        </div>
        <span className="hidden sm:block text-lg font-bold whitespace-nowrap" style={{ color: "#12a34a" }}></span>
      </div>

      {/* Texto introdutório */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        Confira abaixo os modelos de venda integrada com o Distribuidor usando a maquininha Tá na Conta.
      </p>

      {/* Box informativo sobre o split */}
      <div className="rounded-xl p-4 mb-8 flex items-start gap-3" style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,163,53,0.2)" }}>
        <Info className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#00A335" }} />
        <p className="text-sm text-muted-foreground leading-relaxed" style={{fontSize: '16px'}}>
          O split com o Distribuidor pode ser feito diretamente pela maquininha. O Distribuidor é notificado automaticamente sempre que um split for realizado.
        </p>
      </div>

      {/* Bloco — Antes de vender */}
      <div className="rounded-xl border-2 p-5 mb-10 flex gap-4 items-start" style={{ borderColor: "#12a34a", background: "#f5faf7" }}>
        <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#e8f5e9" }}>
          <CheckCircle2 className="w-6 h-6" style={{ color: "#12a34a" }} />
        </div>
        <div>
          <h3 className="font-bold text-sm text-foreground mb-2" style={{fontSize: '16px'}}>Antes de vender: ative o distribuidor no Portal de Gestão</h3>
          <ul className="space-y-1 text-xs text-muted-foreground list-disc pl-4">
            <li style={{fontSize: '14px'}}>Acesse <a href="https://intelbras.posportal.com.br" target="_blank" rel="noopener noreferrer" className="underline font-semibold" style={{ color: "#12a34a", fontSize: '14px' }}>intelbras.posportal.com.br</a> e faça seu login.</li>
            <li style={{fontSize: '14px'}}>Clique em "Gestão Financeira" e depois em "Movimentações de Recebíveis".</li>
            <li style={{fontSize: '14px'}}>Clique em "Cadastro de Beneficiários" e depois em "Ir para beneficiários cadastrados".</li>
            <li style={{fontSize: '14px'}}>Encontre o distribuidor, clique no ícone de lupa e depois em "Ativar".</li>
            <li style={{fontSize: '14px'}}>Confirme a ação. Após a aprovação da análise obrigatória do sistema, o distribuidor ficará com status "ativo" na maquininha e apto para receber splits.</li>
          </ul>
        </div>
      </div>

      {/* Vertical Stepper — etapas e preview sincronizado */}
      <div className="distribuidor-stepper max-w-6xl mx-auto mb-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="distribuidor-stepper-steps lg:w-[45%] flex-shrink-0">
            <div className="relative">
              <div className="absolute left-[18px] top-4 bottom-4 w-[3px] rounded-full" style={{ background: "#e8e8e8" }} />
              <div
                className="absolute left-[18px] top-4 w-[3px] rounded-full transition-all duration-500"
                style={{ background: "#12a34a", height: `${(ativo / (titulos.length - 1)) * 90}%` }}
              />
              <div className="space-y-1">
                {titulos.map((titulo, i) => (
                  <button
                    key={titulo}
                    type="button"
                    onClick={() => setAtivo(i)}
                    aria-current={i === ativo ? "step" : undefined}
                    className={`relative flex items-start gap-3 w-full text-left px-2 py-3 rounded-xl transition-all ${i === ativo ? "bg-white shadow-md border border-green-200" : "hover:bg-white/60"}`}
                  >
                    <div
                      className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-all ${i <= ativo ? "text-white shadow-sm" : "text-gray-400 bg-white border-2 border-gray-200"}`}
                      style={i <= ativo ? { background: "#12a34a" } : {}}
                    >
                      {i + 1}
                    </div>
                    <div className="pt-1">
                      <p className={`font-semibold text-sm leading-tight ${i === ativo ? "text-foreground" : "text-muted-foreground"}`} style={{ fontSize: "16px" }}>{titulo}</p>
                      {i === ativo && <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{descricoes[i]}</p>}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="distribuidor-stepper-preview lg:w-[55%] flex-1 flex items-start justify-center lg:sticky lg:top-24">
            <button
              type="button"
              className="distribuidor-preview-stage interactive-guide-preview transition-all duration-300"
              onClick={() => setModalPasso(ativo)}
              aria-label={`Ampliar demonstração do passo ${ativo + 1}: ${titulos[ativo]}`}
            >
              <TelaAtiva />
              <span className="dist-zoom-hint">Clique para ampliar</span>
            </button>
          </div>
        </div>
      </div>

      {/* ═══ PASSOS 1-4 ═══ */}
      <div className="distribuidor-legacy-flow grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
        {/* Passo 1 */}
        <div className="dist-card">
          <div className="dist-num">1</div>
          <h4 className="dist-title">Toque em Distribuição</h4>
          <p className="dist-desc">Com o distribuidor já ativo, toque em "Distribuição" para iniciar a venda integrada com split automatizado.</p>
          <ScreenWrap onClick={() => setModalPasso(0)}>
          <div className="dist-screen">
            <div className="ds-h">tá na conta ✓</div>
            <div className="ds-b">
              <p className="text-[8px] font-semibold text-center mb-2" style={{ color: "#333" }}>Escolha uma opção</p>
              <div className="ds-mi"><b>Energia Solar</b><span>Simular, Vender e Orçamentos</span></div>
              <div className="ds-mi ds-mi-active"><b>Distribuição</b><span>Vendas com Split automatizado</span></div>
              <div className="ds-mi"><b>Outras Vendas</b><span>Vendas simples, sem integrações</span></div>
              <div className="ds-mi"><b>Gerenciar</b><span>Consultar, Cancelar, Reimprimir e Reconfigurar</span></div>
              <p className="text-[6px] text-gray-400 text-center mt-2">Uma parceria Intelbras + Cappta<br/>Versão Pax 2.0.3</p>
            </div>
          </div>
          </ScreenWrap>
        </div>

        {/* Passo 2 */}
        <div className="dist-card">
          <div className="dist-num">2</div>
          <h4 className="dist-title">Escolha o distribuidor</h4>
          <p className="dist-desc">Selecione o distribuidor com quem deseja realizar a venda integrada.</p>
          <ScreenWrap onClick={() => setModalPasso(1)}>
          <div className="dist-screen">
            <div className="ds-h2">← ESCOLHER DISTRIBUIDOR</div>
            <div className="ds-b">
              <p className="text-[7px] font-semibold text-gray-500 mb-1">DISTRIBUIDOR PREFERENCIAL</p>
              <div className="ds-mi ds-mi-active">
                <b>DISTRIBUIDOR DEMONSTRAÇÃO</b>
                <span>Código T - Banco 1</span>
                <span>012.000.322-00 · ✓Preferencial <span className="text-[6px] px-1 rounded text-white" style={{background:"#12a34a"}}>Ativo</span></span>
              </div>
              <p className="text-[7px] font-semibold text-gray-500 mt-2 mb-1">OUTROS DISTRIBUIDORES (1)</p>
              <div className="ds-mi">
                <b>DEMONSTRAÇÃO DISTR. 2</b>
                <span>Código T - Banco 1</span>
                <span>011.222.111-10 <span className="text-[6px] px-1 rounded text-white" style={{background:"#12a34a"}}>Ativo</span></span>
              </div>
            </div>
          </div>
          </ScreenWrap>
        </div>

        {/* Passo 3 */}
        <div className="dist-card">
          <div className="dist-num">3</div>
          <h4 className="dist-title">Preencha os valores</h4>
          <p className="dist-desc">Informe o valor total da venda, somando produtos e serviço. Depois, informe quanto será repassado ao distribuidor. O valor restante da revenda aparecerá em verde. Identifique a venda com OS, NF ou outro código.</p>
          <ScreenWrap onClick={() => setModalPasso(2)}>
          <div className="dist-screen">
            <div className="ds-h2">← DISTRIBUIÇÃO</div>
            <div className="ds-b">
              <div className="flex justify-between text-[8px] mb-1"><span>Valor Total</span><span className="font-bold">R$ 10.000,00</span></div>
              <div className="text-[7px] text-gray-500 mb-1">Split Distribuidor — DEMONSTRAÇÃO DISTR. 2 — 01347732500</div>
              <div className="ds-fi font-bold">R$ 5.000,00</div>
              <div className="text-[7px] mt-1 mb-1">Produtos + Serviços Revenda</div>
              <div className="text-[9px] font-bold mb-1" style={{color:"#12a34a"}}>R$ 5.000,00</div>
              <p className="text-[6px] text-gray-400">Calculado automaticamente (Valor Total - Split Distribuidor)</p>
              <div className="text-[7px] mt-2 mb-1">Identificador da Venda</div>
              <div className="ds-fi">x</div>
              <p className="text-[6px] text-gray-400 mt-1">Nº da venda, NF ou pedido</p>
              <div className="ds-btn mt-2">PROSSEGUIR</div>
            </div>
          </div>
          </ScreenWrap>
        </div>

        {/* Passo 4 */}
        <div className="dist-card">
          <div className="dist-num">4</div>
          <h4 className="dist-title">Confirme o resumo</h4>
          <p className="dist-desc">Confira o resumo da transação. O split será repassado diretamente ao distribuidor e identificado como "Split de Recebíveis". Verifique valor total, repasse ao distribuidor e valor bruto da revenda. Se estiver tudo certo, toque em "Sim, prosseguir".</p>
          <ScreenWrap onClick={() => setModalPasso(3)}>
          <div className="dist-screen dist-screen-light">
            <div className="ds-b">
              <div className="rounded p-2 mb-2 border" style={{borderColor:"#fbbf24", background:"#fffbeb"}}>
                <p className="text-[8px] font-bold text-center mb-1">⚠ AVISO IMPORTANTE!</p>
                <p className="text-[6px] text-gray-600 leading-tight">Os valores inseridos como "Split Distribuidor" serão repassados diretamente para o Distribuidor, como pagamento da Venda identificada pelo código x.</p>
                <p className="text-[6px] text-gray-600 leading-tight mt-1">Esta transferência será identificada na Plataforma de Pagamento como "Split de Recebíveis" (também chamada de Split EC).</p>
                <p className="text-[6px] text-gray-600 leading-tight mt-1">No próximo dia útil bancário, os valores acima serão creditados nas respectivas Contas Digitais, conforme termos da RBCB nº 264/22 do Banco Central do Brasil.</p>
              </div>
              <div className="text-[7px] space-y-0.5">
                <div className="flex justify-between"><span>Distribuidor</span><span className="font-semibold">DEMONSTRAÇÃO DISTR. 2</span></div>
                <div className="flex justify-between"><span>CNPJ</span><span>01347732500</span></div>
                <div className="flex justify-between"><span>Identificador</span><span>x</span></div>
                <div className="flex justify-between border-t border-gray-200 pt-0.5 mt-0.5"><span>Valor Total</span><span className="font-bold">R$ 10.000,00</span></div>
                <div className="flex justify-between"><span>Repasse ao Distribuidor</span><span className="font-bold">R$ 5.000,00</span></div>
                <div className="flex justify-between"><span>Valor Bruto Revenda*</span><span className="font-bold">R$ 5.000,00</span></div>
              </div>
              <p className="text-[5px] text-gray-400 mt-1">* Valor líquido pode variar conforme financiamento escolhido.</p>
              <p className="text-[7px] text-center mt-2 mb-1">Gostaria realmente de prosseguir?</p>
              <div className="flex gap-1">
                <div className="ds-btn flex-1">Sim, prosseguir</div>
                <div className="ds-btn-outline flex-1">Não, retornar</div>
              </div>
            </div>
          </div>
          </ScreenWrap>
        </div>
      </div>

      {/* ═══ PASSOS 5-7 ═══ */}
      <div className="distribuidor-legacy-flow grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
        {/* Passo 5 */}
        <div className="dist-card">
          <div className="dist-num">5</div>
          <h4 className="dist-title">Defina taxas e cartões</h4>
          <p className="dist-desc">Escolha se a taxa será repassada ao "Cliente" ou assumida pela "Revenda". Informe a quantidade de cartões e toque em "Prosseguir".</p>
          <ScreenWrap onClick={() => setModalPasso(4)}>
          <div className="dist-screen dist-screen-light">
            <div className="ds-b">
              <p className="text-[8px] font-bold text-center mb-2">SIMULAR VENDA COM DISTRIBUIDOR</p>
              <div className="text-[7px] mb-1">Identificador: x</div>
              <div className="text-[7px] font-semibold mb-1">Taxas de Parcelamento</div>
              <div className="flex gap-1 mb-2">
                <div className="flex-1 text-center py-1 rounded text-[8px] font-bold text-white" style={{background:"#12a34a"}}>Cliente</div>
                <div className="flex-1 text-center py-1 rounded text-[8px] font-semibold border border-gray-300">Revenda</div>
              </div>
              <div className="text-[7px] mb-1">Quantidador de Cartões</div>
              <div className="ds-fi">1</div>
              <div className="flex gap-1 mt-3">
                <div className="ds-btn-outline flex-1">← Voltar</div>
                <div className="ds-btn flex-1">🏷 Prosseguir</div>
              </div>
            </div>
          </div>
          </ScreenWrap>
        </div>

        {/* Passo 6 */}
        <div className="dist-card">
          <div className="dist-num">6</div>
          <h4 className="dist-title">Escolha bandeira e parcelamento</h4>
          <p className="dist-desc">Selecione a bandeira do cartão e a opção de crédito, à vista ou parcelado. Confira parcelas, taxas e valor cobrado. É possível dividir em até 21 vezes.</p>
          <ScreenWrap onClick={() => setModalPasso(5)}>
          <div className="dist-screen dist-screen-light">
            <div className="ds-b">
              <p className="text-[8px] font-bold text-center mb-2">SIMULAR VENDA COM DISTRIBUIDOR</p>
              <div className="text-[7px] font-semibold mb-1">Bandeira</div>
              <div className="flex gap-1 mb-2 flex-wrap">
                <span className="ds-flag" style={{color:"#1a237e"}}>VISA</span>
                <span className="ds-flag" style={{color:"#eb001b"}}>MC</span>
                <span className="ds-flag" style={{color:"#000"}}>elo</span>
                <span className="ds-flag" style={{color:"#822124"}}>Hiper</span>
                <span className="ds-flag" style={{color:"#006fcf"}}>Amex</span>
              </div>
              <div className="text-[7px] font-semibold mb-1">Forma de Pagamento</div>
              <div className="rounded border border-gray-200 p-1 mb-2">
                <p className="text-[7px] font-semibold">Crédito</p>
                <p className="text-[6px] text-gray-400">À vista ou parcelado</p>
              </div>
              <div className="space-y-0.5 text-[7px]">
                <div className="flex justify-between border-b border-gray-100 pb-0.5"><span>À Vista</span><span>R$ 10.361,62</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-0.5"><span>2x</span><span>R$ 5.273,71</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-0.5"><span>3x</span><span>R$ 3.545,72</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-0.5"><span>4x</span><span>R$ 2.678,67</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-0.5"><span>5x</span><span>R$ 2.159,50</span></div>
              </div>
              <div className="flex justify-between text-[7px] mt-1"><span>Taxa efetiva:</span><span className="font-bold">3,49%</span></div>
              <div className="flex justify-between text-[7px]"><span>Valor cobrado:</span><span className="font-bold">R$ 10.361,62</span></div>
              <div className="ds-btn mt-2">Pagar Agora</div>
            </div>
          </div>
          </ScreenWrap>
        </div>

        {/* Passo 7 */}
        <div className="dist-card">
          <div className="dist-num">7</div>
          <h4 className="dist-title">Finalize o pagamento</h4>
          <p className="dist-desc">Toque em "Pagar Agora" e peça ao cliente para aproximar, inserir ou passar o cartão na maquininha.</p>
          <ScreenWrap onClick={() => setModalPasso(6)}>
          <div className="dist-screen">
            <div className="ds-h">tá na conta ✓</div>
            <div className="ds-b flex flex-col items-center text-center py-4">
              <p className="text-sm font-bold mb-0.5" style={{ color: "#333" }}>R$ 10.361,62</p>
              <p className="text-[7px] text-gray-500 mb-3">Crédito</p>
              <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center mb-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round">
                  <path d="M8.5 16.5a5 5 0 0 1 0-9"/><path d="M11.5 18.5a8 8 0 0 1 0-13"/><path d="M14.5 20.5a11 11 0 0 1 0-17"/>
                </svg>
              </div>
              <p className="text-[7px] font-bold uppercase" style={{ color: "#d32f2f" }}>APROXIME, INSIRA OU PASSE O CARTÃO</p>
              <div className="ds-btn mt-2 text-[7px] px-4">Cancelar</div>
            </div>
          </div>
          </ScreenWrap>
        </div>
      </div>

      {/* Rodapé */}
      <div className="text-center pt-4 border-t border-gray-200">
        <p className="text-xs text-muted-foreground">Fluxo ilustrativo — Tá na Conta | Intelbras + Cappta</p>
      </div>

      {/* Modal */}
      {modalPasso !== null && <ScreenModal passo={modalPasso} onClose={() => setModalPasso(null)} />}
    </div>
  );
}
