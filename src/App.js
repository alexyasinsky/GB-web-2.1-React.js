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
import Login from "./pages/login";

import './style.scss';
import {getChats} from "./store/chats/selectors";
import firebase from "firebase/compat";
import {useEffect, useState} from "react";
import {PublicRoute} from "./hocs/PublicRoute";
import {PrivateRoute} from "./hocs/PrivateRoute";

const App = () => {

	const [authed, setAuthed] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				setAuthed(true);
			} else {
				setAuthed(false);
			}
		})
	}, []);


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
					<PublicRoute authenticated={authed} exact path="/">
						<Main/>
					</PublicRoute>
					<PublicRoute authenticated={authed} exact path='/login'>
						<Login/>
					</PublicRoute>
					<PrivateRoute authenticated={authed} path='/profile'>
						<Profile/>
					</PrivateRoute>
					<PublicRoute authenticated={authed} path='/beer'>
						<Beer/>
					</PublicRoute>
					<PrivateRoute authenticated={authed} exact path='/chats'>
						<Chats/>
					</PrivateRoute>
					<PrivateRoute
						authenticated={authed}
						exact path='/chats/:buddyId'
						render={
							routeProps => checkBuddyExist(routeProps)
						}
					>
					</PrivateRoute>
				</Grid>
				<Grid item>
					<Paper>
						<NavLink to='/'>
							<Button color="default" startIcon={<HomeIcon />} className='navitab'>Main</Button>
						</NavLink>
						<NavLink to='/login'>
							<Button color="primary" startIcon={<AccountCircleIcon />} className='navitab'>Login</Button>
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