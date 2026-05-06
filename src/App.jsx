import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import Detail from "./pages/Detail";
import Smartphone from "./pages/Smartphone";
import { CartTab } from "./components/CartTab";
import { NotFound } from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/smartphone" element={<Smartphone />} />
          <Route path="/product/:slug" element={<Detail />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
      <CartTab />
    </BrowserRouter>
  );
}

export default App;
