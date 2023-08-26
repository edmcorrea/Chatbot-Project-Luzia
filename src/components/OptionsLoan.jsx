function OptionsLoan() {

  const options = [
    { text: "Do you want to apply for a loan?", handler: () => {}, id: 1},
    { text: "Loan conditions", handler: () => {}, id: 2},
    { text: "Help", handler: () => {}, id: 3},
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
