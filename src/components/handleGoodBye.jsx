import { useContext, useEffect } from "react";
import Context from "../context/Context";
import { CSVLink } from "react-csv";

function HandleGoodByee() {
  const { setData, loginStatus, setLoginStatus, setFirstContact } = useContext(Context);

  let csvData = JSON.parse(localStorage.getItem('csv-message'));

  const date = new Date();
  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`; 
  csvData.push([formattedDate, 'user', 'goodbye'])

  useEffect(() => {
    console.log('hello', csvData);
    if(!loginStatus) {
      localStorage.setItem('csv-message', JSON.stringify([["date/hour", "type", "message"]]));
    }
    localStorage.setItem('user-data', JSON.stringify({Username: '', Password: ''}));
  }, [loginStatus])
  
  useEffect(()=> {
    setLoginStatus(false);
    setFirstContact(false);
    setData({ Username: '', Password: '' });
  }, []);

  return (
    <div>
      <p>{`All right. For your ease, we've archived our entire conversation in the csv file below. Don't forget to download it, okay? `}</p>
      <h5>Goodbye!</h5>
      <ul>
        <li>
          <CSVLink data={csvData}>Download ME</CSVLink>
        </li>
      </ul>
    </div>
  )
}

export default HandleGoodByee;
