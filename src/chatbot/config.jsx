import { createChatBotMessage } from 'react-chatbot-kit';
import OptionsLoan from '../components/OptionsLoan';

const config = {
  initialMessages: [createChatBotMessage(`Hello! My name is Luzia. Let's talk!`)],
  botName: 'Luzia',
  widgets: [
    {
      widgetName: 'optionsLoan',
      widgetFunc: (props) => <OptionsLoan {...props} />,
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