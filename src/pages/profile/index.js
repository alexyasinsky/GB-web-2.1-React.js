import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleShowName } from "../../store/profile/actions";

import Area from '../../components/Area';

import './style.scss';

export default function Profile() {

	const { showName, name } = useSelector((state) => state.profile);
	const dispatch = useDispatch();
	console.log(showName);

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