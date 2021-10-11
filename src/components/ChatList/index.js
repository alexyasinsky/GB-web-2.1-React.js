
import ChatListItem from "./components/ChatListItemContainer";

import { useSelector } from "react-redux";




export default function ChatList() {

  const buddies  = useSelector(state => state.users.buddies);


	return (
		buddies.map((buddy) =>
			<ChatListItem key={buddy.email} item={buddy}/>
		)
	)
}