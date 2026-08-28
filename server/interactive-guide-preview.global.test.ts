import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const sourcePaths = [
  "client/src/pages/ConhecaSolar.tsx",
  "client/src/components/TutorialDistribuidor.tsx",
  "client/src/components/TutorialSolar.tsx",
  "client/src/pages/Tutoriais.tsx",
];
const sources = sourcePaths.map((path) => readFileSync(resolve(process.cwd(), path), "utf8"));
const cssSource = readFileSync(resolve(process.cwd(), "client/src/index.css"), "utf8");

describe("Interactive Guide Preview — regra global", () => {
  it("aplica a mesma classe aos cinco previews normais", () => {
    const usageCount = sources.reduce(
      (count, source) => count + (source.match(/interactive-guide-preview/g) ?? []).length,
      0
    );
    expect(usageCount).toBe(5);
  });

  it("define bounding box médio comum com contenção e proporção preservada", () => {
    expect(cssSource).toContain(".interactive-guide-preview {");
    expect(cssSource).toContain("--interactive-preview-max-width: 430px;");
    expect(cssSource).toContain("--interactive-preview-max-height: 520px;");
    expect(cssSource).toContain("width: min(100%, var(--interactive-preview-max-width));");
    expect(cssSource).toContain("max-width: var(--interactive-preview-max-width);");
    expect(cssSource).toContain("max-height: var(--interactive-preview-max-height);");
    expect(cssSource).toContain("overflow: hidden;");
    expect(cssSource).toContain("transform: none;");
  });

  it("mantém limites responsivos para tablet e mobile", () => {
    expect(cssSource).toContain("--interactive-preview-max-width: 400px;");
    expect(cssSource).toContain("--interactive-preview-max-height: 500px;");
    expect(cssSource).toContain("--interactive-preview-max-width: calc(100vw - 32px);");
    expect(cssSource).toContain("max-width: 100%;");
  });
});
