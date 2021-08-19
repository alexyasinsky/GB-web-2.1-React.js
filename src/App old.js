import { Container, Grid } from '@material-ui/core';
import {Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";

import Chat from './pages/chat'
import Main from "./pages/main";
import Profile from "./pages/profile";
import Nav from "./components/Nav";
import './style.scss';
import faker from 'faker';



function App() {

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
				<Chat/>
			)
		} else {
			return (
				<Redirect to="/"/>
			)
		}
	}

  return (
		  <Container maxWidth="md">
			  <Grid container spacing={2}>
				  <Grid item container xs={12} spacing={2}>
					  <Grid item xs={3}>
						 <Nav
							 list={buddyList}
							 delete = {deleteBuddyFromList}
							 add = {addBuddyToList}
						 />
					  </Grid>
					  <Grid item xs={9} >
						  <Switch>
							  <Route exact path='/'>
								 <Main/>
							  </Route>
							  <Route
								  exact path='/chat/:buddyName'
							    render={
								    routeProps => checkBuddyExist(routeProps)
							    }
							  />
							  <Route path='/chat/'>
									<Redirect to="/"/>
							  </Route>
							  <Route path='/profile'>
								  <Profile/>
							  </Route>
						  </Switch>
					  </Grid>
				  </Grid>
        </Grid>
		  </Container>
  );
}

export default App;
