import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { getMe } from "../api/LifeHackApi";

const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) return;
    getMe(token).then((rs) => {
      setUser(rs.data);
    });
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
