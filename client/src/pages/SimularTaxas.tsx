import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { BarChart3, Download, RefreshCw, ChevronDown, Info, CheckCircle2 } from "lucide-react";

// ─── Dados das bandeiras e taxas ───────────────────────────────────────────
const bandeiras = [
  { id: "visa", label: "Visa", color: "#1A1F71" },
  { id: "mastercard", label: "Mastercard", color: "#EB001B" },
  { id: "elo", label: "Elo", color: "#FFD700" },
  { id: "amex", label: "American Express", color: "#007BC1" },
  { id: "hipercard", label: "Hipercard", color: "#B22222" },
];

// Taxas por bandeira e parcelas (débito, crédito 1x, 2x, 3x, 4x, 5x, 6x, 7x, 8x, 9x, 10x, 11x, 12x, 13-21x)
const taxasPorBandeira: Record<string, { debito: number; credito: number[] }> = {
  visa: {
    debito: 1.49,
    credito: [2.69, 3.49, 3.69, 3.89, 4.09, 4.29, 4.49, 4.69, 4.89, 5.09, 5.29, 5.49, 5.79],
  },
  mastercard: {
    debito: 1.49,
    credito: [2.69, 3.49, 3.69, 3.89, 4.09, 4.29, 4.49, 4.69, 4.89, 5.09, 5.29, 5.49, 5.79],
  },
  elo: {
    debito: 1.59,
    credito: [2.79, 3.59, 3.79, 3.99, 4.19, 4.39, 4.59, 4.79, 4.99, 5.19, 5.39, 5.59, 5.89],
  },
  amex: {
    debito: 1.79,
    credito: [2.99, 3.79, 3.99, 4.19, 4.39, 4.59, 4.79, 4.99, 5.19, 5.39, 5.59, 5.79, 6.09],
  },
  hipercard: {
    debito: 1.69,
    credito: [2.89, 3.69, 3.89, 4.09, 4.29, 4.49, 4.69, 4.89, 5.09, 5.29, 5.49, 5.69, 5.99],
  },
};

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function formatPercent(value: number) {
  return value.toFixed(2).replace(".", ",") + "%";
}

interface SimulationRow {
  parcelas: number;
  tipo: string;
  taxa: number;
  valorTotal: number;
  valorParcela: number;
  taxaValor: number;
  valorLiquido: number;
}

