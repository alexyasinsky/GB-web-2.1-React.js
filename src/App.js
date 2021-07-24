import { useState, useEffect } from "react";
import { List} from "./components/List";
import './app.scss';

function App() {
    const [messageList, setList] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        let message = [{
            user: e.target[1].value,
            text: e.target[0].value
        }]
        setList(messageList.concat(message));
    }

    useEffect(() => {
        if (messageList.length !==0 && !(messageList[messageList.length - 1].user === 'bot')) {
            setTimeout(() => {
                let message = [{
                    user: 'bot',
                    text: `${messageList[messageList.length - 1].text}?`
                }];
                setList(messageList.concat(message));
            }, 1500);
        }
    }, [messageList])

  return (
      <div className="App">
          <h1>Messenger</h1>
          <ul>
              <List list={messageList}/>
          </ul>
          <form className='form' onSubmit={handleSubmit}>
              <input type="textarea" name='msg' className='form__msg'/>
              <label htmlFor="user">User:</label><input type="text" name='user' defaultValue={'Alex'} className='form__user'/>
              <button type='submit'>Отправить</button>
          </form>
    </div>
  );
}

export default App;
