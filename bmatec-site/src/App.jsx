import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CatalogoPage from "./pages/CatalogoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalogo" element={<CatalogoPage />} />

        {/* TODO: Añadir 'Hacer Cotización' */}
      </Routes>
    </Router>
  );
}

export default App;