export default function SimularTaxas() {
  const [valor, setValor] = useState("");
  const [bandeiraSelecionada, setBandeiraSelecionada] = useState("");
  const [simulacaoFeita, setSimulacaoFeita] = useState(false);
  const [rows, setRows] = useState<SimulationRow[]>([]);
  const [valorNumerico, setValorNumerico] = useState(0);
  const [etapa, setEtapa] = useState<"inicio" | "bandeira" | "resultado">("inicio");

  const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    const num = parseFloat(raw) / 100;
    setValor(num > 0 ? formatCurrency(num).replace("R$\u00a0", "R$ ") : "");
    setValorNumerico(num);
  };

  const handleSimular = useCallback(() => {
    if (!bandeiraSelecionada || valorNumerico <= 0) return;
    const taxas = taxasPorBandeira[bandeiraSelecionada];
    const result: SimulationRow[] = [];

    // Débito
    const taxaDebito = taxas.debito;
    const taxaValDebito = valorNumerico * (taxaDebito / 100);
    result.push({
      parcelas: 1,
      tipo: "Débito",
      taxa: taxaDebito,
      valorTotal: valorNumerico,
      valorParcela: valorNumerico,
      taxaValor: taxaValDebito,
      valorLiquido: valorNumerico - taxaValDebito,
    });

    // Crédito 1x a 12x e 13-21x
    const labels = ["1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x", "11x", "12x", "13-21x"];
    taxas.credito.forEach((taxa, idx) => {
      const nParcelas = idx < 12 ? idx + 1 : 21;
      const taxaVal = valorNumerico * (taxa / 100);
      const parcela = valorNumerico / (idx < 12 ? idx + 1 : 21);
      result.push({
        parcelas: nParcelas,
        tipo: idx === 0 ? "Crédito à vista" : `Crédito ${labels[idx]}`,
        taxa,
        valorTotal: valorNumerico,
        valorParcela: parcela,
        taxaValor: taxaVal,
        valorLiquido: valorNumerico - taxaVal,
      });
    });

    setRows(result);
    setSimulacaoFeita(true);
    setEtapa("resultado");
  }, [bandeiraSelecionada, valorNumerico]);

  const handleReset = () => {
    setValor("");
    setBandeiraSelecionada("");
    setSimulacaoFeita(false);
    setRows([]);
    setValorNumerico(0);
    setEtapa("inicio");
  };

  const handleExportar = () => {
    if (!rows.length) return;
    const bandeira = bandeiras.find(b => b.id === bandeiraSelecionada)?.label || "";
    let csv = `Simulação Tá na Conta - ${bandeira}\n`;
    csv += `Valor da Venda:;${formatCurrency(valorNumerico)}\n\n`;
    csv += `Modalidade;Parcelas;Taxa (%);Valor da Taxa;Valor Líquido;Valor da Parcela\n`;
    rows.forEach(r => {
      csv += `${r.tipo};${r.parcelas};${formatPercent(r.taxa)};${formatCurrency(r.taxaValor)};${formatCurrency(r.valorLiquido)};${formatCurrency(r.valorParcela)}\n`;
    });
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `simulacao-ta-na-conta-${bandeiraSelecionada}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-16 lg:py-20 text-white"
        style={{ background: "linear-gradient(135deg, oklch(0.20 0.10 250) 0%, oklch(0.30 0.16 250) 60%, oklch(0.40 0.18 250) 100%)" }}
      >
        <div className="container">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
              style={{ background: "oklch(1 0 0 / 0.12)", border: "1px solid oklch(1 0 0 / 0.2)" }}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              Simulador de Taxas
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Simule suas Taxas
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Calcule exatamente quanto você receberá em cada modalidade de pagamento. Transparência total, sem surpresas.
            </p>
          </div>
        </div>
      </section>

      {/* Simulador */}
      <section className="py-12 lg:py-16" style={{ background: "oklch(0.97 0.005 250)" }}>
        <div className="container max-w-4xl">

          {/* Etapa 1: Valor */}
          <div className="bg-white rounded-2xl border border-border shadow-sm p-6 lg:p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{ background: etapa !== "inicio" ? "oklch(0.55 0.20 250)" : "linear-gradient(135deg, oklch(0.30 0.16 250), oklch(0.55 0.20 250))" }}
              >
                {etapa !== "inicio" ? <CheckCircle2 className="w-4 h-4" /> : "1"}
              </div>
              <h2 className="text-lg font-bold text-foreground" style={{ fontFamily: "Sora, sans-serif" }}>
                Valor da Venda
              </h2>
            </div>
            <div className="max-w-sm">
              <label className="block text-sm font-medium text-foreground mb-2">
                Informe o valor total da venda
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium text-sm">R$</span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={valor}
                  onChange={handleValorChange}
                  placeholder="0,00"
                  className="w-full pl-9 pr-4 py-3 border border-border rounded-xl text-base font-semibold focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                  style={{ "--tw-ring-color": "oklch(0.55 0.20 250 / 0.3)" } as React.CSSProperties}
                  disabled={simulacaoFeita}
                />
              </div>
              {valorNumerico > 0 && etapa === "inicio" && (
                <Button
                  className="mt-4 text-white font-semibold"
                  style={{ background: "linear-gradient(135deg, oklch(0.30 0.16 250), oklch(0.55 0.20 250))" }}
                  onClick={() => setEtapa("bandeira")}
                >
                  Continuar
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              )}
            </div>
          </div>

          {/* Etapa 2: Bandeira */}
          {(etapa === "bandeira" || etapa === "resultado") && (
            <div className="bg-white rounded-2xl border border-border shadow-sm p-6 lg:p-8 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: etapa === "resultado" ? "oklch(0.55 0.20 250)" : "linear-gradient(135deg, oklch(0.30 0.16 250), oklch(0.55 0.20 250))" }}
                >
                  {etapa === "resultado" ? <CheckCircle2 className="w-4 h-4" /> : "2"}
                </div>
                <h2 className="text-lg font-bold text-foreground" style={{ fontFamily: "Sora, sans-serif" }}>
                  Bandeira do Cartão
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {bandeiras.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => !simulacaoFeita && setBandeiraSelecionada(b.id)}
                    disabled={simulacaoFeita}
                    className={`p-4 rounded-xl border-2 text-sm font-semibold transition-all ${
                      bandeiraSelecionada === b.id
                        ? "border-primary bg-primary/5 text-primary shadow-sm"
                        : "border-border hover:border-primary/40 text-foreground"
                    } ${simulacaoFeita ? "opacity-70 cursor-default" : "cursor-pointer"}`}
                  >
                    <div
                      className="w-6 h-4 rounded mx-auto mb-2"
                      style={{ background: b.color }}
                    />
                    {b.label}
                  </button>
                ))}
              </div>
              {bandeiraSelecionada && etapa === "bandeira" && (
                <Button
                  className="mt-6 text-white font-semibold"
                  style={{ background: "linear-gradient(135deg, oklch(0.30 0.16 250), oklch(0.55 0.20 250))" }}
                  onClick={handleSimular}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Simular Taxas
                </Button>
              )}
            </div>
          )}

          {/* Resultado */}
          {simulacaoFeita && rows.length > 0 && (
            <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
              {/* Header resultado */}
              <div
                className="p-6 text-white"
                style={{ background: "linear-gradient(135deg, oklch(0.20 0.10 250), oklch(0.30 0.16 250))" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold" style={{ fontFamily: "Sora, sans-serif" }}>
                      Resultado da Simulação
                    </h3>
                    <p className="text-white/70 text-sm mt-1">
                      {bandeiras.find(b => b.id === bandeiraSelecionada)?.label} · Valor: {formatCurrency(valorNumerico)}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/30 text-white hover:bg-white/10 font-medium"
                      onClick={handleExportar}
                    >
                      <Download className="w-4 h-4 mr-1.5" />
                      Exportar CSV
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/30 text-white hover:bg-white/10 font-medium"
                      onClick={handleReset}
                    >
                      <RefreshCw className="w-4 h-4 mr-1.5" />
                      Nova Simulação
                    </Button>
                  </div>
                </div>
              </div>

              {/* Info box */}
              <div
                className="mx-6 mt-5 p-3 rounded-lg flex items-start gap-2 text-sm"
                style={{ background: "oklch(0.30 0.16 250 / 0.05)", border: "1px solid oklch(0.30 0.16 250 / 0.15)" }}
              >
                <Info className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.30 0.16 250)" }} />
                <p style={{ color: "oklch(0.30 0.16 250)" }}>
                  Os valores apresentados são estimativas. O valor líquido é o que você receberá após a dedução das taxas.
                </p>
              </div>

              {/* Tabela */}
              <div className="overflow-x-auto p-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ borderBottom: "2px solid oklch(0.90 0.01 250)" }}>
                      <th className="text-left py-3 pr-4 font-semibold text-foreground">Modalidade</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">Taxa</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">Valor da Taxa</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">Valor Líquido</th>
                      <th className="text-right py-3 pl-4 font-semibold text-foreground">Valor da Parcela</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, idx) => (
                      <tr
                        key={idx}
                        className="transition-colors hover:bg-muted/50"
                        style={{ borderBottom: "1px solid oklch(0.94 0.005 250)" }}
                      >
                        <td className="py-3 pr-4">
                          <span className="font-medium text-foreground">{row.tipo}</span>
                        </td>
                        <td className="text-right py-3 px-4">
                          <span
                            className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold"
                            style={{ background: "oklch(0.72 0.18 55 / 0.12)", color: "oklch(0.50 0.14 55)" }}
                          >
                            {formatPercent(row.taxa)}
                          </span>
                        </td>
                        <td className="text-right py-3 px-4 text-muted-foreground">
                          {formatCurrency(row.taxaValor)}
                        </td>
                        <td className="text-right py-3 px-4">
                          <span className="font-semibold" style={{ color: "oklch(0.40 0.16 145)" }}>
                            {formatCurrency(row.valorLiquido)}
                          </span>
                        </td>
                        <td className="text-right py-3 pl-4 text-muted-foreground">
                          {row.parcelas > 1 ? formatCurrency(row.valorParcela) : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Resumo */}
              <div
                className="mx-6 mb-6 p-5 rounded-xl"
                style={{ background: "oklch(0.97 0.005 250)", border: "1px solid oklch(0.90 0.01 250)" }}
              >
                <h4 className="font-bold text-foreground mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
                  Resumo da Simulação
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Valor da Venda</p>
                    <p className="font-bold text-foreground">{formatCurrency(valorNumerico)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Bandeira</p>
                    <p className="font-bold text-foreground">{bandeiras.find(b => b.id === bandeiraSelecionada)?.label}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Menor Taxa (Débito)</p>
                    <p className="font-bold" style={{ color: "oklch(0.40 0.16 145)" }}>
                      {formatPercent(taxasPorBandeira[bandeiraSelecionada]?.debito || 0)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Máx. Parcelamento</p>
                    <p className="font-bold text-foreground">21x</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
