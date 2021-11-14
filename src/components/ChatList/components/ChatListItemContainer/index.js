
import { useSelector} from "react-redux";


import ChatListItemComp from './components/ChatListItemComp';

import { db } from '../../../../api';
import { ref, remove } from "firebase/database";
import {getProfile} from "../../../../store/users/selectors";




export default function ChatListItem({chat}) {

  const profile = useSelector(getProfile);
  

  const deleteBuddy = async () => {
  	await remove(ref(db, 'users/' + profile.id + '/chats/' + chat.profileChatId));
  }


	return (
    <ChatListItemComp
      chat={chat}
      deleteBuddy={deleteBuddy}
    />
	)
}