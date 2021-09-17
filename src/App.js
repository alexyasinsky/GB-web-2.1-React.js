import { Container, Grid,  Button, Paper} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ForumIcon from '@material-ui/icons/Forum';
import {Route, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import faker from 'faker';
import { useState } from "react";
  
import Main from './pages/main';
import Profile from './pages/profile';
import Chats from './pages/chats';
import ChatId from './pages/chatId';

import './style.scss';

const App = () => {


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

  let buddyNames = buddyList.map(buddy => buddy.name);

	function checkBuddyExist(props) {
		if (buddyNames.includes(props.match.params.buddyName)) {
			return (
				<ChatId list={buddyList} delete = {deleteBuddyFromList} add = {addBuddyToList} />
			)
		} else {
			return (
				<Redirect to="/chats"/>
			)
		}
	}

  return (
    <Container maxWidth="md">
      <Grid container spacing={2} direction="column">
        <Grid item>
            <Route exact path='/'>
              <Main/>
            </Route>
            <Route path='/profile'>
              <Profile/>
            </Route>
            <Route exact path='/chats'>
              <Chats
                list={buddyList}
                delete = {deleteBuddyFromList}
                add = {addBuddyToList}
              />
            </Route>
          
            <Route 
              exact path='/chats/:buddyName'
              render={
                routeProps => checkBuddyExist(routeProps)
              }
            >
            </Route>

        </Grid>
        <Grid item>
          <Paper>
            <NavLink to='/'>
              <Button color="default" startIcon={<HomeIcon />} className='navitab'>Main</Button>
            </NavLink>
            <NavLink to='/profile'>
              <Button color="secondary" startIcon={<AccountCircleIcon />} className='navitab'>Profile</Button>
            </NavLink>
            <NavLink to='/chats'>
              <Button color="primary" startIcon={<ForumIcon />} className='navitab'>Chats</Button>
            </NavLink>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    
  )
};
  
export default App;
