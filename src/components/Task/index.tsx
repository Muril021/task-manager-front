import { ListGroup } from "react-bootstrap";
import "./styles.css";
import { BsPencil, BsStarFill, BsTrash3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import api from "../../api";
import NotifySuccess from "../NotifySuccess";
import NotifyError from "../NotifyError";

interface TaskProps {
  idTask: number;
  titleTask: string;
  descriptionTask: string;
  favoriteTask?: boolean;
  tasks: any[];
  setTasks: any;
}

function Task({
  idTask,
  titleTask,
  descriptionTask,
  favoriteTask,
  tasks,
  setTasks,
}: TaskProps) {

  const handleRemove = (id: number) => {
    api.delete(`/tasks/${id}`)
      .then(() => {
        const filterTasks = tasks.filter(task => task.id !== id);

        setTasks(filterTasks);

        NotifySuccess({
          message: 'Tarefa removida com sucesso.',
        });
      })
      .catch(() => {
        NotifyError({
          message: 'Ops, não foi possível remover a tarefa.',
        });
      });
  };

  return (
    <ListGroup>
      <ListGroup.Item>
        <div className='tasks'>
          <div className='content'>
            <h3>{titleTask}</h3>
            <p>
              {descriptionTask}
            </p>
            {favoriteTask === true ? (
              <BsStarFill style={{ color: 'gold' }} />
            ) : (null)}
          </div>
          <div className='options'>
            <Link to={`/editar/${idTask}`}><BsPencil color='#868eda' /></Link>
            <Link to='#' onClick={() => handleRemove(idTask)}>
              <BsTrash3 color='#f7857c' />
            </Link>
          </div>
        </div>
      </ListGroup.Item>
    </ListGroup>
  )
}

export default Task;