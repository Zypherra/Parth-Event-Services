import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import WhatsAppButton from "./components/WhatsappButton";
import Decorations from "./pages/Decorations";
import PaanCounter from "./pages/PaanCounter";
import FruitCounter from "./pages/FruitCounter";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return(
    <BrowserRouter>
      <ScrollToTop />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decorations" element={<Decorations />} />
        <Route path="/paan-counter" element={<PaanCounter />} />
        <Route path="/fruit-counter" element={<FruitCounter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;