import Head from 'next/head';
import styles from "./index.module.scss"
import { Element } from "react-scroll";
import About from "../about/index"
import Tech from "../tech/index"
import Project from "../project/index"
import Contact from "../contact/index"

const name = 'ernesto'
export const siteTitle = 'Ernesto Full stack Developer'
const scrollType = {
  duration: 500,
  delay: 50,
  smooth: true,  
  offset: 0,
};

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Full Stack Web Developer website"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        <figure className={styles.header__imgContainer}>
         <img src="./images/profile.png" alt="foto perfil ernesto gonzalez llano"></img>
        </figure>
        <div className={styles.header__textContainer}>
          <h1>
            Ernesto Gonzalez LLano
          </h1>
          <h2>
            FULL STACK WEB DEVELOPER
          </h2>
        </div>
      </header>
      <main>
        <Element className={styles.element} name="about">
          <section>
            <About/>
          </section>
        </Element>
        <Element className={styles.element} name="tech">
          <section >
            <Tech/>
          </section>  
        </Element>
        <Element className={styles.element} name="project">
          <section >
            <Project/>
          </section>
        </Element>
      </main>
      <footer>
        <Element className={styles.element} name="contact">
          <section >
            <Contact/>
          </section>
        </Element>
      </footer>
      </>
  )
}