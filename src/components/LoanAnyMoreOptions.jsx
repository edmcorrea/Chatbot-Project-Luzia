import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import Context from '../context/Context';

function LoanAnyMoreOptions(props) {
  const {state: { messages }} = props;
  const {  transformData } = useContext(Context);

  useEffect(()=> {
    transformData(messages);
  }, [])

  const options = [
    { text: "Return to loan options ", handler: props.actionProvider.handleLoanOption, id: 1},
    { text: "Say Goodbye", handler: props.actionProvider.handleGoodbyeOption, id: 2}
  ];

  return (
    <div className="options-btn">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.handler}
          className="option-btn"
        >
          {option.text}
        </button>
      ))}
    </div>
  )
}

export default LoanAnyMoreOptions;

LoanAnyMoreOptions.propTypes = {
  props: PropTypes.shape({
    state: PropTypes.shape({
      messages: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    }).isRequired,
  }).isRequired,
  actionProvider: PropTypes.shape({
    handleLoanOption: PropTypes.func.isRequired,
    handleGoodbyeOption: PropTypes.func.isRequired,
  }).isRequired,
};
