import Login from "./Estrutura/Auth/Login/index.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Routers } from "./Estrutura/Routers/MenuRouters/index.tsx";
import CriarEmpresa from "./Estrutura/Pages/Empresas/CriarEmpresa/index.tsx";
import ListarEmpresa from "./Estrutura/Pages/Empresas/ListarEmpresas/index.tsx";
import CriarUsuarios from "./Estrutura/Pages/Usuarios/CriarUsuario/index.tsx";
import ListarUsuarios from "./Estrutura/Pages/Usuarios/ListarUsuario/index.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route index='/Empresas/criarempresa' path='/Empresas/criarempresa' element={<Routers path='/Empresas/criarempresa' children={<CriarEmpresa />} />} />
        <Route index='/Empresas/listarempresas' path='/Empresas/listarempresas' element={<Routers path='/Empresas/listarempresas' children={<ListarEmpresa />} />} />
        <Route index='/Usuarios/criarusuario' path='/Usuarios/criarusuario' element={<Routers path='/Usuarios/criarusuario' children={<CriarUsuarios/>} />} />
        <Route index='/Usuarios/listarusuario' path='/Usuarios/listarusuario' element={<Routers path='/Usuarios/listarusuario' children={<ListarUsuarios/>} />} />
      </Routes>
    </Router>
  );
}

export default App;