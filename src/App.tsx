import { Route, Routes } from "react-router";
import RootLayout from "@/layouts/RootLayout";
import HomePage from "./routes/home/HomePage";
import PokedexPage from "./routes/Pokedex/PokedexPage";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="settings" element={<HomePage />} />
        <Route path={"pokedex/:id"} element={<PokedexPage />} />
      </Route>
    </Routes>
  );
};

export default App;
