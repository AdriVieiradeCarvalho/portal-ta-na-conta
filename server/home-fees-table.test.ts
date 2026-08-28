import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const homeSource = readFileSync(resolve(process.cwd(), "client/src/pages/Home.tsx"), "utf8");
const stylesSource = readFileSync(resolve(process.cwd(), "client/src/index.css"), "utf8");

describe("Home — tabela compacta de taxas por bandeira", () => {
  it("preserva o acordeão e sua interação acessível", () => {
    expect(homeSource).toContain('className="taxas-accordion rounded-2xl overflow-hidden"');
    expect(homeSource).toContain("onClick={() => setOpen(!open)}");
    expect(homeSource).toContain("aria-expanded={open}");
    expect(homeSource).toContain('aria-controls="taxas-por-bandeira"');
    expect(homeSource).toContain('taxas-accordion-panel ${open ? "is-open" : ""}');
  });

  it("limita o bloco a 575px e usa colunas fixas compactas", () => {
    expect(stylesSource).toContain(".taxas-accordion {");
    expect(stylesSource).toContain("width: min(100%, 575px);");
    expect(stylesSource).toContain("margin-inline: auto;");
    expect(homeSource).toContain("taxas-col-modalidade");
    expect(homeSource).toContain("taxas-col-visa");
    expect(homeSource).toContain("taxas-col-bandeira");
    expect(stylesSource).toContain(".taxas-table .taxas-col-modalidade { width: 175px; }");
    expect(stylesSource).toContain(".taxas-table .taxas-col-visa { width: 115px; }");
    expect(stylesSource).toContain(".taxas-table .taxas-col-bandeira { width: 95px; }");
  });

  it("mantém densidade legível e scroll horizontal apenas no mobile", () => {
    expect(stylesSource).toContain("font-size: 13px;");
    expect(stylesSource).toContain("line-height: 1.3;");
    expect(stylesSource).toContain("padding: 7px 10px;");
    expect(stylesSource).toContain("overflow-x: visible;");
    expect(stylesSource).toContain("width: 575px;");
    expect(stylesSource).toContain("min-width: 575px;");
    expect(stylesSource).toContain("overflow-x: auto;");
  });

  it("centraliza o cabeçalho e as células da primeira coluna", () => {
    expect(stylesSource).toContain(".taxas-table th:first-child,");
    expect(stylesSource).toContain(".taxas-table td:first-child {");
    expect(stylesSource).toContain("text-align: center;");
  });

  it("preserva cabeçalhos e dados de referência", () => {
    for (const label of ["ANTECIPADA", "Visa ou Master", "Amex", "Elo", "Hiper", "Débito", "21x", "Pix"]) {
      expect(homeSource).toContain(label);
    }
    expect(homeSource).toContain('visaMaster: "1,29%"');
    expect(homeSource).toContain('visaMaster: "19,99%"');
  });
});
