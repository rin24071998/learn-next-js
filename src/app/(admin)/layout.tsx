'use client';
import { SUCCESS, WAITING } from '@/constant/common';
import { useAuth } from '@/hooks/useAuth';
import AdminFooter from '@/layout/admin/AdminFooter';
import AdminHeader from '@/layout/admin/AdminHeader';
import { PRIVATE_ROUTER, PUBLIC_ROUTER, appRouter } from '@/router/router';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const { status, token } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    useEffect(() => {
      if (status === SUCCESS) {
        if (PRIVATE_ROUTER?.includes(pathname)) {
          if (!token) {
            router?.push(appRouter.LOGIN);
          }
        } else {
          if (PUBLIC_ROUTER.includes(pathname)) {
            if (token) {
              router?.push(appRouter.DASHBAORD);
            }
          }
        }
      }
    }, [status, token]);
    if (
      status === WAITING ||
      (status === SUCCESS && token && PUBLIC_ROUTER?.includes(pathname)) ||
      (status === SUCCESS && !token && PRIVATE_ROUTER?.includes(pathname))
    ) {
      return <></>;
    }
  return (
    <>
      <AdminHeader />
      <>{children}</>
      <AdminFooter />
    </>
  );
}
