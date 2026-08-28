import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const homeSource = readFileSync(resolve(process.cwd(), "client/src/pages/Home.tsx"), "utf8");

describe("Home — copy da simulação", () => {
  it("menciona a Calculadora do Cidadão na explicação da simulação", () => {
    expect(homeSource).toContain(
      "Faça a simulação diretamente na maquininha, eliminando a necessidade de utilizar a Calculadora do Cidadão."
    );
    expect(homeSource).not.toContain(
      "Faça a simulação diretamente na maquininha, eliminando a necessidade de cálculos externos."
    );
  });

  it("atualiza o benefício de parcelamento com a referência ao PCI", () => {
    expect(homeSource).toContain('title: "Parcelamento em até 21x liberado pelo PCI"');
    expect(homeSource).toContain('description: "Oferecendo mais flexibilidade ao cliente final."');
    expect(homeSource).not.toContain('title: "Parcelamento em até 21x"');
    expect(homeSource).not.toContain(
      'description: "Parcelamento liberado pelo PCI, oferecendo mais flexibilidade ao cliente final."'
    );
  });

  it("remove o card fiscal selecionado e equilibra os cinco cards restantes", () => {
    expect(homeSource).not.toContain('title: "Redução da alíquota do Simples Nacional"');
    expect(homeSource).not.toContain('title: "Eficiência fiscal sobre as alíquotas do Simples Nacional"');
    expect(homeSource).not.toContain('highlight: "Simples Nacional"');
    expect(homeSource).toContain("lg:grid-cols-6");
    expect(homeSource).toContain('index === 3');
    expect(homeSource).toContain('index === 4');
    expect(homeSource).toContain('lg:col-start-2');
    expect(homeSource).toContain('lg:col-start-4');
  });
});
