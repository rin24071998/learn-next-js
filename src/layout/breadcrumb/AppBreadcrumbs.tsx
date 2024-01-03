import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useInfoRouter } from '@/hooks/useInfoRouter';
export default function AppBreadcrumbs() {
  const { pathname, breadcrumbs } = useInfoRouter();
  return (
    <>
      {breadcrumbs?.length && (
        <Breadcrumbs aria-label="breadcrumb">
          {breadcrumbs.map((el) => (
            <Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="inherit"
              href={el.href}
              key={el.name}
            >
              {el.icon}
              {el.name}
            </Link>
          ))}
        </Breadcrumbs>
      )}
    </>
  );
}
