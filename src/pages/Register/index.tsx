import { useState } from 'react';
import './styles.css';
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import NotifySuccess from '../../components/NotifySuccess';
import NotifyError from '../../components/NotifyError';

function Register() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [favorite, setFavorite] = useState(false);
  const [error, setError] = useState(false);

  const getTaskList = () => {
    api.get('/tasks');
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (title === '') {
      setError(true);
      return;
    }

    api.post('/tasks', {
      title: title,
      description: description,
      is_favorited: favorite
    })
      .then(() => {
        getTaskList();
        navigate('/');
        NotifySuccess({
          message: 'Tarefa cadastrada com sucesso.',
        });
      })
      .catch(() => {
        NotifyError({
          message: 'Erro ao cadastrar tarefa.',
        })
      });
  }

  return (
    <div className='container-center'>
      <div className='register'>
        <h1>Nova tarefa</h1>
        <form onSubmit={handleSubmit}>
          {error && <small className='error'>O campo título é obrigatório.</small>}
          <input
            type='text'
            placeholder='Título'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder='Descreva sua tarefa...'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <div className='favorite'>
            <input 
              type='checkbox'
              checked={favorite}
              onChange={() => setFavorite(!favorite)}
            />
            <label>Favoritar tarefa</label>
          </div>
          <button type='submit'>Registrar</button>
        </form>
      </div>
    </div>
  )
}

export default Register;