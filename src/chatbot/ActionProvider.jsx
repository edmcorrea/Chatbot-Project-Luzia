import React, { useContext } from 'react';
import Context from '../context/Context';
import PropTypes from 'prop-types';
import { createClientMessage } from 'react-chatbot-kit';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const { Data, setLoginStatus,setFirstContact, setData } = useContext(Context);
  const { Username } = Data;

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

  const handleOptionApplyLoan = () => {
    const clientMessage = createClientMessage('Do you want to apply for a loan?');

    const botMessage = createChatBotMessage(
      `Of course ${Username}, I'll be glad to assist you with information about loans! Understanding your financial options is important. Before we proceed, I suggest you take a look at this comprehensive guide on 'How to Choose the Right Loan for You.' It will provide valuable insights to help you make an informed decision.`,
    );
    const botMessage1 = createChatBotMessage(
      <a href="https://www.investopedia.com/articles/personal-finance/010516/how-apply-personal-loan.asp" target="_blank" rel="noreferrer">How to Apply for a Personal Loan</a>
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage, botMessage, botMessage1],
    }));
  };

  const handleOptionConditionsLoan = () => {
    const clientMessage = createClientMessage('Loan conditions');

    const botMessage = createChatBotMessage(
      `Of course ${Username}, I am here to provide you with detailed information about loan conditions. The terms of a loan can vary depending on the type of loan you are considering and the financial institution offering it. Conditions typically include information such as interest rate, payment term, loan amount, and credit requirements. To better understand the specific conditions, I recommend you visit the page below:`,
    );
    const botMessage1 = createChatBotMessage(<a href="https://www.investopedia.com/loan-terms-5075341" target="_blank" rel="noreferrer">Loan Conditions</a>);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage, botMessage, botMessage1],
    }));
  };

  const handleOptionHelpLoan = () => {
    const clientMessage = createClientMessage('Help');

    const botMessage = createChatBotMessage(
      "Other ways we can help you:",
    );
    const botMessage1 = createChatBotMessage(<a href="https://www.investopedia.com/terms/c/correspondent-bank.asp" target="_blank" rel="noreferrer">Correspondent Bank: Definition and How It Works</a>);
    const botMessage2 = createChatBotMessage(<a href="https://www.investopedia.com/articles/personal-finance/111715/when-are-personal-loans-good-idea.asp" target="_blank" rel="noreferrer">When Are Personal Loans a Good Idea?</a>);

    const botMessage3 = createChatBotMessage(<a href="https://www.bankrate.com/loans/personal-loans/loan-borrower-fears/" target="_blank" rel="noreferrer">Scared to debt: 5 questions that loan borrowers fear</a>);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage, botMessage, botMessage1, botMessage2, botMessage3],
    }));
  };

  const handleGoodbye = () => {
    const botMessage = createChatBotMessage(
      `Bye ${Username}! If you have further questions, please don't hesitate to ask.`);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleGoodbyeOption = () => {
    const clientMessage = createClientMessage('Goodbye');
    setLoginStatus(false);
    setFirstContact(false);
    setData({ Username: '', Password: '' })
    const botMessage = createChatBotMessage(
      `Bye ${Username}! If you have further questions, please don't hesitate to ask.`);

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
            handleOptionApplyLoan,
            handleOptionConditionsLoan,
            handleOptionHelpLoan,
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
  children: PropTypes.shape({}).isRequired,
};
