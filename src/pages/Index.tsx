import { useApp } from '@/lib/app-context';
import Login from './Login';
import MainApp from './MainApp';

export default function Index() {
  const { isLoggedIn } = useApp();
  return isLoggedIn ? <MainApp /> : <Login />;
}
