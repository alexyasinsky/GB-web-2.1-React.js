
import ChatListItem from "./components/ChatListItem";



export default function ChatList(props) {
  const list = props.list;
	const deleteItem = props.delete;


	return (
		list.map((buddy) =>
			<ChatListItem key={buddy.id} item={buddy} delete={deleteItem}/>
		)
	)
}