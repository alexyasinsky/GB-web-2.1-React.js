import { useState, useEffect } from "react";

import { Container, Grid, Paper, List } from '@material-ui/core';

import MessageList from "./components/MessageList/MessageList";
import Form from "./components/Form/Form";
import './app.scss';


function App() {
    const [messageList, setList] = useState([]);
    const defaultMessage = 'Здесь будут ваши сообщения';
    const [isDefaultMessageVisible, setVisible] = useState(true);
    const user = "Alex";

    useEffect(() => {
      if (messageList.length > 0) {
        setVisible(false);
      }
    }, [messageList])

    function handleSubmit(e) {
        e.preventDefault();
        let message = [{
            isOwner: true,
            user: user,
            text: e.target.message.value,
            time: new Date().toLocaleTimeString()
        }]
        setList(messageList.concat(message));
    }

    useEffect(() => {
        if (messageList.length !==0 && !(messageList[messageList.length - 1].user === 'bot')) {
            setTimeout(() => {
                let message = [{
                    isOwner: false,
                    user: 'bot',
                    text: `${messageList[messageList.length - 1].text}?`,
                    time: new Date().toLocaleTimeString()
                }];
                setList(messageList.concat(message));
            }, 1500);
        }
    }, [messageList])

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <h1>Messenger</h1>
        <Grid item container xs={12} justifyContent="space-around" >
          <Grid item xs={3}>
            <Paper className='paper'>
              Список чатов
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className='paper'>
              {isDefaultMessageVisible ? defaultMessage : ''}
              <List>
                <MessageList list={messageList}/>
              </List>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Form handler={handleSubmit} />
        </Grid>
      </Grid>
    </Container>

  );
}

export default App;
