import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Edit from "../pages/Edit";
import Error from "../pages/Error";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/editar" element={<Edit />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;