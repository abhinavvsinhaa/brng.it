import "../css/index.css";

import Head from "next/head";
import Layout from "@components/layout";
import ContextWrapper from "./../hooks/ContextWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <Layout>
        <Head>
          <title>Next.js Starter Tailwind</title>
          <meta
            name="Description"
            content="A Next.js starter styled using Tailwind CSS."
          />
        </Head>

        <Component {...pageProps} />
      </Layout>
    </ContextWrapper>
  );
}

export default MyApp;
