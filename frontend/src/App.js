import React, { useContext } from 'react'; // Añade useContext aquí
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './AuthContext';
import LoginPage from './LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import ManagerDashboard from './pages/ManagerDashboard';
import ChiefDashboard from './pages/ChiefDashboard';
import Layout from './Layout';

// Componente para rutas protegidas
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useContext(AuthContext);
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<Layout />}>
            <Route path="/" element={
              <ProtectedRoute allowedRoles={['admin', 'manager', 'chief']}>
                {/* Página inicial según rol */}
                <AuthContext.Consumer>
                  {({ user }) => {
                    if (user.role === 'admin') return <AdminDashboard />;
                    if (user.role === 'manager') return <ManagerDashboard />;
                    return <ChiefDashboard />;
                  }}
                </AuthContext.Consumer>
              </ProtectedRoute>
            } />
            <Route path="/admin" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/manager" element={
              <ProtectedRoute allowedRoles={['manager']}>
                <ManagerDashboard />
              </ProtectedRoute>
            } />
            <Route path="/chief" element={
              <ProtectedRoute allowedRoles={['chief']}>
                <ChiefDashboard />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;