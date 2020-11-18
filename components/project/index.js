import styles from "./index.module.scss"
import { useEffect, useState } from "react";

export default function Project() {

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
        Projects
        <div></div>
      </h2>
      <div className={styles.card_project}>
        <div className={styles.link}>
          <a href="https://gardenry.shop" target="_blank">
            <h3>Gardenry ecommerce</h3>
            {[{ position: 0, name: "garden1" },
            { position: 1, name: "garden2" },
            { position: 2, name: "garden3" },
            { position: 3, name: "garden4" }].map((e, i) => (<>
              <img key={i} className={carousel === e.position ? styles.imgActive : null} src={`./images/${e.name}.jpg`}></img>
            </>))}
          </a>
        </div>
        <div>
          <p>
            Ecommerce orientado a la actividad Viveril.
          </p>
          <p>
            Participé principalmente en la implementacion de Redux y la creacion de componentes
            con React y su estilizado con Sass
          </p>
          <p>
            Frontend: React, Redux, Sass.
          </p>
          <p>
            Backend: Sequelize, Express, PostgreSQL, Passport.
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
            App para el control de informacion dentro de un ambito académico.
          </p>
          <p>
            Participé en el frontend de la web y desarrolle la app mobile.
          </p>
          <p>
            Mobile: React Native, Expo, React Native Paper, React Navigation, Redux, Apollo, GraphQL.
          </p>
          <p>
            Frontend: React, Redux, Material UI, Apollo.
          </p>
          <p>
            Backend: Sequelize, Express, PostgreSQL, Passport, Apollo, GraphQL.
          </p>
        </div>
      </div>
    </div>
  )
}
