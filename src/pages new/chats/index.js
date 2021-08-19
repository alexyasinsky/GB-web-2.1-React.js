import { NavLink } from "react-router-dom";
import { Grid, Paper, List, Typography } from '@material-ui/core';
import faker from 'faker';
import { useState } from "react";

import ChatList from "./components/ChatList";
import BuddyAddForm from "./components/BuddyAddForm";
import Area from '../../components new/area';

import './style.scss';


export default function Chats() {

  const [buddyList, setBuddyList] = useState(Array.from({
		length: 10,
	}).map(() => ({
		id: faker.phone.phoneNumber(),
		avatar: faker.image.avatar(),
		name: faker.name.firstName()
	})));

  function deleteBuddyFromList(buddy) {
		let list = buddyList.slice();
		list.splice(list.indexOf(buddy), 1);
		setBuddyList(list);
	}

  function addBuddyToList(id) {
		let list = buddyList.slice();
		list.unshift({
			id: id,
			avatar: faker.image.avatar(),
			name: faker.name.firstName()
		});
		setBuddyList(list);
	}

  // let buddyNames = buddyList.map(buddy => buddy.name);

	// function checkBuddyExist(props) {
	// 	if (buddyNames.includes(props.match.params.buddyName)) {
	// 		return (
	// 			<Chat/>
	// 		)
	// 	} else {
	// 		return (
	// 			<Redirect to="/"/>
	// 		)
	// 	}
	// }

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
        <Area>
          Выберите собеседника
        </Area>
      </Grid>
    </Grid>
  )
}