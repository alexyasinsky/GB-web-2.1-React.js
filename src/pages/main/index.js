import React from 'react';

import Area from '../../components/Area';

import './style.scss';

export default React.memo(Main);

function Main() {

  return (
    <Area>
      <p>Добро пожаловать в чат</p>
    </Area>
  )
}