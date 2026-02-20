import { RouterProvider } from 'react-router';
import { router } from './routes';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const hasCompletedOnboarding = localStorage.getItem('onboarding_completed');
    const currentPath = window.location.pathname;
    
    // If user hasn't completed onboarding and not on welcome/onboarding screens
    if (!hasCompletedOnboarding && currentPath !== '/welcome' && currentPath !== '/onboarding') {
      window.location.href = '/welcome';
    }
  }, []);

  return <RouterProvider router={router} />;
}