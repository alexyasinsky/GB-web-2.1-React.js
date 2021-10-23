
import { useSelector} from "react-redux";


import ChatListItemComp from './components/ChatListItemComp';

import { db } from '../../../../api';
import { ref, update, removeValue} from "firebase/database";




export default function ChatListItem(props) {

	const chat = props.item;
  const profile = useSelector(state => state.users.profile);
	const chatsRef = ref(db, 'users/' + profile.id + '/chats/' + chat.chatId);


  const deleteBuddy = async () => {
    await chatsRef.remove();

  }


	return (
    <ChatListItemComp
      chat={chat}
      deleteBuddy={deleteBuddy}
    />
	)
}