import { useEffect, useState } from "react";
import api from "../../api";
import Task from "../../components/Task";
import { Link } from "react-router-dom";

import "./styles.css";
import NotifyError from "../../components/NotifyError";

interface Tasks {
  id: number,
  title: string,
  description: string
  is_favorited?: boolean
};

function Home() {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  useEffect(() => {
    getTaskList();
  }, [])

  const getTaskList = () => {
    api.get('/tasks')
      .then(response => setTasks(response.data))
      .catch(() => {
        NotifyError({
          message: 'Dados não encontrados.',
        })
      });
  };

  return (
    <div className='home'>
      <div className='options'>
        <h1 className='title'>Lista de tarefas</h1>
        <Link to='/cadastrar' className='add'>
          Nova tarefa
        </Link>
      </div>
      {tasks.map(task => (
        <Task
          key={task.id}
          idTask={task.id}
          titleTask={task.title}
          descriptionTask={task.description}
          favoriteTask={task.is_favorited}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
}

export default Home;