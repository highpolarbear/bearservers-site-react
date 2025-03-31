import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import WeightCutPage from "./pages/gymTools/WeightCutPage";
import GymToolsHomePage from "./pages/gymTools/gymTools";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gym-tools">
          <Route index element={<GymToolsHomePage />} />
          <Route path="weight-cut" element={<WeightCutPage />} />
          <Route path="weight-cut.html" element={<WeightCutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
