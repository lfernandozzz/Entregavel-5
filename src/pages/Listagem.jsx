import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowUpRight, Clock, Tag } from 'lucide-react';
import { ITENS_CATALOGO } from '../data/itens';

export function Listagem() {
  const [busca, setBusca] = useState('');

  const itensFiltrados = ITENS_CATALOGO.filter(
    (item) =>
      item.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      item.categoria.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Cabeçalho da Página */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <span className="inline-block px-2.5 py-0.5 text-xs font-semibold bg-emerald-50 text-emerald-700 rounded-full mb-2">
            Rota: /listagem
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900">Listagem de Módulos</h1>
          <p className="text-sm text-slate-500 mt-1">
            Clique em qualquer item para navegar até a rota dinâmica <code className="bg-slate-100 px-1.5 py-0.5 rounded">/item/:id</code>.
          </p>
        </div>

        {/* Filtro de busca */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Filtrar por título ou categoria..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50/60 text-sm outline-none focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
          />
        </div>
      </div>

      {/* Grid de Cards */}
      {itensFiltrados.length === 0 ? (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center">
          <p className="text-slate-600 font-medium">Nenhum item encontrado para &quot;{busca}&quot;.</p>
          <button
            type="button"
            onClick={() => setBusca('')}
            className="mt-3 text-sm font-semibold text-indigo-600 hover:underline"
          >
            Limpar filtro
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {itensFiltrados.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col justify-between hover:border-indigo-300 hover:shadow-md transition"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700">
                    <Tag className="w-3 h-3" />
                    {item.categoria}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    ID #{item.id}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-slate-900">{item.titulo}</h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{item.resumo}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                  <Clock className="w-3.5 h-3.5" />
                  {item.duracao}
                </span>

                <Link
                  to={`/item/${item.id}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition"
                >
                  Ver Detalhes
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
