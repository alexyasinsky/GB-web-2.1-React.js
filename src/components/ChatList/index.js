
import ChatListItem from "./components/ChatListItemContainer";

import { useSelector } from "react-redux";




export default function ChatList() {

  const chats  = useSelector(state => state.users.profile.chats);

	return (
		chats.map((chat) =>
			<ChatListItem key={chat.buddy.id} item={chat}/>
		)
	)
}