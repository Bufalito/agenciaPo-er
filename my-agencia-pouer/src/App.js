import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import DetallePlanes from "./components/detallePlanes/detallePlanes";
import Contacto from "./components/contacto/contacto";
import Nosotros from "./components/nosotros/nosotros";
import Planes from "./components/planes/planes";
import Nav from "./components/navBar/Nav";
import Footer from "./components/footer/footer";
import { useLocation } from "react-router-dom";



function App() {
  const location = useLocation().pathname.slice(1)
  const esNosotros = location === "nosotros"
  return (
    <>
      <nav className={`${esNosotros && "bgAzul"}`}> <Nav /></nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detallesPlanes" element={<DetallePlanes />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/planes" element={<Planes />} />
      </Routes>
      <footer> <Footer /> </footer>
    </>
  );
}

export default App;
