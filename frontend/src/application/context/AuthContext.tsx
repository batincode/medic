import React, { createContext, useContext, useState } from 'react';
import { User } from '../../domain/entities/user';

interface AuthContextValue {
  user?: User;
  setUser: (user?: User) => void;
reec67-codex/design-react-ui-structure-for-project
  logout: () => void;

 main
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>();
 reec67-codex/design-react-ui-structure-for-project
  const logout = () => setUser(undefined);
  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>

  return (
    <AuthContext.Provider value={{ user, setUser }}>
 main
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
