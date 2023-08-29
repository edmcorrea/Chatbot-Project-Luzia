import Chatbot from 'react-chatbot-kit'
import config from './chatbot/config.jsx';
import 'react-chatbot-kit/build/main.css'
import './App.css'
import MessageParser from './chatbot/MessageParse.jsx';
import ActionProvider from './chatbot/ActionProvider.jsx';
import './App.css'

function App() {

  return (
    <>
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </>
  )
}

export default App;
