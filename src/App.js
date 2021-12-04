import { lazy, Suspense, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import { authOperations } from 'redux/auth';
import Loader from './components/Loader';
import Section from './components/Section';
import AppBar from './components/AppBar';

const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage'),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage'),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  return (
    <Section>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute path="/" exact>
            <HomePage />
          </PublicRoute>

          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts"
          >
            <RegisterPage />
          </PublicRoute>

          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
          >
            <LoginPage />
          </PublicRoute>

          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
          >
            <ContactsPage />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Section>
  );
}
