import { useState } from "react";
import { ChevronDown } from "lucide-react";

// ─── Tipos ───────────────────────────────────────────────────────────────────
interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

// ─── Componente de item do acordeão ──────────────────────────────────────────
function PolicyAccordion({ title, content }: AccordionItem) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl overflow-hidden transition-all"
      style={{ border: "1px solid rgba(0,163,53,0.18)", background: open ? "rgba(0,163,53,0.04)" : "#fff" }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-semibold text-base" style={{ color: "#003318" }}>{title}</span>
        <ChevronDown
          className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
          style={{ color: "#00A335", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 text-sm leading-relaxed space-y-3" style={{ color: "#374151", textAlign: "justify" }}>
          {content}
        </div>
      )}
    </div>
  );
}

// ─── Seções da Política de Privacidade ───────────────────────────────────────
const privacySections: AccordionItem[] = [
  {
    title: "1. Objetivo",
    content: (
      <p>
        A presente Política de Privacidade visa estabelecer as diretrizes e regras adotadas pelo Portal Tá na Conta
        e por todos seus funcionários, parceiros e prestadores de serviços, a fim de assegurar a privacidade e a
        segurança das informações tratadas no âmbito da oferta e disponibilização de nossos serviços aos Clientes.
      </p>
    ),
  },
  {
    title: "2. Base Legal e Regulatória",
    content: (
      <>
        <p>Esta Política cumpre fielmente a legislação concernente e as disposições do Banco Central do Brasil ("BCB"), em especial:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Lei nº 13.709, de 14 de agosto de 2018</strong> — Lei Geral de Proteção de Dados Pessoais (LGPD).</li>
          <li><strong>Lei Complementar nº 105, de 10 de janeiro de 2001</strong> — Dispõe sobre o sigilo das operações de instituições financeiras e dá outras providências.</li>
          <li><strong>Resolução CD/ANPD nº 15, de 24 de abril de 2024</strong> — Aprova o Regulamento de Comunicação de Incidente de Segurança.</li>
          <li><strong>Resolução CD/ANPD nº 18, de 16 de julho de 2024</strong> — Aprova o Regulamento sobre a atuação do encarregado pelo tratamento de dados pessoais.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Destinatários",
    content: (
      <p>
        Esta Política se aplica a todos os acionistas, conselheiros, diretores, funcionários, prestadores de serviços
        e quaisquer demais pessoas físicas ou jurídicas contratadas ou outras entidades com as quais o Portal Tá na Conta
        tenha relacionamento e que participem, de forma direta ou indireta, das atividades diárias e negócios do Portal
        Tá na Conta, bem como todos os parceiros, clientes e demais pessoas que venham a utilizar os serviços do Portal
        Tá na Conta ou estabelecer relação comercial.
      </p>
    ),
  },
  {
    title: "4. Definições",
    content: (
      <ul className="space-y-2">
        {[
          ["Política", "A presente Política de Privacidade."],
          ["Destinatários", "Aqueles definidos no item 3 desta Política."],
          ["Cliente", "Pessoa natural ou jurídica que seja usuária final dos serviços fornecidos pelo Portal Tá na Conta."],
          ["Parceiro", "Pessoa jurídica que realiza a contratação de serviços tecnológicos e/ou whitelabel fornecidos pelo Portal Tá na Conta, possuindo relacionamento direto com os Clientes."],
          ["BCB", "Banco Central do Brasil."],
          ["COAF", "Conselho de Controle de Atividades Financeiras."],
          ["ANPD", "Agência Nacional de Proteção de Dados."],
          ["Encarregado", "Pessoa indicada pelo Controlador e Operador para atuar como canal de comunicação entre o Controlador, os Titulares dos dados e a ANPD."],
          ["Controlador", "Pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao tratamento de dados pessoais."],
          ["Operador", "Pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais em nome do Controlador."],
          ["Titular", "Pessoa natural a quem se referem os dados pessoais que são objeto de tratamento."],
          ["Dados Pessoais", "Informação relacionada a pessoa natural identificada ou identificável, como nome, CPF, telefone, entre outros."],
          ["Dados Pessoais Sensíveis", "Dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural."],
          ["Tratamento", "Toda operação realizada com dados pessoais, como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração."],
          ["Visitante", "Aqueles que acessam o website do Portal Tá na Conta."],
          ["IP", "Internet Protocol, sequência de números que permite a identificação e endereçamento dos dispositivos conectados em uma rede."],
          ["Cookies", "Pequenas unidades de informações enviadas para o navegador utilizado pelo usuário a partir do servidor e, posteriormente, armazenadas no disco rígido do computador ou dispositivo móvel utilizado, que têm como função 'relembrar' as suas preferências ao longo do tempo."],
          ["PCI DSS", "Payment Card Industry – Data Security Standard. Padrão de Segurança de Dados da Indústria de Cartões de Pagamento."],
          ["Pagadores", "Aqueles que efetuam transações de pagamento em favor dos Clientes, incluindo portadores de cartão."],
          ["Recebedores", "Aqueles a quem o Cliente efetua transações através dos serviços fornecidos pelo Portal Tá na Conta."],
        ].map(([term, def]) => (
          <li key={term} className="flex flex-col gap-0.5">
            <span className="font-semibold" style={{ color: "#00A335" }}>{term}:</span>
            <span className="pl-4" style={{ textAlign: "justify" }}>{def}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "5. Diretrizes",
    content: (
      <>
        <p>
          Todos os Destinatários e o Portal Tá na Conta devem adotar e cumprir as diretrizes, deveres, controles e
          práticas a eles aplicáveis contidas nesta Política, zelando para que todas as normas éticas e legais sejam
          cumpridas por todos aqueles com quem são mantidas relações de cunho profissional, e comunicando imediatamente
          qualquer violação ao Diretor responsável, para adoção das respectivas providências, de acordo com sua gravidade.
        </p>
        <p>
          O Portal Tá na Conta conta com estrutura e governança de diretrizes de forma a assegurar que os procedimentos
          operacionais atribuídos aos Destinatários sejam devidamente cumpridos conforme as normas e procedimentos internos
          ou às particularidades de cada área, inibindo possíveis práticas ou ações que possam fragilizar a estrutura de
          sua funcionalidade.
        </p>
        <p>
          Todo e qualquer cliente, funcionário, prestador de serviço ou parceiro pode realizar denúncia anônima sobre
          irregularidade através do canal de denúncias.
        </p>
        <p>
          O Portal Tá na Conta compromete-se a atuar junto aos órgãos reguladores, respondendo aos questionamentos
          referentes à conformidade com a legislação e regulamentação vigentes e à mitigação de riscos.
        </p>
      </>
    ),
  },
  {
    title: "6.1 Dados Coletados",
    content: (
      <>
        <p>O Portal Tá na Conta poderá tratar Dados Pessoais que sejam:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Fornecidos pelo Titular dos Parceiros, para fins de cadastro quando da contratação dos serviços oferecidos;</li>
          <li>Coletados, inclusive automaticamente, durante a utilização dos serviços oferecidos pelo Portal Tá na Conta pelo Titular;</li>
          <li>Compartilhados, armazenados ou transmitidos pelos Clientes ou pelo Parceiro, durante a utilização dos serviços;</li>
          <li>Coletados para fins de contratação de funcionários e prestadores de serviços para a execução de suas atividades diárias.</li>
        </ul>
        <p>
          Nesses casos, poderão ser coletados dados cadastrais como nome, número de telefone, e-mail, endereço (inclusive IP),
          número de identidade e CPF, data de nascimento, gênero, nacionalidade, dados bancários como número de conta, agência
          bancária, dentre outras informações que poderão ser solicitadas para viabilizar a prestação dos serviços.
        </p>
        <p>
          Para aqueles que acessam o website e as plataformas, poderão ser coletados Cookies, nos termos da Política de Cookies,
          que podem envolver endereço de IP, horários de acesso, identificadores relacionados a cookies, web beacons ou tecnologias
          semelhantes que possuam a capacidade de identificação de dispositivos de acesso e navegação, assim como dados que
          indiquem a localização dos usuários.
        </p>
        <p>
          Quanto aos Clientes, Pagadores e Recebedores, a coleta de Dados Pessoais poderá incluir informações referentes aos
          instrumentos de pagamento utilizados, como trecho do número de cartão, chave Pix, entre outros, forma de pagamento,
          número de parcelas e valores transacionados, observadas a Lei do Sigilo Bancário e regras definidas pelo PCI DSS.
        </p>
      </>
    ),
  },
  {
    title: "6.2 Bases Legais para Utilização dos Dados Pessoais",
    content: (
      <>
        <p>Os Dados Pessoais coletados são tratados de forma ética e conforme os mais confiáveis padrões de segurança e confidencialidade. As bases legais utilizadas são:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Cumprimento de Obrigações Legais e Regulatórias:</strong> o Portal Tá na Conta é obrigado a realizar o acesso, a coleta, a análise, a transmissão e o armazenamento de Dados Pessoais para atendimento às obrigações dispostas no Marco Civil da Internet e em normas setoriais referentes à sua atuação.</li>
          <li><strong>Execução do Contrato:</strong> o Tratamento dos Dados Pessoais poderá ser realizado para permitir a execução de contratos firmados entre o Portal Tá na Conta e o Titular.</li>
          <li><strong>Legítimo Interesse:</strong> poderá ser executado o Tratamento dos Dados Pessoais para precificação e aperfeiçoamento dos serviços, análise de erros ou falhas, monitoramento do atendimento e atividades promocionais e de marketing.</li>
          <li><strong>Consentimento:</strong> na hipótese dos Tratamentos efetuados não se enquadrarem nos itens acima, poderá ser requerido o consentimento do Titular para o Tratamento de seus Dados Pessoais.</li>
          <li><strong>Defesa de direitos em processos judiciais, administrativos ou arbitrais:</strong> poderão ser armazenados e compartilhados Dados Pessoais para eventual defesa dos direitos e interesses do Portal Tá na Conta.</li>
          <li><strong>Prevenção à fraude e segurança dos Titulares:</strong> nos processos de identificação, realização e autenticação de cadastro, poderá ser requerido o Tratamento de Dados Pessoais Sensíveis, como dados biométricos, para fins de validação da identidade dos Clientes.</li>
        </ul>
      </>
    ),
  },
  {
    title: "6.3 Compartilhamento de Dados Pessoais",
    content: (
      <>
        <p>Respeitados os limites legais, os Dados Pessoais poderão ser compartilhados com:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Parceiros:</strong> para permitir a correta execução dos serviços, disponibilização de plataformas, cobrança e recuperação de valores devidos pelos Clientes.</li>
          <li><strong>Fornecedores de Tecnologia:</strong> para prover a infraestrutura técnica necessária à oferta dos serviços, seja com fornecedores sediados no Brasil ou no exterior.</li>
          <li><strong>Instituições Autorizadas pelo BCB:</strong> para compartilhar informações relacionadas a suspeitas de cometimento de fraudes pelos Titulares e para fins de solucionamento de falhas.</li>
          <li><strong>Fornecedor de Serviço de Antifraude:</strong> para manutenção da segurança dos Titulares e dos serviços fornecidos.</li>
          <li><strong>Autoridades Competentes:</strong> BCB, ANPD, COAF, entre outros, para cumprir com obrigações regulatórias e apurar suspeitas de irregularidades.</li>
        </ul>
        <p>
          O Portal Tá na Conta poderá adotar técnicas de anonimização, a exemplo da aleatorização e generalização, para
          proteção de Dados Pessoais que venham a ser compartilhados com Parceiros.
        </p>
        <p>
          Além dessas hipóteses, os Dados Pessoais poderão ser compartilhados mediante autorização do Titular, de acordo
          com as informações fornecidas no momento da solicitação de consentimento.
        </p>
      </>
    ),
  },
  {
    title: "6.4 Direitos dos Titulares",
    content: (
      <>
        <p>O Portal Tá na Conta garante o cumprimento dos direitos aplicáveis aos Titulares referente aos seus Dados Pessoais conforme previstos na LGPD, dentre eles:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Informação:</strong> o Titular pode requerer a confirmação da existência de Tratamento dos seus Dados Pessoais. Em caso positivo, será garantido acesso ao conteúdo armazenado, respeitados os limites técnicos e jurídicos.</li>
          <li><strong>Correção:</strong> é possível corrigir e/ou atualizar informações inexatas ou desatualizadas.</li>
          <li><strong>Portabilidade:</strong> respeitados os limites técnicos e jurídicos, os Titulares podem requerer o recebimento de seus Dados Pessoais em formato que facilite a portabilidade.</li>
          <li><strong>Revogação:</strong> quando o Tratamento de Dados Pessoais se der mediante consentimento, o Titular poderá optar pela revogação a qualquer momento.</li>
          <li><strong>Exclusão:</strong> em determinados casos, o Titular poderá solicitar a exclusão de seus Dados Pessoais, caso não haja nenhuma previsão legal em contrário.</li>
        </ul>
      </>
    ),
  },
  {
    title: "6.5 Período de Armazenamento de Dados Pessoais",
    content: (
      <>
        <p>
          Os Dados Pessoais tratados serão armazenados pelo tempo necessário à execução das atividades pelo Portal Tá na Conta,
          observando, sempre que aplicável, as disposições legais e regulatórias. Assim, mesmo quando a exclusão dos Dados
          Pessoais for solicitada pelo Titular, o Portal Tá na Conta poderá manter os Dados Pessoais armazenados caso ainda
          haja fundamento legal para tanto.
        </p>
        <p>
          A manutenção do tratamento de Dados Pessoais após o término da relação contratual poderá ocorrer para cumprimento
          de obrigações legais, regulatórias ou contratuais, exercício regular de direitos em processos judiciais,
          administrativos ou arbitrais, ou para prevenção à fraude e à segurança dos Titulares.
        </p>
      </>
    ),
  },
  {
    title: "6.6 Segurança dos Dados Pessoais",
    content: (
      <>
        <p>
          O Portal Tá na Conta adota medidas técnicas e organizacionais adequadas para proteger os Dados Pessoais contra
          acesso não autorizado, destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito.
        </p>
        <p>Dentre as medidas, estão:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Utilização de criptografia dos Dados Pessoais;</li>
          <li>Controle de acesso às informações;</li>
          <li>Utilização de firewalls;</li>
          <li>Implementação de políticas internas de segurança cibernética e segurança da informação;</li>
          <li>Arquitetura da solução de software com previsão de invasão;</li>
          <li>Utilização de HTTPS.</li>
        </ul>
        <p>
          O acesso aos Dados Pessoais é restrito a colaboradores devidamente autorizados, conforme controle de acesso realizado.
          Apesar dos esforços, considerando a natureza e arquitetura da internet, não é possível garantir que agentes
          mal-intencionados não conseguirão ter acesso ou fazer uso indevido dos Dados Pessoais, dado se tratar de um risco
          inerente à utilização de sistemas informatizados.
        </p>
      </>
    ),
  },
  {
    title: "7. Efetividade e Violação",
    content: (
      <>
        <p>
          O Portal Tá na Conta conta com mecanismos de controles que buscam garantir e assegurar a correta implementação
          das diretrizes, princípios e regras formalizados nesta Política, como processos com trilhas de auditoria sujeitos
          a testes periódicos, acompanhamento através de métricas e indicadores, dentre outros.
        </p>
        <p>
          Todo e qualquer descumprimento a esta Política está sujeito a ações disciplinares. Caso haja conhecimento de alguma
          violação a este documento, esta deverá ser comunicada imediatamente através do endereço de e-mail{" "}
          <a href="mailto:intelbraspay@cappta.com.br" className="underline" style={{ color: "#00A335" }}>
            intelbraspay@cappta.com.br
          </a>
          , para a adoção das medidas cabíveis.
        </p>
        <p>
          Caberá ao Encarregado a averiguação e monitoramento das comunicações de violação recebidas ou das violações de
          que de qualquer forma houver conhecimento.
        </p>
      </>
    ),
  },
  {
    title: "8. Vigência e Controle de Versões",
    content: (
      <>
        <p>
          Esta Política entra em vigor a partir da data de sua disponibilização aos Destinatários e será periodicamente
          revisada e atualizada pela área de compliance, em conjunto ao Encarregado, com a frequência mínima de uma vez
          a cada 12 (doze) meses.
        </p>
        <p>
          Esta Política está sujeita a eventuais alterações ou atualizações a qualquer tempo, para permitir a contínua
          melhoria dos serviços. Em caso de alterações relevantes, será dada publicidade a tais modificações.
        </p>
        <p>
          É recomendado que os Titulares consultem regularmente esta Política para estarem sempre atualizados em relação
          ao Tratamento de Dados Pessoais pelo Portal Tá na Conta.
        </p>
      </>
    ),
  },
];

// ─── Seções da Política de Cookies ───────────────────────────────────────────
const cookieSections: AccordionItem[] = [
  {
    title: "Por que coletamos dados mediante cookies?",
    content: (
      <>
        <p>
          Alguns Dados Pessoais são voluntariamente oferecidos pelo Usuário (como dados de contato, dados cadastrais, etc.).
          No entanto, quando o Usuário acessa o site ou plataforma, outros Dados Pessoais podem ser coletados de forma
          automática, por meio de cookies e outras tecnologias de monitoramento assemelhadas.
        </p>
        <p>
          Cookies são pequenos arquivos que o site envia para o seu navegador e são armazenados no seu dispositivo, permitindo
          a coleta de informações a seu respeito de maneira automática, como, por exemplo, seu idioma, sua recorrência de
          acesso ao site, etc.
        </p>
      </>
    ),
  },
  {
    title: "Quais os tipos de cookies que utilizamos?",
    content: (
      <>
        <p>Utilizamos tanto cookies primários quanto cookies de terceiros.</p>
        <p><strong>Cookies primários</strong> são emitidos pelo domínio do site e geralmente são utilizados para identificar preferências do Usuário e facilitar funcionalidades básicas.</p>
        <p><strong>Cookies de terceiros</strong> pertencem e são administrados por outras empresas, tais como parceiros de negócios ou provedores de serviços.</p>
        <p>Nossos cookies podem apresentar diferentes funções:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Cookies essenciais:</strong> necessários para acessar áreas específicas do site ou da plataforma. Sem estes cookies, os serviços que os exijam não podem ser prestados.</li>
          <li><strong>Cookies analíticos:</strong> utilizados para analisar a forma como os Usuários usam o site e monitorar a performance, permitindo fornecer uma experiência de alta qualidade.</li>
          <li><strong>Cookies de funcionalidade:</strong> permitem relembrar as preferências do Usuário, de forma que não seja necessário reconfigurar o site a cada visita.</li>
          <li><strong>Cookies de publicidade:</strong> servem para direcionar a publicidade em função dos interesses de cada Usuário e do número de visitas realizadas.</li>
        </ul>
        <p>Os cookies utilizados podem ser:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Cookies permanentes:</strong> ficam armazenados no navegador e são utilizados sempre que o Usuário realiza uma nova visita ao site.</li>
          <li><strong>Cookies de sessão:</strong> são temporários, permanecem nos cookies do navegador até sair do site.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Como o usuário pode rejeitar ou apagar cookies?",
    content: (
      <>
        <p>
          A maioria dos navegadores da Internet aceitam cookies, entretanto, os usuários podem configurar seus navegadores
          para recusar certos tipos de cookies ou cookies específicos. Além disso, os usuários podem apagar os cookies a
          qualquer momento.
        </p>
        <p>
          Depois de autorizar o uso de cookies, o Usuário pode sempre desativar parte ou a totalidade dos nossos cookies.
          Todos os browsers permitem ao utilizador aceitar, recusar ou apagar cookies, nomeadamente através da seleção das
          definições apropriadas no respetivo navegador.
        </p>
        <p>
          Vale destacar que, ao desativar cookies, pode impedir que alguns serviços do site funcionem corretamente, afetando,
          parcial ou totalmente, a navegação no site.
        </p>
        <p>
          Por fim, ao utilizar o site sem apagar ou rejeitar alguns ou todos os cookies, o Usuário concorda que o Portal
          Tá na Conta poderá realizar o Tratamento de Dados e posicionar aqueles cookies que não foram apagados ou rejeitados
          nos seus respectivos dispositivos.
        </p>
      </>
    ),
  },
  {
    title: "Alterações na Política de Cookies",
    content: (
      <p>
        O Portal Tá na Conta poderá alterar este instrumento a qualquer momento, bastando, para tanto, publicar uma versão
        revisada em nosso site. Recomendamos que os Usuários consultem regularmente esta Política para estarem sempre
        atualizados.
      </p>
    ),
  },
];

// ─── Página principal ─────────────────────────────────────────────────────────
export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen" style={{ background: "#f5faf7" }}>
      {/* Hero da página */}
      <section className="py-14 lg:py-20" style={{ background: "linear-gradient(135deg, #003318 0%, #00A335 100%)" }}>
        <div className="container text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
          >
            Transparência e Segurança
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Política de Privacidade
          </h1>
          <p className="text-base lg:text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            Saiba como o Tá na Conta coleta, utiliza, armazena e protege os seus dados pessoais,
            em conformidade com a Lei Geral de Proteção de Dados (LGPD).
          </p>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="py-12 lg:py-16">
        <div className="container max-w-4xl mx-auto">

          {/* Política de Privacidade */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 rounded-full" style={{ background: "#00A335" }} />
              <h2 className="text-2xl font-bold" style={{ color: "#003318" }}>Política de Privacidade</h2>
            </div>
            <div className="space-y-3">
              {privacySections.map((section) => (
                <PolicyAccordion key={section.title} title={section.title} content={section.content} />
              ))}
            </div>
          </div>

          {/* Política de Cookies */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 rounded-full" style={{ background: "#00A335" }} />
              <h2 className="text-2xl font-bold" style={{ color: "#003318" }}>Política de Cookies</h2>
            </div>
            <div className="space-y-3">
              {cookieSections.map((section) => (
                <PolicyAccordion key={section.title} title={section.title} content={section.content} />
              ))}
            </div>
          </div>

          {/* Nota de atualização */}
          <div
            className="rounded-xl px-6 py-5 text-sm"
            style={{ background: "rgba(0,163,53,0.07)", border: "1px solid rgba(0,163,53,0.18)", color: "#374151" }}
          >
            <strong style={{ color: "#003318" }}>Última atualização:</strong> Esta política é revisada periodicamente pela
            área de compliance do Tá na Conta. Em caso de dúvidas, entre em contato pelo e-mail{" "}
            <a href="mailto:intelbraspay@cappta.com.br" className="underline font-medium" style={{ color: "#00A335" }}>
              intelbraspay@cappta.com.br
            </a>.
          </div>
        </div>
      </section>
    </div>
  );
}
