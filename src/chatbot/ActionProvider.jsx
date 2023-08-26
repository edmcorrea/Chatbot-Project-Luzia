import React from 'react';
import PropTypes from 'prop-types';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const handleUsername = () => {
    const botMessage = createChatBotMessage('To start our conversation, first tell me your Username:');

    setState((prev) => ({
      ...prev, messages: [...prev.messages, botMessage],
    }));
  };

  const handleLoginInvalid = (loginElement) => {
    const botMessage = createChatBotMessage(`${loginElement} Invalid. Please try again`)

    setState((prev) => ({
      ...prev, messages: [...prev.messages, botMessage],
    }));
  };

  const handlePassword = () => {
    const botMessage = createChatBotMessage('Now, tell me your Password:')

    setState((prev) => ({
      ...prev, messages: [...prev.messages, botMessage],
    }));
  };

  const handleLoginSucess = () => {
    const botMessage = createChatBotMessage('Login Sucess! What do you need?')

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleLoan = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: 'optionsLoan',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleUsername,
            handleLoginInvalid,
            handlePassword,
            handleLoginSucess,
            handleLoan,
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