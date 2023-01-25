import React from "react";
import { AuthContext } from "./AuthContext";
import { fakeAuthProvider } from "./auth";
export default function AuthProvider(props) {
  let [user, setUser] = React.useState(null);

  const login = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  const logout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, login, logout };
  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
}
