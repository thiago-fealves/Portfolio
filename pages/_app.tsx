import Layout from "../public/Components/layout";
import Head from "next/head";
import { LanguageProvider } from "../public/Components/language";
import "../public/styles/styles.css";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Thiago's Portfolio</title>
        <link rel="icon" href="/assets/portfolio.ico" />
        <meta
          name="description"
          content="Portfólio de Thiago, desenvolvedor especializado em backend e cibersegurança. Veja meus projetos e entre em contato."
        />
        <meta name="author" content="Thiago" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
