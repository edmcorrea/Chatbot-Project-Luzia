import Chatbot from 'react-chatbot-kit'
import config from './chatbot/config.js';
import 'react-chatbot-kit/build/main.css'
import './App.css'
import MessageParser from './chatbot/MessageParse.jsx';
import ActionProvider from './chatbot/ActionProvider.jsx';

function App() {
  return (
    <>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </>
  )
}

export default App
