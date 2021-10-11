import { TextField, Button, Grid } from '@material-ui/core';

export default function BuddyAddFormComp({onChange, addFunction, value}) {
  return (
		<Grid container spacing={1}>
			<Grid item>
				<TextField 
          name='id' 
          className='buddy-add__input' 
          value={value} 
          onChange={onChange} 
          label="Введите идентификатор" 
          variant="outlined" 
        />
			</Grid>
			<Grid item>
				<Button variant="contained"
				        color="primary"
				        className='buddy-add__button'
				        onClick={addFunction}
				>Добавить участника
				</Button>
			</Grid>
		</Grid>
	)
}