import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';


const MessageParser = ({ children, actions }) => {
  const { loginStatus, setLoginStatus, setData, Data, isLoginValid } = useContext(Context);
  const { Username, Password } = Data;

  const parse = (message) => {
    message = message.toLowerCase();
    const keywords = ['hello', 'goodbye', 'good', 'i want'];

    if (keywords.some(keyword => message.includes(keyword))) {
      return actions.handleUsername();
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
        return actions.handleLoginInvalid('Username');
      }
      else if(!isLoginValid(message) && !Password) {
        return actions.handleLoginInvalid('Password');
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
      actions.handleLoan();
    }

    if(loginStatus && message.includes('goodbye')) {
      actions.handleGoodbye();
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
  children: PropTypes.shape({}).isRequired,
  actions: PropTypes.shape({
    handleOptionHelpLoan: PropTypes.func.isRequired,
    handleUsername: PropTypes.func.isRequired,
    handlePassword: PropTypes.func.isRequired,
    handleLoginInvalid: PropTypes.func.isRequired,
    handleLoginSucess: PropTypes.func.isRequired,
    handleLoan: PropTypes.func.isRequired,
    handleGoodbye: PropTypes.func.isRequired,
  }),
}

