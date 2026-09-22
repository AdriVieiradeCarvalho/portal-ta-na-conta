import { FileCheck2 } from "lucide-react";

export default function SalesProofReminder() {
  return (
    <aside
      data-sales-proof-reminder
      aria-label="Orientação para guardar comprovantes da venda"
      className="mt-6 rounded-xl border px-4 py-4 sm:px-5 flex items-start gap-3"
      style={{
        background: "rgba(0,163,53,0.045)",
        borderColor: "rgba(0,163,53,0.18)",
      }}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: "rgba(0,163,53,0.09)" }}
      >
        <FileCheck2 className="w-4.5 h-4.5" style={{ color: "#00A335" }} />
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold text-sm text-foreground mb-1" style={{fontSize: '13px'}}>
          Venda concluída? Guarde os comprovantes
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed" style={{fontSize: '12px'}}>
          Sempre que possível, guarde os orçamentos, propostas comerciais, notas fiscais e demais evidências da negociação. Essas informações podem ser solicitadas em algumas situações para validação da transação. Como alternativa também, utilize o Termo de Transação assinado pelo cliente.
        </p>
      </div>
    </aside>
  );
}
