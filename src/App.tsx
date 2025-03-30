/** @format */
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import PokemonDetailPage from "./pages/PokemonDetailPage";
import PokemonPage from "./pages/PokemonPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonPage />} />
        <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
