
import { useSelector } from "react-redux";



import Area from '../../components/Area';

import './style.scss';
import {getProfile} from "../../store/profile/selectors";

export default function Profile() {

	// const { name } = useSelector(getProfile);

  const users = useSelector(state => state.profile);

  console.log(users);

	return (
		<Area>
			<div>Имя профиля: <span>{`Alex`}</span></div>


		</Area>
	)
}