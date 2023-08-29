import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import Context from '../context/Context';

function LoanOptions(props) {
  const { messages } = props.state;
  const {  transformData } = useContext(Context);

  // const saveMessages = (messages) => {
  //   localStorage.setItem('chat_messages', JSON.stringify(messages));
  // };

  useEffect(()=> {
    // saveMessages(messages);
    transformData(messages);
  }, [])

  const options = [
    { text: "Do you want to apply for a loan?", handler: props.actionProvider.handleApplyLoanOption, secondHandler: props.actionProvider.handleLoanAnyMore, id: 1},
    { text: "Loan conditions", handler: props.actionProvider.handleConditionsLoanOption, secondHandler: props.actionProvider.handleLoanAnyMore, id: 2},
    { text: "Help", handler: props.actionProvider.handleHelpLoanOption, secondHandler: props.actionProvider.handleLoanAnyMore, id: 3},
  ];

  return (
    <div className="options-btn">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => {
            option.handler(), 
            option.secondHandler()
          }}
          className="option-btn"
        >
          {option.text}
        </button>
      ))}
    </div>
  )
}

export default LoanOptions;

LoanOptions.propTypes = {
  props: PropTypes.shape({
    state: PropTypes.shape({
      messages: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    }).isRequired,
  }).isRequired,
  actionProvider: PropTypes.shape({
    handleApplyLoanOption: PropTypes.func.isRequired,
    handleConditionsLoanOption: PropTypes.func.isRequired,
    handleHelpLoanOption: PropTypes.func.isRequired,
    handleLoanAnyMore: PropTypes.func.isRequired,
  }).isRequired,
};
