import { useEffect, useRef } from "react";


/**
 * SimularTaxas — embeds the original simulator logic faithfully.
 * The simulator HTML/CSS/JS is injected into a container div via useEffect
 * so that the original vanilla JS runs exactly as in the reference HTML file.
 */
export default function SimularTaxas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ── Inject scoped CSS ──────────────────────────────────────────────────
    const styleEl = document.createElement("style");
    styleEl.id = "sim-scoped-styles";
    styleEl.textContent = `
      #sim-root{font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;color:#333}
      #sim-root *{box-sizing:border-box}
      #sim-root h1{margin:0 0 12px;color:#2c3e50;font-size:22px}
      #sim-root h2{color:#2c3e50;font-size:18px;margin:0 0 8px}
      #sim-root .row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
      #sim-root label{display:block;font-weight:600;margin-top:8px;font-size:14px}
      #sim-root input[type=number],#sim-root select{width:100%;padding:10px;border-radius:8px;border:1px solid #d0d7de;font-size:14px;background:#fff;color:#333}
      #sim-root button{padding:10px 16px;border-radius:8px;border:none;font-size:14px;cursor:pointer;font-weight:600}
      #sim-root .btn-primary{background:#27ae60;color:#fff}
      #sim-root .btn-primary:hover{background:#1e8449}
      #sim-root .btn-primary:disabled{background:#9ca3af;cursor:not-allowed}
      #sim-root .btn-secondary{background:#2980b9;color:#fff}
      #sim-root .btn-secondary:hover{background:#1f6391}
      #sim-root .card{background:#fff;border:1px solid #d0d7de;border-radius:12px;padding:16px;margin-top:16px}
      #sim-root .panel-bg{background:#ecf0f1}
      #sim-root .muted{color:#6b7280;font-size:13px}
      #sim-root table{width:100%;border-collapse:collapse;margin-top:12px;table-layout:auto}
      #sim-root th,#sim-root td{border:1px solid #d0d7de;padding:8px;text-align:center;font-size:14px}
      #sim-root th{background:#cfd8dc;font-weight:700}
      #sim-root .pill{display:inline-block;padding:2px 8px;border-radius:999px;font-size:12px;border:1px solid #d0d7de;background:#fff}
      #sim-root .grid2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
      #sim-root .btns{display:flex;gap:12px;flex-wrap:wrap}
      #sim-root .btn-line{display:flex;align-items:center;justify-content:space-between;gap:12px}
      #sim-root .btn-line.right{justify-content:flex-end}
      #sim-root .small{font-size:12px}
      #sim-root .locked{background:#fff6e5!important;border-color:#f0a500!important;color:#111827}
      #sim-root .warn{background:#fff6e5!important;border-color:#f0a500!important;color:#111827}
      #sim-root .lock-hint{margin-top:6px;font-size:12px;color:#8a5a00}
      #sim-root .badge{display:inline-block;padding:2px 8px;border-radius:999px;font-size:12px;border:1px solid}
      #sim-root .badge-lock{background:#fff6e5;border-color:#f0a500;color:#111827}
      #sim-root .badge-warn{background:#fff6e5;border-color:#f0a500;color:#111827}
      @media(max-width:680px){
        #sim-root .row{grid-template-columns:1fr}
        #sim-root .grid2{grid-template-columns:1fr}
        #sim-root .rf-table thead{position:absolute;left:-9999px;top:-9999px;height:0;overflow:hidden}
        #sim-root .rf-table,#sim-root .rf-table tbody,#sim-root .rf-table tr,#sim-root .rf-table td{display:block;width:100%}
        #sim-root .rf-table tr{margin:10px 0;border:1px solid #d0d7de;border-radius:12px;overflow:hidden;background:#fff}
        #sim-root .rf-table td{border:0;border-bottom:1px solid #d0d7de;padding:10px 12px;display:grid;grid-template-columns:48% 52%;gap:8px;text-align:left!important}
        #sim-root .rf-table td:last-child{border-bottom:0}
        #sim-root .rf-table td::before{content:attr(data-label);font-weight:600;color:#374151}
      }
    `;
    document.head.appendChild(styleEl);

    // ── Inject HTML ────────────────────────────────────────────────────────
    container.innerHTML = `
<div id="sim-root">
  <div id="pdfArea">
    <div class="card" id="blockProjeto">
      <div class="row">
        <div>
          <label>Produtos (R$)</label>
          <input type="number" id="sim-prod" step="0.01" min="0" placeholder=""/>
        </div>
        <div>
          <label>Serviços (R$)</label>
          <input type="number" id="sim-serv" step="0.01" min="0" placeholder=""/>
        </div>
      </div>
      <div class="row">
        <div>
          <label>Quantidade de cartões</label>
          <input type="number" id="sim-nCart" min="1" placeholder=""/>
        </div>
        <div>
          <label>&nbsp;</label>
          <div class="btns">
            <button type="button" class="btn-primary" id="sim-startBtn">Iniciar Simulação</button>
            <button type="button" class="btn-secondary" id="sim-restartBtn" style="display:none">Reiniciar</button>
          </div>
        </div>
      </div>
      <div class="muted" id="sim-totalProjetoInfo" style="margin-top:8px"></div>
    </div>
    <div id="sim-singleCompare" class="card" style="display:none"></div>
    <div id="sim-wizardContainer"></div>
    <div class="card" id="sim-finalResult" style="display:none"></div>
  </div>
</div>`;

    // ── Inject JS ──────────────────────────────────────────────────────────
    const scriptEl = document.createElement("script");
    scriptEl.id = "sim-script";
    scriptEl.textContent = `
(function(){
  var fmt = new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format;
  function byId(id){ return document.getElementById(id); }

  var VISA_MASTER = {1:3.49,2:5.19,3:5.99,4:6.67,5:7.39,6:7.99,7:8.79,8:9.49,9:9.99,10:10.99,11:11.59,12:12.29,13:12.64,14:12.99,15:13.99,16:14.99,17:15.99,18:16.99,19:17.99,20:18.99,21:19.99};
  var AMEX        = {1:4.29,2:5.74,3:6.54,4:7.23,5:7.94,6:8.59,7:9.39,8:9.99,9:10.64,10:11.49,11:12.09,12:12.79,13:13.26,14:14.14,15:15.14,16:16.14,17:17.14,18:18.14,19:19.14,20:20.14,21:21.14};
  var ELO         = {1:4.99,2:6.29,3:7.09,4:7.79,5:8.49,6:9.19,7:9.99,8:10.59,9:11.29,10:11.99,11:12.59,12:13.29,13:14.29,14:15.29,15:16.29,16:17.29,17:18.29,18:19.29,19:20.29,20:21.29,21:22.29};
  var HIPER = Object.assign({},ELO);
  var TAXAS = {visa:VISA_MASTER,mastercard:VISA_MASTER,amex:AMEX,elo:ELO,hiper:HIPER};

  var prodEl=byId('sim-prod'), servEl=byId('sim-serv'), nCartEl=byId('sim-nCart');
  var startBtn=byId('sim-startBtn'), restartBtn=byId('sim-restartBtn');
  var wizard=byId('sim-wizardContainer'), finalRes=byId('sim-finalResult'), singleCompare=byId('sim-singleCompare');

  var totalProjeto=0, saldoProjeto=0, totalComTaxas=0, passo=0, linhas=[];
  var nCartSel=1, isSingleMode=false, freezeFinal=false;

  function transacaoPlanilha(J5, taxaPercent){
    var M=(taxaPercent||0)/100;
    return (M>=1)?NaN:(J5/(1-M));
  }
  function cents(x){ return Math.round((x+Number.EPSILON)*100); }

  function parseField(el){
    if(el && el.type==='number'){
      var v=el.valueAsNumber;
      return (typeof v==='number'&&isFinite(v))?v:NaN;
    }
    return parseFloat(((el&&el.value)||'').trim().replace(/\\s/g,''));
  }

  function exportCSV(){
    if(isSingleMode){
      var b=(byId('sim-bandeira1')&&byId('sim-bandeira1').value)||'';
      if(!b){alert('Selecione uma bandeira antes de exportar.');return;}
      var tabela=TAXAS[b]||{};
      var J5=totalProjeto;
      var csv='Parcelas,Taxa Transação (%),Valor Maquininha/Link (R$),Parcela (R$),Taxas (R$)\\n';
      for(var n=1;n<=21;n++){
        var taxa=tabela[n]; if(taxa==null) continue;
        var trans=transacaoPlanilha(J5,taxa);
        var parc=trans/n;
        var taxas=trans-J5;
        csv+=n+'x,'+taxa.toFixed(2)+','+trans.toFixed(2)+','+parc.toFixed(2)+','+taxas.toFixed(2)+'\\n';
      }
      csv+='\\nValor do Projeto:,'+totalProjeto.toFixed(2)+'\\n';
      doDownload(csv,'Simulacao_Taxas.csv');
    } else {
      var csv2='#,Valor Base (R$),Valor Maquininha/Link (R$),Bandeira,Parcelas,Taxa (%),Valor Parcelas (R$)\\n';
      var somaTrans=0,somaParcelas=0;
      for(var i=0;i<linhas.length;i++){
        var r=linhas[i];
        somaTrans+=r.transacao; somaParcelas+=r.parcela;
        csv2+=r.idx+','+r.base.toFixed(2)+','+r.transacao.toFixed(2)+','+r.bandeira+','+r.parcelas+'x,'+r.taxaEfetiva.toFixed(2)+','+r.parcela.toFixed(2)+'\\n';
      }
      csv2+='\\nValor do Projeto:,'+totalProjeto.toFixed(2)+'\\n';
      csv2+='Valor mensal das Parcelas:,'+somaParcelas.toFixed(2)+'\\n';
      csv2+='Total com taxas:,'+somaTrans.toFixed(2)+'\\n';
      doDownload(csv2,'Simulacao_Taxas.csv');
    }
  }

  function doDownload(csv,filename){
    var blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
    var url=URL.createObjectURL(blob);
    var a=document.createElement('a');
    a.href=url; a.download=filename; a.click();
    URL.revokeObjectURL(url);
  }

  finalRes.addEventListener('click',function(e){
    if(e.target.closest('#sim-btnPDF2')||e.target.closest('#sim-btnPDF1')){ exportCSV(); }
    else if(e.target.closest('#sim-btnPDF2Back')){
      if(linhas.length>0){
        var prev=linhas.pop();
        saldoProjeto+=prev.base; totalComTaxas-=prev.transacao; passo=Math.max(0,passo-1);
        finalRes.style.display='none';
        proximoPasso({base:prev.base,bandeira:prev.bandeira,parcelas:prev.parcelas});
      }
    }
  });
  finalRes.addEventListener('pointerdown',function(e){
    if(e.target.closest('#sim-btnPDF2')||e.target.closest('#sim-btnPDF2Back')){
      freezeFinal=true; setTimeout(function(){freezeFinal=false;},500);
    }
  });

  startBtn.addEventListener('click',function(){
    var P=parseField(prodEl), S=parseField(servEl);
    var nRaw=(nCartEl.value||'').trim();
    if(!isNaN(P)&&P<0){alert('Informe um valor válido (≥ 0) para Produtos.');return;}
    if(!isNaN(S)&&S<0){alert('Informe um valor válido (≥ 0) para Serviços.');return;}
    var pVal=isNaN(P)?0:P, sVal=isNaN(S)?0:S;
    if((isNaN(P)&&isNaN(S))||(pVal<=0&&sVal<=0)){alert('Preencha pelo menos um dos campos com valor positivo.');return;}
    if(nRaw===''||!/^\\d+$/.test(nRaw)||parseInt(nRaw,10)<1){alert('Informe a quantidade de cartões (mínimo 1).');return;}
    totalProjeto=pVal+sVal;
    saldoProjeto=totalProjeto; totalComTaxas=0; passo=0; linhas=[];
    nCartSel=parseInt(nRaw,10); isSingleMode=(nCartSel===1);
    prodEl.disabled=true; servEl.disabled=true; nCartEl.disabled=true;
    byId('sim-totalProjetoInfo').textContent='Valor do Projeto: '+fmt(totalProjeto);
    startBtn.style.display='none'; restartBtn.style.display='inline-block';
    wizard.innerHTML=''; finalRes.style.display='none'; finalRes.innerHTML='';
    if(isSingleMode){renderSingleCompare();renderResumoSingle();}
    else{singleCompare.style.display='none';proximoPasso();}
  });

  restartBtn.addEventListener('click',function(){
    byId('sim-startBtn').style.display='inline-block'; restartBtn.style.display='none';
    wizard.innerHTML=''; finalRes.style.display='none'; finalRes.innerHTML='';
    singleCompare.style.display='none'; byId('sim-totalProjetoInfo').textContent='';
    prodEl.value=''; servEl.value=''; nCartEl.value='';
    prodEl.disabled=false; servEl.disabled=false; nCartEl.disabled=false;
    saldoProjeto=0; totalComTaxas=0; passo=0; linhas=[]; isSingleMode=false;
  });

  function renderSingleCompare(){
    var brands='<option value="">-- Selecione --</option><option value="visa">Visa</option><option value="mastercard">Mastercard</option><option value="elo">Elo</option><option value="hiper">Hiper</option><option value="amex">Amex</option>';
    singleCompare.style.display='block';
    singleCompare.innerHTML='<div class="grid2"><div><span class="pill">Cartão único</span></div><div class="right muted">Valor do Projeto: <strong>'+fmt(totalProjeto)+'</strong></div></div>'
      +'<div class="row"><div><label>Bandeira</label><select id="sim-bandeira1">'+brands+'</select></div>'
      +'<div><label>&nbsp;</label><div class="muted">Selecione a bandeira para listar todas as opções de 1 a 21 parcelas.</div></div></div>'
      +'<div id="sim-cmpStatus" class="muted" style="margin-top:8px">Aguardando bandeira…</div>'
      +'<div id="sim-cmpTableWrap" style="display:none">'
      +'<table id="sim-cmpTable"><thead><tr><th>Parcelas</th><th>Taxa Transação</th><th>Valor Maquininha/Link*</th><th>Parcela</th><th>Taxas</th></tr></thead><tbody></tbody></table>'
      +'<div style="margin-top:6px;font-size:12px;color:#6b7280">*Valor que será digitado na maquininha ou gerado no link de pagamento.</div>'
      +'</div>';
    var bandeiraEl=byId('sim-bandeira1');
    var cmpStatus=byId('sim-cmpStatus');
    var cmpTableWrap=byId('sim-cmpTableWrap');
    var tbody=singleCompare.querySelector('#sim-cmpTable tbody');
    function refreshTable(){
      var b=bandeiraEl.value;
      if(!b){cmpStatus.textContent='Aguardando bandeira…';cmpTableWrap.style.display='none';return;}
      var tabela=TAXAS[b]||{};
      var J5=totalProjeto;
      var rows='';
      for(var n=1;n<=21;n++){
        var taxa=tabela[n]; if(taxa==null) continue;
        var trans=transacaoPlanilha(J5,taxa);
        var parc=trans/n;
        var taxas=trans-J5;
        rows+='<tr><td>'+n+'×</td><td>'+taxa.toFixed(2)+'%</td><td>'+fmt(trans)+'</td><td>'+fmt(parc)+'</td><td>'+fmt(taxas)+'</td></tr>';
      }
      tbody.innerHTML=rows||'<tr><td colspan="5" style="text-align:center">Nenhuma taxa cadastrada.</td></tr>';
      cmpTableWrap.style.display=rows?'block':'none';
      if(rows) cmpStatus.textContent='';
    }
    bandeiraEl.addEventListener('change',refreshTable);
  }

  function renderResumoSingle(){
    finalRes.style.display='block';
    finalRes.innerHTML='<h2>Resumo Final</h2>'
      +'<div style="margin-top:8px">Como é um único cartão, a tabela acima apresenta todas as opções de 1 a 21 vezes, para a escolha da parcela que melhor se encaixa no orçamento familiar ou empresarial.<br/><br/>'
      +'<em>Lembramos que caso você esteja considerando pegar um empréstimo, a simples análise de crédito já reduz Score e que empréstimos geram endividamento (índice que é consultado por todos os bancos em várias operações financeiras). Lembramos também que as taxas em cartão são mais baratas que empréstimos bancários, não geram cobrança de IOF, e você ainda pode acumular milhas nessa operação!</em></div>'
      +'<div style="margin-top:8px;font-size:13px;color:#6b7280"><em>*Valor que será digitado na maquininha ou gerado no link de pagamento.</em></div>'
      +'<div class="btn-line right" style="margin-top:12px;display:flex;">'
      +'<button type="button" id="sim-btnPDF1" class="btn-primary" style="max-width:200px">Exportar CSV</button></div>';
    var b1=byId('sim-btnPDF1');
    if(b1) b1.addEventListener('click',exportCSV);
  }

  function proximoPasso(prefill){
    if(passo>=nCartSel){renderResumoMulti();return;}
    var isLast=(passo===nCartSel-1);
    wizard.innerHTML='<div class="card">'
      +'<div class="grid2"><div><span class="pill">Cartão '+(passo+1)+' de '+nCartSel+'</span></div>'
      +'<div class="right muted">Saldo restante: <strong id="sim-saldoTop">'+fmt(saldoProjeto)+'</strong></div></div>'
      +'<label>Valor deste cartão (R$) — saldo restante: <span class="small" style="font-weight:700">'+fmt(saldoProjeto)+'</span> <span class="small">(obrigatório)</span></label>'
      +'<input type="number" id="sim-valorDesejado" step="0.01" min="0.01" placeholder=""/>'
      +(isLast?'<div class="lock-hint"><span class="badge badge-lock">🔒 saldo restante travado</span> • Este campo usa automaticamente o saldo restante do projeto.</div>':'')
      +'<div id="sim-warnOver" class="lock-hint" style="display:none"><span class="badge badge-warn">⚠️</span> <span id="sim-warnMsg"></span></div>'
      +'<div class="row"><div><label>Bandeira</label>'
      +'<select id="sim-bandeira"><option value="">-- Selecione --</option><option value="visa">Visa</option><option value="mastercard">Mastercard</option><option value="elo">Elo</option><option value="hiper">Hiper</option><option value="amex">Amex</option></select></div>'
      +'<div><label>Parcelas</label><input type="number" id="sim-parcelas" min="1" max="21" placeholder=""/></div></div>'
      +'<div id="sim-status" class="muted" style="margin-top:8px">Preencha o Valor, a Bandeira e as Parcelas (Entre 1 e 21 vezes).</div>'
      +'<div id="sim-calc" class="card panel-bg" style="display:none">'
      +'<div class="row"><div>'
      +'<div><strong>Taxa</strong>: <span id="sim-outRate">—</span></div>'
      +'<div><strong>Transação maquininha</strong>: <span id="sim-outTrans">—</span></div>'
      +'<div><strong>Parcela</strong>: <span id="sim-outParc">—</span></div>'
      +'</div><div>'
      +'<div><strong>Taxas deste cartão</strong>: <span id="sim-outTaxas">—</span></div>'
      +'<div><strong>Saldo do Projeto (após este cartão)</strong>: <span id="sim-outSaldo">—</span></div>'
      +'<div><strong>Total com taxas</strong>: <span id="sim-outTotalComp">—</span></div>'
      +'</div></div></div>'
      +'<div class="btn-line" style="margin-top:12px">'
      +(!isLast?'<button type="button" id="sim-btnVoltar" class="btn-secondary" style="visibility:'+(passo>0?'visible':'hidden')+'">Voltar</button>':'<span></span>')
      +(isLast
        ?'<span class="small muted">Ajuste a bandeira/parcelas e veja o resumo abaixo em tempo real.</span>'
        :'<button type="button" id="sim-btnProsseguir" class="btn-primary" disabled>Prosseguir</button>')
      +'</div></div>';

    var valorDesejadoEl=byId('sim-valorDesejado');
    var bandeiraEl=byId('sim-bandeira');
    var parcelasEl=byId('sim-parcelas');
    var calcBox=byId('sim-calc');
    var outRate=byId('sim-outRate'),outTrans=byId('sim-outTrans'),outParc=byId('sim-outParc');
    var outTaxas=byId('sim-outTaxas'),outSaldo=byId('sim-outSaldo'),outTotalComp=byId('sim-outTotalComp');
    var btnVoltar=byId('sim-btnVoltar');
    var btnNext=isLast?null:byId('sim-btnProsseguir');
    var warnOver=byId('sim-warnOver'),warnMsg=byId('sim-warnMsg');

    if(isLast){
      valorDesejadoEl.value=saldoProjeto.toFixed(2);
      valorDesejadoEl.readOnly=true;
      valorDesejadoEl.classList.add('locked');
      if(warnOver) warnOver.style.display='none';
    }
    if(prefill){
      valorDesejadoEl.value=(prefill.base||'');
      bandeiraEl.value=prefill.bandeira||'';
      parcelasEl.value=prefill.parcelas||'';
    }

    function clearWarn(){
      valorDesejadoEl.classList.remove('warn');
      if(warnOver) warnOver.style.display='none';
    }
    function showWarn(msg){
      if(isLast) return;
      valorDesejadoEl.classList.add('warn');
      if(warnMsg) warnMsg.textContent=msg;
      if(warnOver) warnOver.style.display='block';
    }

    var debounceTimer=null;
    function onInputDebounced(){clearTimeout(debounceTimer);debounceTimer=setTimeout(compute,500);}

    function renderResumoPreview(lastLine){
      var html='<h2>Resumo Final</h2><table class="rf-table"><thead><tr><th>#</th><th>Valor Base</th><th>Valor Maquininha/Link*</th><th>Bandeira</th><th>Parcelas</th><th>Taxa</th><th>Valor Parcelas</th></tr></thead><tbody>';
      var somaTrans=0,somaParcelas=0,idx=0;
      for(var i=0;i<linhas.length;i++){
        var r=linhas[i]; idx++;
        somaTrans+=r.transacao; somaParcelas+=r.parcela;
        html+='<tr><td data-label="#">'+idx+'</td><td data-label="Valor Base">'+fmt(r.base)+'</td><td data-label="Valor Maquininha/Link*">'+fmt(r.transacao)+'</td><td data-label="Bandeira">'+r.bandeira[0].toUpperCase()+r.bandeira.slice(1)+'</td><td data-label="Parcelas">'+r.parcelas+'×</td><td data-label="Taxa">'+r.taxaEfetiva.toFixed(2)+'%</td><td data-label="Valor Parcelas">'+fmt(r.parcela)+'</td></tr>';
      }
      if(lastLine){
        idx++;
        somaTrans+=lastLine.transacao; somaParcelas+=lastLine.parcela;
        html+='<tr><td data-label="#">'+idx+'</td><td data-label="Valor Base">'+fmt(lastLine.base)+'</td><td data-label="Valor Maquininha/Link*">'+fmt(lastLine.transacao)+'</td><td data-label="Bandeira">'+lastLine.bandeira[0].toUpperCase()+lastLine.bandeira.slice(1)+'</td><td data-label="Parcelas">'+lastLine.parcelas+'×</td><td data-label="Taxa">'+lastLine.taxaEfetiva.toFixed(2)+'%</td><td data-label="Valor Parcelas">'+fmt(lastLine.parcela)+'</td></tr>';
      }
      html+='</tbody></table>'
        +'<div style="margin-top:6px"><em>*Valor que será digitado na maquininha.<br/><br/>Lembramos que caso você esteja considerando pegar um empréstimo, a simples análise de crédito já reduz Score e que empréstimos geram endividamento (índice que é consultado por todos os bancos em várias operações financeiras). Lembramos também que as taxas em cartão são mais baratas que empréstimos bancários, não geram cobrança de IOF, e você ainda pode acumular milhas nessa operação!</em></div>'
        +'<div class="card" style="margin-top:12px"><div><strong>Valor do projeto:</strong> '+fmt(totalProjeto)+'</div><div><strong>Valor mensal das Parcelas</strong>: '+fmt(somaParcelas)+'</div><div><strong>Total com taxas:</strong> '+fmt(somaTrans)+'</div></div>'
        +'<div class="btn-line" style="margin-top:12px;display:flex;"><button type="button" id="sim-btnPDF2Back" class="btn-secondary">Voltar</button><button type="button" id="sim-btnPDF2" class="btn-primary">Exportar CSV</button></div>';
      finalRes.innerHTML=html;
      finalRes.style.display='block';
    }

    function compute(){
      if(isLast&&freezeFinal) return;
      var val=valorDesejadoEl.valueAsNumber;
      var n=parseInt(parcelasEl.value);
      var b=bandeiraEl.value;
      var limite=saldoProjeto;
      if(!isLast&&isFinite(val)&&Math.round((val+Number.EPSILON)*100)>Math.round((limite+Number.EPSILON)*100)){
        showWarn((passo===0)?'Valor acima do valor do projeto (máximo '+fmt(limite)+').':'Valor acima do saldo restante (máximo '+fmt(limite)+').');
        if(btnNext) btnNext.disabled=true;
        calcBox.style.display='none'; finalRes.style.display='none'; return;
      } else { clearWarn(); }
      var tabela=TAXAS[b]||{};
      var taxaPercent=tabela[n];
      var ok=isFinite(val)&&val>0&&cents(val)<=cents(limite)&&b&&Number.isInteger(n)&&n>=1&&n<=21&&taxaPercent!=null;
      if(!ok){if(btnNext) btnNext.disabled=true; calcBox.style.display='none'; if(isLast) finalRes.style.display='none'; return;}
      var J5=val, trans=transacaoPlanilha(J5,taxaPercent);
      if(!isFinite(trans)||trans<=0){if(btnNext) btnNext.disabled=true; calcBox.style.display='none'; if(isLast) finalRes.style.display='none'; return;}
      var parcela=trans/n, taxas=trans-J5;
      outRate.textContent=taxaPercent.toFixed(2)+'%';
      outTrans.textContent=fmt(trans);
      outParc.textContent=fmt(parcela)+' ('+n+'×)';
      outTaxas.textContent=fmt(taxas);
      outSaldo.textContent=fmt(Math.max(saldoProjeto-J5,0));
      outTotalComp.textContent=fmt(totalComTaxas+trans);
      calcBox.style.display='block';
      if(isLast){renderResumoPreview({base:J5,bandeira:b,parcelas:n,taxaEfetiva:taxaPercent,transacao:trans,parcela:parcela,taxas:taxas});}
      else{btnNext.disabled=false;}
    }

    valorDesejadoEl.addEventListener('input',compute);
    bandeiraEl.addEventListener('change',compute);
    parcelasEl.addEventListener('input',onInputDebounced);
    parcelasEl.addEventListener('change',compute);
    if(valorDesejadoEl.value||prefill) compute();

    if(btnVoltar){
      btnVoltar.addEventListener('click',function(){
        if(linhas.length>0){
          var last=linhas.pop(); passo=Math.max(0,passo-1);
          saldoProjeto+=last.base; totalComTaxas-=last.transacao;
          finalRes.style.display='none';
          proximoPasso({base:last.base,bandeira:last.bandeira,parcelas:last.parcelas});
        } else { passo=Math.max(0,passo-1); finalRes.style.display='none'; proximoPasso(); }
      });
    }
    if(!isLast){
      btnNext.addEventListener('click',function(){
        var n=parseInt(parcelasEl.value), b=bandeiraEl.value, val=valorDesejadoEl.valueAsNumber;
        var taxaPercent=(TAXAS[b]||{})[n];
        if(!isFinite(val)||!b||!Number.isInteger(n)||taxaPercent==null) return;
        var trans=transacaoPlanilha(val,taxaPercent), parcela=trans/n;
        saldoProjeto=Math.max(saldoProjeto-val,0); totalComTaxas+=trans;
        linhas.push({idx:passo+1,base:val,bandeira:b,parcelas:n,taxaEfetiva:taxaPercent,transacao:trans,parcela:parcela,taxas:trans-val});
        passo++; proximoPasso();
      });
    }
  }

  function renderResumoMulti(){
    finalRes.style.display='block';
    var html='<h2>Resumo Final</h2><table class="rf-table"><thead><tr><th>#</th><th>Valor Base</th><th>Valor Maquininha/Link*</th><th>Bandeira</th><th>Parcelas</th><th>Taxa</th><th>Valor Parcelas</th></tr></thead><tbody>';
    var somaTrans=0,somaParcelas=0;
    for(var i=0;i<linhas.length;i++){
      var r=linhas[i]; somaTrans+=r.transacao; somaParcelas+=r.parcela;
      html+='<tr><td data-label="#">'+r.idx+'</td><td data-label="Valor Base">'+fmt(r.base)+'</td><td data-label="Valor Maquininha/Link*">'+fmt(r.transacao)+'</td><td data-label="Bandeira">'+r.bandeira[0].toUpperCase()+r.bandeira.slice(1)+'</td><td data-label="Parcelas">'+r.parcelas+'×</td><td data-label="Taxa">'+r.taxaEfetiva.toFixed(2)+'%</td><td data-label="Valor Parcelas">'+fmt(r.parcela)+'</td></tr>';
    }
    html+='</tbody></table>'
      +'<div style="margin-top:6px"><em>*Valor que será digitado na maquininha.<br/><br/>Lembramos que caso você esteja considerando pegar um empréstimo, a simples análise de crédito já reduz Score e que empréstimos geram endividamento (índice que é consultado por todos os bancos em várias operações financeiras). Lembramos também que as taxas em cartão são mais baratas que empréstimos bancários, não geram cobrança de IOF, e você ainda pode acumular milhas nessa operação!</em></div>'
      +'<div class="card" style="margin-top:12px"><div><strong>Valor do projeto:</strong> '+fmt(totalProjeto)+'</div><div><strong>Valor mensal das Parcelas</strong>: '+fmt(somaParcelas)+'</div><div><strong>Total com taxas:</strong> '+fmt(somaTrans)+'</div></div>'
      +'<div class="btn-line" style="margin-top:12px;display:flex;"><button type="button" id="sim-btnPDF2Back" class="btn-secondary">Voltar</button><button type="button" id="sim-btnPDF2" class="btn-primary">Exportar CSV</button></div>';
    finalRes.innerHTML=html;
  }
})();
    `;
    document.body.appendChild(scriptEl);

    return () => {
      const s = document.getElementById("sim-scoped-styles");
      if (s) s.remove();
      const sc = document.getElementById("sim-script");
      if (sc) sc.remove();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* Hero */}
      <section
        className="py-14 text-white"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.20 0.10 145) 0%, oklch(0.35 0.18 145) 60%, oklch(0.45 0.20 145) 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: "oklch(1 0 0 / 0.12)", border: "1px solid oklch(1 0 0 / 0.2)" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
            Simulador de Taxas
          </div>
          <h1
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Simule o pagamento
          </h1>
          <p className="text-white/80 text-base max-w-xl mx-auto leading-relaxed">
            Essa simulação serve para cartão ou para o valor que deseja colocar na maquininha. Parcelamento de 1 a 21 vezes com taxas detalhadas e possibilidade de múltiplos cartões.
          </p>
        </div>
      </section>

      {/* Simulator container */}
      <main className="flex-1 py-10 px-4">
        <div className="max-w-3xl mx-auto" ref={containerRef} />

        {/* Link planilha offline */}
        <div className="max-w-3xl mx-auto mt-8 mb-4">
          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm">
            <span className="text-2xl">📊</span>
            <div>
              <p className="text-sm font-semibold text-gray-800">Prefere trabalhar offline?</p>
              <p className="text-xs text-gray-500 mt-0.5">
                Acesse a{" "}
                <a
                  href="https://docs.google.com/spreadsheets/d/12nK4LYA5gCsHEDPZIluhaLL6RoHfy8YatRZWsoMyQow/edit?gid=0#gid=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline font-medium hover:text-blue-800"
                >
                  planilha de cálculo de taxas offline
                </a>{" "}
                para simular sem internet.
              </p>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
