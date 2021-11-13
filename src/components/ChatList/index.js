
import ChatListItem from "./components/ChatListItemContainer";

import { useSelector } from "react-redux";
import {getChatlist} from "../../store/users/selectors";




export default function ChatList() {
  let chatlist = useSelector(getChatlist);
  console.log(chatlist);
  if (chatlist) {
    return (
      chatlist.map((chat) =>
        <ChatListItem key={chat.id} chat={chat}/>
      )
    )
  } else return ('');
}