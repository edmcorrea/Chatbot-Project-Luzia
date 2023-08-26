import React from 'react';
import PropTypes from 'prop-types';


const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    message = message.toLowerCase();
    const keywords = ['hello', 'goodbye', 'good', 'i want'];
    if (keywords.some(keyword => message.includes(keyword))) {
      actions.handleUsername();
    }
    
    else {
      actions.handleUsername();
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