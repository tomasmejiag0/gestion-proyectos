import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import ManagerDashboard from './pages/ManagerDashboard';
import ChiefDashboard from './pages/ChiefDashboard';
import Layout from './Layout';
import './App.css';

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
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<Layout />}>
        <Route path="/" element={
          <ProtectedRoute allowedRoles={['admin', 'manager', 'chief']}>
            <AuthContext.Consumer>
              {({ user }) => {
                if (user?.role === 'admin') return <AdminDashboard />;
                if (user?.role === 'manager') return <ManagerDashboard />;
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
  );
}

export default App;