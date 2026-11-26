import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Listagem } from './pages/Listagem';
import { Detalhes } from './pages/Detalhes';

function PaginaNaoEncontrada() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-10 text-center space-y-4">
      <p className="text-sm font-bold text-indigo-600">Erro 404</p>
      <h1 className="text-2xl font-extrabold text-slate-900">Página não encontrada</h1>
      <p className="text-sm text-slate-500">A rota acessada não existe nesta aplicação.</p>
      <Link
        to="/"
        className="inline-block px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition"
      >
        Voltar para Home
      </Link>
    </div>
  );
}

export function App() {
  return (
    // Parte 1: Configuração do BrowserRouter, Routes e Route
    <BrowserRouter>
      <Routes>
        {/* Parte 2: Rota pai com Layout compartilhado (<Outlet />) */}
        <Route path="/" element={<Layout />}>
          {/* Rota inicial (Home) */}
          <Route index element={<Home />} />

          {/* Rota de Listagem */}
          <Route path="listagem" element={<Listagem />} />

          {/* Parte 3: Rota dinâmica de Detalhes com parâmetro :id */}
          <Route path="item/:id" element={<Detalhes />} />

          {/* Rota fallback para URLs inexistentes */}
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
