import { useContext, useEffect } from "react";
import Context from "../context/Context";
import { CSVLink } from "react-csv";

function HandleGoodByee() {
  const { Data, setData, transformData, setLoginStatus, setFirstContact } = useContext(Context);

  const cvsData = JSON.parse(localStorage.getItem('csv-message'));

  useEffect(()=> {
    setLoginStatus(false);
    setFirstContact(false);
    setData({ Username: '', Password: '' });
  }, []);
  const date = new Date();
        const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  
  cvsData.push([formattedDate, 'user', 'goodbye'])

  return (
    <div>
      <p>{`Okay ${Data.Username}. For your ease, we've archived our entire conversation in the csv file below. Don't forget to download it, okay? `}</p>
      <h5>Goodbye!</h5>
      <ul>
        <li>
          <CSVLink data={cvsData}>Download ME</CSVLink>
        </li>
      </ul>
    </div>
  )
}

export default HandleGoodByee;
