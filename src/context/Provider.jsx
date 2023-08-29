import PropTypes from 'prop-types';
import { useCallback, useMemo, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const PasswordChars = 8;
  const UsernameChars = 5;
  const [loginStatus, setLoginStatus] = useState(false);
  const [firstContact, setFirstContact] = useState(false);

  const [Data, setData] = useState({
    Username: '',
    Password: '',
  });

  const isLoginValid = useCallback((element) => {
    if(!Data.Username) return element.length >= UsernameChars;
    else return element.length >= PasswordChars;
  });

  function transformData(inputData) {
    const cvsData = JSON.parse(localStorage.getItem('csv-message'));
    console.log('inputData', inputData);
    console.log('cvsData', cvsData);

    const valor = inputData.length - cvsData.length +1;
    
    if(valor > 0 ) {
      inputData = inputData.slice(-valor);
      inputData.forEach(item => {
        const date = new Date();
        const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        if(item.payload) {
          cvsData.push([formattedDate, item.type, item.payload]);
        } else {
          cvsData.push([formattedDate, item.type, item.message]);
        }
        localStorage.setItem('csv-message', JSON.stringify(cvsData));
      });
    }
  }

  const context = useMemo(() => ({
    Data,
    setData,
    loginStatus,
    setLoginStatus,
    firstContact,
    setFirstContact,
    isLoginValid,
    transformData,
  }), [
    Data,
    loginStatus,
    isLoginValid,
    firstContact,
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
