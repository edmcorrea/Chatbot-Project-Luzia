import { useContext } from "react";
import Context from "../context/Context";

function ApplyLoanOption() {
  const { Data } = useContext(Context);
  const { Username } = Data;
  
  return (
    <div>
      <p>{`Of course ${Username}, I'll be glad to assist you with information about loans! Understanding your financial options is important. Before we proceed, I suggest you take a look at this comprehensive guide on 'How to Choose the Right Loan for You.' It will provide valuable insights to help you make an informed decision:`}</p>
      <ul>
        <li><a href="https://www.investopedia.com/articles/personal-finance/010516/how-apply-personal-loan.asp" target="_blank" rel="noreferrer">How to Apply for a Personal Loan</a></li>
      </ul>
    </div>
  )
}

export default ApplyLoanOption;
