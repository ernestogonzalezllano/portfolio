import Head from 'next/head';
import styles from "./index.module.scss"
import { Element } from "react-scroll";
import About from "../about/index"
import Tech from "../tech/index"
import Project from "../project/index"
import Contact from "../contact/index"
import Experience from "../experience/index"
import SoftSkills from "../softSkills/index"
import { useState } from 'react';
import translate_es from "../../utils/translate_es"
import translate_en from "../../utils/translate_en"

const name = 'ernesto'
export const siteTitle = 'Ernesto Full stack Developer'

export default function Layout() {

  const[info,setInfo] = useState(true)
  const[translate, setTranslate] = useState(translate_es)

  function handleinfoMenu(){
    setInfo(!info)
  }
  function handleTranslate(tr){
    setTranslate(tr)
    handleinfoMenu()
  }
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
        <title>Full Stack Developer</title>
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
            FULL STACK DEVELOPER
          </h2>
        </div>
      </header>
      <main>
        <Element className={styles.element} name="about">
          <section>
            <About translate={translate}/>
          </section>
        </Element>
        <Element className={styles.element} name="tech">
          <section >
            <Tech translate={translate} />
          </section>  
        </Element>

        <Element className={styles.element} name="softskills">
          <section >
            <SoftSkills translate={translate}/>
          </section>  
        </Element>
        
        <Element className={styles.element} name="experience">
          <section >
            <Experience translate={translate} />
          </section>
        </Element>

        <Element className={styles.element} name="project">
          <section >
            <Project translate={translate}/>
          </section>
        </Element>
        
      </main>
      <footer>
        <Element className={styles.element} name="contact">
          <section >
            <Contact translate={translate}/>
          </section>
        </Element>
      </footer>
      <div 
      id={styles.infoMenu} 
      className={info?styles.inactive:styles.active}
      >
        <div>
          <button onClick={()=>handleTranslate(translate_es)}>ES</button>
          <button onClick={()=>handleTranslate(translate_en)}>EN</button>
        </div>
        <button 
        onClick={handleinfoMenu} 
        >
          <img src="./images/menu.png"></img>
        </button>
      </div>
      </>
  )
}