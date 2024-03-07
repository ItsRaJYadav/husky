'use client';

import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { usePathname } from 'next/navigation';
import { PersistGate } from 'redux-persist/integration/react';

import Footer from '@/components/layout/footer/footer';
import Header from '@/components/layout/navbar';

import { persistor, store } from '../redux/store';

import { theme } from './themes/MUITheme';

interface ProviderProps {
  children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const pathname = usePathname();
  const hideHeader = ['/user-dashboard', '/admin-dashboard', '/hotelier-dashboard', '/auth'].some(
    (route) => pathname.startsWith(route),
  );
  const hideFooter = ['/user-dashboard', '/admin-dashboard', '/hotelier-dashboard', '/auth'].some(
    (route) => pathname.startsWith(route),
  ) || pathname === '/all-hotels';

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <AppRouterCacheProvider>
          {!hideHeader && <Header />}
          <PersistGate persistor={persistor} loading={null}>
            {children}
          </PersistGate>
          {!hideFooter && <Footer />}
          <Toaster />
        </AppRouterCacheProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default Provider;
