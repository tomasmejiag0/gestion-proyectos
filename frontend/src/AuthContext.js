import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email) => {
    let authenticatedUser;
    
    if (email === 'admin@c.com') {
      authenticatedUser = { email, role: 'admin', name: 'Administrador' };
    } else if (email === 'gerente@c.com') {
      authenticatedUser = { email, role: 'manager', name: 'Gerente de Proyecto' };
    } else if (email === 'jefe@c.com') {
      authenticatedUser = { email, role: 'chief', name: 'Jefe de Obra' };
    } else {
      throw new Error('Credenciales inválidas');
    }

    setUser(authenticatedUser);
    return authenticatedUser;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};