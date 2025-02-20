import './App.css';
import Home from './components/Login/Home';
import Connection from './components/Login/Connection';
import BuscarUsuarios from './components/Usuarios/BuscarUsuarios';
import CadastrarUsuario from './components/Usuarios/CadastrarUsuario';
import EditarUsuarios from './components/Usuarios/EditarUsuarios';
import BuscarCategorias from './components/Categorias/BuscarCategorias';
import CadastrarCategoria from './components/Categorias/CadastrarCategoria';
import EditarCategorias from './components/Categorias/EditarCategorias';
import BuscarAvisos from './components/Avisos/BuscarAvisos';
import CadastrarAviso from './components/Avisos/CadastrarAviso';
import EditarAvisos from './components/Avisos/EditarAvisos';
import Login from './components/Login/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Connection/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/usuarios" element={<BuscarUsuarios/>}/>
          <Route path="/usuarios-cadastro" element={<CadastrarUsuario/>}/>
          <Route path="/usuarios-editar" element={<EditarUsuarios/>}/>
          <Route path="/categorias" element={<BuscarCategorias/>}/>
          <Route path="/categorias-cadastro" element={<CadastrarCategoria/>}/>
          <Route path="/categorias-editar/:id" element={<EditarCategorias/>}/>
          <Route path="/avisos" element={<BuscarAvisos/>}/>
          <Route path="/avisos-cadastro" element={<CadastrarAviso/>}/>
          <Route path="/avisos-editar/:id" element={<EditarAvisos/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;