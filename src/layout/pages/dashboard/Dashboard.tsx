'use client';
import AppButton from '@/components/AppButton/AppButton';
import { appRouter } from '@/router/router';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import Deposits from './Deposits';
import { Copyright } from '@mui/icons-material';
import Orders from './Orders';

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
      {/* <AppButton onClick={() => handleOnClick()}>
      <>Logout</>
    </AppButton>
    <AppButton onClick={() => handleOnClick1()}>
      <>Go to user</>
    </AppButton> */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
    </>
  );
}
