import { TitleSection } from "../../styles/global";
import { CERTS } from "../../utils/consts";
import { CardCertsContainer, CertsContainer } from "./styles";

export function Certs({certsRef}){
    return(
        <CertsContainer ref={certsRef}>
            <TitleSection>
                <label>Certifications And Courses</label>
                <h2>MY CERTIFICATIONS</h2>
            </TitleSection>
            <CardCertsContainer>
                {
                    CERTS.map(({img,href})=>
                    <div>
                        <a href={href} target="_blank"><img src={`./images/${img}.png`}  /></a>
                    </div>)
                }
            </CardCertsContainer>
        </CertsContainer>
    )
}