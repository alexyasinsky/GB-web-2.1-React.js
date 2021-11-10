import {Route, Redirect} from 'react-router-dom'

export function PrivateRoute({auth, ...rest}) {
	 if (auth) {
	  return <Route {...rest}/>
	 } else {
	  return <Redirect to="/login" />
	 }
}