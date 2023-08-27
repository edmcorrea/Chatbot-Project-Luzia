import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';


const MessageParser = ({ children, actions }) => {
  const { loginStatus, setLoginStatus, setData, Data, firstContact, setFirstContact, isLoginValid } = useContext(Context);
  const { Username, Password } = Data;

  const {props : {state: { messages }}} = children;
  console.log(messages);

  // async function StartConversation (keywords) {
  //   for (const keyword of keywords) {
  //     await messages.forEach( async (msg) => {
  //       console.log('entrei1', msg.type === 'user', !msg.message.includes(keyword));
  
  //       if (msg.type === 'user' && !msg.message.includes(keyword)) {
  //         console.log('entrei2');
  //         return actions.handleKeyword();
  //       }
  //     });
  //   }
  // }
  
  
  const parse = async (message) => {
    const keywords = ['hello', 'goodbye', 'good', 'i want'];
    message = message.toLowerCase();
    
    if(!firstContact) {
      if (keywords.some(keyword => message.includes(keyword))) {
        setFirstContact(true);
        return actions.handleUsername();
      }
      return actions.handleKeyword();
    }

    // implementation future: condition that the user say something that the chatbot dont know

    // DEPOIS QUE INSERI OS PROPTYPES A PAGINA WEB FICOU LENTA

    if(!loginStatus) {
      if(isLoginValid(message) && !Username) {
        setData((prevData) => ({
          ...prevData,
          Username: message,
        }))
        return actions.handlePassword();
      }
      else if(!isLoginValid(message) && !Username) {
        return actions.handleLoginInvalid('Username', 5);
      }
      else if(!isLoginValid(message) && !Password) {
        return actions.handleLoginInvalid('Password', 8);
      }
      else {
        setData((prevData) => ({
          ...prevData,
          Password: message,
        }))
        setLoginStatus(true);
        return actions.handleLoginSucess()
      }
    }

    if (message.includes('loan')) {
      return actions.handleLoan();
    }

    if(loginStatus && message.includes('goodbye')) {
      setLoginStatus(false);
      setFirstContact(false);
      setData({ Username: '', Password: '' })
      return actions.handleGoodbye();
    } else {
      return actions.handleNoAnswer();
      
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;


// DEPOIS QUE INSERI OS PROPTYPES A PAGINA WEB FICOU LENTA
MessageParser.propTypes = {
  children: PropTypes.shape({
    props: PropTypes.shape({
      state: PropTypes.shape({
        messages: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    handleOptionHelpLoan: PropTypes.func.isRequired,
    handleKeyword: PropTypes.func.isRequired,
    handleUsername: PropTypes.func.isRequired,
    handlePassword: PropTypes.func.isRequired,
    handleLoginInvalid: PropTypes.func.isRequired,
    handleLoginSucess: PropTypes.func.isRequired,
    handleLoan: PropTypes.func.isRequired,
    handleGoodbye: PropTypes.func.isRequired,
    handleNoAnswer: PropTypes.func.isRequired,
  }),
}
