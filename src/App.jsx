import Chatbot from 'react-chatbot-kit'
import config from './chatbot/config.jsx';
import 'react-chatbot-kit/build/main.css'
import './App.css'
import MessageParser from './chatbot/MessageParse.jsx';
import ActionProvider from './chatbot/ActionProvider.jsx';
import './App.css'
import { useContext, useEffect, useState } from 'react';
import luziaphoto from './assets/magalu.jpg';
import balao from './assets/balao.png';
import Context from './context/Context.jsx';
import { getChatMessagesLocalStorage, getUserDataLocalStorage, setCSVMessagesLocalStorage, setChatMessagesLocalStorage, setUserDataLocalStorage } from './services/getterSetterLocalStorage.jsx';


function App() {
  const { setData, setLoginStatus, setFirstContact } = useContext(Context);
  const [show, setShow] = useState(false);

  const loadMessages = () => {
    const messages = getChatMessagesLocalStorage();
    return messages;
  };

  
  const dataUser = () => {
    const messages = getUserDataLocalStorage();
    if(!messages) {
      return setUserDataLocalStorage({Username: '', Password: ''});
    }
    return messages;
  };

  useEffect(() => {
    if(!show) {
      setChatMessagesLocalStorage([{"message":"Hi! My name is Luzia. Let's talk!","type":"bot","id":1450707463862,"loading":false}]);
      setCSVMessagesLocalStorage([["date/hour", "type", "message"]]);
      setUserDataLocalStorage({Username: '', Password: ''});
      setLoginStatus(false);
      setFirstContact(false);
      setData({Username: '', Password: ''});
    }
  }, [show]);

  useEffect(() => {
    setData(dataUser());
    setCSVMessagesLocalStorage([["date/hour", "type", "message"]]);
  }, [])

  return (
    <div className='app'>
      <section>
      {!show && 
        <div className='letsTalk' >
          <p className="app-text-letstalk">{`Hello! Let's Talk!`}</p>
          <img
            className="app-img-balao"
            src={balao}
            alt="app-img-balao"
          />
        </div>
        }
        <button
          data-testid="collapseBtn"
          className="app-btn"
          onClick={() => setShow(!show)}
        >
          <img
            className="app-img"
            src={luziaphoto}
            alt="our-projects-gif"
          />
        </button>
      </section>
      {
        show && (
          <Chatbot
          className='app-chatbot'
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
          messageHistory={loadMessages()}
          />
        )
      }
      
    </div>
  )
}

export default App;
