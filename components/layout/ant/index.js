import Head from 'next/head';
import NavBar from "../navBar";
import styles from "./index.module.scss"
import { Element , scroller } from "react-scroll";
import { useEffect, useLayoutEffect, useState } from "react";

const name = 'ernesto'
export const siteTitle = 'Next.js Sample Website'
const scrollType = {
  duration: 500,
  delay: 50,
  smooth: true,  
  offset: 0,
};

export default function Layout({ children, home }) {

  const [impChar, setImpChar] = useState(0)
  const [isHeaderMoved, setIsHeaderMoved] = useState(0)
  const [focus, setFocus] = useState(false)
  
  /* useEffect(() => {
    const interval = setInterval(() => {
      if(impChar === 3){
        setImpChar(0)
      }else{
        setImpChar(impChar+1)
      }
    }, 4000);
    return () => clearInterval(interval);
  }); */

  useEffect(
    () => {
      const handleScroll = () => {
        setIsHeaderMoved(window.pageYOffset)
      }
      const elemento = document.getElementById("elemento_prueba")
      if((elemento.offsetTop -(window.innerHeight/2))<isHeaderMoved && (elemento.offsetTop + (window.innerHeight/2))>isHeaderMoved){
        setFocus(true)
      }else{
        setFocus(false)
      }
      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    },
    [isHeaderMoved],
  )

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <div name="menu"onClick={()=>scroller.scrollTo("about",scrollType)}>
          <div className={styles.about}>
            <img src="./images/about.svg"></img>
            <label>About</label>
          </div>
          <img className={styles.backimages} src="./images/about.jpg"></img>          
        </div >
        <div  onClick={()=>scroller.scrollTo("tech",scrollType)}>
          <div className={styles.tech}>
            <img src="./images/tech.svg"></img>
            <label>Tech</label>
          </div>
          <img className={styles.backimages} src="./images/tech.jpg"></img>
        </div >
        <div  onClick={()=>scroller.scrollTo("contact",scrollType)}>
          <div className={styles.contact}>
            <label>Contact</label>
            <img src="./images/contact.svg"></img>
          </div>
          <img className={styles.backimages} src="./images/contact.jpg"></img>
        </div >
        <div  onClick={()=>scroller.scrollTo("project",scrollType)}>
          <div className={styles.project}>
            <label>Projects</label>
            <img src="./images/project.svg"></img>
          </div>
        <img className={styles.backimages} src="./images/project.jpg"></img>
        </div >
      </header>
      <nav className={styles.navBar}>
          <div className={styles.navBar_menu} onClick={()=>scroller.scrollTo("menu",scrollType)}>
            <img src="./images/upArrow.svg"></img>
          </div>
          <div className={styles.navBar_about} onClick={()=>scroller.scrollTo("about",scrollType)}>
          <img src="./images/about.svg"></img>
          </div>
          <div className={styles.navBar_tech} onClick={()=>scroller.scrollTo("tech",scrollType)}>
          <img  src="./images/tech.svg"></img>
          </div>
          <div className={styles.navBar_contact} onClick={()=>scroller.scrollTo("contact",scrollType)}>
          <img src="./images/contact.svg"></img>
          </div>
          <div className={styles.navBar_project} onClick={()=>scroller.scrollTo("project",scrollType)}>
          <img src="./images/project.svg"></img>
          </div>
      </nav>
      <Element className={styles.element} name="about">
        <section>
          <div className={styles.element_about}>
            <h2 className="split" id="parrafo">
              About
            </h2>
            <p>
            Como web developer junior estoy enfocado a <strong className={impChar === 0? styles.impChar:null}>aprender</strong> al máximo,
            <strong className={impChar === 1? styles.impChar:null}>adaptarme</strong> y afrontar todos y cada uno de los desafíos que se me asignen,
            <strong className={impChar === 2? styles.impChar:null}>aportar</strong> mi experiencia en proyectos grupales e indivuales, tanto en backend y frontend y nutrirme de nuevas habilidades, que junto con las
            propias, me permitan maximizar cada vez más mi capacidad de
            <strong className={impChar === 3? styles.impChar:null}>transformar</strong> programas,empresas, realidades y vidas
            </p>
          </div>
        </section>
        
      </Element>
      <Element className={styles.element} name="tech">
        <section >
          <div id="elemento_prueba" className={styles.element_tech}>
            <h2 id="parrafo" className={focus?styles.anda:null}>
            Tech
            </h2>
          </div>
        </section>  
      </Element>
      <Element className={styles.element} name="contact">
      <section >
          <div className={styles.element_contact}>
            <h2 id="parrafo">
            contact
            </h2>
          </div>
        </section>
      </Element>
      <Element className={styles.element} name="project">
      <section >
          <div className={styles.element_project}>
            <h2 id="parrafo">
              Project
            </h2>
          </div>
        </section>
      </Element>
      </>
  )
}