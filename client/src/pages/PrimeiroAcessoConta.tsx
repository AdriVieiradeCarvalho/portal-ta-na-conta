import { Button } from "@/components/ui/button";
import {
  Smartphone, Download, Settings, CheckCircle2, AlertTriangle,
  ArrowRight, ExternalLink, Apple, Info, Users, Store, ShieldAlert, Star
} from "lucide-react";

function AttentionBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-4 rounded-xl p-4 border flex items-start gap-3"
      style={{ background: "#f0fdf4", borderColor: "rgba(0,163,53,0.25)" }}
    >
      <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#00A335" }} />
      <div className="text-sm text-foreground leading-relaxed">{children}</div>
    </div>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-4 rounded-xl p-4 border flex items-start gap-3"
      style={{ background: "rgba(0,208,132,0.07)", borderColor: "rgba(0,163,53,0.20)" }}
    >
      <Info className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#00A335" }} />
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
        style={{ background: "linear-gradient(135deg, #00A335, #00d084)", color: "#FFFFFF" }}
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

const whatsappSuporteLink = "https://wa.me/5511974409760?text=Ol%C3%A1%2C%20preciso%20de%20suporte%20t%C3%A9cnico%20para%20o%20T%C3%A1%20na%20Conta.";

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
        style={{ background: "linear-gradient(135deg, #003318 0%, #00A335 60%, #00d084 100%)" }}
      >
        <div className="container">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <Smartphone className="w-3.5 h-3.5" />
              Primeiro Acesso — Conta Digital
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ative sua Conta Digital!
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              A ativação é simples, gratuita e leva menos de 5 minutos. Sem a conta ativada, os pagamentos ficam retidos e você não consegue acessar seus recebíveis.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Download do App — PRIMEIRO BLOCO ─── */}
      <section className="py-12 bg-white">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(0,163,53,0.10)" }}
            >
              <Download className="w-5 h-5" style={{ color: "#00A335" }} />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              Baixe o app da Conta Digital
            </h2>
          </div>
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
            Na loja de aplicativos do seu celular, pesquise por: <strong>"Conta Cappta"</strong>. Você também pode usar os links diretos abaixo:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <a href="https://apps.apple.com/br/app/conta-digital-cappta-developer/id6790394167" target="_blank" rel="noopener noreferrer">
              <Button
                className="w-full flex items-center gap-3 h-14 font-semibold"
                style={{ background: "#003318", color: "#FFFFFF" }}
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-[10px] opacity-70 leading-none">Disponível na</p>
                  <p className="text-sm font-bold leading-tight">App Store (iOS)</p>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto opacity-60" />
              </Button>
            </a>
            <a href="https://play.google.com/store/apps/details?id=br.com.newapp.cappta.digital_account" target="_blank" rel="noopener noreferrer">
              <Button
                className="w-full flex items-center gap-3 h-14 font-semibold"
                style={{ background: "#00A335", color: "#FFFFFF" }}
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
            Aguarde o download e toque em <strong>Abrir</strong> quando terminar.
          </p>
        </div>
      </section>

      {/* ─── Benefícios da Conta Digital ─── */}
      <section className="py-10" style={{ background: "#f5faf7" }}>
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,163,53,0.10)" }}>
              <Star className="w-5 h-5" style={{ color: "#00A335" }} />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Por que ter a Conta Digital?</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: <CheckCircle2 className="w-5 h-5" />, title: "Receba em 1 dia útil", desc: "O valor dos seus serviços cai na conta no próximo dia útil após a venda." },
              { icon: <Smartphone className="w-5 h-5" />, title: "Pix e boletos", desc: "Realize transferências, pague boletos e receba via Pix direto pelo app." },
              { icon: <Store className="w-5 h-5" />, title: "Multi-empresas", desc: "Gerencie vários CNPJs em uma única conta. Ideal para quem tem mais de uma empresa." },
              { icon: <Users className="w-5 h-5" />, title: "Multi-usuários", desc: "Adicione colaboradores à conta com acesso controlado e seguro." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-5 border border-border flex items-start gap-3 shadow-sm">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,163,53,0.08)" }}>
                  <span style={{ color: "#00A335" }}>{item.icon}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Preparação para Instalação ─── */}
      <section className="py-10 bg-white">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,163,53,0.08)" }}>
              <ShieldAlert className="w-5 h-5" style={{ color: "#00A335" }} />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Antes de instalar: atenção!</h2>
          </div>
          <div className="rounded-2xl p-6 border" style={{ background: "#f0fdf4", borderColor: "rgba(0,163,53,0.30)" }}>
            <div className="space-y-3 text-sm text-foreground leading-relaxed">
              <p>
                A <strong>Conta Digital salva o serial do celular instalado</strong> em nossos servidores, não permitindo o uso em outros equipamentos. Isso <strong>evita fraudes e golpes cibernéticos</strong>.
              </p>
              <p>
                <strong>Escolha de antemão qual aparelho usará o app da Conta Digital</strong> para que seu financeiro possa operar com agilidade no dia a dia.
              </p>
              <div className="mt-3 p-3 rounded-xl border" style={{ background: "white", borderColor: "rgba(0,163,53,0.20)" }}>
                <p>
                  Caso precise trocar de celular, <strong>solicite ao Suporte a liberação da instalação em outro aparelho</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Instalação e Ativação ─── */}
      <section className="py-12" style={{ background: "#f5faf7" }}>
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,163,53,0.10)" }}>
              <Settings className="w-5 h-5" style={{ color: "#00A335" }} />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Instalação e Ativação</h2>
          </div>
          <div className="space-y-4">
            <StepCard
              number={1}
              title="Abra o app, toque em Acessar e insira seu CPF e senha"
              description='Ao abrir o app "Conta Cappta" pela primeira vez, toque em Acessar. Informe o CPF utilizado no credenciamento e toque em "Digitar sua senha".'
            />
            <StepCard number={2} title='Toque em "É seu primeiro acesso?"'>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Abaixo de "Esqueci minha senha", toque em <strong>"É seu primeiro acesso?"</strong> para iniciar a ativação.
              </p>
              <AttentionBox>
                O Token tem validade curta. Faça a ativação <strong>imediatamente</strong> após solicitar e receber o e-mail.
              </AttentionBox>
            </StepCard>
            <StepCard number={3} title="Localize o e-mail com o Token e cole no app">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Procure no seu e-mail a mensagem de <strong>noreply-contadigital@cappta.com.br</strong>. Copie o Token recebido, cole no campo indicado no app e toque em <strong>Avançar</strong>.
              </p>
            </StepCard>
            <div className="flex gap-4 p-5 bg-white rounded-2xl border border-border shadow-sm">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #00A335, #00d084)", color: "#FFFFFF" }}
              >
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-base text-foreground mb-1" style={{ color: "#00A335" }}>
                  Conta Digital ativada com sucesso!
                </h4>
                <p className="text-sm text-muted-foreground">
                  Agora você já pode acessar a Conta Digital do <strong>Tá na Conta</strong> e gerenciar seus recebíveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Informações Importantes ─── */}
      <section className="py-12 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">Informações Importantes</h2>

          {/* Pix na Conta Digital */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(0,163,53,0.10)" }}>
                <CheckCircle2 className="w-5 h-5" style={{ color: "#00A335" }} />
              </div>
              <h3 className="font-bold text-lg text-foreground">Pix na Conta Digital</h3>
            </div>
            <AttentionBox>
              <strong>A Conta Digital aceita recebimento via Pix</strong>, porém, por ser uma conta de pagamentos, há custo de <strong>2%</strong> para entrada de valores via Pix. Retiradas da Conta Digital não têm custo.
            </AttentionBox>
          </div>

          {/* Depósito mínimo */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(0,208,132,0.12)" }}>
                <Info className="w-5 h-5" style={{ color: "#00A335" }} />
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
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(0,163,53,0.10)" }}>
                <Settings className="w-5 h-5" style={{ color: "#00A335" }} />
              </div>
              <h3 className="font-bold text-lg text-foreground">Horário de Pagamentos</h3>
            </div>
            <InfoBox>
              O horário dos pagamentos é das <strong>8h às 18h</strong>. Como boa prática, os depósitos são executados até o <strong>meio-dia</strong>.
            </InfoBox>
          </div>
        </div>
      </section>

      {/* ─── Controle Multi-empresas e Multi-usuários ─── */}
      <section className="py-10" style={{ background: "#f5faf7" }}>
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,163,53,0.10)" }}>
              <Store className="w-5 h-5" style={{ color: "#00A335" }} />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Controle Multi-empresas e Multi-usuários</h2>
          </div>

          {/* Multilojas */}
          <div
            className="rounded-2xl p-6 border mb-4"
            style={{ background: "white", borderColor: "rgba(0,163,53,0.20)" }}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,163,53,0.10)" }}>
                <Store className="w-5 h-5" style={{ color: "#00A335" }} />
              </div>
              <div>
                <h3 className="font-bold text-base text-foreground mb-1">Multi-empresas (Multilojas)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Você pode ter <strong>outros CNPJs associados ao mesmo usuário de conta digital</strong>. Assim, você consegue ter a gestão financeira de todos os seus negócios em uma única conta!
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  Para habilitar o Multilojas, certifique-se de que todos os seus negócios estão credenciados e entre em contato com o <strong>Suporte</strong> para uni-los.
                </p>
                <a
                  href={whatsappSuporteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg font-semibold text-white text-xs"
                  style={{ background: "#00A335" }}
                >
                  <WhatsAppIcon />
                  Falar com o Suporte
                </a>
              </div>
            </div>
          </div>

          {/* Multiusuários */}
          <div
            className="rounded-2xl p-6 border"
            style={{ background: "white", borderColor: "rgba(0,163,53,0.20)" }}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,163,53,0.10)" }}>
                <Users className="w-5 h-5" style={{ color: "#00A335" }} />
              </div>
              <div>
                <h3 className="font-bold text-base text-foreground mb-1">Multi-usuários</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Você pode <strong>adicionar outros usuários na Conta Digital</strong> e instalar o app em outros celulares. Eles movimentarão a mesma conta do CNPJ credenciado.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  Para isso, entre em contato com o <strong>Suporte</strong>: será enviado um <strong>Termo de Cessão para assinatura digital</strong>. Após a assinatura, um novo usuário será liberado.
                </p>
                <a
                  href={whatsappSuporteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg font-semibold text-white text-xs"
                  style={{ background: "#00A335" }}
                >
                  <WhatsAppIcon />
                  Falar com o Suporte
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-12 text-white"
        style={{ background: "linear-gradient(135deg, #003318, #00A335)" }}
      >
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Próximo passo: acesse o Portal
          </h2>
          <p className="text-white/70 mb-6 text-sm">
            Com a conta ativada, acesse o portal para gerenciar suas vendas e recebíveis.
          </p>
          <a href="/primeiro-acesso/portal">
            <Button
              size="lg"
              className="font-bold text-base px-8"
              style={{ background: "#00d084", color: "#003318" }}
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
