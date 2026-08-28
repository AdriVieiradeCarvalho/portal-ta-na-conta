import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const pageSource = readFileSync(resolve(process.cwd(), "client/src/pages/PrimeiroAcessoMaquininha.tsx"), "utf8");
const stylesSource = readFileSync(resolve(process.cwd(), "client/src/index.css"), "utf8");
const stepperSource = pageSource.slice(pageSource.indexOf("const configDistribuidor = ["), pageSource.indexOf("// Taxas por bandeira"));

describe("Primeiro Acesso — Configuração Inicial compacta", () => {
  it("mantém os dois fluxos e todos os textos instrucionais", () => {
    expect(stepperSource).toContain("const configDistribuidor = [");
    expect(stepperSource).toContain("const configSolar = [");
    expect(stepperSource).toContain("const configDistribuidorTitulos = [");
    expect(stepperSource).toContain("const configSolarTitulos = [");
    expect(stepperSource).toContain("Você irá receber sua maquininha desligada");
    expect(stepperSource).toContain("Selecione os distribuidores que deseja marcar como favoritos");
    expect(stepperSource).toContain("Em 'Produtos Vendidos', aparecerão as unidades de negócio");
    expect(stepperSource).toContain("Pronto! Sua maquininha está pronta para vender!");
    expect(stepperSource).toContain("Recebeu sua maquininha do Tá na Conta?");
  });

  it("renderiza uma única etapa ativa com progresso e índice secundário expansível", () => {
    expect(stepperSource).toContain('const [passoAtivo, setPassoAtivo] = useState(0);');
    expect(stepperSource).toContain('const [indiceAberto, setIndiceAberto] = useState(false);');
    expect(stepperSource).toContain('const etapaAtual = etapas[passoAtivo] ?? etapas[0];');
    expect(stepperSource).toContain('aria-label={`Progresso: etapa ${passoAtivo + 1} de ${etapas.length}`}');
    expect(stepperSource).toContain("className=\"config-stepper-index-toggle\"");
    expect(stepperSource).toContain("aria-expanded={indiceAberto}");
    expect(stepperSource).toContain("Ver todas as etapas");
    expect(stepperSource).toContain("className=\"config-stepper-index\"");
    expect(stepperSource).not.toContain("{etapas.map((texto, idx) => (");
  });

  it("oferece navegação anterior/próxima, seleção direta e conclusão do fluxo", () => {
    expect(stepperSource).toContain("const irParaPasso = (novoPasso: number) => {");
    expect(stepperSource).toContain("onClick={() => irParaPasso(idx)}");
    expect(stepperSource).toContain("onClick={() => irParaPasso(passoAtivo - 1)}");
    expect(stepperSource).toContain("onClick={() => irParaPasso(passoAtivo + 1)}");
    expect(stepperSource).toContain("Próxima etapa →");
    expect(stepperSource).toContain("✓ Concluir configuração");
    expect(stepperSource).toContain("Configuração concluída");
    expect(stepperSource).toContain("Rever etapas");
    expect(stepperSource).toContain("maiorPassoVisitado");
  });

  it("preserva a composição visual e a responsividade em todos os tamanhos", () => {
    expect(stylesSource).toContain(".config-stepper-root");
    expect(stylesSource).toContain(".config-stepper-progress-track span");
    expect(stylesSource).toContain(".config-stepper-index");
    expect(stylesSource).toContain("font-size: clamp(16px, 1.45vw, 18px);");
    expect(stylesSource).toContain("font-size: clamp(14px, 1.1vw, 15px);");
    expect(stylesSource).toContain("@media (max-width: 640px)");
    expect(stylesSource).toContain(".config-stepper-navigation { align-items: stretch; flex-direction: column-reverse; }");
    expect(stylesSource).toContain(".config-stepper-primary,\n  .config-stepper-secondary { width: 100%; }");
  });
});
