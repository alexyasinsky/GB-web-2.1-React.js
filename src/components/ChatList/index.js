
import ChatListItem from "./components/ChatListItem";

import { useSelector } from "react-redux";
import {getChats} from "../../store/chats/selectors";



export default function ChatList() {
	const list = useSelector(getChats);



	return (
		list.map((buddy) =>
			<ChatListItem key={buddy.id} item={buddy}/>
		)
	)
}