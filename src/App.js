import { Container, Grid,  Button, Paper} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ForumIcon from '@material-ui/icons/Forum';
import {Route, Switch, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";

  
import Main from './pages new/main';
import Profile from './pages new/profile';
import Chats from './pages new/chats';

import './style.scss';

const App = () => {
  
  return (
    <Container maxWidth="md">
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Switch>
            <Route exact path='/'>
              <Main/>
            </Route>
            <Route path='/profile'>
              <Profile/>
            </Route>
            <Route exact path='/chats/'>
              <Chats/>
            </Route>
          </Switch>
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
