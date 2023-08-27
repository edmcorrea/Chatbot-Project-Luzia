import PropTypes from 'prop-types';

function OptionsLoan(props) {

  // DEPOIS QUE INSERI OS PROPTYPES A PAGINA WEB FICOU LENTA

  const options = [
    { text: "Do you want to apply for a loan?", handler: props.actionProvider.handleOptionApplyLoan, id: 1},
    { text: "Loan conditions", handler: props.actionProvider.handleOptionConditionsLoan, id: 2},
    { text: "Help", handler: props.actionProvider.handleOptionHelpLoan, id: 3},
  ];

  return (
    <>
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.handler}
          className="option-btn"
        >
          {option.text}
        </button>
      ))}
    </>
  )
}

export default OptionsLoan;

// DEPOIS QUE INSERI OS PROPTYPES A PAGINA WEB FICOU LENTA

OptionsLoan.propTypes = {
  actionProvider: PropTypes.shape({
    handleOptionApplyLoan: PropTypes.func.isRequired,
    handleOptionConditionsLoan: PropTypes.func.isRequired,
    handleOptionHelpLoan: PropTypes.func.isRequired,
  }).isRequired,
};
