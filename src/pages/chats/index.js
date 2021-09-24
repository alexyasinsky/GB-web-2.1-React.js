import { Grid, Paper, List } from '@material-ui/core';


import ChatList from "../../components/ChatList";
import BuddyAddFormContainer from "../../components/BuddyAddFormContainer";
import Area from '../../components/Area';

import './style.scss';


export default function Chats() {


  return (
    <Grid item container xs={12} >
      <Grid item container xs={3} >
        <Grid item>
          <Paper className='chats__list'>
            <List >
              <ChatList/>
            </List>
          </Paper>
        </Grid>
        <Grid item>
          <BuddyAddFormContainer/>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <Area>
          Выберите собеседника
        </Area>
      </Grid>
    </Grid>
  )
}