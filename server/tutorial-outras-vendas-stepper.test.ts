import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const pageSource = readFileSync(resolve(process.cwd(), "client/src/pages/Tutoriais.tsx"), "utf8");
const stylesSource = readFileSync(resolve(process.cwd(), "client/src/index.css"), "utf8");
const tutorialSource = pageSource.slice(pageSource.indexOf("function TutorialMaquininha()"), pageSource.indexOf("// ─── TUTORIAL: LINK DE PAGAMENTO ───"));

describe("Outras Vendas — Interactive Vertical Stepper", () => {
  it("renderiza etapas clicáveis e mantém o conteúdo existente sincronizado", () => {
    expect(tutorialSource).toContain('const [ativoOV, setAtivoOV] = useState(0);');
    expect(tutorialSource).toContain('aria-label="Passo a passo interativo de Outras Vendas"');
    expect(tutorialSource).toContain("onClick={() => setAtivoOV(i)}");
    expect(tutorialSource).toContain("aria-current={i === ativoOV ? \"step\" : undefined}");
    expect(tutorialSource).toContain("telasAmpOV[ativoOV]()");
    expect(tutorialSource).toContain("descsOV[i]");
    expect(tutorialSource).toContain("outras-vendas-step-title");
    expect(tutorialSource).toContain("outras-vendas-step-description");
    expect(tutorialSource).toContain("Recebimento em <strong>1 dia útil</strong>");
    expect(tutorialSource).toContain('style={{fontSize: \'16px\'}}>Antes de começar: confira o valor que será cobrado</h3>');
    expect(tutorialSource).toContain('style={{fontSize: \'14px\'}}>');
    expect(tutorialSource).not.toContain('style={{fontSize: \'14px\'}} style={{fontSize: \'14px\'}}');
  });

  it("usa a mesma unidade visual ampliada, proporcional e contida das outras jornadas", () => {
    expect(tutorialSource).toContain('className="distribuidor-stepper outras-vendas-stepper max-w-6xl mx-auto mb-8"');
    expect(tutorialSource).toContain('className="distribuidor-preview-frame"');
    expect(tutorialSource).toContain('className="distribuidor-preview-stage interactive-guide-preview"');
    expect(tutorialSource).not.toContain('grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4');
    expect(stylesSource).toContain(".outras-vendas-stepper .distribuidor-preview-frame");
    expect(stylesSource).toContain(".outras-vendas-stepper .distribuidor-preview-stage");
    expect(stylesSource).toContain("overflow: hidden;");
    expect(stylesSource).toContain("zoom: var(--distribuidor-scale);");
    expect(stylesSource).toContain("max-width: 100%;");
    expect(stylesSource).toContain(".outras-vendas-stepper .outras-vendas-step-title");
    expect(stylesSource).toContain(".outras-vendas-stepper .outras-vendas-step-description");
    expect(stylesSource).toContain("font-size: clamp(15px, 1.05vw, 16px);");
  });

  it("preserva a adaptação responsiva do stepper e do preview", () => {
    expect(stylesSource).toContain(".distribuidor-stepper-preview");
    expect(stylesSource).toContain("@media (max-width: 1023px)");
    expect(stylesSource).toContain("@media (max-width: 640px)");
    expect(stylesSource).toContain("width: min(100%, calc(100vw - 32px));");
  });
});

