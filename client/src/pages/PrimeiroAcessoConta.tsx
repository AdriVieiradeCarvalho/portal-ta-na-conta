import { Button } from "@/components/ui/button";
import {
  Smartphone, Download, Settings, CheckCircle2, AlertTriangle,
  ArrowRight, ExternalLink, Apple, Info, Users, Store, ShieldAlert
} from "lucide-react";

function AttentionBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-4 rounded-xl p-4 border flex items-start gap-3"
      style={{ background: "#f0fdf4", borderColor: "rgba(0,163,53,0.25)" }}
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
      style={{ background: "oklch(0.35 0.18 145 / 0.05)", borderColor: "oklch(0.35 0.18 145 / 0.2)" }}
    >
      <Info className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.35 0.18 145)" }} />
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

const whatsappSofia = "https://api.whatsapp.com/send?phone=5511998013839&text=Oi,%20Intelig%C3%AAncia%20Artificial%20de%20Suporte";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function PrimeiroAcessoConta() {
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
              Primeiro Acesso — Conta Digital
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "Roboto, sans-serif" }}
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
            style={{ background: "oklch(0.35 0.18 145 / 0.04)", borderColor: "oklch(0.35 0.18 145 / 0.15)" }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "oklch(0.35 0.18 145 / 0.1)" }}
              >
                <CheckCircle2 className="w-6 h-6" style={{ color: "oklch(0.35 0.18 145)" }} />
              </div>
              <div>
                <h2 className="font-bold text-lg text-foreground mb-2" style={{ fontFamily: "Roboto, sans-serif" }}>
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

      {/* ⚠️ 1. Preparação para Instalação */}
      <section className="py-10" style={{ background: "oklch(0.97 0.005 145)" }}>
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "oklch(0.55 0.18 55 / 0.12)" }}
            >
              <ShieldAlert className="w-5 h-5" style={{ color: "oklch(0.55 0.18 55)" }} />
            </div>
            <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Roboto, sans-serif" }}>
              Preparação para instalação
            </h2>
          </div>

          <div
            className="rounded-2xl p-6 border"
            style={{ background: "#f0fdf4", borderColor: "rgba(0,163,53,0.30)" }}
          >
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.18 55)" }} />
              <h3 className="font-bold text-base" style={{ color: "oklch(0.40 0.15 55)" }}>
                ⚠️ Atenção! ⚠️
              </h3>
            </div>
            <div className="space-y-3 text-sm text-foreground leading-relaxed pl-9">
              <p>
                Para sua própria segurança, nossa <strong>Conta Digital salva o serial do celular instalado</strong> em nossos servidores, não permitindo o uso em outros equipamentos.
              </p>
              <p>
                Isso <strong>evita fraudes e golpes cibernéticos</strong> após a instalação.
              </p>
              <p>
                Por isso, <strong>escolha de antemão qual aparelho fará uso do aplicativo da Conta Digital</strong>, para que o seu financeiro possa realizar suas operações diárias com agilidade.
              </p>
              <div
                className="mt-3 p-3 rounded-xl border"
                style={{ background: "#f0fdf4", borderColor: "rgba(0,163,53,0.25)" }}
              >
                <p>
                  Caso precise mudar o celular que usa a Conta Digital, <strong>solicite ao nosso suporte a liberação da instalação em outro aparelho</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Download do App */}
      <section className="py-12 bg-white">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "oklch(0.35 0.18 145 / 0.1)" }}
            >
              <Download className="w-5 h-5" style={{ color: "oklch(0.35 0.18 145)" }} />
            </div>
            <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Roboto, sans-serif" }}>
              Download do App
            </h2>
          </div>
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
            Para baixar sua conta digital, vá na loja de aplicativos do seu celular e pesquise por: <strong>"Conta Cappta"</strong>. Você também pode usar os links diretos abaixo:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <a href="https://apps.apple.com/br/app/conta-cappta/id6447267659" target="_blank" rel="noopener noreferrer">
              <Button
                className="w-full flex items-center gap-3 h-14 text-white font-semibold"
                style={{ background: "oklch(0.20 0.01 145)" }}
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-[10px] opacity-70 leading-none">Disponível na</p>
                  <p className="text-sm font-bold leading-tight">App Store (iOS)</p>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto opacity-60" />
              </Button>
            </a>
            <a href="https://play.google.com/store/apps/details?id=br.com.cappta.digital_account" target="_blank" rel="noopener noreferrer">
              <Button
                className="w-full flex items-center gap-3 h-14 text-white font-semibold"
                style={{ background: "oklch(0.40 0.18 145)" }}
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

      {/* 3. Instalação e Ativação */}
      <section className="py-12" style={{ background: "oklch(0.97 0.005 145)" }}>
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "oklch(0.35 0.18 145 / 0.1)" }}
            >
              <Settings className="w-5 h-5" style={{ color: "oklch(0.35 0.18 145)" }} />
            </div>
            <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Roboto, sans-serif" }}>
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
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "oklch(0.40 0.18 145)" }} />
                <p className="text-sm font-semibold" style={{ color: "oklch(0.30 0.18 160)" }}>
                  Conta digital ativada com sucesso!
                </p>
              </div>
            </StepCard>
          </div>
        </div>
      </section>

      {/* 4. Informações Importantes da Conta */}
      <section className="py-12 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-8" style={{ fontFamily: "Roboto, sans-serif" }}>
            Informações Importantes
          </h2>

          {/* Pix na Conta Digital */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "oklch(0.35 0.18 145 / 0.1)" }}>
                <CheckCircle2 className="w-5 h-5" style={{ color: "oklch(0.35 0.18 145)" }} />
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
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(0,208,132,0.12)" }}>
                <Info className="w-5 h-5" style={{ color: "oklch(0.55 0.15 55)" }} />
              </div>
              <h3 className="font-bold text-lg text-foreground">Depósito Mínimo</h3>
            </div>
            <InfoBox>
              Um valor mínimo de <strong>R$10,00</strong> é necessário para depósito na sua conta digital. Ou seja, você precisa acumular um movimento líquido de R$10,00, já descontando as taxas das operações, para poder receber na sua conta digital.
            </InfoBox>
          </div>

          {/* Horário */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "oklch(0.35 0.18 145 / 0.1)" }}>
                <Settings className="w-5 h-5" style={{ color: "oklch(0.35 0.18 145)" }} />
              </div>
              <h3 className="font-bold text-lg text-foreground">Horário de Pagamentos</h3>
            </div>
            <InfoBox>
              O horário dos pagamentos é das <strong>8h às 18h</strong>, porém, como boa prática, executamos os depósitos até o <strong>meio-dia</strong>.
            </InfoBox>
          </div>
        </div>
      </section>

      {/* 5. Multilojas */}
      <section className="py-10" style={{ background: "oklch(0.97 0.005 145)" }}>
        <div className="container max-w-3xl">
          <div
            className="rounded-2xl p-6 border mb-4"
            style={{ background: "oklch(0.35 0.18 145 / 0.04)", borderColor: "oklch(0.35 0.18 145 / 0.2)" }}
          >
            <div className="flex items-start gap-3 mb-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "oklch(0.35 0.18 145 / 0.12)" }}
              >
                <Store className="w-5 h-5" style={{ color: "oklch(0.35 0.18 145)" }} />
              </div>
              <h3 className="font-bold text-lg text-foreground">Sua conta é Multilojas!</h3>
            </div>
            <div className="pl-12 space-y-2 text-sm text-foreground leading-relaxed">
              <p>
                Você pode ter <strong>outros CNPJs associados ao mesmo usuário de conta digital</strong>. Assim, você consegue ter a gestão financeira de todos os seus negócios em uma única conta!
              </p>
              <p>
                Para ter o Multilojas, você precisa estar com todos os seus negócios credenciados. Faça o cadastro de todos eles e peça à <strong>Sofia</strong> para uni-los!
              </p>
              <a
                href={whatsappSofia}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-lg font-semibold text-white text-xs"
                style={{ background: "oklch(0.40 0.18 145)" }}
              >
                <WhatsAppIcon />
                Falar com a Sofia
              </a>
            </div>
          </div>

          {/* 6. Multiusuários */}
          <div
            className="rounded-2xl p-6 border"
            style={{ background: "oklch(0.35 0.18 145 / 0.04)", borderColor: "oklch(0.35 0.18 145 / 0.2)" }}
          >
            <div className="flex items-start gap-3 mb-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "oklch(0.35 0.18 145 / 0.12)" }}
              >
                <Users className="w-5 h-5" style={{ color: "oklch(0.35 0.18 145)" }} />
              </div>
              <h3 className="font-bold text-lg text-foreground">Sua conta também é Multiusuários!</h3>
            </div>
            <div className="pl-12 space-y-2 text-sm text-foreground leading-relaxed">
              <p>
                Você também pode <strong>adicionar outros usuários na Conta Digital</strong> e instalar mais apps em outros celulares. Eles movimentarão a mesma conta do CNPJ credenciado.
              </p>
              <p>
                Para isso, peça também à <strong>Sofia</strong>: ela enviará um <strong>Termo de Cessão para assinatura digital</strong>. Após a assinatura, será feita a liberação de mais um usuário da conta.
              </p>
              <a
                href={whatsappSofia}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-lg font-semibold text-white text-xs"
                style={{ background: "oklch(0.40 0.18 145)" }}
              >
                <WhatsAppIcon />
                Falar com a Sofia
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-12 text-white"
        style={{ background: "linear-gradient(135deg, oklch(0.20 0.10 145), oklch(0.35 0.18 145))" }}
      >
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "Roboto, sans-serif" }}>
            Próximo passo: acesse o Portal
          </h2>
          <p className="text-white/70 mb-6 text-sm">
            Com a conta ativada, acesse o portal para gerenciar suas vendas e recebíveis.
          </p>
          <a href="/primeiro-acesso/portal">
            <Button
              size="lg"
              className="font-bold text-base px-8"
              style={{ background: "linear-gradient(135deg, #00d084, #00A335)", color: "white" }}
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
