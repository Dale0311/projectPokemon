import { Route, Routes } from "react-router";
import Home from "@/routes/home/Home";
import RootLayout from "@/layouts/RootLayout";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
