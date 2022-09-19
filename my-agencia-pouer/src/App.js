import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home"
import DetallePlanes from "./components/detallePlanes/detallePlanes"
import Contacto from "./components/contacto/contacto";
import Nosotros from "./components/nosotros/nosotros";
import Planes from "./components/planes/planes";
import PreviewPay from "./components/previewPay/previewPay";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planes" element={<DetallePlanes />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/previewPay" element={<PreviewPay />} />
      </Routes>
    </>
  );
}

export default App;
