import styles from "./index.module.scss"
import { useEffect, useState } from "react";

export default function Layout({ children, home }) {

    const [impChar, setImpChar] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
          if(impChar === 3){
            setImpChar(0)
          }else{
            setImpChar(impChar+1)
          }
        }, 4000);
        return () => clearInterval(interval);
      },[impChar]); 

    return(<div className={styles.element_about}>
                <h2 className="split" id="parrafo">
                About
                </h2>
                <div></div>
                <p>
                Como web developer junior estoy enfocado a <strong className={impChar === 0? styles.impChar:null}>aprender</strong> al máximo , 
                <strong className={impChar === 1? styles.impChar:null}>adaptarme</strong> y afrontar todos y cada uno de los desafíos que se me asignen,
                <strong className={impChar === 2? styles.impChar:null}>aportar</strong> mi experiencia en proyectos grupales e indivuales, tanto en backend y frontend y nutrirme de nuevas habilidades, que junto con las
                propias, me permitan maximizar cada vez más mi capacidad de 
                <strong className={impChar === 3? styles.impChar:null}> transformar</strong> programas,empresas, realidades y vidas
                </p>
            </div>)
            
}