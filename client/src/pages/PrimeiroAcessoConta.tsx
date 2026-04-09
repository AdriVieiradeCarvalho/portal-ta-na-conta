import { Button } from "@/components/ui/button";
import {
  Smartphone, Download, Settings, CheckCircle2, AlertTriangle,
  ArrowRight, ExternalLink, Apple, Wifi, CreditCard, Info
} from "lucide-react";

function AttentionBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-4 rounded-xl p-4 border flex items-start gap-3"
      style={{ background: "oklch(0.98 0.04 55 / 0.4)", borderColor: "oklch(0.72 0.18 55 / 0.4)" }}
    >
      <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.18 55)" }} />
      <div className="text-sm text-foreground leading-relaxed">{children}</div>
    </div>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-4 rounded-xl p-4 border flex items-start gap-3"
      style={{ background: "oklch(0.30 0.16 250 / 0.05)", borderColor: "oklch(0.30 0.16 250 / 0.2)" }}
    >
      <Info className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.30 0.16 250)" }} />
      <div className="text-sm text-foreground leading-relaxed">{children}</div>
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
        style={{ background: "linear-gradient(135deg, oklch(0.30 0.16 250), oklch(0.55 0.20 250))" }}
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

export default function PrimeiroAcessoConta() {
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
              <Smartphone className="w-3.5 h-3.5" />
              Primeiro Acesso
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Ativar sua Conta Digital
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Siga o passo a passo para baixar, instalar e ativar sua conta digital Cappta — o coração financeiro do Tá na Conta.
            </p>
          </div>
        </div>
      </section>

      {/* Por que ativar */}
      <section className="py-12 bg-white">
        <div className="container max-w-3xl">
          <div
            className="rounded-2xl p-6 lg:p-8 border"
            style={{ background: "oklch(0.30 0.16 250 / 0.04)", borderColor: "oklch(0.30 0.16 250 / 0.15)" }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "oklch(0.30 0.16 250 / 0.1)" }}
              >
                <CheckCircle2 className="w-6 h-6" style={{ color: "oklch(0.30 0.16 250)" }} />
              </div>
              <div>
                <h2 className="font-bold text-lg text-foreground mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
                  Por que ativar a conta digital?
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A conta digital é onde você recebe os valores dos seus serviços. Sem ela ativada, os pagamentos ficam retidos e você não consegue acessar seus recebíveis. A ativação é simples, gratuita e leva menos de 5 minutos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparação */}
      <section className="py-10" style={{ background: "oklch(0.97 0.005 250)" }}>
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "Sora, sans-serif" }}>
            Preparação para instalação
          </h2>
          <div className="space-y-3">
            {[
              "Tenha em mãos o CPF do responsável pelo cadastro.",
              "Acesse o e-mail cadastrado — você receberá um Token de ativação.",
              "Certifique-se de ter conexão com a internet no celular.",
              "O Token tem validade curta: faça a ativação imediatamente após recebê-lo.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-border">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.20 250)" }} />
                <p className="text-sm text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section className="py-12 bg-white">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "oklch(0.30 0.16 250 / 0.1)" }}
            >
              <Download className="w-5 h-5" style={{ color: "oklch(0.30 0.16 250)" }} />
            </div>
            <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Sora, sans-serif" }}>
              Download do App
            </h2>
          </div>
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
            Para baixar sua conta digital, vá na loja de aplicativos do seu celular e pesquise por: <strong>"Conta Cappta"</strong>. Você também pode usar os links diretos abaixo:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://apps.apple.com/br/app/conta-cappta/id6447267659"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="w-full flex items-center gap-3 h-14 text-white font-semibold"
                style={{ background: "oklch(0.20 0.01 250)" }}
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-[10px] opacity-70 leading-none">Disponível na</p>
                  <p className="text-sm font-bold leading-tight">App Store (iOS)</p>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto opacity-60" />
              </Button>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=br.com.cappta.digital_account"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="w-full flex items-center gap-3 h-14 text-white font-semibold"
                style={{ background: "oklch(0.40 0.18 160)" }}
              >
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-[10px] opacity-70 leading-none">Disponível no</p>
                  <p className="text-sm font-bold leading-tight">Google Play (Android)</p>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto opacity-60" />
              </Button>
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Aguarde o download e clique em <strong>Abrir</strong> quando terminar.
          </p>
        </div>
      </section>

      {/* Instalação e Ativação */}
      <section className="py-12" style={{ background: "oklch(0.97 0.005 250)" }}>
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "oklch(0.30 0.16 250 / 0.1)" }}
            >
              <Settings className="w-5 h-5" style={{ color: "oklch(0.30 0.16 250)" }} />
            </div>
            <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Sora, sans-serif" }}>
              Instalação e Ativação
            </h2>
          </div>
          <div className="space-y-4">
            <StepCard number={1} title="Abra o app e toque em Acessar" description="Ao abrir o app Conta Cappta pela primeira vez, toque no botão Acessar na tela inicial." />
            <StepCard number={2} title="Digite o CPF do cadastro" description="Informe o CPF utilizado no momento do credenciamento." />
            <StepCard number={3} title='Toque em "Digitar sua senha"' description='Na tela de login, toque na opção "Digitar sua senha".' />
            <StepCard number={4} title='Clique em "É seu primeiro acesso?"'>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Abaixo de "Esqueci minha senha", toque em <strong>"É seu primeiro acesso?"</strong>.
              </p>
              <AttentionBox>
                O Token tem validade curta. Faça a ativação imediatamente após solicitar e receber o e-mail.
              </AttentionBox>
            </StepCard>
            <StepCard number={5} title="Localize o e-mail com o Token">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Procure no seu e-mail a mensagem enviada por{" "}
                <strong>noreply-contadigital@cappta.com.br</strong> e copie o Token recebido.
              </p>
            </StepCard>
            <StepCard number={6} title="Digite o Token" description="Cole ou digite o Token no campo indicado no app." />
            <StepCard number={7} title='Clique em "Avançar"'>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pronto! Agora você já pode acessar a conta digital do <strong>Tá na Conta</strong>!
              </p>
              <div
                className="mt-3 p-4 rounded-xl border flex items-center gap-3"
                style={{ background: "oklch(0.40 0.18 160 / 0.08)", borderColor: "oklch(0.40 0.18 160 / 0.3)" }}
              >
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "oklch(0.40 0.18 160)" }} />
                <p className="text-sm font-semibold" style={{ color: "oklch(0.30 0.18 160)" }}>
                  Conta digital ativada com sucesso!
                </p>
              </div>
            </StepCard>
          </div>
        </div>
      </section>

      {/* Informações Importantes */}
      <section className="py-12 bg-white" id="maquininha">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-8" style={{ fontFamily: "Sora, sans-serif" }}>
            Informações Importantes
          </h2>

          {/* Pix */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "oklch(0.30 0.16 250 / 0.1)" }}>
                <CreditCard className="w-5 h-5" style={{ color: "oklch(0.30 0.16 250)" }} />
              </div>
              <h3 className="font-bold text-lg text-foreground">Pix na Conta Digital</h3>
            </div>
            <AttentionBox>
              <strong>A Conta Digital também tem possibilidade de receber Pix</strong>, porém, por ser uma conta de pagamentos, há custo para entrada de valores em Pix. A taxa cobrada acompanha a taxa do débito. Retiradas da Conta Digital não têm custo.
            </AttentionBox>
          </div>

          {/* Depósito mínimo */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "oklch(0.72 0.18 55 / 0.12)" }}>
                <Info className="w-5 h-5" style={{ color: "oklch(0.55 0.15 55)" }} />
              </div>
              <h3 className="font-bold text-lg text-foreground">Depósito Mínimo</h3>
            </div>
            <InfoBox>
              Um valor mínimo de <strong>R$10,00</strong> é necessário para depósito na sua conta digital. Ou seja, você precisa acumular um movimento líquido de R$10,00, já descontando as taxas das operações, para poder receber na sua conta digital.
            </InfoBox>
          </div>

          {/* Horário */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "oklch(0.30 0.16 250 / 0.1)" }}>
                <Settings className="w-5 h-5" style={{ color: "oklch(0.30 0.16 250)" }} />
              </div>
              <h3 className="font-bold text-lg text-foreground">Horário de Pagamentos</h3>
            </div>
            <InfoBox>
              O horário dos pagamentos é das <strong>8h às 18h</strong>, porém, como boa prática, executamos os depósitos até o <strong>meio-dia</strong>.
            </InfoBox>
          </div>

          {/* Maquininha */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "oklch(0.30 0.16 250 / 0.1)" }}>
                <CreditCard className="w-5 h-5" style={{ color: "oklch(0.30 0.16 250)" }} />
              </div>
              <h3 className="font-bold text-lg text-foreground">Sua Maquininha</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Você está recebendo a maquininha mais moderna do mercado! Ela tem sistema operacional Android, alta duração de bateria e seu uso é muito intuitivo. Sua experiência vai ser como a de usar celulares Android.
            </p>
          </div>

          {/* Conexão */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "oklch(0.30 0.16 250 / 0.1)" }}>
                <Wifi className="w-5 h-5" style={{ color: "oklch(0.30 0.16 250)" }} />
              </div>
              <h3 className="font-bold text-lg text-foreground">Conexão da Maquininha</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Sua maquininha está conectada com a Vivo! Mas sugerimos sempre mantê-la configurada também ao seu Wi-Fi da loja e plano de dados do celular. Assim, você sempre terá opções de conexão, mesmo instalando painéis solares no interior do Brasil.
            </p>
            <InfoBox>
              Para configurar o Wi-Fi, toque na tela da maquininha com um "arrastar para baixo" — o mesmo movimento que você faz para acessar o Wi-Fi no seu celular Android. Siga da mesma forma que configura no seu celular.
            </InfoBox>
          </div>

          {/* Pix na maquininha */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "oklch(0.40 0.18 160 / 0.1)" }}>
                <CheckCircle2 className="w-5 h-5" style={{ color: "oklch(0.40 0.18 160)" }} />
              </div>
              <h3 className="font-bold text-lg text-foreground">Pix na Maquininha</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              A venda em Pix também está habilitada na maquininha. Usar o Pix na maquininha te dá vários benefícios:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: "Segurança", desc: "O recibo para o seu cliente sai na hora e você terá certeza de que o Pix cairá na conta correta, evitando golpes." },
                { title: "Facilidade na conciliação", desc: "As vendas constarão no Portal e os valores cairão junto com as vendas em cartão." },
                { title: "Flexibilidade", desc: "Qualquer funcionário pode fazer a venda sem precisar ter acesso à conta principal da empresa." },
                { title: "Eficiência financeira", desc: "Os valores transacionados poderão ser usados para pagar os produtos descritos na proposta comercial de energia solar." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl border border-border bg-white"
                >
                  <p className="font-semibold text-sm text-foreground mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-12 text-white"
        style={{ background: "linear-gradient(135deg, oklch(0.20 0.10 250), oklch(0.30 0.16 250))" }}
      >
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
            Próximo passo: acesse o Portal
          </h2>
          <p className="text-white/70 mb-6 text-sm">
            Com a conta ativada, acesse o portal para gerenciar suas vendas e recebíveis.
          </p>
          <a href="/primeiro-acesso/portal">
            <Button
              size="lg"
              className="font-bold text-base px-8"
              style={{ background: "linear-gradient(135deg, oklch(0.65 0.18 55), oklch(0.72 0.18 55))", color: "white" }}
            >
              Acessar o Portal
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
