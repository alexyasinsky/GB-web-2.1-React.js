
import {useCallback, useState} from 'react';

import {useDispatch} from "react-redux";
import {addChat} from "../../store/chats/actions";
import BuddyAddFormComp from './components/BuddyAddFromComp';

import './style.scss';

export default function BuddyAddForm() {

	const [id, setId] = useState('');
	const dispatch = useDispatch();
	const addBuddy = useCallback( () => {
		dispatch(addChat(id));
	}, [dispatch, id]);


	const handleId = (event) => {
		setId(event.target.value);
	}

	const add = () => {
		addBuddy(id);
		setId('');
	}



	return (
		<BuddyAddFormComp
      onChange={handleId}
      addFunction={add}
      value={id}
    />
	)
}