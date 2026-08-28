import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const componentSource = readFileSync(resolve(process.cwd(), "client/src/components/TutorialDistribuidor.tsx"), "utf8");
const stylesSource = readFileSync(resolve(process.cwd(), "client/src/index.css"), "utf8");

describe("Venda com o Distribuidor — Vertical Stepper", () => {
  it("renderiza etapas clicáveis e preview sincronizado", () => {
    expect(componentSource).toContain('className="distribuidor-stepper max-w-6xl mx-auto mb-8"');
    expect(componentSource).toContain('onClick={() => setAtivo(i)}');
    expect(componentSource).toContain('aria-current={i === ativo ? "step" : undefined}');
    expect(componentSource).toContain('const TelaAtiva = telasAmp[ativo];');
    expect(componentSource).toContain('dist-screen-step4');
    expect(componentSource).toContain("{i === ativo && <p className=\"text-xs");
  });

  it("mantém a divisão aproximada de 45% e 55%", () => {
    expect(componentSource).toContain('className="distribuidor-stepper-steps lg:w-[45%] flex-shrink-0"');
    expect(componentSource).toContain('className="distribuidor-stepper-preview lg:w-[55%] flex-1');
  });

  it("aplica a tipografia ampliada sem duplicar atributos JSX", () => {
    expect(componentSource).toContain('style={{ fontSize: "16px" }}');
    expect(componentSource).toContain("style={{fontSize: '14px'}}");
    expect(componentSource).not.toMatch(/<p[^>]*className=\{`font-semibold text-sm leading-tight[^>]*style=.*style=/);
    expect(componentSource).not.toMatch(/<h3[^>]*className=\"font-bold text-sm[^>]*style=.*style=/);
  });

  it("escala a tela completa e adapta o preview para tablet e mobile", () => {
    expect(stylesSource).toContain("--distribuidor-scale: 1.9;");
    expect(stylesSource).toContain("zoom: var(--distribuidor-scale);");
    expect(stylesSource).toContain("width: min(100%, 440px);");
    expect(stylesSource).toContain("max-height: 660px;");
    expect(stylesSource).toContain("overflow: hidden;");
    expect(stylesSource).toContain("--distribuidor-scale: 1.55;");
    expect(stylesSource).toContain("--distribuidor-scale: min(1.45, calc((100vw - 72px) / 200px));");
    expect(stylesSource).toContain("border: 1px solid rgba(0,163,53,0.22);");
    expect(stylesSource).toContain("border-radius: 14px;");
    expect(stylesSource).toContain("zoom: calc(var(--distribuidor-scale) * 0.88);");
    expect(stylesSource).toContain(".distribuidor-legacy-flow {\n  display: none;\n}");
  });
});
