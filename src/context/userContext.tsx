import React, { createContext, useState } from "react";

interface User {
  fullName: string;
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
  localStorage.setItem("user", JSON.stringify(userData));
  setUser(userData);
};

const getUser = () => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }
};

const clearUser = () => {
  localStorage.removeItem("user");
  setUser(null);
};

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