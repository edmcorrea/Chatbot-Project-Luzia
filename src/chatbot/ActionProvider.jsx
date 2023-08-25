import React from 'react';
import PropTypes from 'prop-types';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {},
        });
      })}
    </div>
  );
};

export default ActionProvider;

ActionProvider.propTypes = {
  children: PropTypes.node.isRequired,
}