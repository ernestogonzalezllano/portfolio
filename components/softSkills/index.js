import styles from "./index.module.scss"


export default function SoftSkills({translate}) {

    return(<div className={styles.element_contact}>
                <h2 id="parrafo">
                {translate.soft_title}
                <div></div>
                </h2>
                <div className={styles.container}>
                    <div>
                        <img src="./images/creativity.png"></img>
                        <label>{translate.soft_label1}</label>
                    </div>
                    <div>
                        <img src="./images/adaptation.png"></img>
                        <label>{translate.soft_label2}</label>
                    </div>
                    <div>
                        <img src="./images/innovation.png"></img>
                        <label>{translate.soft_label3}</label>
                    </div>
                    <div>
                        <img src="./images/oido.png"></img>
                        <label>{translate.soft_label4}</label>
                    </div>

                 </div>
                <div id={styles.refe}>Icons made by <a href="https://www.flaticon.com/authors/ddara" title="dDara">dDara</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
    )
}
