import styles from "./index.module.scss"
import { useEffect, useState } from "react";

export default function Project({translate}) {

  const [carousel, setCarousel] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (carousel === 3) {
        setCarousel(0)
      } else {
        setCarousel(carousel + 1)
      }
    }, 2000);
    return () => clearInterval(intervalo);
  }, [carousel]);

  return (
    <div className={styles.element_project}>
      <h2 id="parrafo">
        {translate.projects_title}
        <div></div>
      </h2>
      <div className={styles.card_project}>
        <div className={styles.link}>
          <a href="https://ep-wallet.herokuapp.com/" target="_blank">
            <h3>e-Wallet</h3>
            {[{ position: 0, name: "wallet1" },
            { position: 1, name: "wallet2" },
            { position: 2, name: "wallet3" },
            { position: 3, name: "wallet4" }].map((e, i) => (<>
              <img key={i} className={carousel === e.position ? styles.imgActive : null} src={`./images/${e.name}.png`}></img>
            </>))}
          </a>
        </div>
        <div>
          <p>
          {translate.projects_wallet_expl}
          </p>
          <p>
          {translate.projects_wallet_features}
          </p>
          <p>
          {translate.projects_wallet_front}
          </p>
          <p>
          {translate.projects_wallet_back}
          </p>
        </div>
      </div>
      <div className={styles.card_project}>
        <div className={styles.link}>
          <a href="https://motor-optimization.herokuapp.com/" target="_blank">
            <h3>Motor Optimization</h3>
            {[{ position: 0, name: "motores1" },
            { position: 1, name: "motores2" },
            { position: 2, name: "motores3" },
            { position: 3, name: "motores4" }].map((e, i) => (<>
              <img key={i} className={carousel === e.position ? styles.imgActive : null} src={`./images/${e.name}.png`}></img>
            </>))}
          </a>
        </div>
        <div>
          <p>
          {translate.projects_motores_expl}
          </p>
          <p>
          {translate.projects_motores_features}
          </p>
          <p>
          {translate.projects_motores_front}
          </p>
          <p>
          {translate.projects_motores_back}
          </p>
        </div>
      </div>
      <div className={styles.card_project}>
        <div className={styles.link}>
          <a href="https://lasrosas.herokuapp.com/" target="_blank">
            <h3>Las Rosas</h3>
            {[{ position: 0, name: "rosas" },
            { position: 1, name: "rosas2" },
            { position: 2, name: "rosas3" },
            { position: 3, name: "rosas4" }].map((e, i) => (<>
              <img key={i} className={carousel === e.position ? styles.imgActive : null} src={`./images/${e.name}.png`}></img>
            </>))}
          </a>
        </div>
        <div>
          <p>
          {translate.projects_lasrosas_expl}
          </p>
          <p>
          {translate.projects_lasrosas_features}
          </p>
          <p>
          {translate.projects_lasrosas_front}
          </p>
          <p>
          {translate.projects_lasrosas_back}
          </p>
        </div>
      </div>
      <div className={styles.card_project}>
        <div className={styles.link}>
          <a href="https://expo.io/@toti10/projects/henryapp" target="_blank">
            <h3>Henry App</h3>
            {[{ position: 0, name: "app1" },
            { position: 1, name: "app2" },
            { position: 2, name: "app3" },
            { position: 3, name: "app4" }].map((e, i) => (<>
              <img key={i} className={carousel === e.position ? styles.imgActive : null} src={`./images/henryApp/${e.name}.png`}></img>
            </>))}
          </a>
        </div>
        <div>
          
          <p>
          {translate.projects_henryapp_expl}
          </p>
          <p>
          {translate.projects_henryapp_features}
          </p>
          <p>
          {translate.projects_henryapp_front}
          </p>
          <p>
          {translate.projects_henryapp_back}
          </p>
        </div>
      </div>
    </div>
  )
}
