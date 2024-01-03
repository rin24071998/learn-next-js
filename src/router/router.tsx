import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

const appRouter = {
  LOGIN: '/login',
  DASHBAORD: '/dashboard',
  USER: '/user',
};
const PUBLIC_ROUTER = ['/', appRouter.LOGIN];
const PRIVATE_ROUTER = [appRouter.DASHBAORD, appRouter.USER, '/history'];
const routes = [
  {
    pathname: appRouter.DASHBAORD,
    breadcrumbs: [
      {
        href: appRouter.DASHBAORD,
        icon:<HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        name: 'Dashboard',
      },
    ],
  },
  {
    pathname: appRouter.USER,
    breadcrumbs: [
      {
        href: appRouter.USER,
        icon:<PersonIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        name: 'User',
      },
    ],
  },
];
export { appRouter, PUBLIC_ROUTER, PRIVATE_ROUTER, routes };
