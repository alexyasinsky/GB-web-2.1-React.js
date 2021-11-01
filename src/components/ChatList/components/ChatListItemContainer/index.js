
import { useSelector} from "react-redux";


import ChatListItemComp from './components/ChatListItemComp';

import { db } from '../../../../api';
import { ref, onValue, remove } from "firebase/database";




export default function ChatListItem({chat}) {

  const profile = useSelector(state => state.users.profile);
  

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