import { Container, Grid,  Button, Paper} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ForumIcon from '@material-ui/icons/Forum';
import Favorite from '@material-ui/icons/Favorite';

import {Route, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Main from './pages/main';
import Profile from './pages/profile';
import Chats from './pages/chats';
import ChatId from './pages/chatId';
import {Beer} from "./pages/beer";

import './style.scss';
import {getChats} from "./store/chats/selectors";

const App = () => {

	const buddyList = useSelector(getChats);

	let buddyIds = buddyList.map(buddy => buddy.id);
	function checkBuddyExist(props) {
		if (buddyIds.includes(props.match.params.buddyId)) {
			return (
				<ChatId />
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
					<Route path='/beer'>
						<Beer/>
					</Route>
					<Route exact path='/chats'>
						<Chats/>
					</Route>
					<Route
						exact path='/chats/:buddyId'
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
						<NavLink to='/beer'>
								<Button  startIcon={<Favorite />} color={"default"} className='navitab'>Подобрать пивко на вечер =)</Button>
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