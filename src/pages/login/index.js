import Area from '../../components/Area';

import './style.scss';
import {Button, TextField} from "@material-ui/core";
import {useState} from "react";

import firebase from "firebase/compat";
import { getUsersFromDataBase } from '../../store/profile/actions';
import { useDispatch } from 'react-redux';

import { db } from '../../api/firebase';
import { set, ref, onValue } from "firebase/database";
import generator from "../../tools/generator";
import faker from 'faker';

export default function Login() {

  // onValue()


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const setUser = async (email, password) => {
    const id = generator(5,10);
    await set(ref(db, 'users/'), {
      [id]: {
        email,
        password,
        avatar: faker.image.avatar(),
      }
    });
    dispatch(getUsersFromDataBase(id));
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
      await setUser(email, password);
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
          onClick={handleSignInButton}
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