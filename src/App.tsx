import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import RoutesApp from "./routes";

function App() {
  return (
    <>
      <RoutesApp />
      <ToastContainer className="d-none d-md-block" autoClose={2000} />
    </>
  )
}

export default App
