import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const pageSource = readFileSync(resolve(process.cwd(), "client/src/pages/Tutoriais.tsx"), "utf8");
const stylesSource = readFileSync(resolve(process.cwd(), "client/src/index.css"), "utf8");
const tutorialSource = pageSource.slice(pageSource.indexOf("function TutorialLinkPagamento()"), pageSource.indexOf("// TutorialDistribuidor importado"));

describe("Venda com Link — Interactive Vertical Stepper", () => {
  it("preserva o vídeo e renderiza as sete etapas clicáveis com preview sincronizado", () => {
    expect(tutorialSource).toContain("youtube.com/embed/oQiHxWyy8wU");
    expect(tutorialSource).toContain("const [ativoLink, setAtivoLink] = useState(0);");
    expect(tutorialSource).toContain("const [modalLink, setModalLink] = useState<number | null>(null);");
    expect(tutorialSource).toContain('aria-label="Passo a passo interativo de Venda com Link"');
    expect(tutorialSource).toContain("linkSteps = [");
    expect(tutorialSource).toContain("onClick={() => setAtivoLink(i)}");
    expect(tutorialSource).toContain("linkPreview(ativoLink)");
    expect(tutorialSource).toContain("Crie o link e copie a URL");
    expect(tutorialSource).toContain("Envie para o cliente");
    expect(tutorialSource).toContain("Gestão de Cobrança > Links de Pagamento > Cadastrar novo Link");
    expect(tutorialSource).toContain('<span className="is-active">Links de Pagamento</span>');
    expect(tutorialSource).not.toContain('<span className="is-active">Cadastrar novo Link</span>');
    expect(tutorialSource).toContain("Cadastrar Novo Link");
    expect(tutorialSource).not.toContain("Novo link de pagamento");
    expect(pageSource).toContain("style={{fontSize: '15px'}}");
    expect(tutorialSource).toContain("Estabelecimento/Documento, Nome do Produto, Valor da venda e Data de Expiração");
    expect(tutorialSource).toContain("evitando cobrança dupla e protegendo o valor líquido");
    expect(tutorialSource).toContain("URL completa ou a URL encurtada");
    expect(tutorialSource).toContain("revise os dados antes de enviar o link ao cliente");
  });

  it("mantém conteúdo integrado nos respectivos passos e a ampliação modal", () => {
    expect(tutorialSource).toContain("Taxas ao Portador: SIM");
    expect(tutorialSource).toContain("Link de pagamento criado!");
    expect(tutorialSource).toContain("Copiar URL");
    expect(tutorialSource).toContain("setModalLink(ativoLink)");
    expect(tutorialSource).toContain('className="dist-modal-overlay"');
    expect(tutorialSource).toContain('className="dist-modal-content link-modal-content"');
    expect(tutorialSource).toContain("role=\"dialog\"");
    expect(tutorialSource).toContain("3D Secure (3DS)");
  });

  it("mantém a navegação da etapa 1 horizontal e contida", () => {
    expect(tutorialSource).toContain('step === 0 ? "is-link-navigation" : ""');
    expect(tutorialSource).toContain('ativoLink === 0 ? "is-link-navigation-preview" : ""');
    expect(stylesSource).toContain("/* Venda com Link — etapa 1 reconstruída como tela horizontal de duas colunas. */");
    expect(stylesSource).toContain("grid-template-columns: 160px minmax(0, 1fr);");
    expect(stylesSource).toContain("column-gap: 20px;");
    expect(tutorialSource).not.toContain('link-preview-screen dist-screen-amp dist-screen-light');
    expect(stylesSource).toContain("white-space: nowrap;");
    expect(stylesSource).toContain("width: 488px;");
    expect(stylesSource).toContain("grid-template-columns: 112px minmax(0, 1fr);");
  });

  it("mantém card, moldura e conteúdo como uma unidade média contida", () => {
    expect(tutorialSource).toContain("link-pagamento-stepper");
    expect(tutorialSource).toContain("distribuidor-preview-stage");
    expect(tutorialSource).toContain("link-pagamento-legacy-flow");
    expect(tutorialSource).toContain("className=\"rounded-xl p-4 mb-6 flex items-start gap-3\"");
    expect(stylesSource).toContain(".link-pagamento-stepper .distribuidor-preview-stage");
    expect(stylesSource).toContain(".link-pagamento-stepper .distribuidor-preview-stage.interactive-guide-preview");
    expect(stylesSource).toContain("/* Venda com Link — unidade final: card, moldura e conteúdo sempre contidos. */");
    expect(stylesSource).toContain("width: 400px;");
    expect(stylesSource).toContain("padding: 16px;");
    expect(stylesSource).toContain("overflow: hidden;");
    expect(stylesSource).toContain(".link-pagamento-stepper .distribuidor-preview-stage.interactive-guide-preview .link-preview-screen");
    expect(stylesSource).toContain("width: 360px;");
    expect(stylesSource).toContain("max-height: none;");
    expect(stylesSource).toContain(".link-pagamento-stepper .distribuidor-preview-stage.interactive-guide-preview .distribuidor-preview-frame");
    expect(stylesSource).toContain(".link-pagamento-stepper .distribuidor-preview-stage.interactive-guide-preview .link-preview-sidebar");
    expect(stylesSource).toContain("flex: 0 0 30%;");
    expect(stylesSource).toContain("margin-inline: auto;");
    expect(stylesSource).toContain(".link-pagamento-stepper {\n  display: grid;");
    expect(stylesSource).toContain("grid-template-columns: minmax(0, 45%) minmax(0, 55%);");
    expect(stylesSource).toContain(".link-pagamento-stepper > .distribuidor-stepper-preview");
    expect(stylesSource).toContain("grid-column: 2;");
    expect(stylesSource).toContain("grid-column: 1;");
    expect(stylesSource).toContain(".link-pagamento-stepper .link-preview-screen");
    expect(stylesSource).toContain("overflow: hidden;");
    expect(stylesSource).toContain("max-width: 100%;");
    expect(stylesSource).toContain("@media (max-width: 640px)");
    expect(stylesSource).toContain(".link-pagamento-legacy-flow { display: none; }");
    expect(stylesSource).toContain(".dist-modal-overlay {");
    expect(stylesSource).toContain(".dist-modal-content {");
    expect(stylesSource).toContain("max-height: calc(100vh - 2rem);");
    expect(stylesSource).toContain("overflow: auto;");
  });
});
