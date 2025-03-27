import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function Layout() {
  const auth = useContext(AuthContext);
  
  // Manejo seguro cuando el contexto no está disponible
  if (!auth) {
    return <div>Error: Contexto de autenticación no disponible</div>;
  }
  const { user, logout } = auth;

  return (
    <div>
      <nav>
        {user ? (
          <>
            <span>Bienvenido, {user.name}</span>
            {user.role === 'admin' && <Link to="/admin">Administración</Link>}
            {user.role === 'manager' && <Link to="/manager">Finanzas</Link>}
            {user.role === 'chief' && <Link to="/chief">Tareas</Link>}
            <button onClick={logout}>Cerrar sesión</button>
          </>
        ) : (
          <Link to="/login">Iniciar sesión</Link>
        )}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;