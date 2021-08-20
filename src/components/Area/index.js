import {Paper, Typography} from "@material-ui/core";

import './style.scss';

export default function Area(props) {

  return (
    <Paper className='area'>
        <Typography
          variant="h4"
          align='center'
        >
          {props.children}
        </Typography>
      </Paper>
  )
  
}