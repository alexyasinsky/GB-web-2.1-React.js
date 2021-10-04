import Area from '../../components/Area';

import './style.scss';
import {Button, TextField} from "@material-ui/core";
import {useState} from "react";

import firebase from "firebase/compat";
import { setUser } from '../../store/profile/actions';
import { useDispatch } from 'react-redux';

import { db } from '../../api/firebase';
import { set, ref, onValue } from "firebase/database";

export default function Login() {

  // onValue()


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const setUser = (email, password) => {
    set(ref(db, 'users/'), {
      email,
      password
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };



  const handleRegisterButton = async () => {
    setError("");
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      debugger
      setUser(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignInButton = async () => {
    setError("");

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
  };






  return (
    <Area>
      <p>Войдите или зарегистрируйтесь</p>
      <div className='login__input-box'>
        <TextField
          onChange={handleEmailChange}
          value={email}
          name='email'
          label="Enter email"
          type='email'
        />
        <TextField
          onChange={handlePassChange}
          value={password}
          name='password'
          label="Enter password"
          type='password'
        />
      </div>
      <div className='login__button-box'>
        <Button
          onChange={handleSignInButton}
          className='login__button'
          variant="contained"
          color='primary'
        >
          Войти
        </Button>
        <Button
          onClick={handleRegisterButton}
          className='login__button'
          variant="contained"
        >
          Зарегистрироваться
        </Button>
      </div>
      <div>{error && <p>{error}</p>}</div>
    </Area>
  )
}