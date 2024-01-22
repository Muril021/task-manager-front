import { ListGroup } from "react-bootstrap";
import "./tasks.css";
import { BsPencil, BsStar, BsTrash3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

function Tasks() {
  const [favorite, setFavorite] = useState(false);

  const toggleFav = () => {
    setFavorite(!favorite);
  }

  return (
    <div className="tasks">
      <ListGroup>
        <ListGroup.Item>
          <div className="content">
            <div onClick={toggleFav}>
              {favorite ? (
                <BsStar color="gold" />
              ) : (
                <BsStar />
              )}
            </div>
            Example
            <div className="options">
              <Link to="/editar"><BsPencil color="#868eda" /></Link>
              <BsTrash3 color="#f7857c" />
            </div>
          </div>
          <div className="radio">
            <label style={{ marginRight: '5px' }}>
              <input type="radio" name="status" />
              Pendente
            </label>
            <label style={{ marginRight: '5px' }}>
              <input type="radio" name="status" />
              Em andamento
            </label>
            <label style={{ marginRight: '5px' }}>
              <input type="radio" name="status" />
              Concluído
            </label>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default Tasks;