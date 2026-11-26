# App Multi-Página com React Router (SPA) & Tailwind CSS

Aplicação **Single Page Application (SPA)** desenvolvida em **React** com **React Router DOM** e **Tailwind CSS**, estruturada com rotas aninhadas, layout compartilhado via `<Outlet />`, links ativos com `<NavLink>` e captura de parâmetros dinâmicos de URL com `useParams`.

---

## 📋 Estrutura e Funcionalidades Implementadas

- **Parte 1 – Configuração do Roteamento (`src/App.jsx`):**
  - Instalação do `react-router-dom` e configuração da árvore de navegação com `BrowserRouter`, `Routes` e `Route`.
- **Parte 2 – App Multi-Páginas, Layout e NavBar Ativa (`src/components/Layout.jsx`, `src/pages/`):**
  - **Páginas:** `Home.jsx` (`/`), `Listagem.jsx` (`/listagem`) e `Detalhes.jsx` (`/item/:id`).
  - **NavBar Fixa e Responsiva:** Barra fixa no topo (`fixed top-0`) com menu adaptável para dispositivos móveis.
  - **Links Ativos (`<NavLink>`):** Uso da propriedade `isActive` do `NavLink` para destacar visualmente a rota em que o usuário se encontra.
  - **Layout Compartilhado (`<Outlet />`):** Rotas aninhadas dentro de `<Route path="/" element={<Layout />}>`, evitando repetir `Header` e `Footer` em cada página.
- **Parte 3 – Tarefa de Casa / Desafio (`src/pages/Detalhes.jsx`):**
  - Criação da rota dinâmica `/item/:id` e utilização do hook `useParams()` para capturar o `id` diretamente da URL e exibi-lo na tela junto às informações detalhadas do item.

---

## 🤔 Parte 4 – Reflexão (Para Pensar)

> **Pergunta:** *Qual a diferença entre o roteamento tradicional do HTML (vários arquivos `.html`) e o roteamento de uma SPA (Single Page Application) com React Router?*

**Resposta:**

No **roteamento tradicional do HTML** (conhecido como *MPA – Multi-Page Application*), cada página da aplicação corresponde a um arquivo `.html` distinto hospedado no servidor (ex.: `index.html`, `produtos.html`, `contato.html`). Sempre que o usuário clica em um link `<a href="produtos.html">`, o navegador:
1. Faz uma **nova requisição HTTP completa** ao servidor;
2. **Descarta toda a página atual** (destruindo o DOM e perdendo o estado em memória do JavaScript);
3. Baixa, interpreta e renderiza o novo documento HTML, CSS e scripts do zero, provocando um **recarregamento visível da página** (*full page reload*).

Já no **roteamento de uma SPA (Single Page Application) com React Router**:
1. O servidor entrega **apenas um único arquivo `index.html`** na primeira visita, juntamente com o pacote JavaScript do React;
2. Quando o usuário navega usando `<Link>` ou `<NavLink>`, o React Router **intercepta o clique** e utiliza a **History API do navegador** (`window.history.pushState`) para atualizar a barra de endereços sem enviar uma nova requisição de página ao servidor;
3. Em vez de recarregar o navegador, o React Router apenas **troca os componentes renderizados** dentro do Virtual DOM (por exemplo, substituindo o conteúdo do `<Outlet />`), mantendo elementos compartilhados (como a `NavBar` e o `Footer`) intactos na tela e preservando o estado da aplicação.

### Resumo Comparativo

| Característica | Roteamento Tradicional (`.html`) | Roteamento SPA (React Router) |
| :--- | :--- | :--- |
| **Arquivos HTML** | Vários arquivos (`index.html`, `sobre.html`, etc.) | Um único `index.html` |
| **Recarregamento da página** | Sim, recarrega o navegador a cada navegação | Não, transição instantânea sem *reload* |
| **Requisições ao servidor** | Busca uma página HTML inteira a cada clique | Busca apenas dados (JSON/API) quando necessário |
| **Estado em memória** | Perdido a cada troca de página | Preservado entre as rotas |
| **Layout compartilhado** | Precisa ser repetido em cada arquivo `.html` | Reutilizado facilmente com `<Outlet />` |

