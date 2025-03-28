import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, userType) => {
    let authenticatedUser;

    switch (userType) {
      case 'admin':
        if (email === 'admin@c.com') {
          authenticatedUser = { email, role: 'admin', name: 'Administrador' };
        }
        break;
      case 'worker':
        if (email === 'worker@c.com') {
          authenticatedUser = { email, role: 'worker', name: 'Trabajador' };
        }
        break;
      case 'owner':
        if (email === 'owner@c.com') {
          authenticatedUser = { email, role: 'owner', name: 'Propietario' };
        }
        break;
      default:
        throw new Error('Credenciales inválidas');
    }

    if (!authenticatedUser) {
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