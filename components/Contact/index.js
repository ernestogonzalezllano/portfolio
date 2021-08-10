import { TitleSection } from "../../styles/global";
import { CONTACTS } from "../../utils/consts";
import { ContactCardsContainer, ContactContainer } from "./styles";

export function Contact({contactRef}){
    return(
        <ContactContainer ref={contactRef} >
            <TitleSection>
                <label>Get in Touch</label>
                <h2>Contact Me</h2>
            </TitleSection>
            <ContactCardsContainer>
                {
                    CONTACTS.map(({name, value, icon,href})=>(
                        <div>
                            <h3><i className={icon} /> {name}</h3>
                            <a href={href} target='_blank' >{value}</a>
                            <i className={icon} />
                        </div>
                    ))
                }
            </ContactCardsContainer>
        </ContactContainer>
    )
}