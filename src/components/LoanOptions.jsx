import PropTypes from 'prop-types';

function LoanOptions(props) {

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
  actionProvider: PropTypes.shape({
    handleApplyLoanOption: PropTypes.func.isRequired,
    handleConditionsLoanOption: PropTypes.func.isRequired,
    handleHelpLoanOption: PropTypes.func.isRequired,
    handleLoanAnyMore: PropTypes.func.isRequired,
  }).isRequired,
};
