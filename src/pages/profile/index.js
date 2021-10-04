
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";


import Area from '../../components/Area';

import './style.scss';
// import {getProfile} from "../../store/profile/selectors";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getUsersFromDataBase} from "../../store/profile/actions";
import {Button} from "@material-ui/core";

export default function Profile() {

	// const { name } = useSelector(getProfile);
	const dispatch = useDispatch();

	function signOutHandler() {
		const auth = getAuth();
		signOut(auth).then(() => {
			console.log('sign out successful');
		}).catch((error) => {
			console.log('sign out failed')
		});
	}


	// useEffect(()=> {
	// 	dispatch(getUsersFromDataBase())
	// },[])

  const users = useSelector(state => state.profile);

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