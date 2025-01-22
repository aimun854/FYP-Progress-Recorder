import React, { createContext, useState, useContext } from 'react';

// Create Context
const AuthContext = createContext();

// Create a custom hook to access the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provide AuthContext to the rest of the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user will store logged-in user details

  const login = (juwId) => {
    // On login, set user data
    setUser({ juw_id: juwId });
  };

  const logout = () => {
    // On logout, reset user data
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
