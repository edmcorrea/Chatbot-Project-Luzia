import Chatbot from 'react-chatbot-kit'
import config from './chatbot/config.jsx';
import 'react-chatbot-kit/build/main.css'
import './App.css'
import MessageParser from './chatbot/MessageParse.jsx';
import ActionProvider from './chatbot/ActionProvider.jsx';
import './App.css'
import { useState } from 'react';
import luziaphoto from './assets/magalu.jpg'

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className='app'>
      <section>
        {!show && <p>{`Hello, Let's Talk!`}</p>}
        <button
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
          />
        )
      }
      
    </div>
  )
}

export default App;
