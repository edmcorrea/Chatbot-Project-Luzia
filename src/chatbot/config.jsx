import { createChatBotMessage } from 'react-chatbot-kit';
import OptionsLoan from '../components/OptionsLoan';
import OptionsLoanAnyMore from '../components/OptionsLoanAnyMore';

const config = {
  initialMessages: [createChatBotMessage(`Hi! My name is Luzia. Let's talk!`)],
  // header: () => <div style={{ backgroundColor: 'red', padding: "5px", borderRadius: "3px" }}>This is the header</div>,
  botName: 'Luzia',
  widgets: [
    {
      widgetName: 'optionsLoan',
      widgetFunc: (props) => <OptionsLoan {...props} />,
    },
    {
      widgetName: 'optionsLoanAnyMore',
      widgetFunc: (props) => <OptionsLoanAnyMore {...props} />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;