import { Link } from "react-router-dom";
import "./styles.css";

function NotFound() {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <h2>Ops! Página não encontrada.</h2>
      <Link to='/'>Voltar para lista de tarefas</Link>
    </div>
  )
}

export default NotFound;