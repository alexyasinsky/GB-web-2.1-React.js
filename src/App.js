import { useState, useEffect } from "react";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import './app.scss';


function App() {
    const [messageList, setList] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        let message = [{
            user: e.target.user.value,
            text: e.target.message.value
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
      <>
          <h1>Messenger</h1>
          <ul>
              <List list={messageList}/>
          </ul>
         <Form handler={handleSubmit} />
    </>
  );
}

export default App;
