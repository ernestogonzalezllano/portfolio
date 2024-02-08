import "../styles/global.css";
import Head from "next/head";
import { SKILLS } from "../utils/consts";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const TITLE = "Ernesto Gonzalez Llano - Full Stack Web Developer";
const DESCRIPTION =
  "Full stack developer oriented to frontend with 3+ experience";
const KEYWORDS = Object.keys(SKILLS)
  .reduce((prev, curr) => {
    return [...prev, ...SKILLS[curr]];
  }, [])
  .join(" , ");

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="apple-app-site-association file"
          href="/static/apple-app-site-association"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{TITLE}</title>
        <meta property="og:title" content={TITLE}></meta>
        <meta property="og:description" content={DESCRIPTION}></meta>
        <meta property="og:image" content="/favicon.ico"></meta>
        <meta name="description" content={DESCRIPTION}></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta name="keywords" content={KEYWORDS}></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
          crossorigin="anonymous"
        />
      </Head>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
