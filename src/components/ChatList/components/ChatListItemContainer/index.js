
import {useCallback} from "react";
import {useDispatch} from "react-redux";

import { removeChat } from "../../../../store/chats/actions";

import ChatListItemComp from './components/ChatListItemComp';


export default function ChatListItem(props) {

	const buddy = props.item;

	const dispatch = useDispatch();

	const deleteItem = useCallback(() => {
		dispatch(removeChat(buddy));
	}, [dispatch, buddy])


	return (
    <ChatListItemComp
      buddy={buddy}
      deleteItem={deleteItem}
    />
	)
}