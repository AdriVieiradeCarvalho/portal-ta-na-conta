import "./passo-a-passo-solar.css";

/**
 * Componente que renderiza as 7 telas da maquininha em HTML/CSS puro.
 * O CSS usa prefixos "ps-" e "pos-" para não conflitar com Tailwind.
 * Baseado no arquivo telas-passo-a-passo-html.html fornecido.
 */
export default function PassoAPassoSolar() {
  return (
    <section className="ps-flow" aria-label="Fluxo de venda - Energia Solar na maquininha">
      <div className="ps-flow__inner">

        {/* PASSO 1 */}
        <div className="ps-step">
          <div className="ps-step__text">
            <span className="ps-step__badge" aria-hidden="true">1</span>
            <h3 className="ps-step__title">Escolha Energia Solar</h3>
            <p className="ps-step__desc">
              Na tela inicial, em &ldquo;Escolha uma opção&rdquo;, toque em
              &ldquo;Energia Solar&rdquo; &mdash; Simular, Vender e Orçamentos.
            </p>
            <span className="ps-step__hint">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5"/></svg>
              Menu inicial &rarr; Energia Solar
            </span>
          </div>
          <div className="ps-step__visual">
            <div className="pos" role="img" aria-label="Tela inicial da maquininha">
              <div className="pos__screen">
                <div className="pos__status"><div className="pos__status-left"></div><div className="pos__status-right"><span className="pos__time">14:24</span></div></div>
                <div className="pos__header"><div className="pos__header-center"><span className="pos-logo">tá na conta <svg width="17" height="13" viewBox="0 0 26 18" fill="none" aria-hidden="true"><path d="M2 9.6 8.4 15.6 24 2.4" stroke="#ffffff" strokeWidth="3.1" strokeLinecap="round" strokeLinejoin="round"/></svg></span></div></div>
                <div className="pos__body">
                  <div className="pos__section-title">Escolha uma opção</div>
                  <div className="pos-row"><div className="pos-row__main"><div className="pos-row__title">Energia Solar</div><div className="pos-row__desc">Simular, Vender e Orçamentos</div></div></div>
                  <div className="pos-row"><div className="pos-row__main"><div className="pos-row__title">Distribuição</div><div className="pos-row__desc">Vendas com Split automatizado</div></div></div>
                  <div className="pos-row"><div className="pos-row__main"><div className="pos-row__title">Outras Vendas</div><div className="pos-row__desc">Vendas simples, sem integrações</div></div></div>
                  <div className="pos-row"><div className="pos-row__main"><div className="pos-row__title">Gerenciar</div><div className="pos-row__desc">Consultar, Cancelar, Reimprimir</div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PASSO 2 */}
        <div className="ps-step ps-step--flip">
          <div className="ps-step__text">
            <span className="ps-step__badge" aria-hidden="true">2</span>
            <h3 className="ps-step__title">Selecione a opção</h3>
            <p className="ps-step__desc">
              Escolha entre &ldquo;Simular&rdquo; (calcule taxas e valores),
              &ldquo;Vender Projeto Solar&rdquo; (venda com retenção Intelbras)
              ou &ldquo;Orçamentos&rdquo; (acessar orçamentos salvos).
            </p>
            <span className="ps-step__hint">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5"/></svg>
              Para vender, toque em Vender Projeto Solar
            </span>
          </div>
          <div className="ps-step__visual">
            <div className="pos" role="img" aria-label="Tela Energia Solar">
              <div className="pos__screen">
                <div className="pos__status"><div className="pos__status-left"></div><div className="pos__status-right"><span className="pos__time">14:24</span></div></div>
                <div className="pos__header"><span className="pos__back" aria-hidden="true"><svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M15 5 8 12l7 7" stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg></span><div className="pos__header-titles"><div className="pos__header-title">Energia Solar</div><div className="pos__header-sub">Escolha uma opção</div></div></div>
                <div className="pos__body" style={{paddingTop: "10px"}}>
                  <div className="pos-row"><div className="pos-row__main"><div className="pos-row__title">Simular</div><div className="pos-row__desc">Calcule taxas e valores</div></div></div>
                  <div className="pos-row"><div className="pos-row__main"><div className="pos-row__title">Vender Projeto Solar</div><div className="pos-row__desc">Venda com retenção Intelbras</div></div></div>
                  <div className="pos-row"><div className="pos-row__main"><div className="pos-row__title">Orçamentos</div><div className="pos-row__desc">Acessar orçamentos salvos</div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PASSO 3 */}
        <div className="ps-step">
          <div className="ps-step__text">
            <span className="ps-step__badge" aria-hidden="true">3</span>
            <h3 className="ps-step__title">Informe os valores</h3>
            <p className="ps-step__desc">
              Em &ldquo;Produtos (R$)&rdquo;, informe o valor dos equipamentos.
              Em &ldquo;Serviços (R$)&rdquo;, o valor da instalação. O &ldquo;Total
              do Projeto&rdquo; é calculado automaticamente. Indique a quantidade de
              cartões e toque em &ldquo;Pagar&rdquo;.
            </p>
            <span className="ps-step__hint">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5"/></svg>
              Produtos R$ 11.000 + Serviços R$ 5.000 = R$ 16.000
            </span>
          </div>
          <div className="ps-step__visual">
            <div className="pos" role="img" aria-label="Tela de valores do projeto">
              <div className="pos__screen">
                <div className="pos__status"><div className="pos__status-left"></div><div className="pos__status-right"><span className="pos__time">14:24</span></div></div>
                <div className="pos__header"><span className="pos__back" aria-hidden="true"><svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M15 5 8 12l7 7" stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg></span><div className="pos__header-titles"><div className="pos__header-title">Projeto de Energia Solar</div><div className="pos__header-sub">Informe os valores do projeto</div></div></div>
                <div className="pos__body">
                  <div className="pos-label">Produtos (R$)</div><div className="pos-hint">Valor dos equipamentos</div><div className="pos-field">11.000,00</div>
                  <div className="pos-block"><div className="pos-label">Serviços (R$)</div><div className="pos-hint">Valor dos serviços de instalação</div><div className="pos-field">5.000,00</div></div>
                  <div className="pos-total"><span className="pos-total__label">Total do Projeto</span><span className="pos-total__value">R$ 16.000,00</span></div>
                  <div className="pos-block"><div className="pos-label">Quantidade de Cartões</div><div className="pos-field">1</div></div>
                  <div style={{marginTop: "10px"}}><div className="pos-btn">Pagar</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PASSO 4 */}
        <div className="ps-step ps-step--flip">
          <div className="ps-step__text">
            <span className="ps-step__badge" aria-hidden="true">4</span>
            <h3 className="ps-step__title">Escolha a forma de pagamento</h3>
            <p className="ps-step__desc">
              Confira o &ldquo;Valor Total&rdquo; e selecione a forma de pagamento.
              Para Pix, use a plataforma Solar. Para cartão, escolha a bandeira:
              Visa, Mastercard, Elo, Hipercard ou Amex.
            </p>
            <span className="ps-step__hint">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5"/></svg>
              Pagamento com Cartão &mdash; Escolha a Bandeira
            </span>
          </div>
          <div className="ps-step__visual">
            <div className="pos" role="img" aria-label="Tela de seleção de pagamento">
              <div className="pos__screen">
                <div className="pos__status"><div className="pos__status-left"></div><div className="pos__status-right"><span className="pos__time">14:24</span></div></div>
                <div className="pos__header"><span className="pos__back" aria-hidden="true"><svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M15 5 8 12l7 7" stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg></span><div className="pos__header-titles"><div className="pos__header-title">Projeto de Energia Solar</div><div className="pos__header-sub">Selecione a forma de pagamento</div></div></div>
                <div className="pos__body" style={{paddingTop: "7px", paddingBottom: "12px"}}>
                  <div className="pos-amount"><span className="pos-amount__label">Valor Total</span><span className="pos-amount__value">R$ 16.000,00</span></div>
                  <div className="pos-subtitle">Pagamento com Cartão — Escolha a Bandeira</div>
                  <div className="pos-brands">
                    <div className="pos-brand"><span className="pos-brand__visa">VISA</span></div>
                    <div className="pos-brand"><span className="pos-brand__mc"><i></i><i></i></span></div>
                    <div className="pos-brand"><span className="pos-brand__elo"><span className="pos-brand__elo-text">elo</span></span></div>
                    <div className="pos-brand"><span className="pos-brand__hiper">Hipercard</span></div>
                    <div className="pos-brand"><span className="pos-brand__amex"><span>AMEX</span></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PASSO 5 */}
        <div className="ps-step">
          <div className="ps-step__text">
            <span className="ps-step__badge" aria-hidden="true">5</span>
            <h3 className="ps-step__title">Confirme o orçamento</h3>
            <p className="ps-step__desc">
              Na tela &ldquo;Confirmação do Orçamento&rdquo;, preencha &ldquo;Nome do
              Cliente&rdquo; e &ldquo;Número do Projeto&rdquo; e verifique os valores.
              Confirme os dados antes de prosseguir.
            </p>
            <span className="ps-step__hint">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5"/></svg>
              Dados corretos &rarr; Prosseguir
            </span>
          </div>
          <div className="ps-step__visual">
            <div className="pos" role="img" aria-label="Tela de confirmação do orçamento">
              <div className="pos__screen">
                <div className="pos__body" style={{paddingTop: "9px", paddingBottom: "10px"}}>
                  <div className="pos-title-center">Confirmação do Orçamento</div>
                  <div className="pos-caps">DADOS DO PROJETO</div>
                  <div className="pos-box"><div className="pos-box__label">Nome do Cliente <em>*</em></div><div className="pos-box__value">João Silva</div><div className="pos-box__label" style={{marginTop: "6px"}}>Número do Projeto <em>*</em></div><div className="pos-box__value pos-box__value--bold">123</div></div>
                  <div className="pos-caps">VALORES DO PROJETO</div>
                  <div className="pos-list">
                    <div className="pos-list__item pos-list__item--blue"><span>Produtos</span><b>R$ 11.000,00</b></div>
                    <div className="pos-list__item"><span>Serviços</span><span>R$ 5.000,00</span></div>
                    <div className="pos-list__item pos-list__item--total"><span>Total</span><span>R$ 16.000,00</span></div>
                  </div>
                  <div className="pos-actions"><div className="pos-btn pos-btn--ghost">Sair</div><div className="pos-btn">Prosseguir</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PASSO 6 */}
        <div className="ps-step ps-step--flip">
          <div className="ps-step__text">
            <span className="ps-step__badge" aria-hidden="true">6</span>
            <h3 className="ps-step__title">Defina o parcelamento</h3>
            <p className="ps-step__desc">
              Selecione em quantas vezes o cliente deseja pagar e confira o resumo
              com o valor de cada parcela e o total da transação.
            </p>
            <span className="ps-step__hint">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5"/></svg>
              5x de R$ 3.455,35 &mdash; Total: R$ 17.276,75
            </span>
          </div>
          <div className="ps-step__visual">
            <div className="pos" role="img" aria-label="Tela de parcelamento">
              <div className="pos__screen">
                <div className="pos__body" style={{paddingTop: "9px", paddingBottom: "10px"}}>
                  <div className="pos-title-center">Parcelamento</div>
                  <div className="pos-brandbar"><div className="pos-brandbar__name">MASTERCARD</div><div className="pos-brandbar__q">Em quantas vezes o cliente deseja pagar?</div></div>
                  <div className="pos-inst">
                    <div className="pos-inst__opt"><b>1x</b><span>R$ 16.578</span></div>
                    <div className="pos-inst__opt"><b>2x</b><span>R$ 8.437</span></div>
                    <div className="pos-inst__opt"><b>3x</b><span>R$ 5.673</span></div>
                    <div className="pos-inst__opt"><b>4x</b><span>R$ 4.285</span></div>
                    <div className="pos-inst__opt pos-inst__opt--on"><b>5x</b><span>R$ 3.455</span></div>
                    <div className="pos-inst__opt"><b>6x</b><span>R$ 2.898</span></div>
                  </div>
                  <div className="pos-summary"><div className="pos-summary__cap">Resumo</div><div className="pos-summary__value">5x de R$ 3.455,35</div><div className="pos-summary__total">Total: R$ 17.276,75</div></div>
                  <div className="pos-actions"><div className="pos-btn pos-btn--ghost">Cancelar</div><div className="pos-btn">Pagar</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PASSO 7 */}
        <div className="ps-step">
          <div className="ps-step__text">
            <span className="ps-step__badge" aria-hidden="true">7</span>
            <h3 className="ps-step__title">Passe ou aproxime o cartão</h3>
            <p className="ps-step__desc">
              Toque em &ldquo;Pagar&rdquo;. A maquininha exibirá o valor parcelado e
              a instrução &ldquo;APROXIME, INSIRA OU PASSE O CARTÃO&rdquo; para
              concluir a venda.
            </p>
            <span className="ps-step__hint">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5"/></svg>
              Aproxime, insira ou passe o cartão
            </span>
          </div>
          <div className="ps-step__visual">
            <div className="pos" role="img" aria-label="Tela final - passe o cartão">
              <div className="pos__screen">
                <div className="pos__status"><div className="pos__status-left"></div><div className="pos__status-right"><span className="pos__time">14:26</span></div></div>
                <div className="pos__header"><div className="pos__header-center"><span className="pos-logo">tá na conta <svg width="17" height="13" viewBox="0 0 26 18" fill="none" aria-hidden="true"><path d="M2 9.6 8.4 15.6 24 2.4" stroke="#ffffff" strokeWidth="3.1" strokeLinecap="round" strokeLinejoin="round"/></svg></span></div></div>
                <div className="pos__body" style={{paddingTop: "12px", paddingBottom: "12px"}}>
                  <div className="pos-big">R$ 17.276,75</div>
                  <div className="pos-big__cap">Parcelado</div>
                  <div className="pos-instruction">APROXIME, INSIRA OU PASSE O CARTÃO</div>
                  <div style={{marginTop: "10px"}}><div className="pos-btn">Cancelar</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
