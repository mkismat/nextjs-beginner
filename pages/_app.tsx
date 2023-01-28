import "@/styles/globals.css";
import "@/styles/styles.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "@/components/Navbar/Header.component";
import Footer from "@/components/Footer.component";
// import { ThemeProvider } from "styled-components";
import { SessionProvider } from "next-auth/react";

//*** Adding Theme */
// const theme = {
//   colors: {
//     primary: '#add8e6'
//   }
// }
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  // if (Component.getLayout) {
  //   return Component.getLayout(<Component {...pageProps} />);
  // }
  return (
    <>
      <Head>
        <title>Kat Next</title>
        <meta name="description" content="Kat learning Nextjs" />
      </Head>
      {/* <ThemeProvider theme={theme}> */}
      <SessionProvider session={session} refetchInterval={5 * 60}>
        <Header />
        <Component {...pageProps} />
        {/* </ThemeProvider> */}
        <Footer />
      </SessionProvider>
    </>
  );
}
