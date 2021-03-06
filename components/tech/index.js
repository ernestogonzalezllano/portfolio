import styles from "./index.module.scss"
import { useEffect, useState } from "react";

export default function Tech({translate}) {

    const [isHeaderMoved, setIsHeaderMoved] = useState(0)
    const [focus, setFocus] = useState(false)

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

    return(<div id="elemento_prueba" className={styles.element_tech}>
                <h2 id="parrafo">
                {translate.tech_title}
                <div></div>
                </h2>
                <div className={styles.container_tech}>
                {[{name:"javascript",level:"95%"},
                {name:"typescript",level:"70%"},
                {name:"reactnative",level:"65%"},
                {name:"react",level:"85%"},
                {name:"html",level:"70%"},
                {name:"css",level:"85%"},
                {name:"sass",level:"90%"},
                {name:"mui",level:"65%"},
                {name:"redux",level:"90%"},
                {name:"node",level:"65%"},
                {name:"express",level:"80%"},
                {name:"nest",level:"65%"},
                {name:"postgres",level:"70%"},
                {name:"sequelize",level:"75%"},
                {name:"mongo",level:"75%"}
                ].map((e,i)=>(<div key={i} className={styles.tag_tech}>
                    <img src={`./images/${e.name}.png`}/>
                    <div><label className={focus?styles.label_active:styles.label_inactive}>{e.level}</label><div className={focus?styles[e.name]:styles.level_inactive}></div></div>
                </div>))}
                </div>        
            </div>
    )
}

        