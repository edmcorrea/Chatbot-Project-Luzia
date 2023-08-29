import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';


const MessageParser = ({ children, actions }) => {
  const { loginStatus, setLoginStatus, setData, Data, firstContact, setFirstContact, isLoginValid, transformData } = useContext(Context);
  const { Username, Password } = Data;

  const {props : {state: { messages }}} = children;

  const saveCVS = () => {
    localStorage.setItem('csv-message', JSON.stringify([["date/hour", "type", "message"]]));
  };

  useEffect(()=> {
    saveCVS();
  }, [])

  const parse = async (message) => {
    const keywords = ['hello', 'goodbye', 'good', 'i want'];
    await transformData(messages);
    
    if(!firstContact) {
      message = message.toLowerCase();
      if (keywords.some(keyword => message.includes(keyword))) {
        setFirstContact(true);
        return actions.handleUsername();
      }
      return actions.handleKeyword();
    }

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

    message = message.toLowerCase();

    if (message.includes('loan')) {
      return actions.handleLoan();
    }

    if(loginStatus && message.includes('goodbye')) {
      

      actions.handleGoodbye();
    } else {
      return actions.handleNoAnswer();
    }
    setData({ Username: '', Password: '' });
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

MessageParser.propTypes = {
  children: PropTypes.shape({
    props: PropTypes.shape({
      state: PropTypes.shape({
        messages: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  actions: PropTypes.shape({
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
