
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";


import Area from '../../components/Area';

import './style.scss';

import {Button} from "@material-ui/core";

export default function Profile() {


	function signOutHandler() {
		const auth = getAuth();
		signOut(auth).then(() => {
			console.log('sign out successful');
		}).catch((error) => {
			console.log('sign out failed')
		});
	}


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