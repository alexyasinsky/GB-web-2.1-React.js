import './style.scss';
import {Button} from "@material-ui/core";

export default function Card({profile, signOut, visible, showModal}) {
  
  if (!visible) return null;

  return (
    <div className="profile__card">
      <div>
        <img alt='avatar' src={ profile?.avatar }/>
      </div>
      <div className='profile__content'>
        <p>Имя: <span>{ profile?.name}</span></p> 
        <p>email: <span>{ profile?.email}</span></p> 
        <Button
          onClick={signOut}
          variant="contained"
          color="primary"
        >Выйти из профиля
      </Button>
      <Button
        onClick={showModal}
        color="secondary"
        >Изменить учетные данные
      </Button>
      </div>
    </div>
  )
}