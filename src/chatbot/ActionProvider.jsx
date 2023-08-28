import React, { useContext } from 'react';
import Context from '../context/Context';
import PropTypes from 'prop-types';
import { createClientMessage } from 'react-chatbot-kit';
import { CSVLink } from 'react-csv';
import HelpLoanOption from '../components/HelpLoanOption';
import ApplyLoanOption from '../components/ApplyLoanOption';
import ConditionsLoanOption from '../components/ConditionsLoanOption';
import HandleGoodByee from '../components/handleGoodBye';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const { Data, setLoginStatus,setFirstContact, setData, transformData } = useContext(Context);
  const { Username } = Data;
  const {props : {state: { messages }}} = children.props.children;
  console.log(messages);


  const handleKeyword = () => {
    const botMessage = createChatBotMessage("I can't understand what you say. To start the conversation, please say 'Hello', 'Good Morning', 'Good Afternoon', 'I want' or 'Goodbye'");

    setState((prev) => ({
      ...prev, messages: [...prev.messages, botMessage],
    }));
  };

  const handleUsername = () => {
    const botMessage = createChatBotMessage('Hello! Tell me your Username:');

    setState((prev) => ({
      ...prev, messages: [...prev.messages, botMessage],
    }));
  };

  const handleLoginInvalid = (loginElement, numChar) => {
    const botMessage = createChatBotMessage(`${loginElement} Invalid. It must have at least ${numChar} characters. Please try again!`)

    setState((prev) => ({
      ...prev, messages: [...prev.messages, botMessage],
    }));
  };

  const handlePassword = () => {
    const botMessage = createChatBotMessage('All right! Now, tell me your Password:')

    setState((prev) => ({
      ...prev, messages: [...prev.messages, botMessage],
    }));
  };

  const handleLoginSucess = () => {
    const botMessage = createChatBotMessage('Login Sucess! What do you need? I can talk about loan.')

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleLoan = () => {
    const botMessage = createChatBotMessage(
      `${Username}, select one of the options so that we can help you better:`,
      {
        widget: 'optionsLoan',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleLoanOption = () => {
    const clientMessage = createClientMessage('Return to loan options');
    const botMessage = createChatBotMessage(
      `${Username}, select one of the options so that we can help you better:`,
      {
        widget: 'optionsLoan',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage, botMessage],
    }));
  };

  const handleLoanAnyMore = () => {
    const botMessage = createChatBotMessage(
      "Do you need anything else?",
      {
        widget: 'optionsLoanAnyMore',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleApplyLoanOption = () => {
    const clientMessage = createClientMessage('Do you want to apply for a loan?');

    const botMessage = createChatBotMessage(
      <ApplyLoanOption />
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage, botMessage],
    }));
  };

  const handleConditionsLoanOption = () => {
    const clientMessage = createClientMessage('Loan conditions');

    const botMessage = createChatBotMessage(
      <ConditionsLoanOption />
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage, botMessage],
    }));
  };

  const handleHelpLoanOption = () => {
    const clientMessage = createClientMessage('Help');

    const botMessage = createChatBotMessage(
      <HelpLoanOption />
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage, botMessage],
    }));
  };

  const handleGoodbye = (transformedData) => {
    const botMessage = createChatBotMessage(<>
      <HandleGoodByee />
      <ul>
        <li>
          <CSVLink data={transformedData}>Download me</CSVLink>
        </li>
      </ul>
    </>);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleGoodbyeOption = () => {
    const clientMessage = createClientMessage('Goodbye');
    setLoginStatus(false);
    setFirstContact(false);
    const transformedData = transformData(messages);
    const botMessage = createChatBotMessage(<>
      <HandleGoodByee/>
      <ul>
        <li>
          <CSVLink data={transformedData}>Download me</CSVLink>
        </li>
      </ul>
    </>);
    
    setData({ Username: '', Password: '' });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage, botMessage],
    }));
  };

  const handleNoAnswer = () => {
    const botMessage = createChatBotMessage("I don't understand what do you say. I only have knowledge about loan.");

    setState((prev) => ({
      ...prev, messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleKeyword,
            handleUsername,
            handleLoginInvalid,
            handlePassword,
            handleLoginSucess,
            handleLoan,
            handleLoanOption,
            handleLoanAnyMore,
            handleApplyLoanOption,
            handleConditionsLoanOption,
            handleHelpLoanOption,
            handleGoodbye,
            handleGoodbyeOption,
            handleNoAnswer
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;

ActionProvider.propTypes = {
  createChatBotMessage: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
  children: PropTypes.shape({
    props: PropTypes.shape({
      children: PropTypes.shape({
        props: PropTypes.shape({
          state: PropTypes.shape({
            messages: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
