
import { useSelector } from "react-redux";



import Area from '../../components/Area';

import './style.scss';
import {getProfile} from "../../store/profile/selectors";

export default function Profile() {

	const { name } = useSelector(getProfile);



	return (
		<Area>
			<div>Имя профиля: <span>{`${name}`}</span></div>


		</Area>
	)
}