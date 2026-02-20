import { createBrowserRouter } from 'react-router';
import { Root } from './Root';
import { Home } from './screens/Home';
import { MatchDetail } from './screens/MatchDetail';
import { ValuePicks } from './screens/ValuePicks';
import { Bankroll } from './screens/Bankroll';
import { Performance } from './screens/Performance';
import { Profile } from './screens/Profile';
import { Welcome } from './screens/Welcome';
import { Onboarding } from './screens/Onboarding';

export const router = createBrowserRouter([
  {
    path: '/welcome',
    Component: Welcome,
  },
  {
    path: '/onboarding',
    Component: Onboarding,
  },
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'match/:matchId', Component: MatchDetail },
      { path: 'value-picks', Component: ValuePicks },
      { path: 'bankroll', Component: Bankroll },
      { path: 'performance', Component: Performance },
      { path: 'profile', Component: Profile },
    ],
  },
]);