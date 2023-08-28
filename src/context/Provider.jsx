import PropTypes from 'prop-types';
import { useCallback, useMemo, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const PasswordChars = 8;
  const UsernameChars = 5;
  const [loginStatus, setLoginStatus] = useState(false);
  const [firstContact, setFirstContact] = useState(false);
  const [cvsData, setCvsData] = useState([["date/hour", "type", "message"]]);

  const [Data, setData] = useState({
    Username: '',
    Password: '',
  });
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const isLoginValid = useCallback((element) => {
    if(!Data.Username) return element.length >= UsernameChars;
    else return element.length >= PasswordChars;
  });

  function transformData(inputData) {
    const outputData = [["date/hour", "type", "message"]];
    
    inputData.forEach(item => {
      const date = new Date();
      const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
      outputData.push([formattedDate, item.type, item.message]);
    });

    return outputData;
  }

  const context = useMemo(() => ({
    Data,
    setData,
    loginStatus,
    setLoginStatus,
    firstContact,
    setFirstContact,
    cvsData,
    setCvsData,
    isLoginValid,
    transformData,
  }), [
    Data,
    loginStatus,
    isLoginValid,
    firstContact,
    cvsData,
  ]);

  return <Context.Provider value={ context }>{children}</Context.Provider>
}
export default Provider;

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}.isRequired;
