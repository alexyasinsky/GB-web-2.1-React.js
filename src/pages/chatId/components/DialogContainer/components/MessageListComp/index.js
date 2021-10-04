
import MessageListItem from "./components/MessageListItemComp";
import ListItem from '@material-ui/core/ListItem';

export default function MessageList({list}) {
    return (
      list.map((message, ind) =>
        <ListItem key={`${message.user}+${ind}`}>
          <MessageListItem message={message}/>
        </ListItem>
      )
    )
}
