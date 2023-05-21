import React, { createContext, useContext } from "react";

// context

const AppContext = createContext();

// Appprovider for app  always good to pass children and needs value if we do not pass then we will get error.

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ myName: "rohit kumar" }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook - for not ot import many times data, no need to write code amny times

const useGlobalProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalProductContext };
