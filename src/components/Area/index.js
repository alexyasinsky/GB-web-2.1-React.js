import {Paper, Typography} from "@material-ui/core";
import { mdiHours24 } from '@mdi/js';

import './style.scss';

export default function Area(props) {

  return (
    <Paper className='area'>
        <p className='area__highlight'>
          {props.children}
        </p>
      </Paper>
  )
  
}