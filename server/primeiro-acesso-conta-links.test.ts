import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const pageSource = readFileSync(resolve(process.cwd(), "client/src/pages/PrimeiroAcessoConta.tsx"), "utf8");

describe("Primeiro Acesso Conta — links de download", () => {
  it("direciona para os aplicativos corretos em abertura segura", () => {
    expect(pageSource).toContain("https://apps.apple.com/br/app/conta-digital-cappta-developer/id6790394167");
    expect(pageSource).toContain("https://play.google.com/store/apps/details?id=br.com.newapp.cappta.digital_account");
    expect((pageSource.match(/target="_blank" rel="noopener noreferrer"/g) ?? []).length).toBeGreaterThanOrEqual(2);
  });

  it("não mantém os links antigos", () => {
    expect(pageSource).not.toContain("https://apps.apple.com/br/app/conta-cappta/id6447267659");
    expect(pageSource).not.toContain("https://play.google.com/store/apps/details?id=br.com.cappta.digital_account");
  });
});

