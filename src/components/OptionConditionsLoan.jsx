import { useContext } from "react";
import Context from "../context/Context";

function OptionConditionsLoan() {
  const { Data } = useContext(Context);
  return (
    <div>
      <p>{`Of course ${Data.Username}, I am here to provide you with detailed information about loan conditions. The terms of a loan can vary depending on the type of loan you are considering and the financial institution offering it. Conditions typically include information such as interest rate, payment term, loan amount, and credit requirements. To better understand the specific conditions, I recommend you visit the page below:`}</p>
      <ul>
        <li><a href="https://www.investopedia.com/loan-terms-5075341" target="_blank" rel="noreferrer">Loan Conditions</a></li>
      </ul>
    </div>
  )
}

export default OptionConditionsLoan;
