import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const componentSource = readFileSync(resolve(process.cwd(), "client/src/components/TutorialSolar.tsx"), "utf8");
const stylesSource = readFileSync(resolve(process.cwd(), "client/src/index.css"), "utf8");

describe("Vertical Stepper da Venda Solar", () => {
  it("preserva as três fases e as 13 etapas no modelo interativo", () => {
    expect(componentSource).toContain('aria-label="Passo a passo interativo da Venda Solar"');
    expect(componentSource).toContain("([1, 2, 3] as const)");
    expect(componentSource).toContain("const solarSteps: SolarStep[] = [");
    expect(componentSource).toContain("numero: 1");
    expect(componentSource).toContain("numero: 13");
    expect(componentSource).toContain("Essa separação garante que você não pague imposto em duplicidade.");
    expect(componentSource).toContain("Sem isso, a liberação dos equipamentos pode atrasar.");
    expect(componentSource).toContain("A Intelbras emite a Nota Fiscal dos produtos e envia os equipamentos para o endereço do projeto.");
    expect(componentSource).toContain("aria-current={item.numero - 1 === ativo ? \"step\" : undefined}");
    expect(componentSource).not.toMatch(/className=\"solar-phase-label\"[^>]*style=.*style=/);
  });

  it("sincroniza a etapa selecionada com o preview e permite ampliação", () => {
    expect(componentSource).toContain("onClick={() => setAtivo(item.numero - 1)}");
    expect(componentSource).toContain("<SolarPreview step={step} />");
    expect(componentSource).toContain("setModalStep(step)");
    expect(componentSource).toContain("<ScreenModal passo={modalStep.numero}");
    expect(componentSource).toContain("const solarPreviewDetails: Record<number");
    expect(componentSource).toContain('compact ? "solar-device-screen" : "dist-screen-amp"');
    expect(componentSource).toContain("TelaEtapa1Detalhada compact");
    expect(componentSource).toContain("Pagamento recebido");
    expect(componentSource).toContain("Enviar comprovante");
  });

  it("aumenta diretamente a tipografia sem aplicar zoom no stepper", () => {
    expect(stylesSource).toContain("font-size: clamp(15px, 1.05vw, 16px);");
    expect(stylesSource).toContain("font-size: clamp(13px, .92vw, 14px);");
    expect(stylesSource).toContain("line-height: 1.45;");
    expect(stylesSource).toContain("font-weight: 600;");
    expect(stylesSource).toContain(".solar-phase-label");
    expect(stylesSource).toContain(".solar-step-number");
  });

  it("organiza o desktop em duas colunas e adapta o preview para tablet e mobile", () => {
    expect(stylesSource).toContain("grid-template-columns: minmax(0, 45%) minmax(0, 55%);");
    expect(stylesSource).toContain("width: min(100%, 430px);");
    expect(stylesSource).toContain("overflow: hidden;");
    expect(stylesSource).toContain(".solar-stepper-preview.interactive-guide-preview {");
    expect(stylesSource).toContain("zoom: 1.45;");
    expect(stylesSource).toContain("height: auto;");
    expect(stylesSource).toContain("max-height: none;");
    expect(stylesSource).toContain("max-width: 430px;");
    expect(stylesSource).toContain("zoom: 1.15;");
    expect(stylesSource).toContain("justify-self: center;");
    expect(stylesSource).toContain("@media (max-width: 1023px)");
    expect(stylesSource).toContain("@media (max-width: 640px)");
    expect(stylesSource).toContain("grid-template-columns: 1fr;");
    expect(componentSource).toContain('className="solar-legacy-content hidden"');
  });
});
