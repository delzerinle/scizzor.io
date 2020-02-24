import { useState } from "react";
import AuthContext from "@context/auth-context";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/tailwind.css';


const ScizzorApp = ({ Component, pageProps }) => {
  const [token, setToken] = useState("");
  const [tokenExpiration, setTokenExpiration] = useState(0);

  const login = (token, tokenExpiration) => {
    setToken(token);
    setTokenExpiration(tokenExpiration);
  };

  const logout = () => {
    setToken("");
    setTokenExpiration(0);
  };

  return (
    <AuthContext.Provider
      value={{
        token: token,
        tokenExpiration: tokenExpiration,
        login: login,
        logout: logout
      }}
    >
      <Component {...pageProps} />
    </AuthContext.Provider>
  );  
};

export default ScizzorApp;
