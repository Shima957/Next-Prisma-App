import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '@/components/Layout';
import { SessionProvider } from 'next-auth/react';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ChakraProvider>
      <SessionProvider session={session}>
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </SessionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
