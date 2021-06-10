import React, {createContext, useState} from 'react';

const LoginContext = createContext();

const LoginContextProvider = ({children}) => {
    const [data, setData]=useState({});
  return (
    <LoginContext.Provider value={{data, setData}}>
      {children}
    </LoginContext.Provider>
  );
}

export { LoginContext, LoginContextProvider };