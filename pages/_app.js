import Layout from "@/components/Layout";
import "@/styles/globals.scss";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheets"
        />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
