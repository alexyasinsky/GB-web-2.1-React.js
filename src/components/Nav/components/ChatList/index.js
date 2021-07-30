
import ChatListItem from "./components/ChatListItem";
import { NavLink } from "react-router-dom";




export default function ChatList(props) {
	const list = props.listProps.list;
	const deleteItem = props.listProps.delete;


	return (
		list.map((buddy) =>
			<NavLink key={buddy.id} to={`/chat/${buddy.name}`}>
				<ChatListItem item = {buddy} delete={deleteItem}/>
			</NavLink>
		)
	)
}