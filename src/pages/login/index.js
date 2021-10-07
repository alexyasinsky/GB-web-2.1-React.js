import Area from '../../components/Area';

import './style.scss';
import {Button, TextField} from "@material-ui/core";
import {useState} from "react";

import firebase from "firebase/compat";

import { db } from '../../api/firebase';
import { set, ref, push } from "firebase/database";
import faker from 'faker';


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const createNewUser = async (email, password) => {
    const user = {
      name: email,
      email,
      password,
      avatar: faker.image.avatar(),
    };
    const newUserRef = push(ref(db, '/users'));
    await set(newUserRef, user);
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
      await createNewUser(email, password);
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