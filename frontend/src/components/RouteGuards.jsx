import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';

const FullPageLoader = () => (
  <Container className="py-5 text-center">
    <Spinner animation="border" role="status" />
    <p className="mt-3 text-muted mb-0">Loading your session...</p>
  </Container>
);

export const ProtectedRoute = () => {
  const { isAuthenticated, initializing } = useContext(AuthContext);
  const location = useLocation();

  if (initializing) {
    return <FullPageLoader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
};

export const PublicOnlyRoute = () => {
  const { isAuthenticated, initializing } = useContext(AuthContext);

  if (initializing) {
    return <FullPageLoader />;
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};
