
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";


import Area from '../../components/Area';

import './style.scss';

import {Button} from "@material-ui/core";

import { useDispatch } from 'react-redux';
import { clearUsersStore } from '../../store/users/actions';


export default function Profile() {

  const dispatch = useDispatch();

	function signOutHandler() {
		const auth = getAuth();
		signOut(auth).then(() => {
      dispatch(clearUsersStore());
			console.log('sign out successful');
		})
    .catch((error) => {
			console.log('sign out failed')
		});
	}

  const profile = useSelector(state => state.users.profile);


	return (
		<Area>
      <div className="profile__card">
        <div>
          <img alt='avatar' src={ profile?.avatar }/>
        </div>
        <div className='profile__content'>
          <p>Имя: <span>{ profile?.name}</span></p> 
          <p>email: <span>{ profile?.email}</span></p> 
          <Button
            onClick={signOutHandler}
				    variant="contained"
            color="primary"
          >Выйти из профиля
        </Button>
        <Button
         color="secondary"
          >Изменить учетные данные
        </Button>
        </div>
      </div>
		</Area>
	)
}