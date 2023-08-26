import React from 'react';
import PropTypes from 'prop-types';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const handleHello = () => {
    // insert a random message
    const botHelloMessage = createChatBotMessage('Hello. Nice to meet you.');
    
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botHelloMessage],
    }));
  };

  const handleUsername = () => {
    const botUsernameMessage = createChatBotMessage('To start our conversation, first tell me your Username:')

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages,
      botUsernameMessage],
    }));
  };

  const handlePassword = () => {
    const botPasswordMessage = createChatBotMessage('Now, tell me your Password:')

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botPasswordMessage],
    }));
  };

  const handleComentarios = () => {
    const botPasswordMessage = createChatBotMessage('Now, tell me your Password:')

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botPasswordMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleUsername,
            handlePassword,
            handleComentarios,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;

ActionProvider.propTypes = {
  children: PropTypes.node.isRequired,
  createChatBotMessage: PropTypes.node.isRequired,
  setState: PropTypes.node.isRequired,
}