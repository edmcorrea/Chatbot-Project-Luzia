import React, { useContext } from 'react';
import Context from '../context/Context';
import PropTypes from 'prop-types';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const { Data } = useContext(Context);
  const { Username } = Data;

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

  const handleOptionApplyLoan = () => {
    const botMessage = createChatBotMessage(
      `Of course ${Username}, I'll be glad to assist you with information about loans! Understanding your financial options is important. Before we proceed, I suggest you take a look at this comprehensive guide on 'How to Choose the Right Loan for You.' It will provide valuable insights to help you make an informed decision.`,
    );
    const botMessage1 = createChatBotMessage(
      <a href="https://www.investopedia.com/articles/personal-finance/010516/how-apply-personal-loan.asp" target="_blank" rel="noreferrer">How to Apply for a Personal Loan</a>
    );

    const botMessage2 = createChatBotMessage("Do you need anything else?");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage1, botMessage2],
    }));
  };

  const handleOptionConditionsLoan = () => {
    const botMessage = createChatBotMessage(
      `Of course ${Username}, I am here to provide you with detailed information about loan conditions. The terms of a loan can vary depending on the type of loan you are considering and the financial institution offering it. Conditions typically include information such as interest rate, payment term, loan amount, and credit requirements. To better understand the specific conditions, I recommend you visit the page below:`,
    );
    const botMessage1 = createChatBotMessage(<a href="https://www.investopedia.com/loan-terms-5075341" target="_blank" rel="noreferrer">Loan Conditions</a>);

    const botMessage2 = createChatBotMessage("Do you need anything else?");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage1, botMessage2],
    }));
  };

  const handleOptionHelpLoan = () => {
    const botMessage = createChatBotMessage(
      "Other ways we can help you:",
    );
    const botMessage1 = createChatBotMessage(<a href="https://www.investopedia.com/terms/c/correspondent-bank.asp" target="_blank" rel="noreferrer">Correspondent Bank: Definition and How It Works</a>);
    const botMessage2 = createChatBotMessage(<a href="https://www.investopedia.com/articles/personal-finance/111715/when-are-personal-loans-good-idea.asp" target="_blank" rel="noreferrer">When Are Personal Loans a Good Idea?</a>);

    const botMessage3 = createChatBotMessage(<a href="https://www.bankrate.com/loans/personal-loans/loan-borrower-fears/" target="_blank" rel="noreferrer">Scared to debt: 5 questions that loan borrowers fear</a>);

    const botMessage4 = createChatBotMessage("Do you need anything else?");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage1, botMessage2, botMessage3, botMessage4],
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
            handleOptionApplyLoan,
            handleOptionConditionsLoan,
            handleOptionHelpLoan,
            handleGoodbye
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
