import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CatalogoPage from "./pages/CatalogoPage";
import CotizacionPage from "./pages/CotizacionPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalogo" element={<CatalogoPage />} />
        <Route path="/cotizar" element={<CotizacionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
