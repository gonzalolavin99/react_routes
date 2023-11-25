import { BrowserRouter, Routes, Route } from "react-router-dom";

import BarraNav from "./components/BarraNav";

import "./App.css";
import Home from "./views/Home";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";

function App() {
  return (
    <BrowserRouter>
      <>
        <BarraNav />
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/contacto" element={<Contacto/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>

        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
