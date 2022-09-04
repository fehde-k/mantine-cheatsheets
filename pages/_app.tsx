import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { Header } from '../features/common/components/Header';
import { Container } from '@mantine/core';
import { PageProvider } from '../features/common/contexts/PageContext';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Mantine Grid PlayGround</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="Mantine Grid PlayGround" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <PageProvider>
          <Container>
            <Header></Header>
            <Component {...pageProps} />
          </Container>
        </PageProvider>
      </MantineProvider>
    </>
  );
}
