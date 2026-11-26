export const ITENS_CATALOGO = [
  {
    id: '1',
    titulo: 'Fundamentos do React & JSX',
    categoria: 'Frontend',
    nivel: 'Iniciante',
    duracao: '4 horas',
    resumo: 'Entenda a criação de componentes funcionais, JSX, props e composição de interfaces.',
    descricaoCompleta:
      'Neste módulo você aprende como o React organiza a interface em componentes reutilizáveis, como funciona a sintaxe JSX por baixo dos panos e como passar dados de forma previsível usando props.',
    topicos: ['Componentes Funcionais', 'Sintaxe JSX', 'Props e Composição', 'Renderização Condicional'],
  },
  {
    id: '2',
    titulo: 'Gerenciamento de Estado e Imutabilidade',
    categoria: 'Estado',
    nivel: 'Iniciante',
    duracao: '5 horas',
    resumo: 'Domine o hook useState, eventos do usuário e atualização imutável de arrays e objetos.',
    descricaoCompleta:
      'Aprofunde-se no ciclo de re-renderização do React. Aprenda por que nunca devemos mutar o estado diretamente e como usar o spread operator para manipular listas e formulários com segurança.',
    topicos: ['Hook useState', 'Imutabilidade', 'Spread Operator (...)', 'Validação de Formulários'],
  },
  {
    id: '3',
    titulo: 'Lifting State Up & useEffect',
    categoria: 'Arquitetura',
    nivel: 'Intermediário',
    duracao: '6 horas',
    resumo: 'Compartilhe estado entre componentes irmãos e sincronize efeitos colaterais com cleanup.',
    descricaoCompleta:
      'Explore o fluxo unidirecional de dados (dados para baixo, eventos para cima) e aprenda a controlar efeitos colaterais como timers, listeners e manipulação do DOM com useEffect.',
    topicos: ['Lifting State Up', 'Fluxo Unidirecional', 'Array de Dependências', 'Cleanup de Timers'],
  },
  {
    id: '4',
    titulo: 'Roteamento SPA com React Router',
    categoria: 'Navegação',
    nivel: 'Intermediário',
    duracao: '5 horas',
    resumo: 'Crie aplicações multi-página sem recarregar o navegador usando rotas aninhadas e useParams.',
    descricaoCompleta:
      'Construa Single Page Applications completas com BrowserRouter, Routes, Route, layouts compartilhados via Outlet, links ativos com NavLink e captura de parâmetros dinâmicos com useParams.',
    topicos: ['BrowserRouter & Routes', 'NavLink Ativo', 'Layouts com Outlet', 'Rotas Dinâmicas (/item/:id)'],
  },
  {
    id: '5',
    titulo: 'Estilização Responsiva com Tailwind CSS',
    categoria: 'UI / Design',
    nivel: 'Iniciante',
    duracao: '4 horas',
    resumo: 'Desenvolva layouts modernos, mobile-first e acessíveis usando classes utilitárias.',
    descricaoCompleta:
      'Aprenda a construir barras de navegação fixas, grids responsivos, estados de foco/hover e feedbacks visuais diretamente no JSX utilizando o ecossistema utilitário do Tailwind CSS.',
    topicos: ['Mobile-First', 'Flexbox & Grid', 'NavBar Fixa e Responsiva', 'Estados Interativos'],
  },
];
