import styles from "./index.module.scss"
import { useEffect, useState } from "react";

export default function Experience({translate}) {


  return (
    <div className={styles.element_project}>
      <h2 id="parrafo">
        {translate.experience_title}
        <div></div>
      </h2>
      <div className={styles.card_project}>
        <div>
          <a href="https://epayco.co/" target="_blank">
            <img src="https://369969691f476073508a-60bf0867add971908d4f26a64519c2aa.ssl.cf5.rackcdn.com/logos/logo_epayco_200px.png"/>
          </a>
          <h4>
            Full Stack Developer SSr
          </h4>
          <p>
            {translate.experience_epayco_job}
          </p>
          <label>
          {translate.experience_epayco_date}
          </label>
        </div>
      </div>

      <div className={styles.card_project}>
        <div>

        
        <a href="https://www.innova3x.com/" target="_blank">
          <img src="https://www.innova3x.com/static/media/logo-innova3x.7d1a54f4.svg"/>
        </a>
        <h4>
          Full Stack Developer SSr
        </h4>
        <p>
        {translate.experience_innova_job}
        </p>
        <label>
        {translate.experience_innova_date}
        </label>
      </div>
      </div>
    </div>
  )
}
