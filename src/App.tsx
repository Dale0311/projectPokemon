import { Route, Routes } from "react-router";
import Home from "@/routes/home/Home";
import RootLayout from "@/layouts/RootLayout";
import PokemonDetails from "./routes/PokemonDetails";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path={"/pokemons/:id"} element={<PokemonDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
