import { useState } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { Compass, Home, List, FileText, Menu, X } from 'lucide-react';

export function Layout() {
  const [menuAberto, setMenuAberto] = useState(false);

  // Parte 2: Função auxiliar do NavLink para aplicar estilo "ativo" na rota atual
  const estiloNavLink = ({ isActive }) =>
    `inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
      isActive
        ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-200'
        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
    }`;

  const estiloNavLinkMobile = ({ isActive }) =>
    `flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
      isActive
        ? 'bg-indigo-600 text-white'
        : 'text-slate-700 hover:bg-slate-100'
    }`;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Parte 2: NavBar fixa no topo usando Tailwind (responsiva) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo / Marca */}
          <Link
            to="/"
            onClick={() => setMenuAberto(false)}
            className="flex items-center gap-2.5 text-slate-900 font-extrabold text-lg tracking-tight"
          >
            <span className="p-2 rounded-xl bg-indigo-600 text-white">
              <Compass className="w-5 h-5" />
            </span>
            <span>
              React<span className="text-indigo-600">Router</span>SPA
            </span>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-2" aria-label="Navegação Principal">
            <NavLink to="/" end className={estiloNavLink}>
              <Home className="w-4 h-4" />
              Home
            </NavLink>

            <NavLink to="/listagem" className={estiloNavLink}>
              <List className="w-4 h-4" />
              Listagem
            </NavLink>

            <NavLink to="/item/1" className={estiloNavLink}>
              <FileText className="w-4 h-4" />
              Detalhes (Ex: ID 1)
            </NavLink>
          </nav>

          {/* Botão Menu Mobile */}
          <button
            type="button"
            onClick={() => setMenuAberto((prev) => !prev)}
            className="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
            aria-label="Abrir ou fechar menu"
            aria-expanded={menuAberto}
          >
            {menuAberto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Dropdown Mobile Responsivo */}
        {menuAberto && (
          <nav
            className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1.5 shadow-lg"
            aria-label="Navegação Mobile"
          >
            <NavLink
              to="/"
              end
              onClick={() => setMenuAberto(false)}
              className={estiloNavLinkMobile}
            >
              <Home className="w-4 h-4" />
              Home
            </NavLink>

            <NavLink
              to="/listagem"
              onClick={() => setMenuAberto(false)}
              className={estiloNavLinkMobile}
            >
              <List className="w-4 h-4" />
              Listagem
            </NavLink>

            <NavLink
              to="/item/1"
              onClick={() => setMenuAberto(false)}
              className={estiloNavLinkMobile}
            >
              <FileText className="w-4 h-4" />
              Detalhes (Ex: ID 1)
            </NavLink>
          </nav>
        )}
      </header>

      {/* Parte 2: Outlet renderiza a página filha correspondente à rota atual sem repetir Header/Footer */}
      <main className="flex-1 pt-24 pb-12 max-w-6xl w-full mx-auto px-4 sm:px-6">
        <Outlet />
      </main>

      {/* Rodapé compartilhado pelo Layout */}
      <footer className="bg-white border-t border-slate-200 py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>Aplicação SPA Multi-Página com React Router DOM &amp; Tailwind CSS.</p>
          <p className="font-medium text-slate-400">Navegação sem reload de página</p>
        </div>
      </footer>
    </div>
  );
}
