import React, { createContext, useState, useEffect } from "react";

interface User {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  referralCode: string;
}

interface UserContextType {
  user: User | null;
  saveUser: (item: User) => void;
  getUser: () => void;
  clearUser: () => void;
};

const initialUserContextValue: UserContextType = {
  user: null,
  saveUser: () => {},
  getUser: () => {},
  clearUser: () => {},
};

export const UserContext = createContext<UserContextType>(
  initialUserContextValue
);

function UserProvider ({ children }: any) {

const [user, setUser] = useState<User | null>(null);

const saveUser = (userData: User) => {
 try {
  localStorage.setItem("user", JSON.stringify(userData));
  console.log("successful");
   setUser(userData)
 } 
 catch (error) {
   console.error(error);
 }

  
};

const getUser = () => {
  const storedUser = localStorage.getItem("user");
   setUser(storedUser ? JSON.parse(storedUser) : null);
};

const clearUser = () => {
  localStorage.removeItem("user");
  setUser(null);
};

useEffect(() => {
  getUser();
}, []);

const userContextValue = {
  user,
  saveUser,
  getUser,
  clearUser,
}
return (
  <UserContext.Provider value={userContextValue}>
  {children}
  </UserContext.Provider>
)
}
export default UserProvider;