import styles from "./index.module.scss"


export default function Contact({translate}) {

    return(<div className={styles.element_contact}>
                <h2 id="parrafo">
                {translate.contact_title}
                <div></div>
                </h2>
                <div>
                <a href="https://www.linkedin.com/in/ernesto-gonzalez-llano" target="_blank"><img src="./images/linkedin.png"></img></a>
                <a href="https://api.whatsapp.com/send?phone=5493816444487&text=Hola%20Ernesto!%20Vi%20tu%20pagina!%20" target="_blank"><img src="./images/whatsapp.png"></img></a>
                <a href="https://github.com/ernestogonzalezllano" target="_blank"><img src="./images/github.png"></img></a>
                <a href="mailto:ernestogonzalezllano@gmail.com" target="_blank"><img src="./images/gmail.png"></img></a>
                <a href="https://drive.google.com/file/d/1jv2eToRw0puhvMj6YSUtxgDD75i0PdnQ/view" target="_blank"><img src="./images/cv.png"></img></a>
                </div>
            </div>
    )
}
