import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(false);

  // You can add additional state or functions related to user authentication here

  return (
    <UserContext.Provider value={{ loginStatus, setLoginStatus }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
