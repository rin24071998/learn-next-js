import { useEffect, useState } from 'react';
import Header from './header/Header';
import { Box, Skeleton, styled } from '@mui/material';
import Menu from './menu/Menu';
import { useAuth } from '@/hooks/useAuth';
import { SUCCESS, WAITING } from '@/constant/common';
import { usePathname, useRouter } from 'next/navigation';
import { PRIVATE_ROUTER, PUBLIC_ROUTER, appRouter } from '@/router/router';
import AppBreadcrumbs from './breadcrumb/AppBreadcrumbs';
const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 240,
  }),
}));
export default function Layout({ children }: { children: React.ReactNode }) {
  const { status, token } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
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
    return <></>
  }
  return (
    <>
      {token && (
        <>
          <Header onShowMenu={() => handleDrawerOpen()} />
          <Menu open={open} onCloseMenu={() => handleDrawerClose()} />
        </>
      )}

      <Main open={open}>
        {token && <AppBreadcrumbs />}
        <div>{children}</div>
      </Main>
    </>
  );
}
