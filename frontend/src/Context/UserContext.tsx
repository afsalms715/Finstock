import React, { createContext, useContext, useEffect, useState } from "react";
import { userProfile } from "../Models/generatedToken";
import { useNavigate } from "react-router";
import axios from "axios";
import { loginApi, registerApi } from "../Services/AuthService";
import { toast } from "react-toastify";

type UserContextType = {
  token: string | null;
  user: userProfile | null;
  registerUser: (email: string, username: string, password: string) => void;
  loginUser: (username: string, password: string) => void;
  logoutUser: () => void;
  isLogin: () => boolean;
};

type prop = {
  children: React.ReactNode;
};

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: prop) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<userProfile | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setToken(token);
      setUser(JSON.parse(user));
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    setIsReady(true);
  }, []);

  const registerUser = async (
    email: string,
    username: string,
    password: string
  ) => {
    await registerApi(email, username, password)
      .then((resp) => {
        if (resp) {
          localStorage.setItem("token", resp?.data.token);
          setToken(resp?.data.token);
          const userObj = {
            username: resp?.data.userName,
            email: resp?.data.email,
          };
          localStorage.setItem("user", JSON.stringify(userObj));
          setUser(userObj);
          toast.success("Login Successfully");
          navigate("/search");
        }
      })
      .catch((e) => toast.warning("Server Error Accure!"));
  };

  const loginUser = async (username: string, password: string) => {
    await loginApi(username, password)
      .then((resp) => {
        if (resp) {
          localStorage.setItem("token", resp?.data.token);
          setToken(resp?.data.token);
          const userObj = {
            username: resp?.data.userName,
            email: resp?.data.email,
          };
          console.log(resp?.data);
          setUser(userObj);
          localStorage.setItem("user", JSON.stringify(userObj));
          toast.success("Login Successfully");
          navigate("/search");
        }
      })
      .catch((e) => {
        toast.warning("Server Error Accure!");
      });
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken("");
    setUser(null);
    navigate("/");
  };

  const isLogin = () => {
    return !!user;
  };

  return (
    <UserContext.Provider
      value={{ token, user, registerUser, loginUser, logoutUser, isLogin }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);
