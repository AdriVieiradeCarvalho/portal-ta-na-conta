import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Smartphone, Download, Settings, CheckCircle2, AlertTriangle,
  ArrowRight, ExternalLink, Mail, Eye, KeyRound, Apple, Play
} from "lucide-react";

function AttentionBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="attention-box my-4">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.60 0.16 55)" }} />
        <div className="text-sm text-foreground">{children}</div>
      </div>
    </div>
  );
}

function StepCard({ number, title, description, children }: {
  number: number;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 p-5 bg-white rounded-2xl border border-border shadow-sm">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
        style={{ background: "linear-gradient(135deg, oklch(0.35 0.18 145), oklch(0.60 0.20 145))" }}
      >
        {number}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-base text-foreground mb-1">{title}</h4>
        {description && <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>}
        {children}
      </div>
    </div>
  );
}

export default function AtivarConta() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-16 lg:py-20 text-white"
        style={{ background: "linear-gradient(135deg, oklch(0.20 0.10 145) 0%, oklch(0.35 0.18 145) 60%, oklch(0.45 0.20 145) 100%)" }}
      >
        <div className="container">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
              style={{ background: "oklch(1 0 0 / 0.12)", border: "1px solid oklch(1 0 0 / 0.2)" }}
            >
              <Smartphone className="w-3.5 h-3.5" />
              Primeiro Acesso
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Ativar Conta e Portal
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Siga o passo a passo para ativar sua conta digital e acessar o portal pela primeira vez.
            </p>
          </div>
        </div>
      </section>

      {/* Por que ativar */}
      <section className="py-12 bg-white">
        <div className="container max-w-3xl">
          <div
            className="rounded-2xl p-6 lg:p-8 border"
            style={{ background: "oklch(0.35 0.18 145 / 0.04)", borderColor: "oklch(0.35 0.18 145 / 0.15)" }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "oklch(0.35 0.18 145 / 0.12)" }}
              >
                <CheckCircle2 className="w-6 h-6" style={{ color: "oklch(0.35 0.18 145)" }} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
                  Por que ativar sua conta?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A ativação da conta digital é o primeiro passo para começar a usar o Tá na Conta. Sem ela, você não consegue receber pagamentos, acessar o portal de gestão ou utilizar a maquininha vinculada ao seu CNPJ.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Receber pagamentos de projetos",
                    "Acessar relatórios de vendas",
                    "Gerenciar cobranças recorrentes",
                    "Usar Pix e pagar boletos",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.60 0.20 145)" }} />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção I: Conta Digital */}
      <section className="py-12 lg:py-16" style={{ background: "oklch(0.97 0.005 145)" }}>
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
              style={{ background: "oklch(0.35 0.18 145)" }}
            >
              I
            </div>
            <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Sora, sans-serif" }}>
              Primeiro Acesso à Conta Digital
            </h2>
          </div>

          {/* Download */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Download className="w-5 h-5" style={{ color: "oklch(0.35 0.18 145)" }} />
              Download do Aplicativo
            </h3>
            <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
              Baixe o aplicativo <strong>Conta Cappta</strong> na loja do seu dispositivo. Pesquise por <strong>"Conta Cappta"</strong> ou use os links diretos abaixo:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="https://apps.apple.com/br/app/conta-cappta/id6447267659"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "oklch(0.15 0.02 145)" }}
                >
                  <Apple className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Disponível na</p>
                  <p className="font-semibold text-sm text-foreground">App Store (iOS)</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=br.com.cappta.digital_account"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "oklch(0.45 0.18 145)" }}
                >
                  <Play className="w-5 h-5 text-white fill-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Disponível no</p>
                  <p className="font-semibold text-sm text-foreground">Google Play (Android)</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Instalação e Ativação */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
              <Settings className="w-5 h-5" style={{ color: "oklch(0.35 0.18 145)" }} />
              Instalação e Ativação
            </h3>
            <div className="space-y-4">
              <StepCard
                number={1}
                title="Abra o aplicativo"
                description="Quando o app abrir, toque em Acessar na tela inicial."
              />
              <StepCard
                number={2}
                title="Digite seu CPF"
                description="Informe o CPF utilizado no cadastro do Tá na Conta."
              />
              <StepCard
                number={3}
                title="Toque em 'Digitar sua senha'"
                description="Selecione a opção para inserir a senha manualmente."
              />
              <StepCard
                number={4}
                title="Clique em 'É seu primeiro acesso?'"
              >
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  Essa opção aparece abaixo de "Esqueci minha senha".
                </p>
                <AttentionBox>
                  <strong>Atenção:</strong> O Token de ativação tem validade limitada. Faça o processo imediatamente após a solicitação para não expirar.
                </AttentionBox>
              </StepCard>
              <StepCard
                number={5}
                title="Verifique seu e-mail"
              >
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  Procure o e-mail enviado por{" "}
                  <span
                    className="font-mono text-xs px-2 py-0.5 rounded"
                    style={{ background: "oklch(0.96 0.005 145)", color: "oklch(0.35 0.18 145)" }}
                  >
                    noreply-contadigital@cappta.com.br
                  </span>{" "}
                  e copie o Token recebido.
                </p>
                <AttentionBox>
                  <strong>Verifique a caixa de spam</strong> caso não encontre o e-mail na caixa de entrada. O remetente é noreply-contadigital@cappta.com.br.
                </AttentionBox>
              </StepCard>
              <StepCard
                number={6}
                title="Digite o Token"
                description="Cole ou digite o Token recebido no campo indicado."
              />
              <StepCard
                number={7}
                title="Clique em Avançar"
                description="Pronto! Agora você já pode acessar a conta digital do Tá na Conta."
              />
            </div>

            <div
              className="mt-6 p-5 rounded-2xl flex items-start gap-4"
              style={{ background: "oklch(0.60 0.20 145 / 0.06)", border: "1px solid oklch(0.60 0.20 145 / 0.2)" }}
            >
              <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.60 0.20 145)" }} />
              <div>
                <p className="font-semibold text-foreground mb-1">Conta ativada com sucesso!</p>
                <p className="text-sm text-muted-foreground">
                  Agora você tem acesso à conta digital, pode receber Pix, pagar boletos e acompanhar suas vendas pelo aplicativo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção II: Portal */}
      <section className="py-12 lg:py-16 bg-white" id="portal">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
              style={{ background: "oklch(0.35 0.18 145)" }}
            >
              II
            </div>
            <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Sora, sans-serif" }}>
              Primeiro Acesso ao Portal
            </h2>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            O Portal é a interface web onde você gerencia cobranças, relatórios e configurações da sua conta. Separamos um vídeo rápido para apresentar as funções básicas.
          </p>

          <div className="space-y-4 mb-8">
            <StepCard
              number={1}
              title="Acesse o portal web"
              description="Abra o navegador e acesse o portal da Cappta com as credenciais da sua conta digital."
            />
            <StepCard
              number={2}
              title="Faça login com seu CPF/CNPJ"
              description="Use o mesmo CPF ou CNPJ cadastrado para acessar o portal."
            />
            <StepCard
              number={3}
              title="Explore o painel principal"
            >
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                No painel você encontrará: resumo de vendas, cobranças pendentes, relatórios e configurações da conta.
              </p>
            </StepCard>
          </div>

          <AttentionBox>
            <strong>Dica importante:</strong> Salve o endereço do portal nos favoritos do navegador para acessar rapidamente sempre que precisar.
          </AttentionBox>
        </div>
      </section>

      {/* Seção III: Maquininha */}
      <section className="py-12 lg:py-16" style={{ background: "oklch(0.97 0.005 145)" }} id="maquininha">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
              style={{ background: "oklch(0.35 0.18 145)" }}
            >
              III
            </div>
            <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Sora, sans-serif" }}>
              Uso da Maquininha
            </h2>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            Após ativar sua conta e receber a maquininha, siga os passos abaixo para começar a aceitar pagamentos.
          </p>

          <div className="space-y-4">
            <StepCard
              number={1}
              title="Ligue a maquininha"
              description="Pressione o botão de energia e aguarde a inicialização completa do dispositivo."
            />
            <StepCard
              number={2}
              title="Conecte à internet"
              description="Configure o Wi-Fi ou insira o chip de dados para garantir a conectividade."
            />
            <StepCard
              number={3}
              title="Faça login na maquininha"
            >
              <p className="text-sm text-muted-foreground mt-1">
                Use as credenciais fornecidas pela Cappta no momento do cadastro.
              </p>
              <AttentionBox>
                <strong>Atenção:</strong> As credenciais da maquininha são diferentes das credenciais do portal web. Guarde-as em local seguro.
              </AttentionBox>
            </StepCard>
            <StepCard
              number={4}
              title="Realize uma venda teste"
              description="Faça uma transação de valor mínimo para confirmar que tudo está funcionando corretamente."
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Quer ver como fazer uma venda na maquininha?</p>
            <Link href="/tutoriais/maquininha">
              <Button
                className="text-white font-semibold"
                style={{ background: "linear-gradient(135deg, oklch(0.35 0.18 145), oklch(0.60 0.20 145))" }}
              >
                Ver Tutorial de Vendas
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
