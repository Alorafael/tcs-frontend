import './App.css';
import Home from './components/Home/Home';
import CadastrarCategoria from './components/Categorias/CadastrarCategoria';
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
          <Route path="/" element={<Home/>} /> 
          <Route path="/categorias" element={<CadastrarCategoria/>} />
          <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;