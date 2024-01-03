'use client';
import { IRoutes } from '@/interface/interface';
import { routes } from '@/router/router';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useInfoRouter() {
  const [infoRouter, setInfoRouter] = useState<IRoutes>({
    pathname: '',
    breadcrumbs: [],
  });
  const pathname = usePathname();
  useEffect(() => {
    const getInfoRouterByPathname = routes?.find(
      (router) => router.pathname === pathname
    ) || {
      pathname: '',
      breadcrumbs: [],
    };
    setInfoRouter(getInfoRouterByPathname);
  }, [pathname]);
  return infoRouter;
}
