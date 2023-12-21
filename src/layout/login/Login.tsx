'use client';
import AppButton from '@/components/AppButton/AppButton';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const handleOnClick = () => {
    localStorage.setItem('token', '123456');
    router.push('/dashboard');
  };
  return (
    <>
      <AppButton onClick={() => handleOnClick()}>
        <>Login</>
      </AppButton>
    </>
  );
}
