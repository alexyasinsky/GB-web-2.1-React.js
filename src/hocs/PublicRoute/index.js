import {Route, Redirect} from 'react-router-dom'

export function PublicRoute({auth, ...rest}) {
	 if (!auth) {
	  return <Route {...rest}/>
	 } else {
	  return <Redirect to="/chats" />
	 }
}