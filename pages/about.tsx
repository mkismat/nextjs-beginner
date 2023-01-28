import Head from "next/head";
import Footer from "../components/Footer.component";
import { ReactNode } from "react";

function About() {
  return (
    <>
      <Head>
        <title>About Codevolution</title>
        <meta name="description" content="Free tutorials on web development with nextjs" />
      </Head>
      <h1 className="content">About</h1>
    </>
  );
}

export default About;

About.getLayout = (page: ReactNode) => (
  <>
    {page}
    <Footer />
  </>
);
