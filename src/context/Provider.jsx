import PropTypes from 'prop-types';
import { useCallback, useMemo, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const PasswordChars = 8;
  const UsernameChars = 5;
  const [loginStatus, setLoginStatus] = useState(false);
  const [Data, setData] = useState({
    Username: '',
    Password: '',
  });
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const isLoginValid = useCallback((element) => {
    if(!Data.Username) return element.length >= UsernameChars;
    else return element.length >= PasswordChars;
  })

  const context = useMemo(() => ({
    Data,
    setData,
    loginStatus,
    setLoginStatus,
    isLoginValid,
  }), [
    Data,
    loginStatus,
    isLoginValid,
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
