import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1>404</h1>
      <h2>Ops! Página não encontrada.</h2>
      <Link to="/">Página inicial</Link>
    </div>
  )
}

export default Error;