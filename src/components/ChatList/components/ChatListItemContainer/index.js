
import { useSelector} from "react-redux";


import ChatListItemComp from './components/ChatListItemComp';

import { db } from '../../../../api';
import { set, ref, update, remove } from "firebase/database";




export default function ChatListItem(props) {

	const chat = props.item;
  const profile = useSelector(state => state.users.profile);


  const deleteBuddy = async () => {
    await remove(ref(db, 'users/' + profile.id + '/chats/' + chat.chatId));

  }


	return (
    <ChatListItemComp
      chat={chat}
      deleteBuddy={deleteBuddy}
    />
	)
}