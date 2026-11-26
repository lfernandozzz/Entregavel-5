import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Hash, CheckCircle2, Clock, Award, AlertTriangle } from 'lucide-react';
import { ITENS_CATALOGO } from '../data/itens';

export function Detalhes() {
  // Parte 3 – Tarefa de Casa (Desafio): capturar o parâmetro dinâmico :id da URL com useParams
  const { id } = useParams();

  // Busca o item correspondente ao ID capturado na URL
  const itemEncontrado = ITENS_CATALOGO.find((item) => item.id === id);

  return (
    <div className="space-y-6">
      {/* Barra superior com link de retorno e exibição explícita do ID capturado via useParams */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          to="/listagem"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para Listagem
        </Link>

        {/* Destaque do parâmetro capturado pelo hook useParams() */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">
          <Hash className="w-4 h-4 text-amber-600" />
          <span>
            ID capturado via <code className="font-mono font-bold">useParams()</code>:{' '}
            <strong className="px-2 py-0.5 rounded bg-amber-200/70 font-mono">{id}</strong>
          </span>
        </div>
      </div>

      {/* Conteúdo do Item ou Fallback caso o ID não exista no catálogo */}
      {itemEncontrado ? (
        <article className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700">
              {itemEncontrado.categoria}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
              <Award className="w-3.5 h-3.5 text-slate-500" />
              Nível: {itemEncontrado.nivel}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              Duração: {itemEncontrado.duracao}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {itemEncontrado.titulo}
          </h1>

          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            {itemEncontrado.descricaoCompleta}
          </p>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
              Tópicos Abordados neste Módulo
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {itemEncontrado.topicos.map((topico) => (
                <li
                  key={topico}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-sm font-medium text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  {topico}
                </li>
              ))}
            </ul>
          </div>

          {/* Atalhos rápidos para testar outros IDs na mesma rota dinâmica */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 mr-2">
              Testar outros parâmetros na URL:
            </span>
            {ITENS_CATALOGO.map((outro) => (
              <Link
                key={outro.id}
                to={`/item/${outro.id}`}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  outro.id === id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                /item/{outro.id}
              </Link>
            ))}
          </div>
        </article>
      ) : (
        <div className="bg-white rounded-3xl shadow-sm border border-red-200 p-8 text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mx-auto">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold text-slate-900">
            Item não encontrado para o ID &quot;{id}&quot;
          </h1>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            O hook <code className="bg-slate-100 px-1 rounded">useParams()</code> capturou o parâmetro{' '}
            <strong>{id}</strong> da URL, mas não há registro correspondente no catálogo.
          </p>
          <div className="pt-2">
            <Link
              to="/listagem"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition"
            >
              Ver itens disponíveis
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
