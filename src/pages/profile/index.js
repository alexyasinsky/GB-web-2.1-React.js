import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleShowName } from "../../store/profile/actions";

import Area from '../../components/Area';

import './style.scss';
import {getProfile} from "../../store/profile/selectors";

export default function Profile() {

	const { showName, name } = useSelector(getProfile);
	const dispatch = useDispatch();

	const setShowName = useCallback(() => {
		dispatch(toggleShowName());
	}, [dispatch]);


	return (
		<Area>
			<div>Имя профиля: <span>{`${name}`}</span></div>
			<input
				type="checkbox"
				checked={showName}
				value={showName}
				onChange={setShowName}
			/>
			<label>Чекбокс</label>
		</Area>
	)
}