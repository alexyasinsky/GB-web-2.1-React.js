
import {useCallback, useState} from 'react';


import { useSelector} from "react-redux";
import { getProfile, getBuddies, getChatlist } from "../../store/users/selectors";
import BuddyAddFormComp from './components/BuddyAddFromComp';

import { db } from '../../api';
import { set, ref, push, child } from "firebase/database";

import './style.scss';

export default function BuddyAddForm() {


  const buddies = useSelector(getBuddies);
  const profile = useSelector(getProfile);
  const chats = useSelector(getChatlist);

  const findBuddyId = useCallback(email => {
    for (let buddy of buddies) {
      if (buddy.email === email) {
        return buddy.id;
      }
    }
  }, [buddies]);

  function checkExistingOfChat(profile, buddy, chats) {
    let id = '';
  	chats.forEach(chat => {
  		if (chat.user1 === profile) {
  			if (chat.user2 === buddy) {
  			  id = chat.chatId;
			  }
		  }
  		if (chat.user2 === profile) {
  			if (chat.user1 === buddy) {
  				id = chat.chatId;
			  }
		  }
	  })
    return id;
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
	  const chatId = checkExistingOfChat(profile.id, buddyId, chats);
    if (chatId) {
	    await set(profileNewChatRef, chatId);
  } else {
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
  }

	const [id, setId] = useState('');


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