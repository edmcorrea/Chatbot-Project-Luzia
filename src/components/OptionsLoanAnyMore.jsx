// import PropTypes from 'prop-types';

// function OptionsLoanAnyMore(props) {

//   const options = [
//     { text: "Return to loan options ", handler: props.actionProvider.handleOptionApplyLoan, id: 1},
//     { text: "Say goodbye", handler: props.actionProvider.handleOptionConditionsLoan, id: 2}
//   ];

//   return (
//     <>
//       {options.map((option) => (
//         <button
//           key={option.id}
//           onClick={option.handler}
//           className="option-btn"
//         >
//           {option.text}
//         </button>
//       ))}
//     </>
//   )
// }

// export default OptionsLoanAnyMore;

// // DEPOIS QUE INSERI OS PROPTYPES A PAGINA WEB FICOU LENTA

// OptionsLoanAnyMore.propTypes = {
//   actionProvider: PropTypes.shape({
//     handleOptionApplyLoan: PropTypes.func.isRequired,
//     handleOptionConditionsLoan: PropTypes.func.isRequired,
//     handleOptionHelpLoan: PropTypes.func.isRequired,
//   }).isRequired,
// };
