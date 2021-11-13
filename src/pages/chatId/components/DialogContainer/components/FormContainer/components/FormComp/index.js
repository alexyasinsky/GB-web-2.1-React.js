import { Button, Icon, TextField, Grid } from '@material-ui/core';
import {useRef, useEffect} from "react";


export function FormComp ({onSubmit }) {
  
  const inputRef = useRef(null);
	useEffect(() => {
		inputRef.current?.message.focus();
	});

  return (
    <form onSubmit={onSubmit} ref={inputRef}>
      <Grid container spacing={1} direction='column'>
        <Grid item>
          <TextField
            fullWidth={true}
            label="Message"
            name='message'
            multiline
            rows={4}
            variant="outlined"

          />
        </Grid>
        <Grid item>
          <Button variant="contained"
                  color="primary"
                  endIcon={<Icon>send</Icon>}
                  type='submit'
          >Отправить
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}