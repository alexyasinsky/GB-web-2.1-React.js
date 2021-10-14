
import {useCallback, useState} from 'react';


import {useDispatch, useSelector} from "react-redux";
import {addChat} from "../../store/chats/actions";
import BuddyAddFormComp from './components/BuddyAddFromComp';

import { db } from '../../api/firebase';
import { set, ref, push, child } from "firebase/database";

import './style.scss';

export default function BuddyAddForm() {


  const buddies = useSelector(state => state.users.buddies);

  const profile = useSelector(state => state.users.profile);

  const findBuddy = useCallback(email => {
    let currentBuddy = {};
    for (let buddy of buddies) {
      if (buddy.email === email) {
        currentBuddy = buddy;
      }
    }
    return currentBuddy;
  }, [buddies]);



  const createNewChat = async (email) => {
    const buddy = Object.assign({}, findBuddy(email));
    delete buddy.chats;
    const newDialogRef = push(child(ref(db), 'dialogs'));
    const newChatRef = push(ref(db, 'users/' + profile.id + '/chats'));
    const chat = {
      buddy,
      dialogId: newDialogRef.key,
      chatId: newChatRef.key
    }
    await set(newChatRef, chat);
  }

	const [id, setId] = useState('');
	const dispatch = useDispatch();
	const addBuddy = useCallback( () => {
		dispatch(addChat(id));
	}, [dispatch, id]);


	const handleId = (event) => {
		setId(event.target.value);
	}

	const add = () => {
    createNewChat(id)
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