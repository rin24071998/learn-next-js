import Login from '@/layout/pages/login/Login';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Login',
};
export default function Page() {
  return <Login />;
}
