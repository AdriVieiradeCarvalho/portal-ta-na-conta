import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const pageSource = readFileSync(resolve(process.cwd(), "client/src/pages/ConhecaDistribuidor.tsx"), "utf8");
const stylesSource = readFileSync(resolve(process.cwd(), "client/src/index.css"), "utf8");

describe("Conheça Distribuidor — edição tipográfica do editor visual", () => {
  it("aplica os tamanhos solicitados aos rótulos e descrições do fluxo", () => {
    expect((pageSource.match(/style=\{\{fontSize: '14px'\}\}/g) ?? []).length).toBe(8);
    expect((pageSource.match(/style=\{\{fontSize: '12px'\}\}/g) ?? []).length).toBe(8);
    expect(pageSource).toContain("Cobrança única");
    expect(pageSource).toContain("Split automático");
    expect(pageSource).toContain("NFs separadas");
  });

  it("mantém a redação atualizada do benefício de parcelamento pelo PCI", () => {
    expect(pageSource).toContain('title: "Parcelamento em até 21x liberado pelo PCI"');
    expect(pageSource).toContain('description: "Oferecendo mais flexibilidade ao cliente final."');
    expect(pageSource).not.toContain('title: "Parcelamento em até 21x"');
    expect(pageSource).not.toContain(
      'description: "Parcelamento liberado pelo PCI, oferecendo mais flexibilidade ao cliente final."'
    );
  });

  it("remove o card fiscal selecionado e reorganiza os cinco benefícios restantes", () => {
    expect(pageSource).not.toContain('title: "Redução da alíquota do Simples Nacional"');
    expect(pageSource).not.toContain('highlight: "Simples Nacional"');
    expect(pageSource).toContain("lg:grid-cols-6");
    expect(pageSource).toContain('index === 3 ? "lg:col-start-2"');
    expect(pageSource).toContain('index === 4 ? "lg:col-start-4"');
  });

  it("mantém o botão do fluxo com 16px e não cria atributos JSX duplicados", () => {
    expect(pageSource).toContain('color: "#FFFFFF", fontSize: \'16px\'');
    expect(pageSource.split("\n").some((line) => /<p[^>]*style=.*style=/.test(line))).toBe(false);
    expect(pageSource.split("\n").some((line) => /<button[^>]*style=.*style=/.test(line))).toBe(false);
  });

  it("preserva a bifurcação visual do Split entre Distribuidor e Revenda", () => {
    expect(pageSource).toContain("Bifurcação: SVG com duas setas saindo do Split");
    expect(pageSource).toContain("Distribuidor (cima) e Revenda (baixo) em paralelo");
    expect(pageSource).toContain("<p className=\"font-bold text-xs text-foreground\">Distribuidor</p>");
    expect(pageSource).toContain("<p className=\"font-bold text-xs text-foreground\">Revenda</p>");
  });

  it("integra a fotografia enviada ao gradiente verde do hero", () => {
    expect(pageSource).toContain("conheca-distribuidor-hero-image");
    expect(pageSource).toContain("/conheca-distribuidor-hero.png");
    expect(pageSource).toContain('backgroundBlendMode: "multiply"');
    expect(stylesSource).toContain(".conheca-distribuidor-hero-image {");
    expect(stylesSource).toContain("background-size: cover;");
    expect(stylesSource).toContain("opacity: .42;");
    expect(stylesSource).toContain(".conheca-distribuidor-hero-overlay {");
    expect(stylesSource).toContain("@media (min-width: 1280px)");
    expect(stylesSource).toContain("background-size: 80% auto;");
    expect(stylesSource).toContain("background-position: right 48%;");
  });
});
