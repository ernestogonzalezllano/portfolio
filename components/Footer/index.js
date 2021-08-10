import { SOCIALS } from "../../utils/consts";
import { FooterContainer } from "./styles";

export function Footer(){
    return(
        <FooterContainer>
            <div>
                {
                    SOCIALS.map(({href,icon})=><a target="_blank" href={href}><i className={icon}></i></a>)
                }
            </div>
            <label> © 2021 All Rights Reserved </label>
        </FooterContainer>
    )
}