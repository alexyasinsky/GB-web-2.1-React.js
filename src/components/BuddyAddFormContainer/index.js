
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
	  const newDialogRef = push(child(ref(db), 'dialogs'));
    const buddy = Object.assign({}, findBuddy(email));
    delete buddy.chats;
		const profileForBuddy = Object.assign({}, profile);
		delete profileForBuddy.chats;
    const newProfileChatRef = push(ref(db, 'users/' + profile.id + '/chats'));
	  const newBuddyChatRef = push(ref(db, 'users/' + buddy.id + '/chats'));
    const profileChat = {
      buddy,
      dialogId: newDialogRef.key,
      chatId: newProfileChatRef.key
    }
	  const buddyChat = {
		  buddy: profileForBuddy,
		  dialogId: newDialogRef.key,
		  chatId: newProfileChatRef.key
	  }
    await set(newProfileChatRef, profileChat);
	  await set(newBuddyChatRef, buddyChat);
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