import User from '@/layout/pages/user/User';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'User',
};
export default function Page() {
  return <User />;
}
