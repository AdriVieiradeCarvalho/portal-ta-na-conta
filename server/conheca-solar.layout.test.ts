import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const pageSource = readFileSync(resolve(process.cwd(), "client/src/pages/ConhecaSolar.tsx"), "utf8");
const stylesSource = readFileSync(resolve(process.cwd(), "client/src/index.css"), "utf8");

describe("Guia Rápido da Energia Solar", () => {
  it("mantém o layout de duas colunas com a etapa à esquerda e a demonstração à direita", () => {
    expect(pageSource).toContain('className="guia-solar-layout max-w-6xl mx-auto"');
    expect(pageSource).toContain('className="guia-solar-steps lg:w-[45%] flex-shrink-0"');
    expect(pageSource).toContain('className="guia-solar-demo lg:w-[55%] flex-1');
    expect(pageSource).toContain('className="guia-solar-demo-stage interactive-guide-preview transition-all duration-300"');
  });

  it("aplica escala moderada ao mockup completo com limites de altura e largura", () => {
    expect(stylesSource).toContain("--gs-scale: 1.95;");
    expect(stylesSource).toContain("zoom: var(--gs-scale);");
    expect(stylesSource).toContain("transform: none;");
    expect(stylesSource).toContain("width: min(calc(180px * var(--gs-scale)), 100%);");
    expect(stylesSource).toContain("max-height: min(560px, 72vh);");
    expect(stylesSource).toContain("overflow: hidden;");
    expect(stylesSource).toContain("height: auto;");
    expect(stylesSource).toContain("max-height: none;");
    expect(stylesSource).toContain(".guia-solar-demo-stage.interactive-guide-preview {");
    expect(stylesSource).toContain("--gs-scale: 1.95;");
    expect(stylesSource).toContain("--gs-scale: 1.72;");
    expect(stylesSource).toContain("--gs-scale: min(1.68, calc((100vw - 48px) / 180px));");
    expect(stylesSource).toContain("flex: 0 0 auto;");
    expect(stylesSource).toContain("min-height: fit-content;");
    expect(stylesSource).toContain(".guia-solar-demo-stage.interactive-guide-preview .gs-screen");
  });

  it("reduz proporcionalmente no tablet e preserva o comportamento responsivo no mobile", () => {
    expect(stylesSource).toContain("--gs-scale: 1.72;");
    expect(stylesSource).toContain("max-height: min(500px, 68vh);");
    expect(stylesSource).toContain("--gs-scale: min(1.68, calc((100vw - 48px) / 180px));");
    expect(stylesSource).toContain("width: min(100%, calc(180px * var(--gs-scale)));");
    expect(stylesSource).toContain("max-width: 100%;");
    expect(stylesSource).toContain("min-height: 0;");
  });

  it("restaura a expansão por clique do preview e mantém o modal acessível", () => {
    expect(pageSource).toContain("const [modalPasso, setModalPasso] = useState<number | null>(null);");
    expect(pageSource).toContain('className="guia-solar-demo-trigger"');
    expect(pageSource).toContain("onClick={() => setModalPasso(ativo)}");
    expect(pageSource).toContain('aria-label={`Ampliar visual da etapa ${ativo + 1}`}');
    expect(pageSource).toContain('role="dialog" aria-modal="true"');
    expect(pageSource).toContain("GuiaSolarModal passo={modalPasso}");
  });

  it("preserva a alteração tipográfica de 16px sem atributos JSX duplicados", () => {
    expect(pageSource).toContain('style={{ fontSize: "16px" }}');
    expect(pageSource).not.toContain('style={{fontSize: \'16px\'}} style=');
    expect((pageSource.match(/style=\{\{ fontSize: "16px" \}\}/g) ?? []).length).toBe(1);
  });
});
