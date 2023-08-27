import PropTypes from 'prop-types';

function OptionsLoan(props) {

  const options = [
    { text: "Do you want to apply for a loan?", handler: props.actionProvider.handleOptionApplyLoan, secondHandler: props.actionProvider.handleLoanAnyMore, id: 1},
    { text: "Loan conditions", handler: props.actionProvider.handleOptionConditionsLoan, secondHandler: props.actionProvider.handleLoanAnyMore, id: 2},
    { text: "Help", handler: props.actionProvider.handleOptionHelpLoan, secondHandler: props.actionProvider.handleLoanAnyMore, id: 3},
  ];

  return (
    <>
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
    </>
  )
}

export default OptionsLoan;

OptionsLoan.propTypes = {
  actionProvider: PropTypes.shape({
    handleOptionApplyLoan: PropTypes.func.isRequired,
    handleOptionConditionsLoan: PropTypes.func.isRequired,
    handleOptionHelpLoan: PropTypes.func.isRequired,
    handleLoanAnyMore: PropTypes.func.isRequired,
  }).isRequired,
};
