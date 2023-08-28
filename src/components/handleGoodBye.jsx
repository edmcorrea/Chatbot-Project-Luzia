import { useContext } from "react";
import Context from "../context/Context";

function HandleGoodByee() {
  const { Data } = useContext(Context);
  return (
    <div>
      <p>{`Okay ${Data.Username}. For your ease, we've archived our entire conversation in the csv file below. Don't forget to download it, okay? Goodbye!`}</p>
    </div>
  )
}

export default HandleGoodByee;
