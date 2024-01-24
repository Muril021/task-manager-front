import { useEffect, useState } from "react";
import "../Register/styles.css";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api";
import NotifySuccess from "../../components/NotifySuccess";
import NotifyError from "../../components/NotifyError";

interface Task {
  title: string,
  description: string,
  is_favorited: boolean
};

function Edit() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [taskData, setTaskData] = useState<Task>({
    title: '',
    description: '',
    is_favorited: false
  });

  useEffect(() => {
    getTask();
  }, []);

  const getTask = () => {
    api.get(`/tasks/${id}`)
      .then((response) => {
        setTaskData(response.data);
      })
      .catch((err) => {
        if (err.response.status !== 200) {
          navigate('/not-found');

          return;
        }
      });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    api.put(`/tasks/${id}`, taskData)
      .then(() => {
        navigate('/');
        NotifySuccess({
          message: 'Tarefa editada com sucesso.',
        });
      })
      .catch(() => {
        NotifyError({
          message: 'Erro ao editar tarefa.',
        })
      })
  };

  return (
    <div className='container-center'>
      <div className='register'>
        <h1>Editar tarefa</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Título'
            value={taskData.title}
            onChange={
              e => setTaskData({
                ...taskData, title: e.target.value
              })
            }
          />
          <textarea
            placeholder='Descreva sua tarefa...'
            value={taskData.description}
            onChange={
              e => setTaskData({
                ...taskData, description: e.target.value
              })
            }
          />
          <div className='favorite'>
            <input 
              type='checkbox'
              checked={taskData.is_favorited}
              onChange={
                () => setTaskData({
                  ...taskData,
                  is_favorited: !taskData.is_favorited
                })
              }
            />
            <label>Favoritar tarefa</label>
          </div>
          <button type='submit'>Salvar</button>
        </form>
      </div>
    </div>
  )
}

export default Edit;