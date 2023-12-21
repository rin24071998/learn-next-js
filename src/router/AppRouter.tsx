"use client";
import PrivateRouter from '@/router/PrivateRouter/PrivateRouter';
import { usePathname } from 'next/navigation'
import PublicRouter from './PublicRouter/PublicRouter';
import { PUBLIC_ROUTER } from './router';
export default function AppRouter({
  children,
}: {
  children: React.ReactNode;
}) {
    const pathname = usePathname()
  if (PUBLIC_ROUTER.includes(pathname)) {
    return <PublicRouter>{children}</PublicRouter>;
  }
  return <PrivateRouter>{children}</PrivateRouter>;
}