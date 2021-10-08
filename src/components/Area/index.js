import {Paper} from "@material-ui/core";

import './style.scss';

export default function Area(props) {

  return (
    <Paper className='area'>
        <div className='area__highlight'>
          {props.children}
        </div>
    </Paper>
  )
  
}