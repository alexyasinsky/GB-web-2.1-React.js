import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

export default function Form({hideModal}) {

  

  return (
    <div className='profile__form'>
      <div className='profile__inputBox'>
      <TextField
        id="name"
        label="Введите имя"
        variant="outlined"
      />
      <Button
        variant="contained"
        color='primary'
      >
        Изменить
      </Button>
      </div>
      
        <div className='profile__inputBox'>
        <TextField
        id="avatar"
        label="Введите ссылку на фото для аватара"
        variant="outlined"
      />
      <Button
        variant="contained"
        color='primary'
      >
        Изменить
      </Button>
        </div>
      <Button
        variant="contained"
        color="secondary"
        onClick={hideModal}
      >
        Назад      
      </Button>
    </div>
    
  )
}