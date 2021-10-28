
import ChatListItem from "./components/ChatListItemContainer";

import { useSelector } from "react-redux";




export default function ChatList() {

  const chatList = useSelector(state => state.users.profile.chats);

	return (
		chatList.map((chat) =>
			<ChatListItem key={chat.id} chat={chat}/>
		)
	)
}