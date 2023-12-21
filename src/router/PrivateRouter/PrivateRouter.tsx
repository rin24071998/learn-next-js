import { SUCCESS, WAITING } from '@/constant/common';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';
import { appRouter } from '../router';
import { useRouter } from 'next/navigation';
import AppCircularProgress from '@/components/AppCircularProgress/AppCircularProgress';

export default function PrivateRouter({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status, token } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (status === SUCCESS && !token) {
      router.push(appRouter.LOGIN);
    }
  }, [status, token]);
  if (status === WAITING || !token) {
    return <></>
  }
  return (
    <>
      <div>private routes</div>
      <div>{children}</div>
    </>
  );
}
