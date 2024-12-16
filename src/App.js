import './App.css';
import Home from './components/Home/Home';
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
          {/* <Route path="/login" element={<LoginPage/>} />
          <Route path = "/cadastro-candidato" element={<CadastroCandidato/>} />
          <Route path = "/cadastro-empresa" element={<CadastroEmpresa/>}/>
          <Route path = "/vagas" element={<ListarVagas/>}/> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;