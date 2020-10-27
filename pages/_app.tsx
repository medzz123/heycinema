import GlobalStyles from '@theme/global';
import { defaultTheme } from '@theme/theme';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil'

const HeyCinema = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RecoilRoot>
        <Head>
          <title>HeyCinema</title>
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default HeyCinema;
