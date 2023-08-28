import Chatbot from 'react-chatbot-kit'
import config from './chatbot/config.jsx';
import 'react-chatbot-kit/build/main.css'
import './App.css'
import MessageParser from './chatbot/MessageParse.jsx';
import ActionProvider from './chatbot/ActionProvider.jsx';
import './App.css'

function App() {

  // const saveMessages = (messages, HTMLString) => {
  //   localStorage.setItem('chat_messages', JSON.stringify(messages));
  // };

  // const loadMessages = () => {
  //   const messages = JSON.parse(localStorage.getItem('chat_messages'));
  //   return messages;
  // };

  return (
    <>
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        // messageHistory={loadMessages()}
        messageParser={MessageParser}
        // saveMessages={saveMessages}
      />
    </>
  )
}

export default App
