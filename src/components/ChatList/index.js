
import ChatListItem from "./components/ChatListItemContainer";

import { useSelector } from "react-redux";




export default function ChatList() {
  let chatlist = useSelector(state => state.users.profile.chats);
  if (chatlist) {
    return (
      chatlist.map((chat) =>
        <ChatListItem key={chat.id} chat={chat}/>
      )
    )
  } else return ('');
}