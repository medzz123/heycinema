import GlobalStyles from '@theme/global';
import { defaultTheme } from '@theme/theme';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import React from 'react';
import { MaxWrapper } from '@components/Layout';

const HeyCinema = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RecoilRoot>
        <Head>
          <title>HeyCinema</title>
        </Head>
        <GlobalStyles />
        <MaxWrapper>
          <Component {...pageProps} />
        </MaxWrapper>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default HeyCinema;
