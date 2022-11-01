import '../styles/global.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/styles/Theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
