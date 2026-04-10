# Portal Tá na Conta - TODO

## Design System
- [x] Configurar paleta de cores Intelbras/Cappta no index.css
- [x] Configurar tipografia (Inter + fonte display)
- [x] Configurar variáveis CSS globais

## Estrutura e Navegação
- [x] Criar componente Navbar com dropdowns
- [x] Criar componente Footer com assinatura Intelbras/Cappta
- [x] Configurar rotas em App.tsx
- [x] Layout principal responsivo

## Página Inicial (Home)
- [x] Hero section com proposta de valor
- [x] Seção de benefícios da solução
- [x] Processo financeiro em passos visuais
- [x] CTA para solicitar maquininha
- [x] Seção FAQ (perguntas frequentes)

## Página Ativar Conta
- [x] Explicação do motivo para ativar a conta
- [x] Instruções de download iOS e Android
- [x] Passo a passo de instalação e ativação
- [x] Pontos de atenção com destaque visual

## Página Simular Taxas
- [x] Simulador interativo fiel ao HTML de referência
- [x] Seleção de bandeira de cartão
- [x] Exibição de parcelas, taxa e valor
- [x] Resumo final da simulação
- [x] Exportação de resultados

## Página Tutoriais
- [x] Tutorial Plataforma Solar (passo a passo)
- [x] Tutorial Venda na Maquininha (passo a passo)
- [x] Tutorial Venda com Link de Pagamento (passo a passo)
- [x] Pontos de atenção com destaque visual

## Página Suporte Técnico
- [x] Canal WhatsApp (11) 97440-9760
- [x] CTA direto para WhatsApp
- [x] Informações de contato

## Página Link de Pagamento
- [x] Explicação do link de pagamento
- [x] Como usar e benefícios

## Qualidade
- [x] Responsividade mobile-first
- [x] Imagens reais integradas via CDN
- [x] Testes vitest básicos (14 testes passando)

## Atualizações Solicitadas (Abril 2026)

### Design e Identidade Visual
- [x] Logo Cappta no header + "Tá na Conta" + "Uma parceria Intelbras e Cappta"
- [x] Imagem do suporte (TánacontaIntelbras-Suporte.png) integrada via CDN

### Página Inicial
- [x] Prazo "1 dia" em todos os textos e benefícios
- [x] Botão "Peça sua Maquininha" → formulário Google Forms de adesão
- [x] Seção de argumentos de vendas com 3 frases persuasivas
- [x] FAQ corrigido (referência Intelbras removida de resposta isolada)

### Menu e Navegação
- [x] Dropdown "Primeiro Acesso" separado: Conta / Portal / Maquininha
- [x] Footer com links corretos para /primeiro-acesso/conta e /primeiro-acesso/portal

### Página Primeiro Acesso - Conta
- [x] Preparação para instalação (CPF, e-mail, internet, validade do Token)
- [x] Passo a passo de ativação (7 etapas)
- [x] Informações sobre Pix, depósito mínimo R$10, horário de pagamentos
- [x] Informações sobre maquininha (Android, Vivo, Wi-Fi, Pix)

### Página Primeiro Acesso - Portal
- [x] Página separada criada
- [x] Vídeo YouTube incorporado (funções básicas do portal)
- [x] Instruções de acesso (usuário/senha por e-mail ou WhatsApp)
- [x] Recursos do portal listados

### Tutoriais - Plataforma Solar
- [x] Passo a passo com 9 etapas (projeto → recebimento em 1 dia)

### Tutoriais - Venda na Maquininha
- [x] Vídeo tutorial incorporado
- [x] Subdivisão: Solar com Maquininha e Outras Vendas
- [x] Passo a passo Solar (11 etapas) e Outras Vendas (8 etapas)

### Tutoriais - Link de Pagamento
- [x] 12 etapas detalhadas do processo
- [x] Vídeo tutorial incorporado
- [x] Texto sobre uso recomendado (recorrente vs boleto)

