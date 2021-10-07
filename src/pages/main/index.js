import Area from '../../components/Area';

import { useSelector } from 'react-redux';

import './style.scss';


export default function Main() {


  const users = useSelector(state => state.users);

  console.log(users);
  return (
    <Area>
      <p>Добро пожаловать в чат</p>
    </Area>
  )
}