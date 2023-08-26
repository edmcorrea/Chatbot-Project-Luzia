import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';


const MessageParser = ({ children, actions }) => {
  const { loginStatus, setLoginStatus, setData, Data, isLoginValid } = useContext(Context);
  const { Username, Password } = Data;
  useEffect(() => console.log(Data), [Data]);

  const parse = (message) => {
    message = message.toLowerCase();
    const keywords = ['hello', 'goodbye', 'good', 'i want'];

    if (keywords.some(keyword => message.includes(keyword))) {
      return actions.handleUsername();
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
  children: PropTypes.node.isRequired,
  actions: PropTypes.node.isRequired,
}