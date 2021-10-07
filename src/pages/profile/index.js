
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

  const users = useSelector(state => state.users);

  console.log(users);


	return (
		<Area>
			<div>Имя профиля: <span>{`Alex`}</span></div>
			<Button
				onClick={signOutHandler}
				variant="contained"
			>
				Выйти из профиля
			</Button>
		</Area>
	)
}