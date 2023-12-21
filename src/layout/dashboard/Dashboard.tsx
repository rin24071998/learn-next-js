'use client';
import AppButton from '@/components/AppButton/AppButton';
import { appRouter } from '@/router/router';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const handleOnClick = () => {
    localStorage.removeItem('token');
    router.push(appRouter.LOGIN);
  };
  const handleOnClick1 = () => {
    router.push('/user');
  };
  return (
    <>
    <AppButton onClick={() => handleOnClick()}>
      <>Logout</>
    </AppButton>
    <AppButton onClick={() => handleOnClick1()}>
      <>Go to user</>
    </AppButton>
    </>
  );
}
