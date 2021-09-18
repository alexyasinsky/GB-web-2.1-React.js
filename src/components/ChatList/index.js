
import ChatListItem from "./components/ChatListItem";

import { useSelector } from "react-redux";



export default function ChatList() {
	const list = useSelector(state => state.chats);



	return (
		list.map((buddy) =>
			<ChatListItem key={buddy.id} item={buddy}/>
		)
	)
}