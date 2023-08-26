import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const PasswordChars = 8;
  const UsernameChars = 5;
  const [loginStatus, setLoginStatus] = useState(false);
  const [Data, setData] = useState({
    Username: '',
    Password: '',
  });
  
  const isLoginValid = (element, validation) => element.length >= validation;

  useEffect(() => {
    const { Username, Password } = Data;

    if (
      isLoginValid(Username, UsernameChars) &&
      isLoginValid(Password, PasswordChars)
    ) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, [Data]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const context = useMemo(() => ({
    Data,
    setData,
    loginStatus,
    setLoginStatus,
    handleChange,
  }), [
    Data,
    loginStatus,
  ]);

  return <Context.Provider value={ context }>{children}</Context.Provider>;
}
export default Provider;

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}.isRequired;
