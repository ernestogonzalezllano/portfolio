import styles from "./index.module.scss"
import { useEffect, useState } from "react";

export default function About({translate}) {

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
                {translate.about_title}
                </h2>
                <div></div>
                <p>
                {translate.about_p1}
                <strong className={impChar === 0? styles.impChar:null}>
                {translate.about_str1}
                </strong>
                {translate.about_p2}
                <strong className={impChar === 1? styles.impChar:null}>
                {translate.about_str2}
                </strong>
                {translate.about_p3}
                <strong className={impChar === 2? styles.impChar:null}>
                {translate.about_str3}
                </strong> 
                {translate.about_p4}
                <strong className={impChar === 3? styles.impChar:null}>
                {translate.about_str4}
                </strong> 
                {translate.about_p5}
                </p>
            </div>)
            
}