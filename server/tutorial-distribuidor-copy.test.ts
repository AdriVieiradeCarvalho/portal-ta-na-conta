import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const componentSource = readFileSync(
  resolve(process.cwd(), "client/src/components/TutorialDistribuidor.tsx"),
  "utf8"
);

describe("Tutorial Distribuidor — textos introdutórios", () => {
  it("mantém o texto introdutório simplificado", () => {
    expect(componentSource).toContain(
      "Confira abaixo os modelos de venda integrada com o Distribuidor usando a maquininha Tá na Conta."
    );
    expect(componentSource).not.toContain(
      "O split pode ser feito diretamente pela maquininha e o Distribuidor é notificado automaticamente."
    );
  });

  it("mantém o aviso atualizado com tipografia de 16px", () => {
    expect(componentSource).toContain(
      "O split com o Distribuidor pode ser feito diretamente pela maquininha. O Distribuidor é notificado automaticamente sempre que um split for realizado."
    );
    expect(componentSource).toContain('style={{fontSize: \'16px\'}}');
    expect(componentSource).not.toContain("sempre que um split for gerado.");
  });

  it("mantém o preview com altura natural para não cortar nenhuma etapa", () => {
    const stylesSource = readFileSync(resolve(process.cwd(), "client/src/index.css"), "utf8");
    expect(stylesSource).toContain(".interactive-guide-preview");
    expect(stylesSource).toContain("height: auto;");
    expect(stylesSource).toContain("max-height: none;");
    expect(stylesSource).toContain("overflow: hidden;");
  });

  it("mantém os documentos atualizados nos previews ampliado e compacto", () => {
    for (const documento of [
      "012.000.314-00",
      "011.000.311-10",
      "012.000.322-00",
      "011.222.111-10",
    ]) {
      expect(componentSource).toContain(documento);
    }
    expect(componentSource).not.toContain("013.477.325-00");
    expect(componentSource).not.toContain("013.477.325-10");
    expect(componentSource).toContain(
      "Split Distribuidor — DEMONSTRAÇÃO DISTR. 2 — 011.222.111-10"
    );
    expect(componentSource).toContain(
      "<span>CNPJ</span><span>011.222.111-10</span>"
    );
  });

  it("não introduz atributos style duplicados nos parágrafos alterados", () => {
    expect(componentSource).not.toMatch(/style=\{\{[^}]*\}\}\s+style=/);
  });
});
