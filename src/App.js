import './App.css';
import Home from './components/Home/Home';
import BuscarCategorias from './components/Categorias/BuscarCategorias';
import CadastrarCategoria from './components/Categorias/CadastrarCategoria';
import EditarCategorias from './components/Categorias/EditarCategorias';
import BuscarCategorias from './components/Avisos/BuscarAvisos';
import CadastrarCategoria from './components/Avisos/CadastrarAviso';
import EditarCategorias from './components/Avisos/EditarAvisos';
import Login from './components/Login/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginPage from './components/Login/Index';
// import CadastroCandidato from './components/Cadastro/CadastroCandidato';
// import CadastroEmpresa from './components/Cadastro/CadastroEmpresa';
// import ListarVagas from './components/Vagas/ListarVagas';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/categorias" element={<BuscarCategorias/>}/>
          <Route path="/categorias-cadastro" element={<CadastrarCategoria/>}/>
          <Route path="/categorias-editar" element={<EditarCategorias/>}/>
          <Route path="/avisos" element={<BuscarAvisos/>}/>
          <Route path="/avisos-cadastro" element={<CadastrarCategoria/>}/>
          <Route path="/avisos-editar" element={<EditarCategorias/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;