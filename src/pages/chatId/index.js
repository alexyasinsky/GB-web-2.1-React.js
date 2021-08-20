import { Grid, Paper, List} from '@material-ui/core';


import ChatList from "../../components/ChatList";
import BuddyAddForm from "../../components/BuddyAddForm";
import Dialog from "./components/Dialog";

import './style.scss';


export default function ChatId(props) {

  const buddyList = props.list;
  const deleteBuddyFromList = props.delete;
  const addBuddyToList = props.add;
  
  return (
    <Grid item container xs={12} >
      <Grid item container xs={3} >
        <Grid item>
          <Paper className='chats__list'>
            <List >
              <ChatList 							 
                list={buddyList}
                delete = {deleteBuddyFromList}
              />
            </List>
          </Paper>
        </Grid>
        <Grid item>
          <BuddyAddForm add={addBuddyToList}/>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <Dialog/>
      </Grid>
    </Grid>
  )
}