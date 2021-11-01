
import {useCallback, useState} from 'react';


import {useDispatch, useSelector} from "react-redux";
import BuddyAddFormComp from './components/BuddyAddFromComp';

import { db } from '../../api/firebase';
import { set, ref, push, child } from "firebase/database";

import './style.scss';

export default function BuddyAddForm() {


  const buddies = useSelector(state => state.users.buddies);

  const profile = useSelector(state => state.users.profile);

  const chats = useSelector(state => state.chats);

  const findBuddyId = useCallback(email => {
    for (let buddy of buddies) {
      if (buddy.email === email) {
        return buddy.id;
      }
    }
  }, [buddies]);

  function checkExistingOfChat(profile, buddy, chats) {
  	chats.forEach(chat => {
  		if (chat.user1 === profile) {
  			if (chat.user2 === buddy) {
  				return chat.chatId;
			  }
		  }
  		if (chat.user2 === profile) {
  			if (chat.user1 === buddy) {
  				return chat.chatId;
			  }
		  }
	  })
  }

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
	  let chat = checkExistingOfChat(profile.id, buddyId, chats);
    if (chat) {
	    await set(profileNewChatRef, newChatRef.key);
  } else {
	    chat = {
		    user1: profile.id,
		    user2: buddyId,
		    dialogId: newDialogRef.key,
		    chatId: newChatRef.key,
	    }
	    await set(newChatRef, chat);
	    await set(buddyNewChatRef, newChatRef.key);
	    await set(profileNewChatRef, newChatRef.key);
    }
  }

	const [id, setId] = useState('');
	const dispatch = useDispatch();


	const handleId = (event) => {
		setId(event.target.value);
	}

	const add = () => {
    createNewChat(id)
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