### Página Link de Pagamento
- [x] Texto sobre link recorrente e vantagem vs boleto

### Simulador de Taxas
- [x] Todas as parcelas 1 a 21 com todas as colunas
- [x] Link para planilha offline adicionado

### Suporte Técnico
- [x] Imagem específica do atendimento integrada (TánacontaIntelbras-Suporte.png)
- [x] Card exibe apenas "Tá na Conta" (sem "Intelbras" isolado)

## Correções Solicitadas (Abril 2026 - Rodada 2)
- [x] Logo Cappta: usar LogCappta.png sem cor (apenas formato/silhueta branca/escura)
- [x] Link do portal: atualizar para https://intelbras.posportal.com.br/ em todas as ocorrências
- [x] Suporte: remover imagem TNC (TánacontaIntelbras-Suporte.png)
- [x] Separar página Maquininha em página própria (/primeiro-acesso/maquininha)
- [x] Página inicial: remover stat "D+2 / 2 dias úteis para receber"
- [x] Tutoriais maquininha: corrigir navegação lateral (sidebar) com redirecionamento correto
- [x] Tutoriais maquininha: atualizar conteúdo Solar/Outras Vendas conforme direcionamentos

## Correções Solicitadas (Abril 2026 - Rodada 3)
- [x] Recolocar stat "D+2" nos quick stats do hero (ao lado de 21x e 1 dia)
- [x] Remover texto "2 dias úteis para receber" da seção de benefícios com imagem de painéis solares

## Correções Solicitadas (Abril 2026 - Rodada 4)
- [x] PrimeiroAcessoConta: substituir seção "Preparação para Instalação" com novo conteúdo de segurança (serial do celular)
- [x] PrimeiroAcessoConta: adicionar seção Multilojas com link para Sofia
- [x] PrimeiroAcessoConta: adicionar seção Multiusuários com link para Sofia
- [x] PrimeiroAcessoConta: manter seções de download, ativação e instalação
- [x] PrimeiroAcessoConta: remover seções "Sua Maquininha", "Conexão da Maquininha" e "Pix na Maquininha"

## Correções Solicitadas (Abr 2026 - Rodada 5)
- [x] SimularTaxas: reconstruir fiel ao HTML original com tabela 1-21 parcelas na vertical, todas as colunas (taxa, valor maquininha/link, parcela, taxas), resumo final expandido e exportação PDF

## Correções Solicitadas (Abr 2026 - Rodada 6)
- [ ] SimularTaxas: recolocar link da planilha offline abaixo do simulador (https://docs.google.com/spreadsheets/d/12nK4LYA5gCsHEDPZIluhaLL6RoHfy8YatRZWsoMyQow/edit?gid=0#gid=0)
- [ ] SimularTaxas: atualizar texto do topo para "Simule o pagamento" e descrição simplificada
- [ ] SimularTaxas: corrigir navbar duplicada na página
- [ ] PrimeiroAcessoConta: reordenar seções (Preparação → Download → Instalação/Ativação → Multilojas → Multiusuários)
- [ ] LinkPagamento: mover link recorrente para o final, após "Porque usar" e "Como funciona"
- [ ] Tutoriais Link: ajustar tamanho do vídeo para padrão da página Portal
- [ ] Tutoriais Maquininha: ajustar tamanho do vídeo para padrão da página Portal
- [ ] Tutoriais Maquininha: item 8 em box de destaque ao final
- [ ] Tutoriais Solar: adicionar referência "Plataforma Solar Intelbras"
- [ ] Suporte: usar imagem TánacontaIntelbras-Suporte.png acima de "Fale com nossa equipe"
- [ ] Rodapé: remover imagem TNC e frase "Portal de Pagamentos", manter "Tá na Conta" + "Uma parceria Intelbras e Cappta"
- [ ] Navbar e Rodapé: usar somente LogCappta_silhueta.png como logo Cappta
- [ ] Design System Intelbras: aplicar verde #00A335, tipografia sans-serif, botões arredondados e cinza neutro de fundo
