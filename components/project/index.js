import styles from "./index.module.scss"
import { useEffect, useState } from "react";

export default function Project() {
    
    const [carousel, setCarousel] = useState(0)

    useEffect(() => {
    const intervalo = setInterval(() => {
    if(carousel === 3){
      setCarousel(0)
    }else{
      setCarousel(carousel+1)
    }
    }, 2000);
    return () => clearInterval(intervalo);
    },[carousel]); 

    return(
        <div className={styles.element_project}>
            <h2 id="parrafo">
              Projects
              <div></div>
            </h2>
            <div className={styles.card_project}>
              <div className={styles.link}>
                <a href="https://gardenry.shop" target="_blank">Gardenry ecommerce</a>
                
                {[{position:0,name:"garden1"},
                {position:1,name:"garden2"},
                {position:2,name:"garden3"},
                {position:3,name:"garden4"}].map((e,i)=>(<>
                  <img key={i} className={ carousel === e.position? styles.imgActive : null} src={`./images/${e.name}.jpg`}></img>
                </>))}       
              </div>
              <div>
                <p>
                  Ecommerce realizado con compañeros del webft04 grupo5 de HenryLabs. 
                </p>
                <p>
                  Utilizando: React, Redux, Sass, Sequelize, Express, Postgres
                </p>
              </div>
            </div>
          </div>
    )
}