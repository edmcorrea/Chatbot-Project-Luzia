import PropTypes from 'prop-types';

function OptionsLoanAnyMore(props) {

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

export default OptionsLoanAnyMore;

OptionsLoanAnyMore.propTypes = {
  actionProvider: PropTypes.shape({
    handleLoanOption: PropTypes.func.isRequired,
    handleGoodbyeOption: PropTypes.func.isRequired,
  }).isRequired,
};
