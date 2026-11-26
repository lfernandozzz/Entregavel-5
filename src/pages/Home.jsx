import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Link2, Hash, BookOpen } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 sm:p-10">
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-50 text-indigo-700 rounded-full mb-4">
          Single Page Application (SPA)
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 max-w-2xl">
          Navegação multi-página fluida com <span className="text-indigo-600">React Router</span>
        </h1>
        <p className="mt-4 text-base text-slate-600 max-w-2xl leading-relaxed">
          Esta aplicação demonstra como estruturar múltiplas rotas, compartilhar um layout fixo com{' '}
          <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800 text-sm">&lt;Outlet /&gt;</code>,
          destacar links ativos com <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800 text-sm">NavLink</code>{' '}
          e capturar parâmetros dinâmicos da URL com <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800 text-sm">useParams</code>.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link
            to="/listagem"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition shadow-sm"
          >
            Explorar Listagem
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/item/4"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 text-slate-800 text-sm font-semibold hover:bg-slate-200 transition"
          >
            Testar Rota Dinâmica (/item/4)
          </Link>
        </div>
      </section>

      {/* Resumo das 4 Partes da Atividade */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
            <Layers className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-slate-800">Parte 1 – Configuração Base</h2>
          <p className="text-sm text-slate-600 mt-1.5">
            Configuração do <code className="bg-slate-100 px-1 rounded">BrowserRouter</code>,{' '}
            <code className="bg-slate-100 px-1 rounded">Routes</code> e{' '}
            <code className="bg-slate-100 px-1 rounded">Route</code> no arquivo <code className="bg-slate-100 px-1 rounded">App.jsx</code>.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
            <Link2 className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-slate-800">Parte 2 – Layout, NavLink e Outlet</h2>
          <p className="text-sm text-slate-600 mt-1.5">
            NavBar fixa e responsiva no topo utilizando <code className="bg-slate-100 px-1 rounded">NavLink</code> para destacar a rota ativa e{' '}
            <code className="bg-slate-100 px-1 rounded">&lt;Outlet /&gt;</code> para renderizar as páginas filhas.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
            <Hash className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-slate-800">Parte 3 – Rota Dinâmica &amp; useParams</h2>
          <p className="text-sm text-slate-600 mt-1.5">
            Rota <code className="bg-slate-100 px-1 rounded">/item/:id</code> que captura o parâmetro dinâmico da URL através do hook{' '}
            <code className="bg-slate-100 px-1 rounded">useParams()</code> e exibe o ID e os dados na tela.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
            <BookOpen className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-slate-800">Parte 4 – Reflexão no README</h2>
          <p className="text-sm text-slate-600 mt-1.5">
            Comparação completa entre o roteamento tradicional de múltiplos arquivos <code className="bg-slate-100 px-1 rounded">.html</code> e o roteamento SPA com React Router.
          </p>
        </div>
      </section>
    </div>
  );
}
