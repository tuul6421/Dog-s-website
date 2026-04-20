import { createContext, useContext, useState, useEffect } from 'react';
import liff from '@line/liff';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    liff.init({ liffId: import.meta.env.VITE_LINE_LIFF_ID })
      .then(async () => {
        if (liff.isLoggedIn()) {
          const profile = await liff.getProfile();
          setUser(profile);
        }
        setIsReady(true);
      })
      .catch(() => setIsReady(true));
  }, []);

  const login = () => liff.login();

  const logout = () => {
    liff.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isReady, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
