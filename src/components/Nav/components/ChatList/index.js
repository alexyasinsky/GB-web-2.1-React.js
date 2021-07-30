
import ChatListItem from "./components/ChatListItem";
import { NavLink } from "react-router-dom";




export default function ChatList(props) {
	const list = props.list;

	return (
		list.map((buddy) =>
			<NavLink key={buddy.id} to={`/chat/${buddy.name}`}>
				<ChatListItem item = {buddy}/>
			</NavLink>
		)
	)
}