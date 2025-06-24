import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

import handleGlobalError from './errorHandler';

// Create AuthContext with default empty object
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const history = useHistory();

  const apiUrl = import.meta.env.BASE_URL; // or replace with your direct URL
  console.log('API Base URL:', apiUrl);

  const initialLoggedInState = !!localStorage.getItem('token');
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedInState);

  // LOGIN using credentials
  const login = async (loginFormValue) => {
    console.log("loginFormValue", loginFormValue);
    try {
      const response = await axios.post(
        apiUrl + '/api/sendOtp',
        loginFormValue,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('API Response:', response.data);
      return response;
    } catch (error) {
      console.error("Login Error:", error);
      return error;
    }
  };


  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login
      }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook
export const useAuth = () => useContext(AuthContext);
