
import {useCallback, useState} from 'react';


import {useDispatch, useSelector} from "react-redux";
import BuddyAddFormComp from './components/BuddyAddFromComp';

import { db } from '../../api/firebase';
import { set, ref, push, child } from "firebase/database";

import './style.scss';

export default function BuddyAddForm() {


  const buddies = useSelector(state => state.users.buddies);

  const profile = useSelector(state => state.users.profile);

  const findBuddyId = useCallback(email => {
    for (let buddy of buddies) {
      if (buddy.email === email) {
        return buddy.id;
      }
    }
  }, [buddies]);


  const createNewChat = async (email) => {
	  const newDialogRef = push(child(ref(db), 'dialogs'));
	  const newChatRef = push(child(ref(db), 'chats'));
    const buddyId = findBuddyId(email);
    if (!buddyId) {
    	alert('такой e-mail не зарегистрирован');
    	return
    }
    const profileNewChatRef = push(ref(db, 'users/' + profile.id + '/chats'));
	  const buddyNewChatRef = push(ref(db, 'users/' + buddyId + '/chats'));
    const chat = {
      user1: profile.id,
	    user2: buddyId,
      dialogId: newDialogRef.key,
      chatId: newChatRef.key,
    }
    await set(newChatRef, chat);
	  await set(buddyNewChatRef, newChatRef.key);
	  await set(profileNewChatRef, newChatRef.key);
  }

	const [id, setId] = useState('');
	const dispatch = useDispatch();
	const addBuddy = useCallback( () => {

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