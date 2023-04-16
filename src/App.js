import Estado from "./components/Estado";
import Inventario from "./components/Inventario";
import Marcas from "./components/Marcas";
import TipoEquipos from "./components/TipoEquipos";
import Usuario from "./components/Usuario";
import NavBar from "./components/ui/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  const title = "Tipo Equipo"
  return (
    <>
    <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path="/equipo" element={<TipoEquipos></TipoEquipos>}></Route>
          <Route path="/estado" element={<Estado/>}></Route>
          <Route path="/usuario" element={<Usuario/>}></Route>
          <Route path="/marca" element={<Marcas/>}></Route>
          <Route path="/inventario" element={<Inventario/>}></Route>
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
