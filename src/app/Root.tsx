import { Outlet, useLocation } from 'react-router';
import { BottomNav } from './components/BottomNav';
import { DevTools } from './components/DevTools';

export function Root() {
  const location = useLocation();
  const hideNavOnPaths = ['/match'];
  const shouldHideNav = hideNavOnPaths.some((path) => location.pathname.startsWith(path));

  return (
    <div className="dark">
      <Outlet />
      {!shouldHideNav && <BottomNav />}
      <DevTools />
    </div>
  );
}