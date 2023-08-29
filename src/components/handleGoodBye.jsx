import { useContext, useEffect } from "react";
import Context from "../context/Context";
import { CSVLink } from "react-csv";
import { getCSVMessagesLocalStorage, setCSVMessagesLocalStorage, setUserDataLocalStorage } from "../services/getterSetterLocalStorage";

function HandleGoodByee() {
  const { setData, loginStatus, setLoginStatus, setFirstContact } = useContext(Context);

  let csvData = getCSVMessagesLocalStorage();

  const date = new Date();
  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`; 
  csvData.push([formattedDate, 'user', 'goodbye'])

  useEffect(() => {
    if(!loginStatus) {
      setCSVMessagesLocalStorage([["date/hour", "type", "message"]]);
    }
    setUserDataLocalStorage({Username: '', Password: ''});
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
